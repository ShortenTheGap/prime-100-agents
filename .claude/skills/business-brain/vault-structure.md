# Folder Structure: The Prime Business Brain

Create this structure inside the owner's active Business Brain folder (the app injects its name and absolute path into your system prompt, confirm it with the owner before creating anything). Two levels deep maximum. If the folder already has a `RAW` folder from an earlier setup, treat it as `00-Inbox` (you may rename it to `00-Inbox` with the owner's approval, or keep the name and use it as the inbox). If a `Wiki` folder exists with notes in it, file those notes into the new structure during the build and propose archiving the empty Wiki folder.

```
Business Brain/
├── CLAUDE.md                  ← the Business Brain briefing (template below)
├── 00-Inbox/                  ← raw capture: clips, voice notes, pasted docs, the intake file. NEVER rewritten.
├── 01-Company/                ← Who are we? story, mission, values, team, model, goals
├── 02-Numbers/                ← What's measurably true? baseline scorecard + Monthly Snapshots/
├── 03-Market/                 ← Who do we serve? ideal buyer, language bank, Competitors/, industry notes
├── 04-Offers/                 ← What do we sell? _Index = offer ladder; one note per offer
├── 05-Attract/                ← How are we found? positioning, voice guide, pillars, channels, lead magnets
├── 06-Convert/                ← How does attention become revenue? process, script, objections, proof, follow-up
├── 07-Deliver/                ← How do we keep the promise? journey map, onboarding, SOPs/, common issues
├── 08-Clients/                ← Who are we serving now? _Index roster; one note per client
├── 09-Systems/                ← What runs the machine? tool stack, agent roster, recurring tasks, approval rules
└── 99-Archive/                ← retired notes. Out of the way, never deleted.
```

## Standard notes to create (when the interview provides the content)

- 01-Company: `Story & Mission`, `Values & Principles`, `Team Roster`, `Business Model`, `Goals & Priorities`
- 02-Numbers: `Baseline Scorecard`, `Monthly Snapshots/` (dated notes)
- 03-Market: `Ideal Buyer`, `Buyer Language Bank` (their quoted phrases), `Competitors/[Name]` each, `Industry Notes`
- 04-Offers: one note per offer; `_Index` shows the ladder with prices
- 05-Attract: `Positioning Statement`, `Brand Voice Guide` (adjectives, banned phrases, 3 best examples pasted in), `Content Pillars`, `Channels`, `Lead Magnets & CTAs`
- 06-Convert: `Sales Process`, `Sales Script`, `Objection Map`, `Proof Library`, `Follow-Up Cadence`
- 07-Deliver: `Client Journey Map`, `Onboarding SOP`, `SOPs/[Process]` each, `Common Issues & Fixes`
- 08-Clients: one note per client; `_Index` is the roster with one-line statuses
- 09-Systems: `Tool Stack`, `Agent Roster`, `Recurring Tasks`, `Approval Rules`

Only create a note when there's real content for it. An empty template note is worse than a gap in the Gap Report.

## Frontmatter convention (every note you create)

```yaml
---
type: note | index | sop | client | competitor | offer | scorecard
area: company | numbers | market | offers | attract | convert | deliver | clients | systems
status: current | draft | stale
updated: YYYY-MM-DD
source: AI | human
---
```

Notes the owner wrote themselves keep `source: human` and are never rewritten — improve by creating a new synthesized note that links to theirs.

## Filing rules

1. One topic per note. Descriptive filename. Nothing over ~2 pages — split it.
2. Every folder gets an `_Index.md`: what's inside, one line each, what's current.
3. Update the relevant `_Index.md` every time you add or change a note.
4. Active file count stays under ~350. Propose archive moves; never archive without approval.

## The Business Brain CLAUDE.md template (fill the brackets, write to the Business Brain root)

```markdown
# Business Brain Guide

This Business Brain is the knowledge base for [Company], a [one-line description].
Owner: [Name]. Read this file first.

## Map
00-Inbox = raw capture, unprocessed — never rewrite or delete anything here.
01-Company = identity. 02-Numbers = metrics. 03-Market = buyers & competitors.
04-Offers = what we sell. 05-Attract = marketing. 06-Convert = sales.
07-Deliver = fulfillment & SOPs. 08-Clients = active accounts.
09-Systems = tools, agents, rules. 99-Archive = retired notes.

## Conventions
- Every note has frontmatter: type, area, status, updated, source (AI or human).
- AI-written notes say source: AI. Owner-written notes say source: human and are never rewritten.
- One topic per note. Update the folder _Index.md when filing.
- Keep active files under 350; propose archive moves to the owner.

## Rules
1. [Owner's approval rules from interview Section 9 — what AI may never do without a human]
2. Anything customer-facing requires the owner's approval before it leaves this Business Brain.
3. When answering questions about the business, cite which note the answer came from.
4. UNKNOWN in the Baseline Scorecard means unknown. Never replace it with a guess.
```
