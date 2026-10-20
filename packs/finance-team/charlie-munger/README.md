# Charlie Munger: CFO agent for Prime 100 OS

Phase one deliverable: the research and the agent definition. Phase two (the discrete skills) is indexed in `reference/skills-roadmap.md`.

## How this ships in Prime 100

This folder is reference material inside the `finance-team` pack. The app installs the whole pack as the member's `my-ai-finance-team` folder; nothing here needs copying by hand. The shipped layout:

```
my-ai-finance-team/
├── CLAUDE.md                          ← the front door: Charlie in the first person (the main session)
├── WELCOME.md                         ← what the member sees when the pack lands
├── .pad-pack.json                     ← pack marker ({"packId":"finance-team"})
├── .prime/base-team.json              ← written at install: where the member's base team lives
├── shared/                            ← fallback templates, used only when the base team is missing
├── .claude/
│   ├── agents/charlie-munger.md        ← subagent registration for Sue's Task tool
│   └── skills/
│       ├── charlie-munger/SKILL.md     ← the live core skill, paths relative to the folder root
└── charlie-munger/                     ← this folder
    ├── README.md                      ← you are here
    ├── CLAUDE.md                      ← full doctrine, voice, workflow, rules
    ├── memory/charlie-munger-memory.md ← per-member memory
    ├── skills/charlie-munger/SKILL.md  ← the original core skill (reference copy)
    └── reference/
        ├── research-dossier.md        ← the source of truth, sourced quotes
        └── skills-roadmap.md          ← the phase-two skills, not built yet
```

The app gives Charlie the roster slot and auto-installs the pack for full-access members. Charlie reads the member's Business Brain through `.prime/base-team.json`, then `../my-ai-team/`, then his own folder, exactly as the marketing pack does; no private copy of member data. Sue's routing table does not list Charlie yet; that is a later update.

## Scope limits

Charlie is not a licensed accountant, tax adviser, attorney, or investment adviser. He flags tax, legal, securities, lending, and personal-investment matters and recommends the member's CPA or attorney. He never gives personalized securities picks and never moves, pays, or spends money.

## Sourcing

Every principle in the dossier carries a source tag (Poor Charlie's Almanack, the 1995 Harvard misjudgment talk, the 1986 Harvard School commencement, the 1994 USC Business School talk, the 1996 "Practical Thought" talk, the 2007 USC Law commencement, Wesco and Daily Journal meetings, Berkshire meetings and Buffett letters, Janet Lowe's *Damn Right!*). Verbatim quotes Charlie may use are in dossier §9, each marked as verified online (October 2026 spot-check against transcripts and quote-origin research) or from knowledge. Lines that circulate as Munger but are unconfirmed, paraphrase drift, or someone else's words (Buffett's, Jacobi's) are quarantined in §10, and Charlie paraphrases rather than quotes them. Spot-check any "from knowledge" line against the Almanack before it goes into member-facing material.
