#!/usr/bin/env node
/**
 * Delivery economics for the Prime Offer Optimizer.
 *
 * Models what it takes to deliver an offer at several active client counts, so the
 * same assumptions produce the same numbers every time. It answers "what happens
 * when more people buy this", it does NOT decide whether the offer is a good one.
 *
 * What it will never do:
 *   - call contribution "profit" (contribution here is before overhead and tax)
 *   - treat the owner's own hours as free
 *   - fill in a missing cost with zero (a missing input becomes an UNKNOWN)
 *   - say the offer is profitable
 *
 * Use:
 *   node delivery-economics.mjs inputs.json          pretty report
 *   node delivery-economics.mjs inputs.json --json   machine readable
 *   cat inputs.json | node delivery-economics.mjs -  read stdin
 *   node delivery-economics.mjs --example            print a blank input file
 *
 * Inputs (all money in the member's own currency, all hours per period):
 *   periodLabel                        "month" by default
 *   price                              what one buyer pays for the whole engagement
 *   engagementPeriods                  how many periods one engagement lasts (1 = one off)
 *   paymentTiming                      "upfront" | "perPeriod" | "split"
 *   paymentsPerEngagement              only when paymentTiming is "split"
 *   activeClientScenarios              [1, 10, 25] by default
 *   newClientsPerPeriod                optional. Default: activeClients / engagementPeriods
 *   setupHoursPerClient                one off onboarding hours, charged to NEW clients only
 *   recurringHoursPerClientPerPeriod   hours per ACTIVE client per period
 *   founderShareOfHours                0 to 1, the share only the owner can do
 *   teamHourlyCost                     what an hour of team time costs the business
 *   founderHourlyCost                  what an hour of the owner's time is worth
 *   perClientCostPerPeriod             tools and expenses per active client per period
 *   fixedDeliveryCostPerPeriod         delivery costs that do not move with client count
 *   availableTeamHoursPerPeriod        capacity
 *   availableFounderHoursPerPeriod     capacity
 *   acquisitionCostPerClient           optional, always reported separately
 *   guarantee { claimRate, refundShareOfPrice }   optional, reported separately
 */

const MAX_SEARCH_CLIENTS = 2000;

const NUMERIC_FIELDS = [
  "price",
  "engagementPeriods",
  "setupHoursPerClient",
  "recurringHoursPerClientPerPeriod",
  "founderShareOfHours",
  "teamHourlyCost",
  "founderHourlyCost",
  "perClientCostPerPeriod",
  "fixedDeliveryCostPerPeriod",
  "availableTeamHoursPerPeriod",
  "availableFounderHoursPerPeriod",
  "acquisitionCostPerClient",
  "newClientsPerPeriod",
];

const LABELS = {
  price: "price per engagement",
  engagementPeriods: "engagement length",
  setupHoursPerClient: "setup hours per client",
  recurringHoursPerClientPerPeriod: "recurring hours per active client",
  founderShareOfHours: "share of hours only the owner can do",
  teamHourlyCost: "team hourly cost",
  founderHourlyCost: "owner hourly cost",
  perClientCostPerPeriod: "tools and expenses per active client",
  fixedDeliveryCostPerPeriod: "fixed delivery cost",
  availableTeamHoursPerPeriod: "available team hours",
  availableFounderHoursPerPeriod: "available owner hours",
  acquisitionCostPerClient: "cost to acquire a client",
};

const isNum = (v) => typeof v === "number" && Number.isFinite(v);
const round = (v, dp = 2) => (isNum(v) ? Math.round(v * 10 ** dp) / 10 ** dp : v);

function readNumber(input, key, unknowns, { required = false } = {}) {
  const v = input[key];
  if (v === undefined || v === null || v === "") {
    if (required) unknowns.push(LABELS[key] || key);
    return null;
  }
  if (!isNum(v) || v < 0) {
    throw new Error(`${LABELS[key] || key} must be a number of 0 or more, got ${JSON.stringify(v)}`);
  }
  return v;
}

/**
 * Hours needed in one period at a given number of active clients.
 * Setup hours are charged to NEW clients only, never to every active client.
 */
function hoursAt(activeClients, newClients, cfg) {
  const setup = (cfg.setupHoursPerClient ?? 0) * newClients;
  const recurring = (cfg.recurringHoursPerClientPerPeriod ?? 0) * activeClients;
  const total = setup + recurring;
  const share = cfg.founderShareOfHours ?? 0;
  // Full precision. Rounding happens once, on the way out, so costs never drift.
  return { setup, recurring, total, founder: total * share, team: total * (1 - share) };
}

