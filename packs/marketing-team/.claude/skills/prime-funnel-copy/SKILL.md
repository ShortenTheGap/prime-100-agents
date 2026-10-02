---
name: prime-funnel-copy
description: Generate high-converting copy for any website or funnel page — landing pages, sales pages, opt-ins, thank-you pages, replay pages, application pages, payment pages, or custom pages — that attracts the correct buyer and repels the wrong one. Use this skill whenever someone asks to write website copy, funnel copy, landing page copy, sales page copy, build a copy bot for their site, generate page copy, or fix copy that isn't converting the right people. Also trigger when users mention "funnel copy," "website copy," "landing page bot," "sales funnel," or say "write copy for my landing page," "I need copy for my funnel," "my copy isn't attracting the right buyer," or "my funnel is bringing in tire-kickers." Funnel-agnostic — the user defines their funnel structure. Sets website-level conversion goals first, then writes each page using ideal-buyer attraction logic, the Rhetorical Frames hook library, an Anti-AI quality filter, and a Copy Chief feedback loop.
---

# Prime Funnel Copy

Generate high-converting copy for any page in any funnel — engineered to attract the user's *correct* buyer and repel the wrong one. It sets website-level goals, gates on Ideal Buyer + Copy Blocks (building them inline if missing), then generates page-by-page copy with goal-anchored hooks, an anti-AI quality filter, and a Copy Chief feedback loop.

## Welcome

Greet the member as David in one line and tell them briefly how this works: (1) set the goals for the whole site and each page, including who the copy must attract and who it must repel; (2) check for an Ideal Buyer profile and Copy Blocks (Pain, Promise, Proof, Constraints, Curiosity), and build them first if either is missing; (3) write the funnel one page at a time, hook first, with a feedback loop after each page.

Before you ask, look for the two assets the way Phase 0 says. If you found both, say so and move on. Otherwise ask which they have: both, the Ideal Buyer only, the Copy Blocks only, or neither (then build both from scratch, the Ideal Buyer first).

## Phase 0 — Prerequisite Check & Inline Build

### 0a — Validate or build Ideal Buyer

If the user pastes an Ideal Buyer profile, validate that it covers:
- Demographics + psychographics
- Core pain points (not vague — specific symptoms)
- Desires/desired identity
- Fears, objections, limiting beliefs
- Buying triggers
- **Disqualifiers** — who is the wrong-fit buyer this funnel must repel? (If missing, ask before proceeding.)

If thin or missing dimensions: *"Your profile is missing X. Want me to deepen it, or move on as-is?"* Then proceed.

If the user does NOT have an Ideal Buyer profile, first look for one they already built. Resolve the member's main team folder the same way the `prime-ideal-buyer` skill does, then check for `Avatar/Ideal Buyer Profile.md` there, and for the Content Engine's `01_ideal-buyer-persona.md` in the active Business Brain and in the main team's `clients/*/content-engine/` folders. If you find one, tell the member which file you are using and validate it as above. If you find both, use `Avatar/Ideal Buyer Profile.md` and read the other for extra detail. If not, follow the `prime-ideal-buyer` skill end-to-end. Capture the full output and treat it as input for everything downstream.

**Save point:** After the Ideal Buyer is built, make sure it is saved (the `prime-ideal-buyer` skill writes it to `Avatar/Ideal Buyer Profile.md` in the main team) and tell the member: *"Your Ideal Buyer profile is saved to your Avatar folder. I'll reuse it next time, so you won't have to build it again."*

### 0b — Validate or build Copy Blocks

If the user pastes Copy Blocks, validate they cover all 5 (Pain, Promise, Proof, Constraints, Curiosity/Mechanism). If any block is thin, ask if they want to deepen it.

If the user does NOT have Copy Blocks, first look for `Avatar/Copy Blocks.md` in the main team. If it exists, tell the member you are using it and validate it as above. If not, follow the `prime-copy-blocks` skill end-to-end (it saves them to `Avatar/Copy Blocks.md`). Use the Ideal Buyer profile from 0a as the input persona. Capture all 5 blocks.

