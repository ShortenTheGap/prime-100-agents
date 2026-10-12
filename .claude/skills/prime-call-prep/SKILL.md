---
name: prime-call-prep
description: "Turn a raw client call transcript into a prep brief the call leader can read in under 5 minutes before the next call with that client. Use when someone pastes a call transcript and asks for a prep brief, call prep, coaching brief, or asks 'what happened on this call' or 'prep me for my call with [client].' Works for coaching calls, kick-offs, sprint check-ins, and roadmap calls. Also runs in AUTOMATED MODE inside the call-prep loop, which fetches transcripts through pluggable source adapters (manual paste/drop and Google Drive are wired; Zoom, Teams and Roam are documented stubs). First use ALWAYS starts with the SETUP INTERVIEW: verify connected accounts (Google Calendar is the only requirement), confirm which calls get preps against the user's real calendar, and save a config before any automation. The transcript is the only source of truth for new information; the previous brief is the continuity source. Outputs a BLUF-first Markdown brief with 8 sections in priority order. Built by Joe Stolte for Prime Elite; ported to Prime 100 OS."
license: MIT
metadata:
  author: joe-stolte
  version: '1.1'
  ported-from: prime-call-prep v1.0 (Perplexity Computer)
---

# Prime Call Prep

Turn a raw client call transcript into a prep brief the call leader reads in
under 5 minutes: what happened last time, where you left off, and what to bring
up. Built by Joe Stolte for Prime Elite.

The brief format lives in `references/prep_format.md`. Read it before producing
a brief.

## One artifact, two jobs

The brief built from call N's transcript **is** the prep for call N+1. It is
both the record of what happened and the preparation for what comes next. Do
not produce a separate "recap" — every brief feeds the next one, and that is
where the compounding comes from. By the third cycle the brief knows the
promises, open loops, and numbers of the relationship better than memory does.

## What is different on this host

Ported from Perplexity Computer to Prime 100 OS. Three changes; everything else
is Joe's original and should not be softened.

- **Transcripts come from pluggable adapters**, not a hardcoded platform. See
  `references/sources.md` for the adapter contract and the registry. Only
  `manual` (paste or drop a file) and `drive` are wired today; Zoom, Teams, and
  Roam are documented stubs. Nothing downstream changes when one is added.
- **The brief is Markdown**, not docx. It lands in `calls/briefs/` and opens in
  Obsidian beside the daily briefings. The docx renderer
  (`scripts/render_prep_docx.py`) and its template are carried in this skill,
  unused, for whenever the branded document is wanted again.
- **Delivery is local-first.** The brief is a file. Calendar and email delivery
  are separate, gated steps owned by the `call-prep` loop, not by this skill.

## SETUP INTERVIEW (mandatory before any automated use)

Do not schedule anything, and do not run automated mode, until this interview is
complete and saved. If no config file exists at `calls/config.md`, run the
interview first, even if the user asks to "just turn it on." A wrong assumption
here produces confidently wrong briefs later.

**Part 1. Verify the plumbing (test, do not just ask):**

1. **Probe first, then ask.** Run the probe in
   `references/sources.md` before any question in Part 2: list every
   `mcp__<server>__<tool>` prefix you actually have this session and match it
   against the recognition table there. Reading your own tools is free and cannot
   fail, and a member who records every call in Fireflies is badly served by an
   interview that only offers them the two adapters this pack shipped with.

   **Google Calendar is the only connector this system needs** — it identifies
   which call a transcript belongs to and who attended. Gmail is needed for
   reviewer notifications, follow-up drafts, and pre-call context; a transcript
   adapter's connector is needed only if that adapter is enabled. For each one
   the user wants but is missing, say exactly what to connect and pause. Never
   take "yes I connected it" on faith; run a real test call.