const roundHours = (h) => ({
  setup: round(h.setup, 1),
  recurring: round(h.recurring, 1),
  total: round(h.total, 1),
  founder: round(h.founder, 1),
  team: round(h.team, 1),
});

/** Share of available hours used. Zero available and zero needed is 0%, not unknown. */
function utilization(hoursNeeded, available) {
  if (!isNum(available)) return null;
  if (available > 0) return round(hoursNeeded / available, 3);
  return hoursNeeded > 0 ? null : 0;
}

function newClientsAt(activeClients, cfg) {
  if (isNum(cfg.newClientsPerPeriod)) return cfg.newClientsPerPeriod;
  const periods = cfg.engagementPeriods && cfg.engagementPeriods > 0 ? cfg.engagementPeriods : 1;
  return activeClients / periods;
}

/** Smallest active client count at which required hours pass available hours. */
function findBreakPoint(cfg, who) {
  const available = who === "founder" ? cfg.availableFounderHoursPerPeriod : cfg.availableTeamHoursPerPeriod;
  if (!isNum(available)) return null;
  for (let n = 1; n <= MAX_SEARCH_CLIENTS; n += 1) {
    const h = hoursAt(n, newClientsAt(n, cfg), cfg);
    if (h[who] > available) return n;
  }
  return null;
}

