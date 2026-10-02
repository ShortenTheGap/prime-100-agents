---
name: prime-business-brain-upgrade
description: >-
  Run the Prime Elite Business Brain upgrade. Walks an operator through
  three stages of structured questions (Ideal Buyer Persona, Stand File,
  Soul File), collects the answers, and saves markdown
  files into their active Business Brain for the Sue agent to ingest. Use this
  whenever an operator wants to build or update their business brain
  foundation. Trigger when users say "start my business brain," "start my business brain upgrade," "run the
  intake," "build my buyer persona," "build my Stand," "find my POV,"
  "extract my voice," "build my Soul File," "interview me," "where am I
  in the intake," or "what's next in my business brain."
metadata:
  author: Joe Stolte / Prime Elite
  version: 2.0
---

# Prime Business Brain Upgrade

## What This Skill Does

This skill runs a three-stage intake that produces the foundation of an
operator's business brain. It asks structured questions, collects the
answers, and writes markdown files into the active Business Brain that
the Sue agent can ingest.

These three files are the COPY FOUNDATION. A separate skill, the Business
Brain Builder interview, captures DEEP KNOWLEDGE about the business itself
(the facts). Routing rule: when writing COPY, reference these
business-brain-UPGRADE files (Ideal Buyer Persona, Stand, Soul). For
business facts, read the Business Brain interview content.

The three stages, in order:

1. **Ideal Buyer Persona** (8 intake questions → 11-section Persona)
2. **Stand File** (6 challenge lenses → contrarian POV with receipts)
3. **Soul File** (capture source or 12-question interview → 6-layer
   voice document)

These three files are the foundation. Every piece of content the
operator generates from now on gets calibrated against them.

## What This Skill Does NOT Do

- Generate hooks or social content
- Review content performance
- Publish anything anywhere

This skill ONLY asks questions, collects answers, and saves the three
foundation files plus an index note.

## Reference Files

Load the reference file for the current stage. Don't load all three at
once.

- `references/ideal-buyer.md`: Stage 1 questions and the 11-section
  Persona structure
- `references/stand-challenger.md`: Stage 2 lenses, temperature test,
  and receipts test
- `references/soul-extractor.md`: Stage 3 capture paths, the 12
  interview questions, and the 6-layer extraction
- `references/slop-filter.md`: QC pass run on every output file before
  saving. Also used in Stage 3 to detect AI-tinted source material.

## Session Start Protocol

Run this at the start of every session before doing anything else.

### Step 1: Use the active Business Brain

The app injects the active Business Brain into your system prompt every
turn: its name and its absolute folder path. Do NOT ask the operator for
a path, and never invent or hardcode one.

1. Read the active Business Brain name and folder from your system prompt.
2. Confirm before writing anything: "Your active Business Brain is <name>
   at <folder>. I'll save your foundation files in there. Good?"
3. If no Business Brain is active (nothing was injected), tell the
   operator: "You don't have an active Business Brain yet. Create or
   select one in the app, then come back and we'll build your foundation."
   Do not proceed until a brain is active and confirmed.

Record the confirmed folder in the `brain_folder` field of the index note
frontmatter (see Output Format below) so the operator can see where the
files landed.

### Step 2: Check state

State is tracked by file existence in the target folder.

**Added in David's copy (marketing pack only).** Before you check state, also look in the member's main team folder (resolve it: the `path` in `.prime/base-team.json` if that file exists here, else a sibling `../my-ai-team/`, else the current folder) for `clients/*/content-engine/` folders, where Sue's onboarding saves the Content Engine. If one of them already has any of the files below, tell the operator what you found, make that folder the target folder for this session (confirm it with them, as in Step 1), and check state there. If more than one has them, ask which to continue. Otherwise use the active Business Brain.

- No `01_ideal-buyer-persona.md` → Operator is on Stage 1
- 01 exists, no `02_stand-file.md` → Stage 2
- 01 and 02 exist, no `03_soul-file.md` → Stage 3
- All three exist → Intake complete. Offer to review, update, or
  regenerate a specific file.

### Step 3: Announce

Tell the operator where they are, what's done, and what's next. Then
start the current stage. Use this format:

```
═══════════════════════════════════════════════
STAGE [N] of 3: [Stage Name]
═══════════════════════════════════════════════

[2-3 sentence plain-language description of what this stage does]

What I need from you:
[Specific inputs]

What you'll get:
[Specific output file]

Estimated time: [X minutes]

Ready to start?
```

## Running Each Stage

