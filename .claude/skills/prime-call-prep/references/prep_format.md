# Call Prep Brief Format Spec

The Markdown deliverable for client call prep (coaching calls, kick-offs, sprint
check-ins, roadmap calls). Voice: direct, dense, no fluff, no em dashes. Bold
lead-ins on every bullet. MECE: every fact goes in exactly one section; no
repetition across sections.

SOURCE RULE: the brief is built from the LAST CALL's transcript plus the previous
brief. If the last call happened anywhere without a recording or transcript, DO
NOT write a brief from memory or research. Ask for the transcript first and wait.

That rule governs every call that HAS HAPPENED and it does not bend. A meeting
that has NOT happened yet is a different document with its own contract: see
PRE-CALL VARIANT below. Every brief declares which one it is in `basis:`, and
the verifier reads that key before it checks anything else.

Four questions, in priority order, drive the whole document:

1. What was promised to them on the last call
2. Who was the last call with (everyone involved)
3. What is their frame coming into this call
4. What context does the call leader need to lead the call

---

## Template

Written to `calls/briefs/<client-slug>/<YYYY-MM-DD>.md`. The frontmatter is
machine-read: the loop uses `bottom_line` for the shadow invite and the
notification, the daily briefing uses it for the inline prep line, and
`verifier.sh` reads `basis` and `transcript` on every run. Keep the keys exactly
as named.

`basis` is required on **both** kinds of brief and has exactly two legal values,
`transcript` and `pre-call`. It is stated rather than inferred because it gates a
safety rule: a missing key must never be readable as "probably a transcript".

```markdown
---
type: call-prep
basis: transcript
client: Acme Coaching
client_slug: acme-coaching
call_date: 2026-08-24
next_call: 2026-09-07
call_leader: Vince Prias
source: AI
transcript: calls/transcripts/2026-08-24-acme-coaching.md
previous_brief: calls/briefs/acme-coaching/2026-08-10.md
bottom_line: One sentence the call leader can read in five seconds.
---

# Follow-Up Call Prep

## [Client Full Name] · [Company]

Follow-Up Call Prep Brief | Prepared for [Call Leader]

*Following the session recorded [Month D, YYYY]*

> **BLUF.** 3 to 6 sentences: state of play, the single most important thing
> since last call, and the one thing this call must accomplish.
>
> **OBJECTIVE.** 2 to 3 sentences: what the call leader must accomplish on this
> call.

## 1. PROMISED LAST CALL
## 2. WHO WAS ON THE LAST CALL
## 3. THEIR FRAME COMING IN
## 4. CONTEXT TO LEAD THE CALL
## 5. OPEN LOOPS AND CARRY-OVER
## 6. RISKS AND LANDMINES
## 7. QUESTIONS TO ASK
## 8. FRAMEWORKS IN PLAY

*Confidential coaching prep*
```

The blockquote replaces the docx's bordered one-cell table. It is the only
blockquote in the brief, so the BLUF stays visually distinct in Obsidian and in
any Markdown viewer.

---

## Section contents

**1. PROMISED LAST CALL.** The #1 section. Two bold-led groups of bullets, MECE:

- **We promised them:** every commitment made by your side on the last call, each
  with owner and any deadline, phrased so the call leader can confirm delivery or
  own the miss out loud.
- **They committed to:** every commitment the client made, each phrased as a
  checkable yes/no status question for the opener.

**2. WHO WAS ON THE LAST CALL.** Bullets: every person on the last call with role
and why they matter (client side and your side). Then any person expected on THIS
call who was not on the last one, flagged. Unknown roles get
`[NOT FOUND - confirm on call]`.

**3. THEIR FRAME COMING IN.** Evidence-based read of the client's state of mind
entering this call: energy, wins they are proud of, anxieties, skepticism,
momentum or stall, exact quotes where possible. Never invented emotion; every
claim traces to transcript lines or is tagged `[ASSUMPTION]`.

**4. CONTEXT TO LEAD THE CALL.** The facts the call leader needs at his or her
fingertips: current numbers exactly as spoken, live deals and threads, dates and
deadlines, decisions made, and anything time-sensitive that moved between calls.
Dense bullets, bold lead-ins.

**5. OPEN LOOPS AND CARRY-OVER.** Every action item and open loop from the
PREVIOUS brief with current status (done / moved / not discussed). None silently
dropped. Multi-call misses get called out with the count.