export function modelDelivery(rawInput = {}) {
  if (rawInput === null || typeof rawInput !== "object" || Array.isArray(rawInput)) {
    throw new Error("inputs must be an object");
  }
  const unknowns = [];
  const assumptions = [];
  const notes = [];

  const cfg = { periodLabel: typeof rawInput.periodLabel === "string" ? rawInput.periodLabel : "month" };
  for (const key of NUMERIC_FIELDS) {
    cfg[key] = readNumber(rawInput, key, unknowns, {
      required: key !== "acquisitionCostPerClient" && key !== "newClientsPerPeriod" && key !== "founderHourlyCost",
    });
  }
  if (cfg.founderShareOfHours !== null && cfg.founderShareOfHours > 1) {
    throw new Error("share of hours only the owner can do must be between 0 and 1");
  }
  if (!isNum(cfg.engagementPeriods) || cfg.engagementPeriods <= 0) {
    cfg.engagementPeriods = 1;
    assumptions.push(`Engagement length not given, so one engagement is treated as a single ${cfg.periodLabel}.`);
  }
  if (!isNum(cfg.founderShareOfHours)) {
    cfg.founderShareOfHours = 0;
    notes.push("No share of owner hours was given, so none of the delivery hours are attributed to the owner. If the owner does any of this work, set founderShareOfHours and run it again.");
  }

  const scenarioCounts = Array.isArray(rawInput.activeClientScenarios) && rawInput.activeClientScenarios.length
    ? rawInput.activeClientScenarios.slice()
    : [1, 10, 25];
  for (const n of scenarioCounts) {
    if (!isNum(n) || n <= 0) throw new Error(`activeClientScenarios must be positive numbers, got ${JSON.stringify(n)}`);
  }

  if (isNum(cfg.newClientsPerPeriod)) {
    assumptions.push(`New clients per ${cfg.periodLabel} was given as ${cfg.newClientsPerPeriod} and is used at every client count.`);
  } else {
    assumptions.push(`New clients per ${cfg.periodLabel} is taken as active clients divided by the ${cfg.engagementPeriods} ${cfg.periodLabel} engagement, which is the steady state replacement rate. Setup work is charged to new clients only.`);
  }

  // The owner's hours are never free. Without a rate for them we refuse to price
  // the hours at zero and report labeled scenarios instead.
  const founderHoursExist = cfg.founderShareOfHours > 0;
  const founderRateKnown = isNum(cfg.founderHourlyCost);
  if (founderHoursExist && !founderRateKnown) {
    unknowns.push("owner hourly cost");
    notes.push("The owner's hours are not valued at zero here. With no rate for them, contribution is not calculated and the labeled scenarios below value the owner's time at multiples of the team rate.");
  }

  const laborRatesKnown = isNum(cfg.teamHourlyCost) && (!founderHoursExist || founderRateKnown);
  const costLinesKnown = laborRatesKnown && isNum(cfg.perClientCostPerPeriod) && isNum(cfg.fixedDeliveryCostPerPeriod);

  const guarantee = rawInput.guarantee && typeof rawInput.guarantee === "object" ? rawInput.guarantee : null;
  if (guarantee && (!isNum(guarantee.claimRate) || !isNum(guarantee.refundShareOfPrice))) {
    throw new Error("guarantee needs numeric claimRate and refundShareOfPrice");
  }

  const scenarios = scenarioCounts.map((activeClients) => {
    const newClients = newClientsAt(activeClients, cfg);
    const hours = hoursAt(activeClients, newClients, cfg);
    const reportedHours = roundHours(hours);

    const capacity = {
      founderAvailable: cfg.availableFounderHoursPerPeriod,
      teamAvailable: cfg.availableTeamHoursPerPeriod,
      founderUtilization: utilization(hours.founder, cfg.availableFounderHoursPerPeriod),
      teamUtilization: utilization(hours.team, cfg.availableTeamHoursPerPeriod),
      overCapacity: [],
    };
    if (isNum(capacity.founderAvailable) && hours.founder > capacity.founderAvailable) capacity.overCapacity.push("owner hours");
    if (isNum(capacity.teamAvailable) && hours.team > capacity.teamAvailable) capacity.overCapacity.push("team hours");
    capacity.bottleneck = capacity.overCapacity.length ? capacity.overCapacity.join(" and ") : null;

    const labourTeam = isNum(cfg.teamHourlyCost) ? hours.team * cfg.teamHourlyCost : null;
    const labourFounder = founderHoursExist ? (founderRateKnown ? hours.founder * cfg.founderHourlyCost : null) : 0;
    const perClient = isNum(cfg.perClientCostPerPeriod) ? cfg.perClientCostPerPeriod * activeClients : null;
    const fixed = isNum(cfg.fixedDeliveryCostPerPeriod) ? cfg.fixedDeliveryCostPerPeriod : null;
    const directCostsTotal = costLinesKnown ? labourTeam + labourFounder + perClient + fixed : null;

    const revenueRecognized = isNum(cfg.price) ? (cfg.price / cfg.engagementPeriods) * activeClients : null;
    const contribution = isNum(revenueRecognized) && isNum(directCostsTotal) ? revenueRecognized - directCostsTotal : null;

    // Labeled scenarios when the only missing cost line is what the owner's time is worth.
    let contributionScenarios = null;
    if (contribution === null && founderHoursExist && !founderRateKnown && isNum(cfg.teamHourlyCost)
      && isNum(revenueRecognized) && isNum(perClient) && isNum(fixed)) {
      contributionScenarios = [1, 2, 3].map((multiple) => ({
        label: multiple === 1
          ? "owner time valued at the team rate"
          : `owner time valued at ${multiple} times the team rate`,
        ownerHourlyCost: round(cfg.teamHourlyCost * multiple),
        contributionBeforeOverheadAndTax: round(
          revenueRecognized - (labourTeam + hours.founder * cfg.teamHourlyCost * multiple + perClient + fixed),
        ),
      }));
    }

    const acquisitionCost = isNum(cfg.acquisitionCostPerClient) ? cfg.acquisitionCostPerClient * newClients : null;

    const guaranteeExposure = guarantee && isNum(cfg.price)
      ? round(cfg.price * guarantee.claimRate * guarantee.refundShareOfPrice * newClients)
      : null;

    return {
      activeClients,
      newClients: round(newClients, 2),
      hours: reportedHours,
      capacity,
      revenueRecognized: round(revenueRecognized),
      directCosts: {
        labourTeam: round(labourTeam),
        labourFounder: round(labourFounder),
        perClient: round(perClient),
        fixed: round(fixed),
        total: round(directCostsTotal),
      },
      contributionBeforeOverheadAndTax: round(contribution),
      contributionScenarios,
      acquisitionCostPerPeriod: round(acquisitionCost),
      guaranteeExposurePerPeriod: guaranteeExposure,
    };
  });

  // Cash timing is reported on its own, because when the money arrives and whether
  // the offer covers its costs are two different questions.
  const timing = typeof rawInput.paymentTiming === "string" ? rawInput.paymentTiming : null;
  let collectedAtSigning = null;
  if (isNum(cfg.price)) {
    if (timing === "upfront") collectedAtSigning = cfg.price;
    else if (timing === "perPeriod") collectedAtSigning = cfg.price / cfg.engagementPeriods;
    else if (timing === "split" && isNum(rawInput.paymentsPerEngagement) && rawInput.paymentsPerEngagement > 0) {
      collectedAtSigning = cfg.price / rawInput.paymentsPerEngagement;
    } else unknowns.push("payment timing");
  }
  const upfrontCostPerClient = (() => {
    if (!isNum(cfg.setupHoursPerClient)) return null;
    const share = cfg.founderShareOfHours;
    const teamPart = isNum(cfg.teamHourlyCost) ? cfg.setupHoursPerClient * (1 - share) * cfg.teamHourlyCost : null;
    const founderPart = share > 0 ? (founderRateKnown ? cfg.setupHoursPerClient * share * cfg.founderHourlyCost : null) : 0;
    if (teamPart === null || founderPart === null) return null;
    return teamPart + founderPart + (isNum(cfg.acquisitionCostPerClient) ? cfg.acquisitionCostPerClient : 0);
  })();

  const cashTiming = {
    paymentTiming: timing,
    collectedAtSigningPerClient: round(collectedAtSigning),
    outstandingAfterSigningPerClient: isNum(cfg.price) && isNum(collectedAtSigning) ? round(cfg.price - collectedAtSigning) : null,
    setupAndAcquisitionSpentBeforeOrAtStart: round(upfrontCostPerClient),
    coveredAtSigning: isNum(collectedAtSigning) && isNum(upfrontCostPerClient) ? collectedAtSigning >= upfrontCostPerClient : null,
    note: "Cash timing is separate from contribution. An offer can contribute and still run out of cash, and the other way round.",
  };
  if (!isNum(cfg.acquisitionCostPerClient)) {
    notes.push("Cost to acquire a client was not given, so it is left out of every figure here rather than assumed. It is always reported on its own line when it is known.");
  }

  const breakPoints = {
    ownerHours: findBreakPoint(cfg, "founder"),
    teamHours: findBreakPoint(cfg, "team"),
  };
  breakPoints.first = [breakPoints.ownerHours, breakPoints.teamHours].filter(isNum).sort((a, b) => a - b)[0] ?? null;

  return {
    period: cfg.periodLabel,
    engagementPeriods: cfg.engagementPeriods,
    scenarios,
    cashTiming,
    breakPoints,
    assumptions,
    unknowns: [...new Set(unknowns)],
    notes,
    profitability: {
      verdict: "not determined",
      why: "Contribution here is before overhead and tax. This script does not know overhead, tax, unpaid time, or what the business already spends, so it never calls an offer profitable.",
    },
  };
}