2. **Pick the transcript adapters.** Start from what the probe found, then read
   the registry in `references/sources.md` and ask where the user's calls
   actually get recorded.
   `manual` is always enabled and needs nothing. For any platform adapter marked
   `ready`, test it for real: list recent files and have the user confirm which
   are transcripts, then record the confirmed pattern in `calls/config.md`. Do
   not guess the naming; platforms differ and only real files settle it.

   For a platform whose adapter is still a **stub** (Zoom, Teams, Roam), say so
   plainly rather than implying coverage: those calls run through `manual` until
   someone wires the adapter. Recordings that exist without transcripts are the
   most common silent failure, so check that the platform is producing
   transcripts at all before treating it as a source.

**Part 2. Interview the user (one batch of questions, then confirm):**

3. **Which calls get preps?** Ask what kinds of client calls they run (coaching,
   kick-off, sprint check-in, VIP day, other). Then pull their ACTUAL upcoming 2
   to 4 weeks of calendar events, propose the title patterns you detect, and
   have them confirm or correct the list. Flag title inconsistencies now;
   routing runs on titles. **Explicitly ask which recurring internal meetings to
   EXCLUDE** — team standups and all-hands are not client calls and will produce
   junk briefs if routed.
4. **Where do those calls happen?** Zoom, Teams, Roam, Meet, phone, in person?
   Map each answer to an adapter in `references/sources.md`. For anything with
   no wired adapter, explain the transcript rule plainly: those calls run
   through `manual`, so they need a pasted transcript or notes, and they never
   get a fabricated brief. Do not promise coverage a stub cannot deliver.
5. **Who reviews?** Name and email of the human reviewer (EA, ops person, or the
   user themselves). Restate the hard rule: the system NEVER emails clients.
   **Recommend the user's own address for the first few weeks**, so a misrouted
   notification lands on them rather than on someone else.
6. **Where do briefs live?** Confirm `calls/briefs/<client>/` as the layout, one
   folder per client. Consistency matters: the location is how the next run
   finds the previous brief.
7. **Brand.** Only needed if the docx renderer is ever switched on. Ask, record,
   and move on.
8. **Schedule.** Which days and what time should the loop run? Note honestly
   that this host has no wake-from-sleep scheduler: the loop advances only while
   the desk is open, so a time is a preference, not a guarantee.
9. **Backfill.** For each active client, does a recent transcript exist to seed
   the first brief? List the clients with nothing to seed from and mark them
   "first brief will note: no earlier history."

**Part 3. Write the config and confirm.**

Save the answers to `calls/config.md`: title patterns, excluded patterns,
reviewer name and email, brief location, enabled adapters and their settings,
schedule, handling for platforms with no adapter, and the seeded-client list. Read the config back to the
user in plain language and get an explicit yes before anything is automated.
Re-run the interview any time the user says routing is missing calls.

## TWO MODES

**Manual mode:** the user pastes a transcript in chat, drops a file in
`calls/transcripts/inbox/`, or names one an enabled adapter can reach.
Deliver the brief in chat and write it to `calls/briefs/<client>/<date>.md`.
The call-leader rule below applies here too: take it from `calls/config.md`, not
from the calendar title or from who spoke most.

**Automated mode:** the `call-prep` loop invokes this skill. Requires a completed
SETUP INTERVIEW; if `calls/config.md` is missing, stop and run the interview
instead. In this mode:

1. Fetch the transcript through the enabled adapters, in the order
   `calls/config.md` lists them (the calendar event identifies which recording
   and which client). Never call a platform API directly: go through the adapter
   contract, so a new platform is a new adapter and not a new code path.
2. Take the client name and call date from the calendar event; verify both
   against the transcript. On conflict, flag for the human reviewer instead of
   guessing.
3. **The call leader comes from `calls/config.md`, not from the calendar title.**
   `call_leader` in the config is authoritative and goes in the frontmatter and
   the "Prepared for" line exactly as written. Do not infer a leader from the
   event title, the attendee list, or who did most of the talking.

   The transcript often will not contain the call leader at all, because the
   people on a call are not always the person the brief is for. That is normal
   and is not a conflict.

   A **real** conflict is the transcript naming a *different* leader for the
   same relationship. When that happens, still use the config value, and add one
   line to Section 6: `[Config names <X> as call leader; the transcript
   indicates <Y>. Confirm which is correct.]` Flagging is not a substitute for
   following the config: guessing a leader and noting the guess still puts the
   wrong name at the top of a document someone reads minutes before a call.
