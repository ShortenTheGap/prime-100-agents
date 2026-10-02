---
name: content-alchemist
description: Transform your expertise into a scalable content machine using a 3-pillar content strategy. Use this skill whenever someone asks to create a content framework, content pillars, content categories, topic clusters, or wants help organizing their content strategy around their offer and audience. Also trigger when users mention "content alchemist," "content pillars," "content machine," "myths and mistakes content," or ask questions like "what content pillars should I have," "help me organize my content strategy," "I need a repeatable content framework," or "give me content categories for my business." This skill generates 3 strategic pillars, then breaks each into Myths, Mistakes, Stories, and Processes — creating 120+ targeted content ideas from a single persona and offer input.
---

# Content Alchemist

Transform your expertise into a scalable content machine. Distill your offer and audience into 3 strategic content pillars, then break each pillar into Myths, Mistakes, Processes, and Stories — creating a nearly endless stream of high-impact content ideas.

## Welcome

Greet the member as David in one line, then ask for the two things you need: (1) their ideal buyer persona (who they are, their goals, pain points, beliefs, and struggles) and (2) their offer (what it does, the problem it solves, and the transformation it provides). Take anything the Business Brain already answers from there, and ask only for what is missing, one question at a time.

Before asking for the persona, resolve the member's main team folder (the `path` in `.prime/base-team.json` if it exists, else a sibling `../my-ai-team/`, else the current folder) and use `Avatar/Ideal Buyer Profile.md` there as the ideal buyer persona. If it is absent, use the Content Engine's `01_ideal-buyer-persona.md` (in the active Business Brain, or in the main team's `clients/*/content-engine/` folders) instead. Tell the member which file you are using.

Wait for both inputs before proceeding. If only one is provided, ask for the other.

## Step 1: Generate 3 Content Pillars

Based on the persona and offer, identify 3 core content pillars. These are the foundational themes that everything else branches from.

Each pillar should:
- Directly connect the audience's pain/desire to the offer's transformation
- Be broad enough to sustain dozens of content pieces, but specific enough to feel focused
- Together, the 3 pillars should cover the full journey from the audience's current state to the offer's promised outcome
- Each pillar should be distinct — minimal overlap between them

**Present each pillar with:**
- A clear, concise name
- A 1–2 sentence description of what it covers and why it matters to the audience
- How it connects to the offer

## Step 2: Offer the Breakdown

After presenting the 3 pillars, ask:

> Would you like me to break down each pillar into content ideas? For each pillar, I'll generate:
>
> - **10 Myths** your audience believes that hold them back
> - **10 Mistakes** they make that prevent success
> - **10 Stories** they tell themselves that keep them stuck
> - **10 Processes** they're unconsciously running that sabotage progress
>
> That's 40 content ideas per pillar, 120 total. Want me to go?

If yes, proceed to Step 3. If they want only specific pillars or categories, do what they ask.

## Step 3: Break Down Each Pillar

For each of the 3 pillars, generate all 4 categories. Work through one pillar at a time to keep the output manageable.

### Myths (10 per pillar)

False beliefs the audience holds that prevent them from achieving the transformation. These are things the market accepts as true that are actually wrong or incomplete.

**What makes a good myth:**
- It's something the audience would defend if challenged
- It sounds reasonable on the surface but is actually limiting
- Busting it opens the door to the offer's approach
- Each myth should be specific enough to become a standalone post or video

### Mistakes (10 per pillar)

Actions the audience takes (or fails to take) that actively prevent success. These are behaviors, not beliefs — things they're doing wrong.

**What makes a good mistake:**
- It's something the audience does without realizing it's harmful
- It feels productive or safe to them but is actually counterproductive
- Naming it creates an "oh no, that's me" moment
- The correction naturally points toward the offer's methodology

### Stories (10 per pillar)

Narratives the audience tells themselves that keep them stuck. These are identity-level internal monologues — "I'm not the kind of person who..." or "That works for them but not for me."

**What makes a good story:**
- It's an internal narrative, not an external fact
- It protects the audience from taking action (it's a comfort blanket)
- It sounds like something they'd think at 2AM, not something they'd post publicly
- Challenging it forces a perspective shift

### Processes (10 per pillar)

Unconscious behavioral patterns the audience runs on autopilot that sabotage their progress. These are habitual loops — stimulus → response cycles they don't even notice.

**What makes a good process:**
- It's a pattern, not a one-time event
- The audience would recognize it if described but has never consciously named it
- It operates below awareness — they do it automatically
- Interrupting it is a prerequisite for the transformation the offer provides

## Formatting

- Number everything clearly within each category (1–10)
- Group by pillar, then by category within each pillar
- Each item should be a clear, concise statement — specific enough to become a content piece
- After completing each pillar, move to the next

## After the Full Breakdown

Once all 3 pillars are fully mapped, offer:

> You now have 120+ content ideas organized into a strategic framework. Would you like me to:
>
> - Turn any of these into a full social media post?
> - Prioritize which topics to tackle first based on audience impact?
> - Create a content calendar from these ideas?

## Edge Cases

- If the user's persona or offer is vague, ask clarifying questions before generating pillars — garbage in, garbage out
- If the user wants more or fewer than 3 pillars, adapt accordingly
- If they only want certain categories (e.g., "just myths and mistakes"), skip the others
