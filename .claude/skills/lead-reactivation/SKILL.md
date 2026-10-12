---
name: lead-reactivation
description: "Work a queue of dormant leads back into conversation: import the tiered Hot/Warm/Long-term list from an inbox-pipeline-audit, sweep the inbox for leads that went quiet on a cursor, judge who is genuinely worth reconnecting with, and leave a Gmail draft referencing the real prior thread. Use when the user asks to reactivate cold leads, revive dormant prospects, follow up on old inquiries, work an inbox audit's action plan, or mentions 'reactivation', 'cold leads', 'dormant', or 'revive'. Never sends: drafts only, and never contacts the same person twice."
license: MIT
metadata:
  author: prime-elite
  version: '1.0'
---

# Lead Reactivation

Turn a dormant lead back into a conversation. Two sources feed one queue, one
judgement decides who is worth reaching, and every message is a draft the owner
reads and sends themselves.

## Why this is the most dangerous thing in the system

Everything else here reads, or writes to the owner's own disk, or replies to
someone who just wrote in. This reaches out, unprompted, to people who went
quiet. Get it wrong and the cost is not a wasted token, it is the owner's
reputation with a real person.

So the posture is deliberately conservative, and none of it is negotiable:

- **Drafts only, always.** `mcp__claude_ai_Gmail__create_draft` and nothing else.
  A human reads every message before it goes.
- **Never the same person twice.** `reactivation/contacted.md` is the record and
  a cooldown enforces the gap. A second unsolicited nudge is worse than the
  first.
- **Never someone who said no.** Read the thread. "Not interested", "we went
  another way", "please remove me", or an unsubscribe means gone, permanently.
- **Never a current client.** Cross-check `calls/people/` and the vault's
  `08-Clients/`. Reactivating an active client reads as not knowing who they are.
- **Never invent a reason to reconnect.** Reference what was actually discussed,
  in the real thread. A fabricated shared history is the fastest way to be
  caught out.

**When uncertain about any of the five, skip the lead and say why.** A missed
reactivation costs nothing. A wrong one is not recoverable.

---

## The queue

`reactivation/queue.md` is the single work list, fed by two sources and worked
by one process. One row per person, deduped by email address.

```markdown
| email | name | tier | score | source | first_seen | last_touch | status |
|-------|------|------|-------|--------|------------|------------|--------|
| dana@acme.com | Dana Reyes | hot | 9 | audit | 2026-08-26 | 2026-03-14 | pending |
| sam@northwind.io | Sam Okafor | warm | 6 | sweep | 2026-08-26 | 2026-05-02 | drafted |
```

- **tier** — `hot` / `warm` / `long-term`, from the audit's own segmentation.
  A swept lead with no audit score is tiered by dormancy and thread content, and
  marked so: a guess is labelled a guess.
- **source** — `audit` or `sweep`. A person found by both keeps one row; record
  `audit` because its scoring is better evidence than dormancy alone.
- **last_touch** — the date of the most recent real message in the thread. This
  drives the cooldown and belongs in the draft's framing.
- **status** — `pending` · `drafted` · `skipped` · `do-not-contact`.

`do-not-contact` is permanent and never revisited by either source. When a
thread shows a no, that row is closed forever.

---

## Source 1 — import an audit

`inbox-pipeline-audit` ends with a ranked table (Name, Email, Score, Next
action) segmented Hot / Warm / Long-term. It writes no file by design: it says
outreach is "a separate, owner-driven step outside this skill." That step is
this skill.

To import, take the table as the owner supplies it (pasted, or a CSV the audit
exported) and add one queue row per prospect: email, name, tier from its
segment, score from its column, `source: audit`.

**Keep the audit's suggested next action verbatim** in the row's notes. It was
derived from reading the real thread, and it is better raw material for the
draft than anything re-derived later.

Do not re-score. The audit did that against a deep buyer profile; second-guessing
it here would be a worse judgement made with less context.

## Source 2 — sweep the inbox on a cursor

Same shape as `loops/lead-drafts`, opposite target: that loop takes what is
*new*, this one takes what went *quiet*.

1. Read `last_swept` from the loop's `STATE.md`. Search Gmail for threads where
   the last message is older than `dormant_after_days` and newer than
   `dormant_before_days` (a floor, so the sweep does not trawl the entire
   archive on every run).
2. Drop anything already in `queue.md` or `contacted.md`, and anything whose
   last message came *from* the owner and got no reply (that is a follow-up, not
   a reactivation, and `followups` owns it).
3. Judge each remaining thread. A reactivation candidate is **a real human who
   showed buying interest and then went quiet**. Not: newsletters, receipts,
   notifications, vendor pitches, recruiters, internal mail, or anyone who
   already said no.
4. Add survivors as `source: sweep`, tiered by how warm the thread reads, with
   the tier marked as an estimate.

**Volume check.** More than `max_new_per_sweep` candidates in one run means the
filter is wrong, not that a goldmine appeared. Record an anomaly and add
nothing. An inbox holds years of dormant threads and the first bad sweep would
queue hundreds of people.

---

## Working the queue

For each `pending` row, in tier order (hot, then warm, then long-term):

1. **Re-check the five rules.** They are cheap to check and expensive to get
   wrong. Read the thread again before drafting, even if it was read at intake:
   a lead may have replied since, or become a client.
2. **Cooldown.** If `contacted.md` shows this address was drafted for within
   `cooldown_days`, skip with that reason.
3. **Read the real thread.** Take the specific thing they asked about, in their
   words. That specific detail is the entire value of the message.
4. **Write the draft.** Read whichever voice guidance exists —
   `shared/brand-voice.md`, then `loops/lead-drafts/knowledge/voice.md` — so
   this sounds like the owner and not like a sequence. **Both are optional**:
   neither is guaranteed to be installed. If neither exists, write plainly and
   short rather than stalling or inventing a house style.
   - Open with the real, specific thing from the prior thread.
   - Acknowledge the gap plainly. No pretending it has not been months.
   - Give one reason to reconnect that is about them, not about the owner's
     quota.
   - One clear next step. Never two, never a calendar link and a question.
   - Short. Four sentences beats twelve.
   - **No fake urgency, no invented scarcity, no "just circling back".**
5. **Draft on the existing thread** where one exists, so it reads as a
   conversation resuming rather than a cold approach.
6. **Confirm.** Re-fetch the draft to prove it exists, record its id, set the row
   `drafted`, and append to `contacted.md` with the date.

If a draft cannot be created after one retry, record the row with an empty draft
id. That fails verification by design, which surfaces the lead rather than
losing it.

---

## Tiers set the cadence, not just the order

- **Hot** — reconnect now, referencing the specific thing they wanted.
- **Warm** — lead with something useful to them. A resource, a relevant result,
  an invitation. Not a pitch.
- **Long-term** — quarterly at most, and only when there is a real reason. Most
  runs should draft nothing here. An empty long-term pass is a correct outcome,
  not a failure.

---

## What "done" means

A queue row is done when it is `drafted` with a confirmed id, `skipped` with a
reason, or `do-not-contact`. No row is ever silently dropped, and no person is
ever contacted twice.