const money = (v) => (isNum(v) ? v.toLocaleString("en-US", { maximumFractionDigits: 2 }) : "not known");
const pct = (v) => (isNum(v) ? `${Math.round(v * 100)}%` : "not known");

export function formatReport(result) {
  const L = [];
  const P = result.period;
  L.push(`Delivery economics, per ${P}`);
  L.push(`Engagement length: ${result.engagementPeriods} ${P}(s)`);
  L.push("");
  L.push("| Active clients | New this " + P + " | Hours total | Owner hours | Team hours | Revenue | Direct costs | Contribution before overhead and tax |");
  L.push("|---|---|---|---|---|---|---|---|");
  for (const s of result.scenarios) {
    L.push(`| ${s.activeClients} | ${s.newClients} | ${s.hours.total} | ${s.hours.founder} | ${s.hours.team} | ${money(s.revenueRecognized)} | ${money(s.directCosts.total)} | ${money(s.contributionBeforeOverheadAndTax)} |`);
  }
  L.push("");
  L.push("Capacity");
  for (const s of result.scenarios) {
    const over = s.capacity.bottleneck ? `OVER CAPACITY on ${s.capacity.bottleneck}` : "within capacity";
    L.push(`- ${s.activeClients} active: owner ${pct(s.capacity.founderUtilization)} of available, team ${pct(s.capacity.teamUtilization)} of available, ${over}`);
  }
  if (isNum(result.breakPoints.first)) {
    const who = [];
    if (isNum(result.breakPoints.ownerHours)) who.push(`owner hours run out at ${result.breakPoints.ownerHours} active clients`);
    if (isNum(result.breakPoints.teamHours)) who.push(`team hours run out at ${result.breakPoints.teamHours} active clients`);
    L.push(`- Breaks first at ${result.breakPoints.first} active clients (${who.join("; ")})`);
  } else {
    L.push("- No capacity break found in the range modelled, or available hours were not given");
  }
  const anyScenarios = result.scenarios.find((s) => s.contributionScenarios);
  if (anyScenarios) {
    L.push("");
    L.push("Labeled scenarios (the owner's time has no rate, so contribution is shown at three valuations and never at zero)");
    for (const s of result.scenarios) {
      if (!s.contributionScenarios) continue;
      for (const sc of s.contributionScenarios) {
        L.push(`- ${s.activeClients} active, ${sc.label} (${money(sc.ownerHourlyCost)}/hour): contribution before overhead and tax ${money(sc.contributionBeforeOverheadAndTax)}`);
      }
    }
  }
  const acq = result.scenarios.some((s) => isNum(s.acquisitionCostPerPeriod));
  if (acq) {
    L.push("");
    L.push("Cost to acquire clients, reported separately and not included above");
    for (const s of result.scenarios) L.push(`- ${s.activeClients} active: ${money(s.acquisitionCostPerPeriod)} per ${P}`);
  }
  const gte = result.scenarios.some((s) => isNum(s.guaranteeExposurePerPeriod));
  if (gte) {
    L.push("");
    L.push("What honoring the guarantee could cost, reported separately");
    for (const s of result.scenarios) L.push(`- ${s.activeClients} active: ${money(s.guaranteeExposurePerPeriod)} per ${P}, and the delivery already spent on those clients is not recovered`);
  }
  L.push("");
  L.push("Cash timing");
  L.push(`- Payment timing: ${result.cashTiming.paymentTiming || "not known"}`);
  L.push(`- Collected at signing, per client: ${money(result.cashTiming.collectedAtSigningPerClient)}`);
  L.push(`- Still owed after signing, per client: ${money(result.cashTiming.outstandingAfterSigningPerClient)}`);
  L.push(`- Setup and acquisition spent at or before the start, per client: ${money(result.cashTiming.setupAndAcquisitionSpentBeforeOrAtStart)}`);
  L.push(`- Does the first payment cover that: ${result.cashTiming.coveredAtSigning === null ? "not known" : result.cashTiming.coveredAtSigning ? "yes" : "no"}`);
  L.push(`- ${result.cashTiming.note}`);
  if (result.assumptions.length) {
    L.push("");
    L.push("Assumptions");
    for (const a of result.assumptions) L.push(`- ${a}`);
  }
  if (result.unknowns.length) {
    L.push("");
    L.push("Unknown, and left out rather than guessed");
    for (const u of result.unknowns) L.push(`- ${u}`);
  }
  if (result.notes.length) {
    L.push("");
    L.push("Notes");
    for (const n of result.notes) L.push(`- ${n}`);
  }
  L.push("");
  L.push(`Profitability: ${result.profitability.verdict}. ${result.profitability.why}`);
  return L.join("\n");
}