4. Fetch the previous brief from `calls/briefs/<client>/`. If none exists, apply
   the no-history rule below.
5. Deliver per AUTOMATED DELIVERY at the end of this skill.

## WHAT YOU WILL BE GIVEN

1. **The raw transcript of the most recent call.** This is the ONLY source of
   truth for new information. It may be messy, unpunctuated, or use labels like
   "Speaker 1 / Speaker 2."
2. **The client's name and company** (if not obvious from the transcript).
3. **The date of the call** (if not in the transcript).

Sometimes also: the previous prep brief and transcripts of earlier calls.

If the client's name or call date is missing and cannot be found in the
transcript, stop and ask. Never invent either one.

## TRANSCRIPT RULE (never break this)

If the call you need happened on a platform WITHOUT a recording or transcript
(Roam, in-person, phone), do NOT build the brief from memory, research, or old
notes. Ask for the transcript or notes and wait. Log the item as awaiting
transcript. A fabricated brief is worse than no brief.

## PRE-CALL RULE (the one meeting the rule above does not cover)

The transcript rule is unchanged and governs every call that **has happened**.
This rule governs a meeting that has **not**.

When `no_transcript: pre-call` is set in `calls/config.md`, a meeting still ahead
of you, with a client who has no brief at all, may get a **pre-call brief**: who
you are meeting, why it matters, who introduced you, assembled from mail and
calendar. There is no record to be missing, so there is nothing to fabricate
about. But there is also no call history, and a pre-call brief must say so on its
face and cite every line it writes.

The contract is the PRE-CALL VARIANT in `references/prep_format.md`. Three parts
of it are worth repeating here because they are what keep this from becoming the
thing the transcript rule forbids:

- **A past call never qualifies.** However rich the mail about it, a call that
  happened without a transcript is `awaiting-transcript`. Always.
- **Every claim carries its source** inline, or it becomes a Section 7 question,
  or it is dropped. There is no fourth option.
- **A pre-call brief never describes a call.** It cannot, because none has
  happened.

## CONTINUITY RULES

- **The previous brief is the continuity source. The new transcript is the
  source of truth for anything new.**
- **If the previous brief and the new transcript conflict, the transcript wins.**
  Note the change in the brief.
- **Carry-over check.** Take every action item and open loop from the previous
  brief and check it against the new transcript. Three outcomes:
  - Mentioned and completed: move to context as a win or update.
  - Mentioned and still open: keep with status "Carried over from [date]."
  - Not mentioned at all: keep it, with status "Carried over from [date], not
    discussed on this call." Never silently drop a carried-over item.
- **If no previous brief exists,** write from the single transcript and add one
  line: "This brief is based on the [DATE] call only. Earlier call history was
  not provided." Never imply history you do not have.
- **A `basis: pre-call` brief is NOT a previous brief.** If the only earlier
  brief for this client is a pre-call one, treat this as the no-previous-brief
  case above: write `previous_brief: none`, add the line, and record the pre-call
  brief's path in a separate `precall_brief:` key so the link is not lost. Take
  nothing from it except facts that carry their own `[src:...]` citation, and
  re-cite them. It was written before anyone spoke; it cannot be the continuity
  source for what was said.

## STEP-BY-STEP

**Step 1.** Read the entire new transcript once, start to finish, before writing
anything.

**Step 2.** Read the previous brief (if available) and list its action items and
open loops for the carry-over check.

**Step 3.** Identify the speakers. The coach asks questions, gives frameworks,
and assigns homework; the client describes their business, problems, and
numbers. If you cannot tell who is who with certainty, ask. Never guess speaker
identity.

**Step 4.** Extract raw material into five buckets. A statement lives in ONE
bucket only (MECE):