**6. RISKS AND LANDMINES.** What could go wrong on this call, topics to handle
with care, unresolved name or fact flags.

**7. QUESTIONS TO ASK.** Verbatim-usable questions in quotes, priority order:
promise checks first, then frame-openers, then strategy.

**8. FRAMEWORKS IN PLAY.** Two-column table: Framework | What it is and how to
use it now. Only frameworks actually referenced or clearly applicable.

---

## The Obsidian mirror

When `mirror_to_vault` is on, the brief is copied to
`brain/Calls/<client-slug>/<date>.md` so it opens in the vault, where it can sit
on a second screen during the call. The body is identical; the frontmatter gains
the vault's own convention so the note files correctly beside hand-written ones:

```yaml
type: call-prep
area: clients
status: current
updated: 2026-08-24
source: AI
```

`source: AI` matters: the vault convention is that AI-written notes are marked
as such and human-written notes are never rewritten. The mirror is create-only.
If a note already exists for that client and date, leave it: the owner may have
annotated it during the call, and their notes are worth more than a rerun.

## Rules

- Every claim traces to the transcript or previous brief. No invented numbers,
  names, or motives.
- Numbers exactly as spoken. Unclear names flagged:
  `[Name unclear in transcript, confirm spelling]`.
- No em dashes anywhere.
- All eight section headings appear, in this order, even when a section is thin.
  An empty section says why it is empty; it is never omitted. A missing heading
  is how a brief silently loses a promise.
- `basis:` is present and is `transcript` or `pre-call`.
- On a `basis: transcript` brief, `transcript:` names a file that actually
  exists. A brief citing a transcript nobody wrote is the one way the source
  rule can be satisfied on paper and broken in fact.

## PRE-CALL VARIANT (`basis: pre-call`)

The brief for a meeting that has **not happened yet** and with a client who has
no brief at all. Same file, same eight headings, same house style. What changes
is where the evidence comes from and how hard it has to prove itself.

This variant exists for one job: walking into a first meeting knowing **who you
are meeting, why it matters, and who introduced you**. Nothing more.

### Frontmatter

```yaml
---
type: call-prep
basis: pre-call
client: Acme Coaching
client_slug: acme-coaching
call_date: 2026-09-07          # the UPCOMING meeting. There is no past call
next_call: 2026-09-07
call_leader: Vince Prias
source: AI
transcript: none               # the literal word. Never blank, never absent
previous_brief: none
evidence_count: 4              # documents actually opened this run
bottom_line: "Pre-call, no transcript: first meeting with Dana Reyes, introduced by Priya Shah, on the Q4 retainer."
---
```

`bottom_line` MUST begin with the exact string `Pre-call, no transcript: `. Both
consumers of that key copy it verbatim, so the label travels with it: into the
shadow invite's description and into the daily briefing's prep line, without
either of them needing to know this variant exists. Do not strip the prefix and
do not reword it.

### Where it is written

`calls/briefs/<client-slug>/<meeting-date>-pre.md`.

The `-pre` suffix keeps the plain-date path free for the real brief that gets
written after the call, so the two can sit side by side in the folder and in the
vault. The mirror takes the same basename, as it already does for the `-HHMM`
case.

**Precedence, and it matters:** `2026-09-07-pre.md` sorts AFTER `2026-09-07.md`,
so anything picking "the latest brief" by filename picks the stale pre-call one.
The current brief for a client is the one with the greatest `call_date`, and a
tie breaks in favour of `basis: transcript`.

### The banner

Directly under the H1, in place of the `*Following the session recorded ...*`
line. The first line is byte-exact; the date is the day the evidence was read:

```markdown
> **PRE-CALL BRIEF. NO TRANSCRIPT.** No call with this client has happened yet.
> Everything below is drawn from mail, calendar, and local files opened on
> 2026-08-28, and every claim carries its source. Nothing here is call history.
```

This is a second blockquote, above the BLUF. It is the one place the format
allows two.

### Citation grammar

Every claim carries its source inline, at the end of its own line, as one
bracketed ASCII token:

```
[src:mail/<YYYY-MM-DD>/<sender-email>/<subject>]
[src:calendar/<YYYY-MM-DD>/<event title>]
[src:file/<repo-relative-path>]
[src:brief/<repo-relative-path>]
```

**A cited bullet is ONE line, citation last, never wrapped.** That is house style
here for a mechanical reason: the check that every claim is cited looks at the
end of each bullet line, so a bullet wrapped onto a second line fails and halts
the loop on work that was actually fine.

