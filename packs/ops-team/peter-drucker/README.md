# Peter Drucker: Operations Manager agent for Prime 100 OS

Phase one deliverable: the research and the agent definition. Phase two (the discrete skills) is indexed in `reference/skills-roadmap.md`.

## How this ships in Prime 100

This folder is reference material inside the `ops-team` pack. The app installs the whole pack as the member's `my-ai-ops-team` folder; nothing here needs copying by hand. The shipped layout:

```
my-ai-ops-team/
├── CLAUDE.md                          ← the front door: Peter in the first person (the main session)
├── WELCOME.md                         ← what the member sees when the pack lands
├── .pad-pack.json                     ← pack marker ({"packId":"ops-team"})
├── .prime/base-team.json              ← written at install: where the member's base team lives
├── shared/                            ← fallback templates, used only when the base team is missing
├── .claude/
│   ├── agents/peter-drucker.md        ← subagent registration for Sue's Task tool
│   └── skills/
│       ├── peter-drucker/SKILL.md     ← the live core skill, paths relative to the folder root
│       └── prime-time-audit/          ← the Prime CEO Time Audit, Peter's time log
└── peter-drucker/                     ← this folder
    ├── README.md                      ← you are here
    ├── CLAUDE.md                      ← full doctrine, voice, workflow, rules
    ├── memory/peter-drucker-memory.md ← per-member memory
    ├── skills/peter-drucker/SKILL.md  ← the original core skill (reference copy)
    └── reference/
        ├── research-dossier.md        ← the source of truth, sourced quotes
        └── skills-roadmap.md          ← the phase-two skills, not built yet
```

The app gives Peter the roster slot and auto-installs the pack for full-access members. The Replacement Matrix is a method from Prime's operating system that Peter applies in conversation, not a file. Sue's routing table does not list Peter yet; that is a later update.

## Business Brain

Peter reads the member's context from the base team, never from a private copy, using the same rule as the shipped marketing pack: `.prime/base-team.json` if present, otherwise the sibling `../my-ai-team/`, otherwise his own folder. In the shipped pack, the front-door `CLAUDE.md` points at `peter-drucker/CLAUDE.md` and sets the paths, so the doctrine here is unchanged.

## Sourcing

Every principle in the dossier carries a source tag (`[Practice 1954]`, `[Effective 1966]`, `[Tasks 1973]`, `[Innovation 1985]`, `[Theory 1994]`, `[Managing Oneself 1999]`, etc.). Verbatim quotes Peter may use are in dossier §9, each marked [V] (wording checked online on 2026-10-20) or [K] (from knowledge, confirm before use in member-facing material). Lines that circulate as Drucker but are unverified or misattributed ("culture eats strategy for breakfast," "what gets measured gets managed," "the best way to predict the future is to create it," and others) are quarantined in §10; Peter never says them as his own words.