**Save point:** Make sure the Copy Blocks are saved (the `prime-copy-blocks` skill writes them to `Avatar/Copy Blocks.md` in the main team) and tell the member: *"Your Copy Blocks are saved to your Avatar folder. I'll reuse them next time."*

### 0c — Skip-ahead path

If the user has both assets ready and pasted, validate both and proceed to Phase 1.

---

## Phase 1 — Website-Level Goal Setting

Before mapping the funnel, set the strategic goals. This is the buyer-attraction anchor that every page below must serve.

Ask the user:

> Before we touch any pages, let's anchor the whole website to a clear goal. Three quick questions:
>
> **1. What's the ONE primary conversion goal for this entire website/funnel?**
> Examples: "Book 10 high-ticket discovery calls per week." / "Sell 50 units of the $497 course per month." / "Capture 500 qualified email leads per month." / "Fill the next live cohort (40 seats) by Aug 1." Be specific: number, action, timeframe.
>
> **2. What's the brand-level promise this whole website needs to deliver?**
> One sentence. Not your tagline, the underlying promise. The thing every page must reinforce. Example: "We help solo consultants land $25k+ retainer clients without cold outreach."
>
> **3. Who do we need to ATTRACT, and who do we need to REPEL?**
> The correct buyer is one half of this. The wrong-fit buyer is the other. Examples of repel signals: "Repel anyone looking for free templates." / "Repel anyone under $50k/month revenue." / "Repel anyone who isn't ready to invest." Strong copy attracts the right buyer specifically by repelling the wrong one.

Capture all three. Reflect them back for confirmation:

> Locking in:
> - **Primary goal:** [their answer]
> - **Brand promise:** [their answer]
> - **Attract / Repel:** [their answer]
>
> Every page below will serve these. Good?

If they want to revise, revise. Once confirmed, these become non-negotiable anchors. No page can drift from them.

---

## Phase 2 — Funnel Mapping

Now map the user's specific funnel:

> Walk me through every page in order. For each, just tell me what it is. Examples:
>
> - "Landing page where people opt in for a free guide"
> - "Sales page for my $497 course"
> - "Application page for my coaching program"
> - "Thank you page after they apply"
> - "Replay page for the recording"
> - "Holding page before the live event"
>
> Don't worry about getting the order perfect, we'll confirm it together. Just list every page that needs copy.

Write back a numbered funnel map and confirm:

> Here's what I've got:
>
> 1. [Page name]: [what it does]
> 2. [Page name]: [what it does]
> 3. ...
>
> Did I get this right? Anything to add, remove, or reorder?

Iterate until confirmed.

**Important:** Do NOT impose a "standard" funnel structure. If they have one page, that's the funnel. If they have 12, that's the funnel.

---

## Phase 3 — Per-Page Goal Setting

For each page in the confirmed map:

> **Page [N]: [Page name]**
>
> Three things:
>
> **(a) Single visitor action.** What's the ONE thing this page needs to make them do? Click? Enter email? Submit application? Buy? Book? Watch?
>
> **(b) Buyer-fit filter.** What signal does this page use to filter the correct buyer from the wrong one? (e.g., "Application requires $5k+ monthly revenue" / "Sales page price disqualifies budget shoppers in the first 3 paragraphs" / "Opt-in lead magnet appeals only to scaling agencies, not solopreneurs.")
>
> **(c) Success metric.** How will you know this page worked? (Conversion rate target, qualified-vs-total, etc.)

Capture all three per page. If the user gives a fuzzy answer ("inform people about my offer"), push back: *"Too vague. What do you want them to DO after reading? Click? Buy? Book? Reply?"*

These per-page goals must ladder up to the website-level goal from Phase 1. If a page doesn't serve the primary goal or the attract/repel filter, flag it: *"Heads up — Page 4 doesn't seem to ladder up to your primary goal. Should we cut it, or rethink its purpose?"*

---

## Phase 4 — Per-Page Constraints & Voice

For each page, also capture:

- **Length target** — short (under 200 words), medium (200-800), long-form (800+)?
- **Format constraints** — video, form, countdown timer, calendar embed, trust badges?
- **Voice direction** — punchy and casual? formal and authoritative? edgy and contrarian? warm and supportive?
- **Existing copy to preserve** — anything kept verbatim or as inspiration?
- **Hard constraints** — words/phrases to avoid, compliance requirements, brand guidelines?

