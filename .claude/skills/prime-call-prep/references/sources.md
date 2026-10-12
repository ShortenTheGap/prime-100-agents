# Transcript sources — the adapter contract

Where a transcript comes from is a **pluggable adapter**. The skill never talks
to a platform: it asks the enabled adapters for transcripts and gets back a
normalized file. Adding Zoom, Teams, Roam, or anything else means writing an
adapter section here and naming it in `calls/config.md`. It never means editing
`SKILL.md`, the loop, or the verifier.

**No platform is wired up yet, and the system works anyway.** The `manual`
adapter needs no integration at all: paste a transcript or drop a file, and
everything downstream behaves identically. Integrate a platform when it earns
its keep, not before.

---

## The contract

An adapter answers four questions. That is the whole interface.

| # | Question | What it must produce |
|---|---|---|
| 1 | **Available?** | Can it run in this session? Missing credentials or connector is `unavailable` with a reason, never an error |
| 2 | **Discover** | A list of candidate transcripts newer than the cursor, each with a stable `source_id` |
| 3 | **Fetch** | The raw text of one candidate |
| 4 | **Identify** | Which client and call date it belongs to, or "unknown" so the caller can ask |

Every adapter is **read-only**. None may delete, move, rename, or upload
anything on the platform it reads. A transcript is evidence; evidence does not
get edited by the thing reading it.

### What every adapter needs defined

- **`name`** — the short id used in `calls/config.md` and in run-log `source`
  rows (`manual`, `drive`, `zoom`, `teams`, `roam`).
- **Availability check** — the concrete thing to test. Never assume; run a real
  call and see.
- **Discovery method** — the query or listing that finds candidates.
- **`source_id`** — a stable identifier for dedupe, recorded in
  `calls/processed.md`. Must be stable across runs: a file id, a recording id,
  a meeting uuid. Not a title, and not a timestamp.
- **Tools or credentials** — exact tool names, or what auth is required. For a
  loop, every tool must also be named in that loop's `loop-allow` block, since
  the runtime denies connector calls by default, reads included.
- **Raw format** — VTT, plain text, JSON, a document. This drives normalization.
- **Status** — `ready`, `stub`, or `unavailable here`.

---

## Probing for a source

**Ask the session what it has before you assume what it does not.** The adapter
registry below is a starting point, not the answer: connectors vary per member
and per session, and a member who records every call in Fireflies is badly served
by a system that never looks.

The probe is **introspection, not invocation.** Read the tools you actually have
this session and list every `mcp__<server>__<tool>` prefix among them. That is
not a tool call, it costs nothing, and it cannot be denied. Do it silently and
report the result, not the process.

**Generic first, table second.** Any server exposing a tool shaped like list
meetings, list recordings, or get transcript is a candidate, whatever it is
called. The table below only helps you name the adapter once you have found it.

| If a server name contains | Likely | Status |
|---|---|---|
| `zoom` | Zoom | hint, confirm live |
| `teams`, `graph`, `microsoft` | Microsoft Teams | hint, confirm live |
| `roam` | Roam | hint, confirm live |
| `fireflies` | Fireflies.ai | hint, confirm live |
| `otter` | Otter.ai | hint, confirm live |
| `grain` | Grain | hint, confirm live |
| `fathom` | Fathom | hint, confirm live |
| `read`, `readai` | Read.ai | hint, confirm live |
| `gong` | Gong | hint, confirm live |
| `chorus` | Chorus | hint, confirm live |
| `tldv` | tl;dv | hint, confirm live |
| `granola` | Granola | hint, confirm live |
| `circleback` | Circleback | hint, confirm live |
| `fellow` | Fellow | hint, confirm live |

Every row is a **hint about the server's name**, never a tool name. This file
never carries an invented tool name, because a name that does not exist grants
nothing and quietly misleads the next reader. Read the real names off the session.

A candidate becomes `ready` only after **one real call returned** and **one real
transcript came through it**. Until both have happened it is a `stub`, however
promising it looks.

### Probing inside a loop is different, and the difference is the whole point

A loop may **see** a connected recorder. It may not **call** one that is missing
from its `loop-allow` block: that is gate G4, which denies the call and pauses
the entire loop until a human approves, so the run books nothing and the next
tick halts in the same place.

So a loop that spots a recorder it cannot reach writes a source row saying
exactly that, with the tool names it found:

```
source	fireflies	unavailable	present in session, not in loop-allow — add mcp__fireflies__<...> to enable
```

