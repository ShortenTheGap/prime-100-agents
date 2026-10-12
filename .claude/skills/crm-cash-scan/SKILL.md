---
name: crm-cash-scan
description: "Find the revenue already sitting in the CRM: sweep opportunities and contacts for deals that stalled, leads that were never worked, and pipeline that went quiet, score every prospect against the same ideal-buyer card the inbox audit uses, put a conservative dollar value on it, and hand back a tiered Hot/Warm/Long-term action plan. Use when the user asks to scan or audit their CRM, find money in the pipeline, find stuck or stalled deals, surface unworked leads, or mentions 'cash scan', 'CRM audit', 'pipeline audit', 'stuck deals', or 'what's my pipeline worth'. Same output contract as inbox-pipeline-audit, so its list feeds /reactivate identically."
license: MIT
metadata:
  author: prime-elite
  version: '1.0'
  reuses: inbox-pipeline-audit v2.0 (scoring card, valuation, tiering)
---

# CRM Cash Scan

The same question `inbox-pipeline-audit` asks of the inbox, asked of the CRM:
**how much revenue is already here, in records someone stopped working?**

## What this reuses, and why that matters

This skill deliberately owns **only the source**. Everything else is
`inbox-pipeline-audit`'s and must not be re-derived:

| Borrowed from `inbox-pipeline-audit` | Where |
|---|---|
| The ideal-buyer scoring card | Its Phase 1/2 — load or build it there first |
| 1-10 scoring on Fit, Warmth, Signals | Its Phase 4 |
| Dedupe by person, not by record | Its Phase 3 "Dedupe before scoring" |
| Pipeline value formula | Its Phase 5 |
| Hot / Warm / Long-term tiers | Its Phase 5 |
| The output table shape | Its Phase 5 |

**Read `.claude/skills/inbox-pipeline-audit/SKILL.md` before scoring anything.**
If the owner has already built an ideal buyer profile, load that one; a second
profile scored differently would make the two lists incomparable, which defeats
the point of sharing a contract.

The payoff is concrete: because the output shape is identical, a CRM scan feeds
`/reactivate import` exactly as an inbox audit does. Same queue, same drafting,
same never-twice guarantee — and a prospect found in both sources dedupes to one
person instead of getting approached twice.

---

## Do not query the CRM directly

GoHighLevel work belongs to `ghl-agent`, which owns the locationId rules, the
API shapes, and the error handling. Delegate:

```
Task({
  subagent_type: "ghl-agent",
  description: "Pull stalled opportunities for a cash scan",
  prompt: "<the exact pull: pipelines, stages, date windows, fields needed>"
})
```

Ask it for **data**, never for judgement. It returns records; the scoring here
is this skill's job, against the shared card.

For a CRM other than GHL, the same rule holds: pull through whatever agent or
connector owns that system, and keep scoring here. That separation is what lets
a second CRM be added without touching any of the scoring.

---

## Phase 1 — Scope the sweep

Ask, once, in one batch:

1. **Which pipelines** count as sales pipeline? Some are fulfilment or
   onboarding and would pollute the scan.
2. **Which stages mean "still alive"** versus won, lost, or junk?
3. **Price per sale and close rate** — needed for the valuation, same inputs the
   inbox audit uses. If they already gave these to that skill, reuse them and
   say you are.
4. **How far back** to look at all.

If the owner does not know their close rate, use a conservative figure, state it
plainly, and show the formula so the number can be corrected rather than
believed.

## Phase 2 — Pull the records

Through `ghl-agent`, in passes, because one broad query misses the same way one
broad inbox search does:

1. **Stalled opportunities** — open, in a live stage, no activity for 30+ days.
   The single richest seam: someone already qualified them.
2. **Never-worked leads** — contacts created but never moved into a pipeline,
   or with no logged activity at all.
3. **Abandoned mid-funnel** — reached a late stage and stopped. Highest value,
   because the objection is usually known.
4. **Lost with a soft reason** — "timing", "budget this quarter", "revisit later".
   Not "went with a competitor", not "not a fit".
5. **Expired or lapsed** — trials, proposals, quotes that ran out unanswered.

Exclude in every pass: current clients, unsubscribed or do-not-contact records,
test and duplicate entries, and anyone on `reactivation/`'s never-contact list
if it exists.

**Report progress as you go.** A large CRM takes several minutes; say so up front
rather than going quiet.

## Phase 3 — Dedupe, then score

Collapse by person, exactly as the inbox audit does: one row per human, merging
every record they appear in. Score the **person**, not the opportunity.

Then score 1-10 per the shared card, and for each prospect give:

- **Name**, **Email**, **Score (1-10)**
- **Why** — 2-3 sentences grounded in what the CRM actually holds: the stage
  they reached, what the last note says, what the lost reason was. Quote real
  field values. **Never infer a story the records do not contain.**
- **Suggested next action** — specific and referencing the real record ("she
  stalled at Proposal in April over onboarding time; reply to that thread with
  the two-week timeline")
- **Last touch** — the date of the most recent real activity
- **Where** — pipeline and stage, so the owner can find the record

A record with no usable content scores low and says so. An empty CRM row is not
a lead, and dressing one up as a lead is the fastest way to make the whole scan
untrustworthy.

## Phase 4 — Value and tier

Use the inbox audit's formula, unchanged:

**Estimated pipeline value = (prospects scoring 7+) × (price per sale) × (close rate)**

Show the numbers plugged in. State that it is conservative: high-fit only, at
the stated close rate, excluding referrals and upsells.

Then tier Hot (8-10) / Warm (5-7) / Long-term (1-4), same definitions.

## Phase 5 — Hand off

Deliver the ranked table in the audit's shape (Name, Email, Score, Next action),
plus the totals and the tiered plan.

Then say the useful thing: **`/reactivate import` takes this table directly.**
Drafts get written per person, never twice, and never to anyone already reached
through the inbox audit — the queue dedupes by address across both sources.

Offer CSV export if they want it in a spreadsheet. Any outreach is a separate,
owner-driven step, exactly as the inbox audit says of its own list.

---

## Never

- **Never write to the CRM.** This is a read and a report. Updating a stage,
  adding a tag, or logging an activity is the owner's call through `ghl-agent`,
  not a side effect of a scan.
- **Never invent a record, a stage, a date, or a lost reason.** If a field is
  empty, it is empty. Say so.
- **Never score a current client as a prospect.**
- **Never include someone whose lost reason was a real no.** "Went with a
  competitor" and "not a fit" are answers; re-surfacing them wastes the owner's
  credibility.
- **Never contact anyone.** This skill produces a list. `/reactivate` owns
  outreach, drafts only, with its own protections.
