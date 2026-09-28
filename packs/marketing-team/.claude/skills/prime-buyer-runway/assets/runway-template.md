# Buyer Runway Template

Use this exact structure for `Avatar/Buyer Runway.md`. Sections stay in this order. Empty sections stay in the file with "*Not yet built.*" so the owner can see what's missing. Every section applies to the new-lead runway; the Backfill section holds only what differs for the existing list. Status line at the top is one of: PROVISIONAL | DRAFT | MAP APPROVED | COPY APPROVED | SHEET READY (owner builds by hand) | BUILT DISABLED (created in the platform by this skill) | TESTED (owner confirmed) | LIVE (recorded from the owner's word or an owner-ordered Mode 5 send, never set by this skill on its own).

## Document structure

```
# Buyer Runway: [Business Name] / [Audience] / [Offer]
Version [X.Y] | Status: [status] | Built from MOAT v[X.Y] and Content Index v[X.Y] on [date]

## Brief
Audience: [who, in their identity language from the Living Avatar]
Main outcome: [MOAT Big Promise, buyer's words]
Entry point: [resource name and link]
Offer: [name, price, process, fit, timing, guarantee if real, deadline if real]
Buy-now asset: [offer doc | landing page | VSL | sales page], [link], version [X]
Conversion point: [landing page | offer doc | sales call], [link]
Asks: [reply-first | link-first]
Replies answered by: [name]
Voice samples: [where the three reference emails live]
Voice fingerprint: register [1-5] / humor [none|dry|open] / profanity [none|as sampled] / paragraphs [short|full] / pronoun [I|we] / sign-off "[exact]" / house terms [..] / never-says [..]

## Belief map
Main outcome: ...
Philosophy: Most people who want [result] try [common approach]. The problem is [...]. That leads to [...]. We believe [...], because [...].
Process:
1. [Pillar]. Matters because [...]. Prospect must first understand: [...]
2. ...
Proof (from MOAT Proof Map, by belief):
- B1: [result, source, permission status]
Objections (MOAT false beliefs, in MOAT order):
- B1: "[verbatim]"
Five-belief check: problem ✓ / cost of inaction ✓ / approach ✓ / ability to help [gap] / their ability to succeed ✓

## Asset blocks
- Block 1, B1: anchor [asset, link] → emails [N, N, N]
- Block 2, B2: anchor [asset, link] → emails [N, N]
- ...

## The 30-day map
| Day | Part | Belief | Asset | Type | Job | Next step | Minutes |
|---|---|---|---|---|---|---|---|
| 1 | Ready to Buy | relationship | [entry resource] | Resource delivery | Deliver, invite reply | Open resource | 5 |
| 2 | Ready to Buy | relationship | self-contained | Personal Note | Get a reply | Reply | 1 |
| ... | Belief Shaping | B1 | [anchor, status] | [type] | ... | ... | ... |
| 15 | Spear | conversion | self-contained | Spear | Invite a conversation | Reply | 1 |
| 28 | Close | conversion | offer | Close | Invitation | [conversion point] | 3 |
| 29 | Close | conversion | offer | Close | Details | [conversion point] | 4 |
| 30 | Close | conversion | offer | Close | Final follow-up (up to three sends) | [conversion point] | 1 |
Quiet days listed with a one-line reason if anything needs saying.

## Emails
### Email [N]. Day [D]. [Part]. [Belief or role]
Subject: ...
Preview text: ...
Body:
...
Next step: [action] → [destination]
---
Notes (not sendable): claim sources, asset status, unresolved placeholders
Close emails (Days 28 to 30) carry, inside Notes, the `close-checker` agent's `CLOSE CHECK:` line from each pass and the list of parts cut or marked because of it (Step 4). An UNSUPPORTED or PARTLY part is never left in: it is cut or becomes a `[FILL IN: ...]` before the email is shown.

## Gaps and Adapt tasks
- Gap, B3: [buyer question] / [belief shift] / [evidence available] / [suggested format, minimum length] / owner: [name]
- Adapt, [asset]: [exact edit] / owner: [name] / blocks Email [N]

## Backfill (existing list)
Status: [not built | draft | approved | built, nothing sent | sheet ready, owner to build | sent (date, count)]
Opener: [subject and body of the single replacement email]
Excludes: existing customers, [...]
Emails reused unchanged: [list]. Changed: [list with reason]
Build: [sequence id | template ids | Build Sheet, "Your existing list"]
Sent: [no | on owner order, date, N contacts, campaign id]

## Launch checklist
- [ ] Every placeholder replaced
- [ ] Every link checked
- [ ] Every claim and client result confirmed by the owner
- [ ] Tested as a new subscriber
- [ ] Someone named to handle replies: [name]
- [ ] Buyers exit on purchase or booking
- [ ] Newsletter paused for new leads through Day 30, resumes Day 31

## Ops plan
Automate: ...
Augment: ...
Anchor: [name] answers Personal Note and Spear replies within [X].

## Build
Status: [not requested | authorized | sheet ready, owner to build | built, disabled | tested by owner]
Route: [GoHighLevel, built by connector | GoHighLevel, by hand from Build Sheet | other platform: name]
Copy version built: v[X.Y]
Build Sheet: Avatar/Buyer Runway Build Sheet.md, v[X.Y]
Built items: Email N -> template "[name]" id [id]
Platform and account: ...
Entry trigger and eligible list: ...
Sender / reply-to / reply owner: ...
Timing: day offsets, send time, timezone
Exclusions: existing customers, [...]
Exits: purchase, booking, [...]
Suppression: unsubscribe, bounce, complaint
Newsletter overlap rule: ...
After Day 30: ...
Deadline logic: [none | exact rule]
Tracking: replies, content clicks, applications, sales
Open items: ...
Report: build IDs, copy version built, test evidence (owner-reported: test contact, date, what arrived), what the platform can't do

## Version log
- v1.0 [date]: map and voice approved by [owner]
- v1.1 [date]: copy approved by [owner]
- v1.2 [date]: Close rewritten after offer change; Emails 12 to 14 re-approved
```