- **Bucket A: Decisions made.** Test: could you complete "They decided to ___"?
- **Bucket B: Action items.** Test: is there an owner AND a task? Record who owns
  it using the transcript's own wording.
- **Bucket C: Open loops.** Test: did the conversation move on without closing it?
- **Bucket D: Client situation and numbers.** Facts the client stated: revenue,
  team, churn, launches, deadlines, wins, problems. Copy numbers exactly as
  spoken. "Around 50K" stays "around 50K."
- **Bucket E: Emotional signals.** Only things the client actually SAID about how
  they feel. Direct quotes only. Never infer mood from tone, pauses, or word
  choice.

Small talk, scheduling chatter, and tech-issue talk are always left out.

**Tech-support tangents are the easy one to get wrong**, because they feel like
content. If someone spends five minutes being shown how to copy a file between
cloud folders, that is help given during a call, not a decision, a commitment, an
open loop, or context needed to lead the next one. It belongs in no bucket. The
test is simple: **would the call leader act on it before or during the next
call?** If not, leave it out entirely rather than filing it under context.

Scheduling changes are the exception worth keeping: a moved meeting date is a
fact the next call depends on.

**Step 5.** Sort every bucket by importance to the NEXT call, not transcript
order: deadlines before the next call first, then anything the call leader
committed to personally, then everything else.

**Step 6.** Write the brief per `references/prep_format.md`: title block, BLUF
and OBJECTIVE box, then the 8 numbered sections in priority order (1 PROMISED
LAST CALL, 2 WHO WAS ON THE LAST CALL, 3 THEIR FRAME COMING IN, 4 CONTEXT TO
LEAD THE CALL, 5 OPEN LOOPS AND CARRY-OVER, 6 RISKS AND LANDMINES, 7 QUESTIONS
TO ASK, 8 FRAMEWORKS IN PLAY).

**Step 7.** Apply house style:

- **Numbers exactly as spoken, and hedging counts as changing them.** "three
  more days" is "three more days", never "approximately 3 days". Do not add
  "approximately", "about", "roughly", or "~" to a figure that was stated
  plainly, and do not remove a hedge the speaker actually used. Adding certainty
  and adding vagueness are the same error: the brief no longer quotes the call.
  The call leader repeats these figures out loud to the client, so a softened
  number becomes a wrong number in their mouth.
- Plain language, roughly sixth-grade reading level. Short sentences. Active
  voice.
- No em dashes anywhere. Use a comma, a period, or a colon instead.
- No filler phrases ("it's worth noting that," "as mentioned," "in order to").
- Warm but direct. Bold lead-ins on bullets.
- Spell every name exactly as verified.

**Step 8.** Run the DOUBLE-CHECK LOOP, then the QUALITY CHECKLIST. Fix anything
that fails before delivering.

**Step 9.** Append what was learned to each participant's dossier at
`calls/people/<slug>.md`, then add this call's action items to
`calls/actions/open.md`. The daily briefing reads that file, which is how action
items reach the next day. Do not write into the daily-briefing loop's own state.

Append one checklist line per action item **new in this call**:

```
- [ ] <what was promised> — <client-slug> · owed by <who> · seen <YYYY-MM-DD> ^<client-slug>-<brief-basename>-<n>
```

`n` is the item's position in this brief's action list. Only the `[ ]` marker
and the trailing `^id` are structural — the middle is prose the owner reads, so
write it for them. The file's own header comment states the contract.

**An item carried over from a previous call already has a row. Leave it alone.**
Section 5 of the brief separates carry-over from new precisely so this is a
lookup and not a judgement. A second row would double the item in tomorrow's
briefing and reset how long it has visibly been open, which is the one thing
`first_seen` exists to show.

## DOUBLE-CHECK LOOP (mandatory before delivery)

1. **Name check.** List every person and company name in the draft. Verify each
   spelling against the transcript, the previous brief, and (automated mode) the
   calendar attendees. Unverifiable names get flagged: "[Name unclear, confirm
   spelling]."
