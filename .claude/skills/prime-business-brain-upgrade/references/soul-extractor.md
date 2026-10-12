# Stage 3 Reference: The Soul Extractor

## What This Stage Produces

A Soul File saved as `03_soul-file.md`. The Soul File is a 6-layer
document that captures how the operator actually thinks and talks, so
AI can produce content in their voice from now on.

The 6 layers:

1. Voice DNA (signature phrases, sentence patterns, rhythm, personality
   tells)
2. Story Library (every story they tell, with key beats and reusability
   scores)
3. Framework Library (named and unnamed frameworks they use)
4. Proof Stack (specific numbers, names, results)
5. Banned Phrases (what they never say, plus AI tells to strip)
6. Soulprint Summary (5-sentence compression of their whole voice)

## Required Before Starting

The operator must have `01_ideal-buyer-persona.md` and
`02_stand-file.md` locked. Load both before starting.

## The Two Paths

The operator chooses one of two paths based on what they have. ALWAYS
present both paths at the start. Don't assume which one they want.

```
You've got two ways to do this. Pick one:

──────────────────────────────────────────────
PATH A: Give me content you've already made.
──────────────────────────────────────────────
Best if you've got a podcast, sales call recording, keynote, Loom,
voice memo, or a body of written content. You can:
- Drop a transcript file into this folder (txt, md, pdf)
- Paste spoken-origin text directly into chat
- Paste a URL to a specific video, podcast, or article
- Export your LinkedIn posts, blog, or newsletter and drop the
  file here

Minimum: 20 minutes of spoken material, or 3,000+ words of
spoken-origin writing.

Tell me: "Path A. Here's my source."

──────────────────────────────────────────────
PATH B: Let me interview you.
──────────────────────────────────────────────
Best if your existing content is ghostwritten, AI-edited, or thin.
12 questions, 45-60 minutes. Answer out loud into a voice memo and
paste the transcription, or type long-form answers. Spoken beats
typed.

Tell me: "Path B. Interview me."

Which path?
```

Note: there's no OAuth connection option in this environment. If the
operator asks to "connect" their YouTube or Gmail, redirect them to
Path A: export or paste the content instead. For YouTube, the fastest
route is pasting the transcript from the video's transcript panel.

### Path A Process

1. Ingest the capture source. If it's a URL, fetch it. If fetching
   fails (common with YouTube), ask the operator to paste the
   transcript directly.
2. Sanity-check the corpus with the slop filter
   (`references/slop-filter.md`). If the corpus scores SMELLY or SLOP,
   warn the operator: their existing content is already AI-tinted and
   will produce a weak Soul File. Recommend Path B instead.
3. Confirm the corpus meets the minimum (20 minutes spoken or 3,000+
   words spoken-origin).
4. Run the 6-layer extraction below.

### Path B Process

1. Ask the 12 questions below, one at a time. Wait for each answer
   before asking the next. NEVER dump all 12 at once.
2. Encourage voice-recorded answers transcribed and pasted in. Typed
   answers are acceptable but flag that spoken answers produce a
   stronger Voice DNA layer.
3. The aggregated 12-answer corpus becomes the capture source.
4. Run the 6-layer extraction below.

## The 12 Interview Questions (Path B Only)

Ask in this exact order.

### Voice DNA Questions

**Q1:** "Walk me through what you do, like you're explaining it to a
peer at a dinner party who's just asked. Don't pitch. Don't sell. Just
describe."

**Q2:** "Tell me about a moment in the last 12 months when you saw
someone in your space do the 'right' thing and watched it fail.
Describe what they did and what happened."

**Q3:** "Describe your most annoying customer type. The one who shows
up, frustrates you, and shouldn't have hired you. What do they say?
What do they want? What do they get wrong?"

### Story Library Questions

**Q4:** "What's a story you've told at least three times in the last
six months because it lands every time? Tell it now."

**Q5:** "Tell me about the moment you knew this work was your work.
The specific moment, the specific room, the specific thing that
happened."

**Q6:** "Tell me about a client win that surprised even you. Not the
predictable success. The one that made you say 'oh damn, this actually
works.'"

### Framework Library Questions