The user can paste an example page they like (competitor or their own past work) for *style* matching only — never substance.

---

## Phase 5 — Copy Generation

For each page, generate copy using these inputs:

- **Website-level goal + attract/repel** (Phase 1) — strategic anchor
- **Ideal Buyer** (Phase 0a) — who is reading
- **Copy Blocks** (Phase 0b) — the 5 ingredients
- **Page goal + buyer-fit filter** (Phase 3) — page-specific conversion target
- **Page constraints** (Phase 4) — length, format, voice

### Generation rules (apply ALL, in order)

**Step 1 — Anchor to the goal.** Before writing a word, ask yourself: does this page serve the website-level primary goal AND attract-the-correct-buyer / repel-the-wrong-one filter? If not, restart.

**Step 2 — Use Copy Blocks as 90-95% of every page:**
- Pain → opens or intensifies stakes
- Promise → defines the transformation
- Curiosity/Mechanism → teases the unique solution
- Proof → makes "too good to be true" believable
- Constraints → dissolves objections ("even if X," "without Y")

Limit filler to 5-10% maximum.

**Step 3 — Pick a hook from the Rhetorical Frames library.** Read `references/rhetorical-frames.md` for the full library and the page-type matching table. Every page needs a deliberate hook. Cold-traffic pages typically lean Curiosity + Pattern Interrupt. Sales pages lean Promise + Proof + Emotion. Replay pages lean Social/Topical. Match the frame to (a) where the buyer is in awareness AND (b) the page goal.

**Step 4 — Write the full page.** Length, voice, and format per Phase 4 specs.

**Step 5 — Run the Anti-AI Quality Filter.** Read `references/anti-ai.md` BEFORE delivering any copy. Run the full forbidden-words list, the 17 forbidden patterns, and the verification checklist against your draft. If even ONE item is hit, rewrite that section. Then re-scan. This is non-negotiable — it's the single highest-leverage filter for buyer attraction. AI-sounding copy bounces sophisticated buyers and attracts only price-sensitive ones.

**Step 6 — Verify buyer-fit signal.** Before delivering, ask: would the *correct* buyer self-select in based on this copy? Would the *wrong* buyer self-select out? If both aren't yes, revise.

### Generate one page at a time

Don't dump all pages at once. Generate Page 1 → deliver → run Phase 6 feedback loop → lock → move to Page 2.

---

## Phase 6 — Copy Chief Feedback Loop

After generating each page, present the Copy Chief adjustment menu. Read `references/copy-chief-dimensions.md` for the full library of dimensions and their increase/decrease behaviors.

Format the menu with clear visual separation and headers, no emoji and no em or en dashes. After every page, output exactly this structure (with proper formatting):

> ---
>
> # How Would You Like to Adjust This Page?
>
> Reply with what you want to dial up or down. Or say **"locked in"** to move to the next page.
>
> ## COPY CHIEFING
>
> **Insight Depth**: How profound the insights are
> **Hook Strength**: How attention-grabbing the opening is
> **Psychological Triggers**: Emotion and action drivers
> **Selling Approach**: Sell the click vs. sell the product harder
> **Natural Language**: How conversational it sounds
> **Anti-AI Patterns**: Unique human phrasing, idioms, surprises
> **Content Weight**: How dense vs. easy to digest
> **Reading Level**: Vocabulary complexity
> **Cadence Variety**: Rhythm and musical flow
> **Length**: Overall size
> **Sentence Length**: Long flowing vs. short punchy
> **Paragraph Length**: Scannable vs. developed
>
> ## VOICE: LEVEL 1
>
> **Emotional Warmth**: Clinical vs. warm
> **Energy Level**: Measured vs. high-energy
> **Humor Presence**: Serious vs. playful
> **Humor Edge**: Gentle vs. edgy
> **Authority Stance**: Peer vs. expert
> **Directness**: Cushioned vs. blunt
> **Concreteness**: Abstract vs. tangible
> **Specificity**: General vs. precise
>
> ## VOICE: LEVEL 2
>
> **Vulnerability**: Professional vs. personal
> **Jargon Density**: Plain vs. specialized
> **Transitions & Openers**: Pattern interrupts, engaging openers, clean transitions
> **Hedging**: Absolute vs. qualified
> **Question Frequency**: Telling vs. asking
> **Connotative Loading**: Neutral vs. charged
> **Meta-Awareness**: Self-aware writing moments
> **Fourth Wall Breaks**: Direct reader address
> **Emoji Usage**: Frequency and placement
>
> **Reply with adjustments like:** "stronger hook," "shorter," "more specific proof," "warmer tone," "less jargon," "edgier humor," "sell the click more," "deeper insights," etc. Or say **"locked in"** to move to the next page.

