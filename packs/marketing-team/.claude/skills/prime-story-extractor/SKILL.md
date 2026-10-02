---
name: prime-story-extractor
description: Extract every story, anecdote, and partial anecdote from transcripts, then rate, summarize, and tag each one into a searchable story library. Use this skill whenever someone asks to pull stories from a transcript, find anecdotes in a recording, build a story bank, catalog their best stories, or analyze storytelling quality in spoken content. Also trigger when users mention "story extractor," "extract stories," "story bank," "find anecdotes," "catalog stories," or ask questions like "what stories did I tell in this talk," "help me find the anecdotes in this transcript," or "rate the storytelling in my keynote." This skill identifies every narrative moment, rates storytelling quality, flags missing lessons, and tags everything for searchability.
---

# Prime Story Extractor

Turn coaching calls and keynotes into a searchable library of stories. Extract, rate, and tag every anecdote so you never lose a good story again.

## Welcome

If the member triggers this skill without a transcript, greet them as David in one line and ask for one (a coaching call, keynote, podcast, workshop, or interview). Tell them each story comes back with a title, a summary, the exact text, its lesson, a storytelling rating, and tags.

If they provide a transcript right away, skip the greeting and start extracting.

## What Qualifies for Extraction

### Story / Anecdote
A narrative describing a specific event or experience with identifiable elements (who, what, when, where) used to illustrate a point. Has characters, a sequence of events, and a takeaway.

### Partial Anecdote
A brief mention of an experience lacking full development but still illustrating a point. May reference a specific moment without telling the full story.

**Extract EVERY narrative, regardless of length or apparent significance.** Completeness is critical — miss nothing.

Do NOT extract:
- Abstract principles or frameworks without a narrative anchor
- Lists of advice with no story attached
- Hypothetical scenarios that aren't based on real events

## Extraction Process

1. Read the full transcript once for context and speaker voice
2. Extract every story, anecdote, and partial anecdote on a second pass
3. Analyze each extraction using the framework below
4. Final verification pass to confirm nothing was missed

## Analysis Framework

For each extracted story/anecdote, provide all 7 elements:

### 1. Title
3-5 words capturing the essence of the story.

### 2. Summary
1-2 sentences describing what happens in the story.

### 3. Full Text
Exact quote from the transcript. Preserve original language completely. If the story spans multiple paragraphs, include all of it.

### 4. Lesson
One sentence. If the speaker states the lesson explicitly, use their exact words. If not, write: **"LESSON MISSING: [your suggested lesson based on context]"**

This distinction matters — it tells the user which stories need a clearer takeaway when retold.

### 5. Storytelling Rating (1-10)

| Score | Criteria |
|-------|----------|
| 9-10 | Complete narrative arc, specific details (names, dates, dialogue), emotional resonance, clear stakes, memorable |
| 7-8 | Strong structure, good details, clear point, minor gaps in specificity or emotional impact |
| 5-6 | Functional story, makes the point, but lacks vivid details or emotional hook |
| 3-4 | Partial anecdote — missing multiple elements (time, place, characters, dialogue, stakes) |
| 1-2 | Mere reference to an experience with almost no narrative development |

### 6. Rating Explanation
2-3 sentences identifying specific strengths and weaknesses. For ratings below 5, explicitly name the missing elements (e.g., "Missing: specific dialogue, time anchor, emotional stakes").

### 7. Tags
20-30 comma-separated keywords for searchability. Include:
- Explicit topics mentioned in the story
- Implicit themes (e.g., "parenting" even if the word isn't used)
- Emotions evoked (vulnerability, humor, determination, etc.)
- Business concepts illustrated (leadership, sales, delegation, etc.)
- Audience relevance (entrepreneurs, leaders, parents, coaches, etc.)
- Content format fit (keynote opener, social post, case study, email story, etc.)

## Output Format

Begin response with:

**Total Stories/Anecdotes Identified: [X]**

Then present each extraction:

---
**Story [#]: [Title]**

**Summary:** [1-2 sentences]

**Full Text:**
> [Exact transcript excerpt]

**Lesson:** [1 sentence]

**Storytelling Rating:** [X]/10

**Rating Explanation:** [2-3 sentences]

**Tags:** [comma-separated list]

---

## Save the Story Bank

After delivering, resolve the member's main team folder, in order: (1) if `.prime/base-team.json` exists in the current folder, use its `path`; (2) else if a sibling `../my-ai-team/` folder exists, use it; (3) else use the current folder. Append the results to `Content/Story Bank.md` there, creating the `Content/` folder and the file if needed. Start each run with a heading `## <today's date>: <transcript source>`, never overwrite or reorder earlier runs, and tell the member in one line where you saved it. These are the owner's own stories: never write them into `Avatar/` files, which hold customer evidence only.

## Edge Cases

- If multiple speakers are present, note who is telling each story
- If the transcript contains zero stories, state this clearly and explain why
- Never fabricate stories not present in the transcript
- If the transcript is very long, process it in full — do not truncate or skip sections
- If the user wants stories filtered by rating (e.g., "only 7+ stories"), apply the filter
- If they want stories grouped by theme instead of chronologically, reorganize
