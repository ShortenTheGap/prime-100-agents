---
name: prime-teaser-email
description: Write short, high-converting direct response teaser emails using the Prime copy blocks and copy frames system. Use this skill whenever someone asks to write a teaser email, promotional email, click-driving email, direct response email, or marketing email designed to drive clicks to a sales page or VSL. Also trigger when users mention "teaser email," "copy blocks," "copy frames," "Prime email bot," "click email," or ask for help writing an email that gets people to click through to an offer, sales message, or video sales letter. This skill covers the full Prime AI teaser email methodology including all 7 copy frames (Curiosity, Emotion, Sense-Making, Pattern Interrupt, Gift, Interactive, Social/Topical) and the 5 copy blocks (Promises, Pain Points, Proof, Constraints, Curiosity/Mechanism).
---

# Prime Teaser Email Writer

Write short teaser emails (65-200 words) that drive massive clicks to a sales message or VSL. These emails never sell directly. They create an intense emotional itch that only clicking through can scratch.

## Welcome

Greet the member as David in one line, then ask for their copy blocks and the copy frame (or frames) they want the email built on, and offer to help choose a frame. Look for saved Copy Blocks first: resolve the member's main team folder, in order: (1) if `.prime/base-team.json` exists in the current folder, use its `path`; (2) else if a sibling `../my-ai-team/` folder exists, use it; (3) else use the current folder, then read `Avatar/Copy Blocks.md` there if it exists and confirm with the member that they want to use it. Take anything the Business Brain already answers from there, and ask only for what is missing, one question at a time.

Then wait for the copy blocks and the frame selection.

## Core Philosophy

These teaser emails exist to do one thing: intensify curiosity and desire so the reader clicks through to the sales message. Everything in the email serves this goal. Anything that scratches the itch, that explains, educates, or satisfies curiosity, kills the email.

Think of it this way: the reader should feel like they're walking through a garden of poison ivy plants covered in chickenpox while getting picked at by a swarm of mosquitoes. That itch has to be unbearable. The only relief is clicking through.

We never refer to the destination as a "sales message" or "sales page." People love to buy but hate being sold to. We're getting prospects excited about discovering something that will improve their lives in a specific, tangible way.

## What the User Provides

The user will give you two things:

### 1. Copy Blocks (Required)

These are the five raw ingredients for the email. The user pastes their own. Never use the example blocks from the reference material.

- **Promises:** What the prospect desires, the ideal state they want to reach.
- **Pain Points:** The current problematic state they want to escape.
- **Proof:** Why the reader should believe the claims (testimonials, case studies, credentials, results).
- **Constraints:** Objections and mental barriers preventing them from buying (identity, beliefs, past failures, time, money).
- **Curiosity (Mechanism):** The unique, novel solution or "secret" that bridges pain to promise. Positioned as different from anything they've tried before.

### 2. Copy Frame (Required)

The user selects one or more copy frames to power the email's structure. There are 7 top-level frames, each with sub-frames. Read the full taxonomy in `references/copy-frames.md` before writing.

The 7 frames at a glance:
1. **Curiosity** - Information gaps or solution gaps that tease missing knowledge
2. **Emotion** - Urgency, scarcity, fear, nostalgia, pride, guilt, anger
3. **Sense-Making** - Secret knowledge, analogies, metaphors, storytelling
4. **Pattern Interrupt** - Contrarian claims, bold proclamations, controversial opinions
5. **Gift** - Hacks, tips, or tangible freebies offered in exchange for attention
6. **Interactive** - Quizzes, challenges, polls, "look closer" prompts
7. **Social/Topical** - Breaking news, virality, controversy, case studies, authority

Frames can be combined (e.g., "Curiosity | Solution-Gap | Tiny Action" or "Emotion | Urgency + Sense-Making | Metaphor").

## Critical Rules

1. **Use only the user's copy blocks.** Never the examples from the reference material. The examples exist only to show technique. Never invent statistics, case study names, revenue numbers, or proof elements the user did not provide. If their copy blocks say "47 founders" and "$4.2M," use exactly those numbers.

2. **The email IS the deliverable.** The subject line, body, optional P.S., and CTA are the output. Do not add analysis sections, framework breakdowns, or explanations of why the email works. The user hired a copywriter, not a copy professor.

3. **65-200 words. No exceptions.** Count the body words. The subject line and P.S. are separate. If you're over 200, cut. Every word must tie back to a copy block. Ruthlessly cut anything that doesn't serve Promises, Pain, Proof, Constraints, or Curiosity/Mechanism.

4. **Never scratch the itch.** Don't explain the mechanism. Don't educate. Don't give enough information for the reader to feel satisfied. Tease it, intensify it, leave it unresolved.

5. **Never call it a sales message.** Don't say "sales page," "sales letter," "offer," or anything that puts the reader in a defensive frame. Frame the CTA as discovering, learning, or seeing something.

## Writing Rules

1. **Every word must tie back to a copy block.** Ruthlessly cut anything that doesn't serve Promises, Pain, Proof, Constraints, or Curiosity/Mechanism.
2. **Build to the CTA at peak tension.** Stack copy blocks to escalate the emotional itch, then place the call-to-action at the exact moment the tension is highest.
3. **Include a subject line.** It should use the selected copy frame to grab attention.
4. **Include a P.S. when it adds value.** Use it for a final emotional push or urgency play.

## How to Write the Email

1. Read the user's copy blocks carefully. Identify the strongest elements of each block.
2. Read `references/copy-frames.md` and find the specific sub-frame(s) the user requested. Understand the technique and what makes it work.
3. For detailed examples showing how frames and blocks combine into finished emails with analysis, read `references/example-breakdowns.md`.
4. Draft the email:
   - Open with the selected frame's hook technique
   - Weave in Pain and Promise to create emotional tension
   - Introduce the Curiosity/Mechanism as a teased, unnamed "secret" or "discovery"
   - Sprinkle Proof to build belief without over-explaining
   - Address one or two Constraints to preempt objections
   - Place the CTA at peak tension
5. Review: Is every sentence pulling its weight? Does any sentence scratch the itch? Cut it. Is it 65-200 words? Count again.

## Output Format

Deliver the email in this exact structure:

```
Subject: [subject line]

[email body - 65-200 words]

[CTA link text]

P.S. [optional P.S. if it adds value]
```

That's it. No analysis. No "Frame Used" section. No "Why It Works" breakdown. No "Copy Block Usage" audit. No "Tension Structure" commentary. The email speaks for itself.

If the user asks why you made specific choices or wants to understand the structure, then explain. But only when asked.

## Edge Cases

- If the user doesn't specify a frame, ask them which frame they'd like to use, and offer to help them choose based on their copy blocks.
- If the user provides incomplete copy blocks (missing one or more of the five), ask for the missing ones before writing.
- If the user asks for multiple variations, write each with a different frame or sub-frame approach.