### Section by section

| # | Section | In a pre-call brief |
|---|---|---|
| 1 | PROMISED LAST CALL | **always empty**, fixed line |
| 2 | WHO WAS ON THE LAST CALL | **always empty**, fixed line |
| 3 | THEIR FRAME COMING IN | verbatim quotes only, each cited. Nothing quotable, fixed line |
| 4 | CONTEXT TO LEAD THE CALL | **always filled.** The three lead-ins below, then cited facts |
| 5 | OPEN LOOPS AND CARRY-OVER | questions left unanswered in a cited thread, plus any `- [ ]` rows for this client already in `calls/actions/open.md`. Else fixed line |
| 6 | RISKS AND LANDMINES | **always filled.** The no-history line below, then cited risks |
| 7 | QUESTIONS TO ASK | **always filled.** See "the release valve" |
| 8 | FRAMEWORKS IN PLAY | only a framework a cited message actually names. Else fixed line |

The fixed lines, byte-exact, one per empty section and nothing else in it:

- Section 1: `**Empty because:** no transcript. This brief was built before the first call with this client, so nothing has been promised in either direction.`
- Section 2: `**Empty because:** no transcript. There was no previous call. Who you are meeting is in Section 4.`
- Sections 3, 5, 8: `**Empty because:** no transcript. Nothing in the evidence read this run belongs here.`

Section 6 always opens with, byte-exact:

`**No call history:** this brief was built without a transcript. Anything said on a previous call with this client is not in it.`

**Section 1 is closed even to promises made by email.** It is the section the
call leader reads aloud to confirm delivery, so a wrong line there is the worst
failure this document can produce. An emailed commitment goes in Section 5,
cited, where it reads as what it is.

### The three answers

They live in Section 4, always present, in this order, one line each:

```markdown
- **Who you are meeting:** Dana Reyes, ops lead at Acme, running their Q4 rollout. [src:mail/2026-08-21/dana@acme.com/Re: intro]
- **Why this meeting matters:** They asked to scope a retainer before their board meets. [src:calendar/2026-09-07/Acme Q4 retainer]
- **Who introduced you:** Priya Shah introduced you by email on 2026-08-19. [src:mail/2026-08-19/priya@vendor.io/Intro: Dana and Vince]
```

Each of the three ends with **either** a `[src:...]` token **or** the byte-exact
string `not established from the evidence read this run.` and nothing else. Say
you do not know; never leave the line off.

**Who introduced you is claimed only when a cited message contains an actual
introduction.** Being cc'd on a thread is not an introduction, and neither is
sharing a calendar invite.

### The release valve

Section 7 is where judgement is allowed to live, because a question asserts
nothing about the client. The rule that makes the rest of this variant workable:

> Anything you could not verify becomes a question in Section 7. It never
> becomes a statement anywhere else.

### Never, in a pre-call brief

- **Never write an uncited claim.** No `[src:...]`, no line. It becomes a
  Section 7 question or it is dropped.
- **Never describe a previous call.** No "last time", no "on the call", no "we
  discussed". A pre-call brief that talks about a call is the fabrication this
  whole contract exists to prevent.
- **Never infer** seniority, budget, authority, or intent from a job title or a
  signature block.
- **Never infer** relationship history from thread length or from who is on the
  recipient list.
- **Never infer** emotion from wording, punctuation, or how fast someone replied.
  Section 3 is verbatim quotes or it is empty.
- **Never write to `calls/actions/open.md` or `calls/people/`.** Those records
  are about what happened on a call. The `followups` loop drafts real outbound
  mail against action rows, and an emailed "I'll send the deck" filed there would
  chase a call that never happened.

## SPRINT CHECK-IN VARIANT

For quarterly or sprint check-in calls, the brief must also audit progress
against the sprint goals agreed on the previous call (or kick-off scope). Add
each goal to Section 1 as a checkable question and direct the call leader to
close with one bounded next sprint: one outcome, one owner, one deadline.

## BRANDING

Not applicable to the Markdown brief, which inherits the reader's theme. The
branded docx path is preserved but unused: `scripts/render_prep_docx.py` takes a
Markdown file and emits a styled docx via `assets/template.docx`, with five brand
constants at the top of the script. It requires `python-docx`, which is NOT
present in the app's bundled interpreter, so switching it on means solving that
dependency first.