**Q7:** "When you explain what you do to a smart 12-year-old, what
analogy do you use? What metaphor? What comparison?"

**Q8:** "When a client is stuck, what's the first question you ask
them? What's the second?"

**Q9:** "What's the one thing you say to clients that they always
write down? The line that becomes a Post-it on their monitor?"

### Proof Stack Questions

**Q10:** "Give me three specific results from clients in the last
year. Real numbers. Real names if you can. No rounding, no 'hundreds
of clients' or 'massive growth.' Specific."

**Q11:** "What's a number from your own business you're quietly proud
of? Not the one you put on your website. The one you'd mention to a
peer over a drink."

### Worldview Question

**Q12:** "If you could fix one thing about the way operators in your
space approach this work, what would it be? Not a tactic. A
fundamental thing. Rant for 3 minutes."

## The 6-Layer Extraction Process

Regardless of which path delivers the capture source, the extraction
is the same.

### Layer 1: Voice DNA

Extract from the corpus:

- **Signature Phrases**: 5-10 phrases the operator repeats
- **Sentence Patterns**: Typical sentence length, common openers,
  structural tics (fragments, contractions, mid-sentence pivots)
- **Tone Markers**: Specific quoted lines showing tone
- **Energy Words**: Verbs and adjectives that recur
- **Rhythm Profile**:
  - Average sentence length
  - Ratio of short to long sentences
  - Fragment usage (yes/no/sometimes)
  - One-sentence paragraph usage (yes/no/sometimes)
  - Tangent tendency (high/medium/low)
  - Parenthetical usage (yes/no/sometimes)
  - Contractions (always/sometimes/never)
  - Mid-sentence self-corrections (yes/no)
- **Personality Tells**:
  - Self-deprecation frequency
  - Direct opinion-stating without hedging (yes/no)
  - Curse words (which ones, how often)
  - Cultural references (what kind)
  - Confessions of uncertainty (yes/no)

### Layer 2: Story Library

For each distinct story the operator tells:

- Story title
- Key beats (3-5 bullets)
- Reusability score (1-10)
- What it proves
- Best platforms for retelling

### Layer 3: Framework Library

- Named frameworks (with definitions)
- Unnamed frameworks (recurring patterns the operator uses without
  naming)
- Analogies and metaphors that recur
- Diagnostic questions they ask repeatedly

### Layer 4: Proof Stack

- Every specific number mentioned (with context)
- Every specific name mentioned (with context)
- Every specific result mentioned (with context)
- Quiet proof points (numbers from their own business)
- Flag any generic claims that need replacement with specifics

### Layer 5: Banned Phrases

- Phrases the operator says they never use
- AI tells found in the corpus (run the slop filter to detect)
- Words the operator visibly avoids (look for synonyms used instead)

### Layer 6: Soulprint Summary

A 5-sentence compression of the operator's full voice and worldview.
This becomes the system-prompt load for all future content generation.

Structure:

- Sentence 1: Who they are and what they do (one line)
- Sentence 2: How they talk (rhythm, tone, signature move)
- Sentence 3: What they believe (core worldview)
- Sentence 4: What they refuse to do (banned moves)
- Sentence 5: The line that captures their whole brand in a phrase

Copy the Soulprint Summary into the index note once the Soul File is
locked.

## Output Structure

`03_soul-file.md` opens with one line: "This Soul File is calibrated
to [the ideal buyer](./01_ideal-buyer-persona.md) and
[the Stand](./02_stand-file.md)." Then the 6 layers, each under its own
header, with direct quotes from the corpus wherever possible.

## Stage 3 Rules

1. Never generate a Soul File from less than 20 minutes of source
   material or 3,000 words of spoken-origin writing.
2. Always sanity-check Path A sources with the slop filter. SMELLY or
   SLOP corpus → recommend Path B.
3. Never invent voice patterns. Only capture what's actually in the
   corpus.
4. In Path B, ask the questions one at a time. Don't dump all 12.
5. After extraction, run the Soul File output through the slop filter
   to verify the extraction didn't add tells.
6. The Soulprint Summary (Layer 6) is non-negotiable. Every Soul File
   ends with it.
7. Save with the frontmatter and relative-markdown-link format defined in SKILL.md.