2. **Number check.** Re-find every number in the transcript and confirm the draft
   quotes it exactly as spoken.
3. **Carry-over check.** Re-read the previous brief's action items and open loops
   one by one and confirm each appears with the correct status.
4. **Claim check.** For the BLUF and every promise listed in Section 1, relocate
   the supporting transcript lines and confirm the meaning matches.

## EDGE CASES

- Transcript cut off mid-call: write from what exists, add at the top: "Note:
  transcript ends mid-call at [last topic]."
- Transcript contradicts itself ($40K early, $50K later): include both and ask
  which is current.
- The call leader promised something on the call: it ALWAYS goes in "We promised
  them" AND the questions list. Checking your own commitments before the call is
  a top priority.
- Sprint check-in calls: also audit the sprint goals agreed on the previous call,
  per the SPRINT CHECK-IN VARIANT in the format spec.

## QUALITY CHECKLIST (all answers must be YES)

1. Can every statement be traced to a transcript line or to the previous brief
   with a "Carried over" label?
2. Does every promise in Section 1 have an owner, phrased so delivery can be
   confirmed out loud?
3. Does every action item have an owner and a deadline field, even if "None
   stated"?
4. Was every carried-over item checked, none silently dropped?
5. Are all numbers written exactly as spoken, with no hedge added or removed?
6. Are all quotes verbatim?
7. Is the document completely free of em dashes?
8. Does each fact appear in only ONE section?
9. Are all emotional claims direct quotes, with zero inferred feelings?
10. If no prior history was provided, does the brief say so?

## NEVER DO

- **Never use any source other than the evidence in front of you.** For a
  transcript brief that is the transcript and the previous brief, and nothing
  else. For a pre-call brief it is the messages, calendar events, and local files
  you actually opened **this run**, each cited on the line that uses it. Outside
  knowledge about the client is never a source, even if you recognize the name,
  and a document you did not open this run is not evidence.
- **Never write an uncited claim in a pre-call brief.** No `[src:...]`, no line.
- **A pre-call brief never describes a previous call.** No "last time", no "we
  discussed", no "they mentioned on the call". If you cannot point at a
  transcript, then as far as that brief is concerned there was no call.
- Never speculate: no guessed motives, no inferred emotions, no "the client seems
  to be."
- Never reference any other client by name, company, or identifiable detail, for
  any reason.
- Never invent, round, or convert numbers.
- Never cut content to hit a length target. There is no length limit.
- Never fill a gap with an assumption. Flag it or ask. In a pre-call brief the
  flag is a Section 7 question.

## AUTOMATED DELIVERY (automated mode only)

1. Save the brief at `calls/briefs/<client>/<YYYY-MM-DD>.md`. This becomes the
   "previous brief" for the next run, so the location must be consistent.
   **Create-only:** if a brief already exists for that client and date, leave it
   and report the collision. Never overwrite a brief a human may have corrected.
2. Find the NEXT scheduled call with this client on the calendar. Create a
   "shadow invite": a 15-minute event immediately before it, titled
   "PREP: [Client Name]", with the brief's path and the one-sentence BOTTOM LINE
   in the description. Call leader only, no other guests.
3. If no next call is scheduled, note that in the notification instead.
4. Notify the human reviewer with the brief's location and the BLUF pasted in.
   The reviewer checks names and comprehension and can correct the file.
5. **NEVER email clients, members, or prospects directly.** A human always sends
   client-facing documents. The reviewer address in `calls/config.md` is the only
   permitted recipient of an automated notification.

   Understand why this is written as a rule and not enforced as a setting: the
   runtime's `loop-allow` matches a tool by NAME and ignores its arguments, so
   permitting a send tool permits sending to anyone. Nothing in the gate can
   restrict the recipient. This instruction, the config, and the audit are the
   only things standing between the loop and the wrong inbox. Treat any
   temptation to email a client as a hard stop, not a judgement call.
6. If any step fails, report the failure in the notification rather than silently
   skipping it.