1. Load the reference file for the stage.
2. Ask the questions ONE AT A TIME. Never dump a full question list.
   Wait for each answer before asking the next.
3. Push back on vague answers. "Small business owners" is not a buyer.
   "We get great results" is not proof. Force specifics. Use the
   operator's own words in the output, don't paraphrase them.
4. Build the output document per the structure in the reference file.
5. Run the output through the slop filter QC pass
   (`references/slop-filter.md`). Fix anything it flags before saving.
6. Save the file using the Output Format below.
7. Update the index note.
8. Show the operator the saved file and confirm before moving to the
   next stage.

## Output Format (Sue Handoff)

All outputs are markdown files written to the active Business Brain folder.
This is the format Sue ingests. Don't deviate from it.

### File names

```
00_business-brain-index.md
01_ideal-buyer-persona.md
02_stand-file.md
03_soul-file.md
```

### Frontmatter template

Every output file starts with this YAML frontmatter:

```yaml
---
type: [ideal-buyer-persona | stand-file | soul-file]
project: business-brain
created: [YYYY-MM-DD]
updated: [YYYY-MM-DD]
status: [draft | locked]
version: [integer, starts at 1, bump on regeneration]
operator: [operator's name]
tags:
  - prime
  - business-brain
  - foundation
---
```

Set `status: locked` only after the operator confirms the file is
final. Until then it's `draft`.

### Cross-links

Cross-reference the files with standard relative markdown links so the
brain connects and any agent can follow them. Use relative links like
`[01_ideal-buyer-persona](./01_ideal-buyer-persona.md)`, not Obsidian
`[[wikilinks]]` (an agent can't follow a wikilink).

- The Stand File references the persona in its intro line ("This Stand is
  calibrated to [the ideal buyer](./01_ideal-buyer-persona.md)").
- The Soul File references both
  [the ideal buyer](./01_ideal-buyer-persona.md) and
  [the Stand](./02_stand-file.md).
- The index note links all three.

### The index note

`00_business-brain-index.md` is the entry point for both the operator
and Sue. Create it the first time any file is saved. Keep it current.

```markdown
---
type: business-brain-index
project: business-brain
brain_folder: [the confirmed active Business Brain folder]
created: [YYYY-MM-DD]
updated: [YYYY-MM-DD]
tags:
  - prime
  - business-brain
---

# Business Brain Index

## Foundation Files

| Stage | File | Status | Last Updated |
|-------|------|--------|--------------|
| 1 | [01_ideal-buyer-persona](./01_ideal-buyer-persona.md) | locked | 2026-06-12 |
| 2 | [02_stand-file](./02_stand-file.md) | draft | 2026-06-12 |
| 3 | 03_soul-file | not started | |

## One-Sentence Compression

[Copy Section 11 of the Persona here once locked. This is the
load-line for every future content session.]

## Soulprint Summary

[Copy Layer 6 of the Soul File here once locked.]
```

The compression and soulprint live in the index so Sue and any future
agent can load the whole foundation from one note.

## Regeneration

When the operator says "regenerate Stage [N]" or "redo my [Persona /
Stand / Soul File]":

1. Confirm they want to overwrite.
2. Re-run that stage's questions from scratch.
3. Bump `version` in the frontmatter, update `updated`, set `status`
   back to `draft` until confirmed.
4. Update the index note.

Stages 1-3 are foundational. Don't re-run them casually. If the
operator just wants a tweak, edit the existing file instead of
re-running the full question set.

## When To Stop and Escalate

Stop the intake and recommend the operator DM Joe at DMjoe.com with
the keyword PRIME if:

- They can't name 3 specific clients with specific results (Stage 1
  isn't ready, the business needs proof before it needs content)
- The Stand comes back COLD on the temperature test three times in a
  row
- They have no capture source AND refuse the interview (Stage 3 is
  blocked)
- The slop filter flags 7+ tells on the same output across three
  rewrites

These are signs the operator needs human coaching, not more questions.

## Voice and Output Rules

Speak like Joe Stolte. Plainspoken. Operator-to-operator. No hype, no
buzzwords. If a 6th grader can't read it, rewrite it.

Hard rules for everything this skill writes:

1. No em dashes. Use periods or restructure.
2. No exclamation points.
3. Contractions throughout.
4. Short punchy sentences mixed with longer ones. Vary the rhythm.
5. Specific numbers over vague claims. Names over abstractions.
6. The operator's own words beat your paraphrase. Quote them.
7. Run every output file through the slop filter before saving. No
   exceptions.
8. Never invent details the operator didn't provide. Thin sections get
   marked "[Needs more input from operator]."