export const EXAMPLE_INPUT = {
  periodLabel: "month",
  price: null,
  engagementPeriods: null,
  paymentTiming: "upfront",
  activeClientScenarios: [1, 10, 25],
  newClientsPerPeriod: null,
  setupHoursPerClient: null,
  recurringHoursPerClientPerPeriod: null,
  founderShareOfHours: null,
  teamHourlyCost: null,
  founderHourlyCost: null,
  perClientCostPerPeriod: null,
  fixedDeliveryCostPerPeriod: null,
  availableTeamHoursPerPeriod: null,
  availableFounderHoursPerPeriod: null,
  acquisitionCostPerClient: null,
  guarantee: null,
};

async function main(argv) {
  const args = argv.slice(2);
  if (!args.length || args.includes("--help") || args.includes("-h")) {
    process.stdout.write(
      "node delivery-economics.mjs <inputs.json> [--json]\n" +
      "node delivery-economics.mjs - [--json]        read inputs from stdin\n" +
      "node delivery-economics.mjs --example         print a blank input file\n",
    );
    return 0;
  }
  if (args.includes("--example")) {
    process.stdout.write(`${JSON.stringify(EXAMPLE_INPUT, null, 2)}\n`);
    return 0;
  }
  const source = args.find((a) => !a.startsWith("--"));
  let raw;
  if (source === "-") {
    const chunks = [];
    for await (const c of process.stdin) chunks.push(c);
    raw = Buffer.concat(chunks).toString("utf8");
  } else {
    const { readFile } = await import("node:fs/promises");
    raw = await readFile(source, "utf8");
  }
  let input;
  try {
    input = JSON.parse(raw);
  } catch (err) {
    process.stderr.write(`Could not read the inputs as JSON: ${err.message}\n`);
    return 1;
  }
  let result;
  try {
    result = modelDelivery(input);
  } catch (err) {
    process.stderr.write(`${err.message}\n`);
    return 1;
  }
  process.stdout.write(args.includes("--json") ? `${JSON.stringify(result, null, 2)}\n` : `${formatReport(result)}\n`);
  return 0;
}

const invokedDirectly = process.argv[1] && import.meta.url === new URL(`file://${process.argv[1]}`).href;
if (invokedDirectly) {
  main(process.argv).then((code) => { process.exitCode = code; });
}
