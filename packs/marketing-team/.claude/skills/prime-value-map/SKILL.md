---
name: prime-value-map
description: Create a comprehensive content strategy by mapping your audience's journey from current state to desired state, then expanding that map into dozens of content ideas and ready-to-publish social media posts. Use this skill whenever someone asks to create a content strategy, content plan, content calendar, value map, customer journey map, or wants help generating content ideas for social media. Also trigger when users mention "value map," "content expander," "Prime value map," or ask questions like "what should I post about," "help me plan content for my audience," "I need content ideas," or "create a content strategy for my business." This skill covers the full pipeline from audience research to published posts across LinkedIn, Facebook, Instagram, and TikTok.
---

# Prime Value Map

Map your audience's journey, generate dozens of targeted content ideas, and turn them into ready-to-publish social media posts — all from a single buyer persona input.

## Welcome

Greet the member as David in one line, then ask for their ideal buyer persona (described, or a document) and any supporting documents or market research they have. Take anything the Business Brain already answers from there, and ask only for what is missing, one question at a time.

Wait for the inputs before proceeding. If there isn't enough detail about the target audience, ask follow-up questions to get clarity on the audience's problems, goals, and situation.

## Workflow Overview

This skill runs in 4 sequential steps. Each step builds on the previous one, and the user is offered the next step after each deliverable.

1. **Gather Inputs** — Collect the buyer persona and any supporting docs
2. **Value Map** — Map the audience journey from current state to desired state
3. **Content Expander** — Expand the map into dozens of specific content ideas
4. **Content Creator** — Turn selected ideas into platform-specific posts

---

## Step 1: Gather Inputs

Collect:
- **Ideal buyer persona** — who they are, what they struggle with, what they want
- **Supporting documents** — market research, customer data, existing personas (optional)

Before asking for the persona, resolve the member's main team folder (the `path` in `.prime/base-team.json` if it exists, else a sibling `../my-ai-team/`, else the current folder) and use `Avatar/Ideal Buyer Profile.md` there as the ideal buyer persona. If it is absent, use the Content Engine's `01_ideal-buyer-persona.md` (in the active Business Brain, or in the main team's `clients/*/content-engine/` folders) instead. Tell the member which file you are using. If the user has already created a buyer persona using the Prime Ideal Buyer skill or similar, they can paste or upload it directly. If they provide minimal info, ask for at least: who the audience is, their biggest problem, and the outcome they want.

## Step 2: Execute the Value Map

Read `references/value-map-prompt.md` and follow it to generate a comprehensive Client Value Map. The output must include all of these sections with bold headers:

**Current State (Point A):**
Detailed description of the ideal client's present situation — main problems, emotional state, and business/life challenges.

**Desired State (Point B):**
Vivid picture of the ideal client's ultimate goal state — transformed situation, emotional state, and achieved outcomes.

**Key Milestones:**
5 crucial milestones the client must reach to progress from Point A to Point B. For each milestone:
- A clear, concise title
- Why it matters in the client's journey
- 3 specific sub-topics or challenges within this milestone
- 3 types of valuable content that could address this milestone

**Transformation Summary:**
A paragraph summarizing how progressing through these milestones transforms the client's situation, emphasizing the journey from A to B.

**Content Strategy Overview:**
How the entire value map can be leveraged into a content strategy that demonstrates expertise and builds trust.

### After Delivering the Value Map

Always ask:

> Would you like to expand on these topics to generate a ton of content ideas?

If yes → proceed to Step 3. If no → ask what else they'd like help with.

## Step 3: Execute the Content Expander

Read `references/content-expander-prompt.md` and follow it to expand the value map into a massive list of content ideas.

For each sub-topic from the Value Map's Key Milestones, generate 10 deeper sub-sub-topics. That means 5 milestones × 3 sub-topics × 10 sub-sub-topics = up to 150 specific content ideas.

Each sub-sub-topic should:
- Tie into a pain point, desired outcome, belief, objection, emotion, or old promise the audience has been exposed to
- Address the most profound desires and fears of the target market
- Solve a specific, actionable problem
- Be thought-provoking and genuinely valuable

Number everything clearly for easy reference (e.g., "Milestone 1 → Sub-topic 2 → Idea 7").

### After Delivering the Expanded List

Always ask:

> Would you like to turn one of these topics into a social media post? Choose a platform:
>
> 1. **LinkedIn Post**
> 2. **Facebook Post**
> 3. **Instagram Caption**
> 4. **Short-Form Video Script** (TikTok, Reels, Shorts)

Wait for the user to select both a topic (by number) and a platform.

## Step 4: Execute the Content Creator

Read `references/content-creator-prompts.md` and follow the platform-specific guidelines to generate a fully written post or script.

The user selects a topic from the expanded list and a platform. Generate a ~300-word piece of content tailored to that platform's format and conventions.

All content must:
- Provide genuine value and detailed, actionable insight
- Include a clear, easy-to-understand example that showcases each tip
- Look like educational content (not a sales pitch)
- Invite the reader to check out the profile if they found it helpful

After delivering the content, offer to create another post from a different topic or for a different platform.

## Edge Cases

- If the user uploads a document instead of typing a persona, extract the relevant information and confirm before proceeding
- If the user wants to skip the Value Map and go straight to content ideas, explain that the map provides the foundation — but if they insist, work with whatever audience info they've provided
- If the user wants multiple posts at once, generate them sequentially
