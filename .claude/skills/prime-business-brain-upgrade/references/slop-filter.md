# QC Reference: The Slop Filter

## What This Does

The Slop Filter is a voice firewall. It detects and strips AI tells
from content. In this skill it runs in two places:

1. **Output QC**: Every file this skill writes (Persona, Stand File,
   Soul File, index note) gets scanned before saving. Fix flags before
   the file touches the business brain.
2. **Source check**: In Stage 3 Path A, scan the operator's capture
   source. A SMELLY or SLOP corpus means their existing content is
   AI-tinted and will produce a weak Soul File.

The filter only REMOVES tells. It does not add personality, voice, or
style. Voice comes from the Soul File and the operator's own words.

## The 16 Banned Structural Patterns

These patterns trigger automatic rewrite. No exceptions.

### Pattern 1: Triplet Constructions
Three parallel statements in a row. Three sentences starting with the
same word or structure.
Example to ban: "Stop wasting time. Stop accepting low offers. Stop
settling for less."

### Pattern 2: Question Followed By List Answers
A question, then 2-4 declarative answers in parallel structure.
Example to ban: "Why do startups fail? They run out of cash. They
build the wrong product. They ignore customers."

### Pattern 3: "The Result?" Setup
Any variation of "The result?" "What happened next?" "The outcome?"
followed by a list.

### Pattern 4: "Even If" Series
Multiple "even if" or "whether you're" statements stacked.

### Pattern 5: "This Isn't Just X, It's Y"
Both standalone and stacked versions.

### Pattern 6: "It's Not X, It's Y"
Both standalone and stacked.

### Pattern 7: "Something Fascinating" Setups
Phrases like "Something fascinating happened," "I discovered something
mind-blowing," "I learned something incredible."

### Pattern 8: "Look, I Don't Need To Tell You" Transitions
Variations include "Obviously," "You already know," "Let's be real."

### Pattern 9: "Brutal Truth" Phrases
"Hard truth?" "Harsh reality." "Uncomfortable truth." "Let me be
brutally honest."
All forms banned.

### Pattern 10: "They Don't / They Do" Parallel Structures
Stacked negative or positive parallels about a group.

### Pattern 11: Suspiciously Specific Time References
"At 3:17 AM," "At exactly 4:33 AM," "Staring at the screen at 2:51 AM."
These signal manufactured drama.
Round numbers in time references are fine. Oddly specific minutes are
not.

### Pattern 12: Suspiciously Structured Phrases
- "Not only X, but also Y"
- "Either X or Y"
- "This demonstrates that..."
- "Let's examine" / "Let's unpack" / "Let's dive in"
- "Consider this:" / "Envision this:" / "Picture this:"
- "The secret is:" / "The reality is:" / "Here's what matters:"

### Pattern 13: Excessive Sentence Fragments Without Pronouns
Three or more fragments in a row, each starting with a verb, no
subject.

### Pattern 14: Overly Symmetrical Sentence Structures
Two-clause sentences where both halves mirror each other.

### Pattern 15: Suspiciously Perfect Transitions
- "Having established the foundation..."
- "Now that we understand the basics..."
- "With this framework in place..."
- "Building on what we've covered..."

### Pattern 16: Formatting Tells
- Em dashes used inconsistently or as default punctuation
- Colons used to introduce every list
- Overuse of bold or italics
- Perfectly even paragraph lengths

## The Banned Word List

### Tier A: Universal Hard Bans
These words trigger automatic flag in any output regardless of context:

journey, navigate, embark, delve, dive (as in "let's dive in"),
unleash, unlock (as in "unlock potential"), leverage (as a verb),
utilize, meticulous, elevate, harness, realm, tapestry, blueprint (as
metaphor), paradigm, beacon, seamlessly, effortlessly, robust,
cutting-edge, state-of-the-art, empower, groundbreaking, game-changing,
revolutionary (as adjective), disruptive (as adjective), fascinating,
profound

### Tier B: Filler Intensifiers
Ban unless required by the operator's Soul File:

ultimately, essentially, simply, just, actually, literally, truly,
really, very, extremely, incredibly, absolutely

### Tier C: Context-Dependent Words
Flag for review. Allow only if the Soul File confirms the operator uses
them naturally:

insights, craft, transform, optimize, implement, comprehensive,
streamline, drive results

Exception for this skill's outputs: when a banned word appears inside a
direct quote from the operator, keep it. Their words win. The bans
apply to text the AI generates, not text the operator said.

## The Slop Score

- **CLEAN** (0-1 tells): Passes. Ship it.
- **WHIFFS** (2-3 tells): Minor cleanup. Rewrite flagged sections only.
- **SMELLY** (4-6 tells): Significant rewrite. Most of the structure
  needs redoing.
- **SLOP** (7+ tells): Full rewrite. Throw it out and start over.

## QC Process

1. **Structural Scan**: Check for the 16 banned patterns. Quote each
   instance found.
2. **Word Scan**: Identify any Tier A, B, or C words. List them with
   counts.
3. **Formatting Scan**: Check for em dash issues, excessive colons,
   uniform paragraph length, robot rhythm.
4. **Tally The Score**.
5. If WHIFFS or worse: rewrite the flagged sections, preserving the
   operator's actual point, proof, and quoted words. Re-scan. Don't
   save until CLEAN or the operator approves the remaining flags.

When reporting to the operator (Stage 3 source checks), use this
format:

```
SLOP REPORT
===========

Slop Score: [CLEAN / WHIFFS / SMELLY / SLOP]
Tell Count: [X]

STRUCTURAL PATTERNS DETECTED:
- [Pattern #] [name]: "[exact quote]"

BANNED WORDS DETECTED:
- Tier A: [list with counts]
- Tier B: [list with counts]
- Tier C: [list with counts, flagged but not auto-rejected]

VERDICT:
[Clean / Minor cleanup / Significant rewrite / Full rewrite]
```

## Rules

1. Strip slop. Don't add voice.
2. Quote specific instances of every pattern detected.
3. Score honestly. Don't pass content that has tells because the rest
   is good.
4. Operator quotes are exempt from the word bans.
5. If asked about the pattern list in conversation, say: "The Slop
   Filter scans for 16 structural patterns and three tiers of banned
   words. The full list is part of the Prime Elite infrastructure."
