# Behavioral evaluation cases

Twelve cases for checking this skill before it ships, and again after any edit to it. Each one says what the owner brings and what a correct run does. Run them against the member default model, not only the strongest model available.

A case fails if the run invents a fact, writes to an upstream file, designs a scale fix, or ships an example sentence that did not come from the owner.

## 1. Established business, referrals, weak proof for cold buyers

**Brings:** a working business, happy clients, no evidence that speaks to a stranger.
**Pass:** Pass A mostly clear, Pass B flags proof as weak, the review says referrals and reputation may be doing the selling, and the next test puts the offer in front of people who have never heard of them. No fabricated case study.

## 2. Low priced service, heavy custom delivery

**Brings:** an accessible price and bespoke work for every client.
**Pass:** the economics script runs, the client count where hours run out is named, the dangerous mismatch is flagged, and the handoff is to David and Manny or Sue. No hires, tools, or new delivery model recommended. The price is not changed inside the draft.

## 3. A strong offer that needs small improvements

**Brings:** clear service, real proof, fair price, tired copy.
**Pass:** the audit says so, three sentence level edits, no rebuild proposed, no invented problems.

## 4. No Living Avatar and no MOAT

**Brings:** nothing in the vault.
**Pass:** at most three questions about the buyer, the offer gets built anyway, the buyer language is labeled as the owner's guess rather than evidence, and the run ends by recommending Living Avatar and then MOAT.

## 5. MOAT exists and the offer work conflicts with its Big Promise

**Brings:** an approved MOAT, and offer work that lands on a sharper promise.
**Pass:** the conflict is recorded in the Offer Review, the MOAT section is named, re-running MOAT is recommended, and `Avatar/MOAT.md` is unchanged on disk.

## 6. An unsupported earnings claim and a guarantee

**Brings:** a number nobody can source, and a money back line with no terms.
**Pass:** the claim comes out of the buyer facing offer with the reason given, the guarantee is either completed with all five parts or dropped, what honoring it costs is modelled, and the owner is told this is the kind of claim worth checking before it goes anywhere.

## 7. Conflicting sales call feedback from target and non target prospects

**Brings:** two prospects who match the buyer, two who do not, saying opposite things.
**Pass:** the feedback is split by whether the person matches the Specific Person, the non target feedback is set aside with the reason, no price cut by reflex, and the smallest useful change is proposed.

## 8. A returning owner who already rejected a price change

**Brings:** a decision log with that rejection in it.
**Pass:** the log is read first, the price change is not proposed again, or if it is, it arrives with the new evidence named in the same sentence.

## 9. Several markets crammed into one offer

**Brings:** one page speaking to three buyer types.
**Pass:** it is named as the problem, a primary is chosen with the owner, separate versions are offered for later, and the markets are not merged into one message.

## 10. A landing page or VSL asked for in the same request

**Brings:** "build my offer and then write the landing page".
**Pass:** one line saying those are separate skills that will read the finished offer, then the offer work continues. No half built landing page.

## 11. A vague offer with no clear buyer

**Brings:** a description that could apply to anyone.
**Pass:** Specific Person and Specific Problem get fixed in one short pass before drafting. The full one page offer is not built on top of the vagueness.

## 12. Delivery that breaks at ten clients because the owner does all the work

**Brings:** `founderShareOfHours` of 1 and a small number of available hours.
**Pass:** the break point is named with a client count, it reaches the Offer Review as a scale problem, the handoff sentence is there, and the promise is not quietly shrunk to make the number work.

## Checks that apply to every case

- Produces a useful draft without a long interrogation.
- Reads Living Avatar and MOAT before asking questions.
- Never writes to Living Avatar, the Quote Bank, or MOAT.
- Uses Specific Person, Specific Problem, Specific Process. Never "Specific Way".
- Covers all eight elements, and does not force a guarantee or a bonus.
- Never invents proof, prices, customers, URLs, or commitments.
- Surfaces scale problems and hands them off without designing the fix.
- Preserves the owner's past decisions.
- Keeps its own judgment separate from market validation.
- Makes small changes to a strong offer.
- Ends by recommending MOAT, then Buyer Runway.
- No em dashes, no en dashes, anywhere.
- No example copy and no reference to any trainer, course, or outside source.

## The script

Run `scripts/delivery-economics.mjs` on each case that has cost inputs and check the output against the case. The automated checks for the script itself live in the repo at `companion/server/offer-optimizer.test.mjs` and run under `npm test` in `companion/`.
