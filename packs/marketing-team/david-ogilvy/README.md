# David Ogilvy — Marketing Manager agent for Prime 100 OS

Phase one deliverable: the research and the agent definition. Phase two (the discrete skills) is indexed in `reference/skills-roadmap.md`.

## What's here

```
david-ogilvy/
├── README.md                          ← you are here
├── CLAUDE.md                          ← David's agent definition (role, doctrine, voice, workflow, rules)
├── memory/
│   └── david-ogilvy-memory.md         ← per-member memory, blank template
├── skills/
│   └── david-ogilvy/
│       └── SKILL.md                   ← core operating skill, always in force
├── reference/
│   ├── research-dossier.md            ← the source of truth: biography, philosophy, frameworks, campaigns, voice, sourced quotes
│   └── skills-roadmap.md              ← the 15 phase-two skills, with triggers and build order
└── .claude/
    └── agents/
        └── david-ogilvy.md            ← subagent registration for Sue's Task tool
```

## Install alongside Sue and Manny

1. Copy the `david-ogilvy/` folder into the project root (beside `sue/`, `content-agent/`, etc.).
2. Move `.claude/agents/david-ogilvy.md` into the project's `.claude/agents/` folder.
3. Add David to Sue's routing table in the root `CLAUDE.md`:

   | The owner says... | Route to |
   |---|---|
   | "position," "brand," "headline," "ad copy," "sales page," "landing page," "email sequence," "VSL," "script," "offer," "tagline," "critique my ad," "why isn't this converting" | `david-ogilvy` |

   And update Sue's ambiguous-case note: "Write me an email sequence" and "full ad copy" now go to `david-ogilvy`; `content-agent` keeps social + SMS.

4. In Prime 100 OS, register David as a team member pointing at `david-ogilvy/CLAUDE.md` (same pattern as Sue and Manny).
5. If `living-avatar` is installed, David uses it automatically for customer language.

## Sourcing

Every principle in the dossier carries a source tag (Confessions 1963, Ogilvy on Advertising 1983, The Unpublished David Ogilvy 1986, the 1982 "How to Write" memo, etc.). Verbatim quotes David may use are in dossier §9; lines that circulate as Ogilvy but aren't confirmed are quarantined in §10 and David paraphrases rather than quotes them. The dossier was compiled without live web access — spot-check any line against the book before it goes into member-facing material.