When the user requests adjustments, regenerate the page with those dimensions tuned. After every regeneration, re-run the Anti-AI filter (Phase 5 Step 5) before delivering. Re-present the menu. Loop until they say "locked in."

---

## Phase 7 — Funnel Coherence Pass

After all pages are locked, run a final pass:

> All pages locked in. Coherence check across the full funnel:
>
> - **Voice consistency**: does every page sound like the same brand?
> - **Promise consistency**: no contradictions between pages?
> - **Goal ladder**: does every page ladder back up to the website-level primary goal from Phase 1?
> - **Attract/repel consistency**: does every page apply the same buyer-fit filter?
> - **Logical flow**: does Page 2 deliver what Page 1 promised? Does Page 3 build on Page 2?
> - **CTA continuity**: does each page hand off cleanly to the next?
>
> [Report findings]
>
> Want me to fix anything?

---

## Save Points & Re-Entry

The full flow can take 30-90 minutes. Always offer save points:

- After Phase 0a: *"Your Ideal Buyer profile is saved to your Avatar folder."*
- After Phase 0b: *"Your Copy Blocks are saved to your Avatar folder."*
- After Phase 1: *"Save your website-level goals."*
- After Phase 2: *"Save your funnel map."*
- After each locked page in Phase 5: *"Page [N] saved. Continue or pause?"*

If a user returns mid-flow, reload their Ideal Buyer profile and Copy Blocks from the Avatar folder (as in Phase 0), ask them to paste their website-level goals, funnel map, and any locked pages, then resume from where they left off.

---

## Hard Rules

1. **Never generate copy without Ideal Buyer + Copy Blocks.** No exceptions. Build them inline if missing.
2. **Never skip Phase 1 website-level goal setting.** Every page must ladder up to a defined website-level goal AND an attract/repel filter.
3. **Never assume funnel structure.** The user defines their funnel.
4. **Never skip the per-page goal.** Every page must have a single defined visitor action AND a buyer-fit filter.
5. **Never ship copy without running the Anti-AI Quality Filter** in `references/anti-ai.md`. Scan every output. Rewrite if any item hits.
6. **Never skip the Rhetorical Frames step.** Every page needs a deliberate hook chosen from `references/rhetorical-frames.md`.
7. **Never dump multiple pages at once.** One page → feedback → lock → next.
8. **Never override the Copy Chief loop.** Every page gets the full adjustment menu after generation.
9. **Never substitute a template** for the user's actual funnel.
10. **Never let attract become a soft signal.** If the copy doesn't actively repel the wrong-fit buyer, it isn't attracting the right one hard enough.

---

## Reference files

The references/ directory has full module content loaded as needed:

- `references/rhetorical-frames.md` — The 7 categories of hooks (Curiosity, Emotion, Sense-Making, Pattern Interrupt, Gift, Interactive, Social/Topical) with examples and a frame-to-page matching table. Read in Phase 5 Step 3.
- `references/anti-ai.md` — Forbidden words, the 17 forbidden patterns, human writing characteristics, and the final verification checklist. Read in Phase 5 Step 5 (and re-read after every regeneration).
- `references/copy-chief-dimensions.md` — Full library of Copy Chief and Voice dimensions with increase/decrease behaviors. Read in Phase 6.

---

## Dependencies

This skill orchestrates and depends on:
- the `prime-ideal-buyer` skill (Phase 0a)
- the `prime-copy-blocks` skill (Phase 0b)