That row is worth more than silence. It turns "Sue cannot see my recordings"
into a one-line fix, and it is the only useful thing a loop can do with a tool it
is not allowed to touch. **Using** a newly found adapter is a chat job, where
there is a human present.

---

## Registry

| Adapter | Status | Needs | Notes |
|---|---|---|---|
| `manual` | **ready** | nothing | Paste or drop a file. Always available, zero config |
| `drive` | **ready** | Google Drive connector | Tool names confirmed live. Works for anything that lands in Drive, including Meet |
| `zoom` | stub | Zoom API creds or a Zoom MCP | Not wired. See below |
| `teams` | stub | Microsoft Graph access | Not wired, and unlikely to reach Google Drive. See below |
| `roam` | stub | unknown | Unproven that Roam produces a transcript at all. See below |
| `<other>` | stub | an MCP server or API | Follow "Adding an adapter" |

Only `manual` is assumed. Everything else is opt-in via `calls/config.md`.

---

## manual — ready

The zero-integration path, and the reason nothing is blocked.

- **Available?** Always.
- **Discover.** Nothing automatic. The owner supplies the text in chat, or drops
  a file into `calls/transcripts/inbox/`.
- **Fetch.** Read what was given.
- **Identify.** Ask, unless the owner said. Never guess a client from a filename.
- **`source_id`** — `manual:<sha of the first 200 characters>-<call date>`, so
  pasting the same transcript twice is caught by dedupe.
- **Tools** — none.

This adapter is also the fallback for every platform that cannot produce a
transcript: a phone call, an in-person session, a meeting nobody recorded. The
transcript rule holds regardless of adapter. No transcript, no brief.

## drive — ready

Works for any platform that deposits a transcript file into Google Drive, which
in practice includes Google Meet and any recorder configured to sync there.

- **Available?** Call `mcp__claude_ai_Google_Drive__list_recent_files` and see
  if it returns.
- **Discover.** `mcp__claude_ai_Google_Drive__search_files` with the query in
  `calls/config.md`. **The query is discovered during setup against real files,
  never guessed**: a guessed pattern matches nothing, which looks exactly like
  "no calls happened".
- **Fetch.** `mcp__claude_ai_Google_Drive__read_file_content`.
- **Identify.** Match the file to a calendar event by time and title.
- **`source_id`** — the Drive file id.
- **Tools** — the three above, plus
  `mcp__claude_ai_Google_Calendar__list_events` for identification. All four are
  in the `call-prep` loop's `loop-allow`.
- **Raw format** — usually `.vtt` or a document.

## mail-context — ready, and NOT a transcript source

The bottom rung of the ladder, and the only one that produces a brief without a
transcript. It is not an adapter and it never fetches a transcript. It assembles
context for a meeting that has **not happened yet**, from the owner's own mail
and calendar, so a first meeting with a stranger is not walked into cold.

- **Available?** Call `mcp__claude_ai_Gmail__search_threads` and see if it
  returns. The calendar read is already covered by the `drive` adapter's tools.
- **Discover.** Routed calendar events inside `context_lookahead_hours` whose
  client has no brief at all in `calls/briefs/<client-slug>/`.
- **Fetch.** `mcp__claude_ai_Gmail__search_threads` then
  `mcp__claude_ai_Gmail__get_thread` on the threads involving the attendees.
- **Identify.** The calendar event is the identity.
- **`source_id`** — `precall:<event-id>`.
- **Tools** — the two Gmail read tools above, both in the `call-prep` loop's
  `loop-allow`. Read-only, like every other row in this file.
- **Status** — `ready`, and gated off by default: it runs only when
  `no_transcript: pre-call` is set in `calls/config.md`.

**What it may never do.** It never writes a brief for a call that has already
happened, however much mail there is about it. That call has a record, the
record is missing, and inventing one is the exact failure the transcript rule
exists to prevent. A past call with no transcript is `awaiting-transcript`,
always. The output contract for what it does write is the PRE-CALL VARIANT in
`references/prep_format.md`.

## zoom — stub

- **What it would need.** Zoom cloud recording **with audio transcription
  enabled**. That setting is the single most common silent failure: recordings
  exist, transcripts do not, and nothing says so.
- **Route in.** Either a Zoom MCP server added to the user's Claude config
  outside this app, or a Zoom API integration. **This app cannot install MCP
  servers** — it only injects `mempalace` and offers a disable toggle — so the
  server has to be added via the Claude CLI or a claude.ai connector.
