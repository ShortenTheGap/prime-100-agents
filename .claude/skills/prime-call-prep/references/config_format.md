# calls/config.md — the routing contract

Written by the SETUP INTERVIEW, read by `/prep` and by the `call-prep` loop.
Both sides must agree on this shape, which is why it is specified here rather
than left to each run's judgement.

The loop **never writes this file.** Routing changes because a human said so.
A run that edited its own routing would be deciding what work to do, which is
the one thing the interview exists to prevent.

If this file is missing, the loop halts with an anomaly rather than guessing.

---

## Template

```markdown
---
type: call-prep-config
updated: 2026-08-26
---

# Call Prep Config

## Routing

```call-prep-routing
include: Coaching Call, Kick-off, Sprint Check-in, VIP Day
exclude: Prime | Team Check In, standup, all-hands, 1:1
match: title-contains
lookback_hours: 72
lookahead_days: 7
max_calls_per_run: 5
```

## Transcripts

```call-prep-sources
enabled: manual
drive_query: (unset)
no_transcript: awaiting
context_lookahead_hours: 48
```

## Delivery

```call-prep-delivery
briefs_dir: calls/briefs
mirror_to_vault: off
shadow_invite: off
reviewer_email: (none)
reviewer_name: (none)
notify: off
```

## Clients

| client_slug | display name | seeded | notes |
|-------------|--------------|--------|-------|
| acme-coaching | Acme Coaching | yes | seeded from 2026-08-10 transcript |
| northwind | Northwind | no | first brief will note: no earlier history |
```

---

## Field meanings

**Routing.** `include` and `exclude` are comma-separated title fragments matched
case-insensitively against calendar event titles. **`exclude` wins over
`include`.** Getting `exclude` right matters more than `include`: an internal
standup routed as a client call produces a confidently wrong brief about
colleagues, which is worse than a missing one. The interview must ask for
exclusions explicitly rather than waiting for them to be discovered.

`max_calls_per_run` is a safety valve, not a throughput setting. More than a
handful of calls routing at once almost always means the patterns are matching
the wrong thing, so the loop raises an anomaly instead of building them.

**Transcripts.** `enabled` is a comma-separated list of transcript adapters, in
priority order, from the registry in `sources.md`. **`manual` is always enabled
and cannot be removed**: it is the fallback for every call no integration
covers, and it is why the system works before any platform is wired up.

Add a platform only once its adapter is real. `enabled: manual` on its own is a
complete, working configuration: the owner pastes a transcript or drops a file,
and everything downstream behaves identically to an automated fetch.

Per-adapter settings live beside it, and only matter when that adapter is
enabled. `drive_query` is the confirmed Drive search, established during the
interview against actual files, never guessed. Other adapters add their own keys
as they are wired up.

`no_transcript` has two legal values, and the difference between them is a
difference of tense, not of standards.

- **`awaiting`** (the default) — a call with no transcript is recorded and
  surfaced, never reconstructed. That holds for every adapter, including the ones
  not yet built.
- **`pre-call`** — everything `awaiting` does, plus one addition: a meeting that
  has **not happened yet**, with a client who has no brief at all, may get a
  pre-call brief assembled from mail and calendar. Who you are meeting, why it
  matters, who introduced you. Every line in it carries its source, and it says
  on its face that it is not call history. The contract is the PRE-CALL VARIANT
  in `references/prep_format.md`.

`pre-call` does **not** loosen the transcript rule. A call that has already
happened with no transcript is `awaiting-transcript` under either value, however
much mail exists about it. The record is missing and inventing one is the failure
the rule exists to prevent. Turning this on widens what the loop can prepare for;
it does not widen what it may claim.

`context_lookahead_hours` (default 48) bounds how far ahead a pre-call brief is
worth writing. It only matters when `no_transcript: pre-call`.

**Delivery.** All delivery switches default to **off**, and each is a deliberate
decision:

- `mirror_to_vault: on` copies each brief into the Obsidian vault at
  `brain/Calls/<client-slug>/<date>.md`. The lowest-risk of the three: a local
  file write into one dated folder, create-only, nothing leaves the machine. It
  is also the one that makes a brief *readable* during a call, since the desk has
  no viewer for these files.

- `shadow_invite: on` lets the loop create a 15-minute "PREP:" event before the
  next call with that client. This is a calendar **write**. It requires
  `mcp__claude_ai_Google_Calendar__create_event` in the loop's `loop-allow`
  block, and it is reversible: delete the event.
- `notify: on` lets the loop email the brief to `reviewer_email`. This is a real
  **send** and deserves the plainest possible warning:

  > The runtime matches an allow rule by tool NAME and ignores its arguments.
  > Allowing `mcp__claude_ai_Gmail__send_message` allows sending **any content to
  > any recipient**, unattended. Nothing in the gate restricts it to
  > `reviewer_email`. That restriction exists only in the skill's instructions,
  > in this config, and in the owner's review of what went out.

  Point `reviewer_email` at the **owner's own address** for the first weeks, so a
  misrouted notification lands on them rather than on a client. Never put a
  client, member, or prospect address here.

`mcp__claude_ai_Gmail__reply` and `mcp__claude_ai_Gmail__forward` must never
appear in any allow block. They are separate tools from `send_message` and
nothing in this system needs them.

**Clients.** `seeded: yes` means a transcript existed to build the first brief
from. `seeded: no` means the first brief must carry the no-history line, and the
interview should have said so out loud.
