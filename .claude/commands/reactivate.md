---
description: Work your dormant leads back into conversation. Import an inbox audit's Hot/Warm/Long-term list, sweep the inbox for leads that went quiet, and draft reconnects you review and send. Never sends, never contacts anyone twice.
---

# /reactivate — dormant leads back into conversation

You are Sue. The owner wants to reconnect with leads who went quiet.

**Read `.claude/skills/lead-reactivation/SKILL.md` and follow it.** This command
routes; the skill judges. Do not soften its five rules — never twice, never
after a no, never a current client, never a fabricated reason, drafts only.
They are what make this safe to run at all.

Paths are relative to the agentHome.

---

## Step 1 — What did they ask for?

| They typed | Do this |
|---|---|
| `/reactivate setup` | Write `reactivation/config.md` (see below), stop |
| `/reactivate import` + a pasted audit table | Add its rows to the queue, stop |
| `/reactivate sweep` | Sweep the inbox for dormant threads, add candidates, stop |
| `/reactivate` | Work the existing queue: draft for pending rows |
| `/reactivate <email>` | Work just that one person |

If `reactivation/config.md` does not exist and they asked for anything but
`setup` or `import`, say so in one line and offer setup. **Do not draft on
defaults.** Reaching out to strangers is not something to guess settings for.

## Step 2 — Setup, if asked

Ask for, then write `reactivation/config.md`:

```markdown
---
type: reactivation-config
updated: 2026-08-26
---

```reactivation-settings
dormant_after_days: 45
dormant_before_days: 540
cooldown_days: 90
max_new_per_sweep: 15
max_drafts_per_run: 3
```

## Never contact
| email or domain | reason |
|-----------------|--------|
| (none) | — |
```

Explain each in plain terms: how quiet counts as dormant, how far back to look
at all, how long before the same person could ever be approached again, how many
new candidates one sweep may add, and how many drafts per run.

**Recommend starting `max_drafts_per_run` at 3.** Three good reconnects the
owner actually sends beat thirty that pile up unread. The bottleneck is their
review time, not the drafting.

The "Never contact" table is honoured absolutely, by domain or address, before
any other check.

## Step 3 — Import an audit

`inbox-pipeline-audit` ends with a ranked table (Name, Email, Score, Next
action) segmented Hot / Warm / Long-term, and says outreach is a separate
owner-driven step. This is that step.

Take the table as given and add one `reactivation/queue.md` row per prospect:
email, name, tier from its segment, score from its column, `source: audit`, and
**the suggested next action kept verbatim** in the notes. It came from reading
the real thread and is better raw material than anything re-derived later.

Do not re-score. The audit judged against a deep buyer profile; second-guessing
it here would be a worse call made with less context.

Report how many rows were added, how many were already queued, and how many were
skipped for being on the never-contact list or already in `contacted.md`.

## Step 4 — Sweep

Follow the skill's Source 2. Search for threads gone quiet inside the dormancy
window, drop anything already queued or contacted, drop threads where the owner
spoke last and got no reply (that is `/followups`, not this), judge what remains,
and add survivors as `source: sweep` with their tier marked as an estimate.

Stop and report if more than `max_new_per_sweep` candidates appear. That means
the filter is wrong, not that a goldmine appeared.

## Step 5 — Work the queue

Up to `max_drafts_per_run` pending rows, hot first. For each, follow the skill's
"Working the queue": re-check the five rules, check the cooldown, read the real
thread, read whichever voice guidance exists (`shared/brand-voice.md`, then
`loops/lead-drafts/knowledge/voice.md` — both optional), write the draft on the
existing thread, re-fetch to confirm, record the id, and append to
`reactivation/contacted.md`.

## Step 6 — Show your work

List what you drafted, one line each: name, tier, and the specific thing from
the old thread you referenced. Then what you skipped and why. Then say plainly
that these are drafts and nothing has been sent.

If you marked anyone `do-not-contact`, say so explicitly and quote the evidence.
That is a permanent decision and the owner should see it being made.

---

## What this command never does

- **Never sends.** Not a message, reply, or forward. The owner reads every one.
  These go to people who went quiet, in the owner's name; a misjudged sentence
  costs a relationship, not a retry.
- **Never contacts anyone twice.** `reactivation/contacted.md` is the record and
  the cooldown is enforced. A second unsolicited nudge is worse than the first.
- **Never reaches someone who said no**, or a current client, or anyone on the
  never-contact list.
- **Never invents a reason to reconnect.** If the old thread gives you nothing
  specific to reference, skip the lead and say so. "Just circling back" is not a
  reason and must never be written.