- **Simplest path that needs no integration:** point Zoom's cloud recordings at
  a folder that syncs to Google Drive, and use the `drive` adapter.
- **`source_id`** — the recording or meeting uuid, not the topic.
- **To wire it up:** fill in the availability check, the discovery call, and the
  exact tool names below, set `status: ready`, add those tool names to the
  `call-prep` loop's `loop-allow`, and enable `zoom` in `calls/config.md`.

## teams — stub

- **What it would need.** Microsoft Graph, scoped to read meeting transcripts.
- **The specific obstacle.** Teams writes transcripts to **OneDrive or
  SharePoint**, not Google Drive, so the `drive` adapter will not see them. This
  is the one platform where "just use Drive" does not work.
- **Route in.** A Microsoft Graph MCP server or an API integration, added
  outside this app.
- **`source_id`** — the transcript resource id.

## roam — stub

- **Status is genuinely unknown, and that matters.** It is not established that
  Roam produces a retrievable transcript at all. Joe Stolte's original guide
  lists Roam alongside phone and in-person under "record it or take notes, then
  hand the text to the system."
- **Check this first, before building anything.** After one real Roam call, look
  for a transcript in Drive and in Roam itself. If none exists, `roam` is not an
  adapter question, it is a `manual` one, and no amount of integration work will
  change that.
- **If it does produce one,** wire it as any other adapter: availability,
  discovery, fetch, identify, `source_id`.

## Adding an adapter

1. Add a section here with all seven items from "What every adapter needs
   defined". Leave `status: stub` until a real transcript has come through it.
2. Add its `name` to the `sources` list in `calls/config.md`, with whatever
   settings it needs.
3. If a loop will use it, add its exact tool names to that loop's `loop-allow`
   block. **Names must be observed from a real session, never guessed** — a name
   that does not exist grants nothing and quietly misleads the next reader. Run
   the probe above rather than assuming.

   **Editing that block voids the owner's consent.** The runtime binds their
   Start-screen approval to a signature of the rules as written, so any change
   re-gates every pre-authorized call until they consent again. That is correct
   behaviour, and it means step 3 is a thing to tell the owner about, not a
   silent edit.

   Enabling an adapter in `calls/config.md` without doing this is the trap worth
   naming: the loop halts on its first call to it, every tick, forever, and
   nothing about the config says why.
4. Read-only tools only. Never add a delete, upload, or send tool to fetch a
   transcript.
5. Run one call through it end to end and check the brief by hand before
   enabling it in a loop.

Nothing in `SKILL.md`, the `call-prep` loop, or either verifier changes when an
adapter is added. If a change there seems necessary, the contract above is
wrong and worth fixing rather than working around.

---

## Normalizing (adapter-independent)

Whatever the source, write one normalized file to
`calls/transcripts/<YYYY-MM-DD>-<client-slug>.md` before building a brief. The
brief is always built from the normalized file, so the skill never parses a
vendor format.

```markdown
---
type: transcript
client: Acme Coaching
client_slug: acme-coaching
call_date: 2026-08-24
adapter: manual
source_id: manual:9f2c...-2026-08-24
retrieved: 2026-08-24
---

**Speaker Name:** what they said, verbatim.

**Other Speaker:** what they said, verbatim.
```

Rules:

- **Keep the words exactly.** Strip timestamps, cue numbers, and VTT markup;
  never rewrite, summarize, tidy, or punctuate what was said. The transcript is
  the source of truth and must stay quotable verbatim.
- **Keep the speaker labels the source gave**, even unhelpful ones like
  "Speaker 1". Mapping a label to a real person is Step 3 of the skill, done
  against calendar attendees, and it is allowed to fail. Renaming a speaker here
  on a hunch bakes a guess into the record.
- **Merge consecutive lines from the same speaker** into one paragraph. That is
  formatting, not editing.
- **Record `adapter` and `source_id`** so a brief can always be traced back to
  where it came from, and so dedupe works across adapters.

## Dedupe

`calls/processed.md` lists every `source_id` already normalized. Check it before
fetching and append after normalizing. Because `source_id` is namespaced by
adapter, the same call arriving through two adapters is still caught if the ids
match, and a re-paste of an identical transcript is caught by content hash.

A brief that already exists for a client and date is never rebuilt, whichever
adapter offered the transcript.
