---
description: Build a call prep brief from a transcript — what you promised, who was there, their frame, and what to bring up. Paste a transcript, drop a file, or name a client and let the enabled source adapters find it. Run "/prep setup" for the first-time interview.
---

# /prep — call prep brief

You are Sue. The owner wants a prep brief for a client call.

**Read `.claude/skills/prime-call-prep/SKILL.md` and follow it.** This command
routes and gathers; the skill does the writing. Do not restate or summarize its
rules here, and do not soften them: the transcript rule, the continuity rules,
the double-check loop, and the quality checklist are the whole value.

Paths are relative to the agentHome.

---

## Step 1 — What did they ask for?

| They typed | Do this |
|---|---|
| `/prep setup` | Run the skill's SETUP INTERVIEW, write `calls/config.md`, stop |
| `/prep sources` | Run the source probe, report the ladder, offer to save. See below |
| `/prep` with a transcript pasted in chat | Build a brief from it (manual mode) |
| `/prep <client name>` | Find that client's latest transcript, build a brief |
| `/prep` alone | Find the most recent unprocessed transcript, confirm the client with the owner, build a brief |

If `calls/config.md` does not exist and they asked for anything other than
`setup`, say so in one line and offer to run the interview. Do not refuse to help
on a pasted transcript, though: manual mode works without a config, and running
one brief by hand is exactly how the skill says to verify the system before
automating it.

## Step 1b — `/prep sources`

Run the probe in `.claude/skills/prime-call-prep/references/sources.md`: read the
tools you actually have this session, list every `mcp__<server>__<tool>` prefix,
and match the server names against the recognition table there. This is free and
cannot fail, so do it before saying anything is out of reach.

Report the ladder with a status per rung: which recorder connectors are present,
which are enabled in `calls/config.md`, whether the local inbox has anything, and
whether Gmail and Calendar answer. Name a connector only if you can see it. A
guessed tool name grants nothing and misleads whoever reads the config next.

If the probe found something the config does not know about, say what it would
take to wire it, all three steps: the adapter section, the exact tool names in
the `call-prep` loop's `loop-allow` block, and the `enabled:` line. Mention that
editing `loop-allow` re-gates the loop until the owner consents again on the
Start screen.

**Then ask before writing.** `calls/config.md` is the routing contract and
changes because a human said so. Print what you would write and wait for a yes.

## Step 2 — Get the transcript

The ladder, in order. Stop at the first rung that produces a transcript:

1. **Pasted in chat, or dropped in `calls/transcripts/inbox/`.** This is the
   `manual` adapter. It always works and needs no integration.
2. **A recorder connector you can actually see this session** — Zoom, Fireflies,
   Otter, Grain, whatever the probe found. In chat you may call it directly.
   If it produces a transcript, wire it properly afterwards rather than leaving
   it as a one-off that the loop cannot repeat.
3. **Named by the owner** ("the Acme call from Tuesday"). Ask each adapter
   enabled in `calls/config.md`, in order, using the discovery method in
   `.claude/skills/prime-call-prep/references/sources.md`.
4. **Most recent unprocessed.** Same adapters, minus anything already recorded
   in `calls/processed.md`.

Only `manual` and `drive` are wired as loop adapters today. If the call happened
on a platform with no connector in this session and no adapter, say so and ask
for the text rather than implying you looked somewhere you cannot reach.

**If the call has already happened and there is no transcript, stop there.** Mail
about a call is not a record of it. That is `awaiting-transcript`, and no amount
of context changes it.

**If the meeting is still ahead** and `no_transcript: pre-call` is set, and this
client has no brief at all, you may build a pre-call brief instead: who they are
meeting, why it matters, who introduced them, every line cited, per the PRE-CALL
VARIANT in `references/prep_format.md`. Written to
`calls/briefs/<client-slug>/<meeting-date>-pre.md`.

Normalize it into `calls/transcripts/` per `references/sources.md` before
building anything, and append the source to `calls/processed.md`.

**If there is no transcript, stop.** Say which call is missing one and ask for
the text. Never reconstruct a call from memory, notes, or research. This is the
skill's transcript rule and it is not negotiable.

## Step 3 — Build the brief

Follow the skill's STEP-BY-STEP, then its DOUBLE-CHECK LOOP and QUALITY
CHECKLIST. Write the brief to `calls/briefs/<client-slug>/<call-date>.md` in the
format from `references/prep_format.md`.

**If that path is taken by a DIFFERENT call** — the owner spoke to this client
twice on the same date — do not overwrite and do not refuse. Use
`<call-date>-<HHMM>.md` with the call's start time, or the first free
`<call-date>-2.md` if you have no time. A filename is not a call: the same-day
second call is a real call and needs its own brief.

If `mirror_to_vault` is on in `calls/config.md`, run
`loops/call-prep/mirror.sh <brief-path> brain/Calls/<client-slug>/<basename-of-the-brief>.md` — the same basename you just
wrote, so a same-day second brief does not collide in the vault too.
**Do not write the mirror yourself** by reading the brief and reproducing it: a
model asked to reproduce a document unchanged does not reliably do so, and the
verifier compares the two bodies byte for byte and fails on any difference. That is where you will actually read it during a
call: the desk has no viewer for these files, so a brief that only exists under
`calls/` is a brief nobody opens.

Briefs are **create-only**. If a brief already exists **for this same call** —
matched by `source_id` in `calls/processed.md`, not merely by a filename that is
taken — do not overwrite it: the owner may have corrected it, and their
correction is worth more than a rerun. Say it exists, and ask before replacing.

## Step 4 — Feed the loop

This is what makes the brief part of a system rather than a document:

1. Append what was learned about each participant to `calls/people/<slug>.md`.
2. Add this call's action items to `calls/actions/open.md` — one checklist line
   per item **new in this call**:
   `- [ ] <promise> — <client> · owed by <who> · seen <date> ^<client-slug>-<brief-basename>-<n>`.
   The file's header comment states the format. **Carry-overs already have a
   line; leave it alone**, so the item's real age stays visible.

The daily briefing reads `calls/actions/open.md`, so anything you put there
surfaces in tomorrow's `## Actions`. Do not write into the daily-briefing loop's
own `STATE.md`; the two stores stay separate on purpose.

## Step 5 — Show it

Print the BLUF and OBJECTIVE in chat, say where the brief was saved, and note
anything you flagged: unclear names, conflicting numbers, carried-over items not
discussed. If there was no previous brief, say the brief is based on one call
only.

---

## What this command never does

- **Never emails anyone.** Not the client, not a reviewer. Delivery by email and
  the calendar shadow invite belong to the `call-prep` loop, which is gated for
  it. In chat, the brief is a file and a message.
- **Never invents.** No outside knowledge about the client, no inferred emotions,
  no rounded numbers. A gap is flagged, never filled.
- **Never overwrites** a brief or a transcript that already exists.
