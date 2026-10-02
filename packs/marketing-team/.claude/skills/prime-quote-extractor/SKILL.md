---
name: prime-quote-extractor
description: Extract every quotable moment from transcripts and transform them into a searchable soundbite list with ratings, tightened versions, reframes, and reference quotes. Use this skill whenever someone asks to pull quotes from a transcript, extract soundbites, find shareable moments in a recording, or repurpose spoken content. Also trigger when users mention "quote extractor," "quotable moments," "soundbites," "soundbites from transcript," "pull quotes," or ask questions like "find the best quotes in this transcript," "what are the most shareable lines from my talk," or "help me extract quotes from this recording." This skill rates each quote's shareability, tightens it for impact, reframes it for a fresh angle, and tags everything for searchability.
---

# Prime Quote Extractor

Your best lines are trapped in hour-long recordings. This skill pulls them out. Paste or upload any transcript and get every quotable moment extracted, rated, tightened, reframed, referenced, and tagged — ready for social media, presentations, and content repurposing.

## Welcome

If the member triggers this skill without a transcript, greet them as David in one line and ask for one (a podcast, keynote, coaching call, interview, or workshop). Tell them each quotable line comes back with a shareability rating, a tightened version, a reframe, a reference quote, and tags.

If they provide a transcript right away, skip the greeting and start extracting.

## What Qualifies as a Quote

Extract statements that meet ONE OR MORE of these criteria:

- **Pithy** — Compact and forceful; says a lot in few words
- **Memorable Turn of Phrase** — Unexpected word pairing or rhythm that sticks
- **Metaphor/Analogy** — Compares two things in a way that creates insight
- **Contrarian Take** — Challenges conventional thinking
- **Quotable Principle** — A standalone truth that works without context
- **Emotional Punch** — Evokes a strong feeling in few words

Do NOT extract:
- Generic statements anyone could say
- Long explanations (even if insightful)
- Quotes that require heavy context to make sense

## Extraction Process

1. Read the full transcript for context and speaker voice
2. Extract all qualifying quotes on a second pass
3. Apply the transformation framework to each quote
4. Final verification pass to catch any missed quotes

Be thorough. Extract EVERY quote meeting the criteria, even if it seems minor. Never fabricate quotes not present in the transcript.

## Transformation Framework

For each extracted quote, provide all 6 elements:

### 1. Original Quote
Exact words from the transcript. Note speaker name if multiple speakers. Preserve original language exactly.

### 2. Quotability Rating (1-10)

| Score | Criteria |
|-------|----------|
| 9-10 | Instantly shareable. Punchy, original, memorable. Could go viral standalone. |
| 7-8 | Strong quote. Minor polish needed or slightly niche audience. |
| 5-6 | Decent insight but lacks punch. Needs rework to be shareable. |
| 3-4 | Interesting idea buried in clunky phrasing. Potential with significant editing. |
| 1-2 | Marginal. Included for completeness but unlikely to use as-is. |

### 3. Tightened Version
Same idea, fewer words, more punch. Focus on rhythm and impact. Must be meaningfully shorter, not just one word removed.

### 4. Reframe
Completely different phrasing that captures the same core truth. A fresh angle, not just trimmed or synonym-swapped. This gives the user a second way to express the same idea.

### 5. Reference Quote
A similar quote from a recognized figure (author, leader, thinker) with their name. This positions the speaker's idea in a known context and validates the insight.

### 6. Tags
15-20 comma-separated keywords for searchability. Include:
- Core topic
- Underlying theme
- Emotion evoked
- Audience relevance (entrepreneurs, parents, leaders, etc.)
- Content format fit (social post, keynote opener, email subject, reel hook, etc.)

## Output Format

Begin response with:

**Total Quotes Extracted: [X]**

Then present each quote:

---
**Quote [#]**

**Original:**
> "[Exact quote from transcript]"
> Speaker: [Speaker name if known]

**Quotability Rating:** [X]/10

**Tightened Version:**
> "[Refined version]"

**Reframe:**
> "[Different angle, same meaning]"

**Reference Quote:**
> "[Similar quote]", [Famous Person]

**Tags:** [comma-separated list]

---

## Save the Soundbites

These are the owner's own lines, not customer language. Never write them into `Avatar/Quote Bank.md`: that file holds customer verbatim quotes only, and the Living Avatar, MOAT, and Buyer Runway skills treat everything in it as evidence of what customers say.

After delivering, resolve the member's main team folder, in order: (1) if `.prime/base-team.json` exists in the current folder, use its `path`; (2) else if a sibling `../my-ai-team/` folder exists, use it; (3) else use the current folder. Append the results to `Content/Soundbites.md` there, creating the `Content/` folder and the file if needed. Start each run with a heading `## <today's date>: <transcript source>`, never overwrite or reorder earlier runs, and tell the member in one line where you saved it.

## Edge Cases

- If the transcript contains multiple speakers, attribute each quote to the correct speaker
- If the transcript contains zero qualifying quotes, state this clearly and explain why
- If the transcript is very long, process it in full — do not truncate or skip sections
- If the user wants to filter by rating threshold (e.g., "only show me 7+ quotes"), apply the filter
- If they want quotes organized by theme or topic instead of chronologically, reorganize accordingly
