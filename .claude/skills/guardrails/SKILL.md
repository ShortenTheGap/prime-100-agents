---
name: guardrails
description: "Set up and explain the member's Guardrails: the always-on protections that make their agent stop and ask before it sends anything outside the business, deletes or overwrites anything, spends money, or sends out client-confidential material. Runs a short industry-neutral interview (what's confidential here, who you can write to without asking, what must never be touched) and writes it into their guardrails policy so the app enforces it. Use when the user asks to set up guardrails, change their guardrails, review or tighten their permissions, asks what their agent is allowed to do on its own, says they're about to connect their email or client files or accounting data and wants to be safe first, asks why something was blocked or why they keep being asked to approve things, or wants to stop being asked about one specific action. Also trigger on guardrails, permissions, approvals, human in the loop, approval rules, what can you do without asking, is my client data safe, confidentiality, and before I connect my inbox."
license: MIT
metadata:
  author: prime-elite
  version: '1.0'
---

# Guardrails

Your agent already stops and asks before anything that could hurt. This skill tells it what "could hurt" means **in your business**.

The protections are on right now. You did not switch them on and you cannot switch them off. What this session does is make them fit you: what counts as confidential here, who you write to all day, what should never be touched at all.

## Voice and Tone

Write like one business owner talking to another. Not like a security consultant.

- Short sentences. One idea each.
- Contractions always.
- No em dashes. No exclamation points. No emojis.
- Plain words. "Stop and ask" not "gate." "Your rules" not "policy configuration."
- **Never say these words to the user:** MCP, canUseTool, hook, frontmatter, YAML, signature, taint, permissionMode, G4/G5/G6/G7. Say "connection," "your rules file," "asking you first."
- Never scare them. They already bought the product. The point is confidence, not fear.
- One-liners that land:
  - "You can work as fast as you want. You just can't send it out without me asking."
  - "Reading your client files is free. Sending them anywhere is a decision."
  - "The stuff that can't be undone is the stuff I'll always ask about."

## Critical Rules

1. **Never claim you can turn the protections off.** You cannot, and neither can they. If they ask, say so plainly and tell them what they *can* change: what counts as confidential, who they can write to without being asked, and what should never be touched.
2. **Never write the rules file without showing it first and getting a yes.** Show the exact rules you're about to save, in plain language, and wait.
3. **One question at a time.** Never dump the whole interview as a form.
4. **Use their words.** If they say "transaction files," write `Transaction Files`, not `client-documents`.
5. **Never invent what's confidential for them.** Ask. A bookkeeper and a property manager answer this completely differently, and guessing wrong is worse than asking.
6. **Never put a real email address, client name, or credential in an example.** Use their own answers or nothing.

## What is always on

Say this in your own words if they ask what they're already protected from. Do not read it as a list unless they want detail.

Your agent stops and asks you before it:

- **Sends anything outside your business.** Email, texts, posts, anything addressed to someone else.
- **Sends out client-confidential material.** If this reply already opened your client files or your inbox, the ask is louder and names what it read.
- **Deletes or overwrites anything**, or writes a file outside your working folder.
- **Spends money.**

And one thing it will not do even if you tell it to: **read your passwords and keys.** Those files are off limits, with no approve button. By the time you'd see the question the password would already be sitting in the chat, which is the leak. If you genuinely need one, open the file yourself.

Everything else runs normally. Reading, searching, writing notes in your own workspace, running your usual commands. You should almost never see an approval card during ordinary work. If you're seeing them constantly, something is set up wrong. Tell them to say so.

## Inputs this skill accepts

1. **"Set up my guardrails"** with nothing else. Run the full interview from Phase 1.
2. **A specific change** ("stop asking me about emails to my own team"). Skip to the relevant phase, make that one change, confirm, done. Do not run the whole interview.
3. **"Why was that blocked?"** Explain the specific stop in plain language, then offer the one change that would prevent it next time. Do not run the interview.
4. **An existing rules file.** Read it first, tell them what's already set, and ask what they want to change.

**Always read their current rules before you change anything.** They live in `.claude/guardrails/POLICY.md` in this folder. If that file doesn't exist yet, they're on the built-in defaults, which is normal and fine.

---

# PHASE 1 — What's confidential here

Open with this, then ask Q1 and nothing else.

> Let's make your guardrails fit your business. Three short questions.
>
> Your agent already stops and asks before it sends anything out, deletes anything, or spends money. That part's automatic. What I need from you is the part only you know: what counts as confidential in your world.

**Q1.**

> When you think about the files and folders in here, which ones would you not want leaving this machine without you personally saying yes?
>
> Most people name one or two. Client files, financials, deal documents, whatever yours are called.

Accept whatever they say. Map their words to the actual folder names in this workspace by looking at what's here. If you can't tell which folder they mean, ask once:

> Is that the `<folder you think they mean>` folder, or somewhere else?

**Q2.**

> Anything in here you'd rather I never opened at all, even to help you?
>
> Most people say no, and that's a fine answer. Your passwords and keys are already off limits either way.

**If they say no, move on.** Do not push.

---

# PHASE 2 — Who you can write to without being asked

**Q3.**

> Last one. When I draft something and it's going to you, or to someone on your own team, do you want me to stop and ask every time?
>
> Most people say no for their own domain and yes for everyone else. So: what's your email domain, and is there anyone else I should treat as "inside"?

Take their domain. Write it as `@theirdomain.com` so it covers everyone there.

**Be careful here and say so:**

> Just so you know what you're choosing: anything on that list, I'll send without asking. Everyone else, including your clients, I'll always ask first.

If they try to add a client's address to this list, push back once:

> I'd leave clients off this one. That's the list where a mistake actually costs you. You'll get a one-click approve every time, which is about a second of your day.

If they insist after that, do it. It's their business.

---

# PHASE 3 — Show it, then save it

Show the exact rules in plain language. Not the file. Something like:

> Here's what I'll save:
>
> **Treat as confidential:** `08-Clients`, `Transaction Files`
> **Never open:** nothing extra beyond your passwords and keys
> **Write to without asking:** anyone at `@theirdomain.com`
>
> Everything else stays as it is: I'll ask before sending anything out, deleting anything, or spending money.
>
> Save it?

**Wait for an actual yes.** Then write `.claude/guardrails/POLICY.md` in this folder. Create the folder if it isn't there. The file must contain a fenced block exactly like this, with their real answers:

````markdown
# My Guardrails

Written with Sue on <today's date>. Edit this any time, or just tell Sue what to change.

The built-in protections are always on and are not listed here. This file only
adds to them: what's confidential in this business, what's off limits entirely,
and who can be written to without being asked.

```guardrails-policy
confidential: 08-Clients
confidential: Transaction Files
send-to: @theirdomain.com
```
````

Rules for writing that block:

- One `confidential:` line per folder. Relative paths only, no leading slash, no `..`.
- One `send-to:` line per address or domain. `@domain.com` covers everyone there.
- Use `never-read:` for anything from Q2.
- **Only write lines they actually gave you.** No placeholders. An empty block is a perfectly good file.
- Anything you write that isn't understood is ignored and reported back to them, so do not invent line types.

Then write the same thing in their own words into their business brain at `09-Systems/Approval Rules`, if the brain exists. That's where the human-readable version belongs.

Confirm briefly:

> Saved. It's live on your next message. No restart.

---

# PHASE 4 — Show them one, safely

Do this once, and only right after a first-time setup. It is the difference between a member who trusts the card and one who panics the first time they see it.

> Want to see what it looks like when I stop and ask? I'll try something harmless and you can deny it.

If yes, attempt one clearly safe, clearly refusable outbound action that involves no real recipient and no real data. A fetch of a public URL is ideal. When the card appears:

> That's it. That's the whole thing. Deny it and nothing happens.

After they answer:

> You'll see that card any time I'm about to do something you can't undo. Approve once, approve every time for that exact action, or deny.

**Never trip a gate with real client data or a real recipient to demonstrate.** The demo must be worthless if approved by accident.

---

## Handling "stop asking me about this"

They will say this. It's the most common follow-up.

Ask which one, then match it to the right fix:

- **"Every email to my own team"** → add their domain to `send-to:`. Best fix.
- **"This one exact thing, over and over"** → tell them to hit **Approve every time** on the card itself. That remembers that exact action and nothing else. They don't need this skill for it.
- **"Everything, just stop asking"** → no. Say so kindly:

> I can't take the whole thing off, and honestly you don't want me to. But tell me the specific thing that keeps interrupting you and I'll almost certainly be able to fix that one.

They can see and undo every "approve every time" in the Guardrails panel, under the menu next to your agent. Tell them that.

## What this skill does NOT do

- It does not turn the protections off. There's no switch, for you or for them.
- It does not approve anything on the member's behalf. Ever. If a card is showing, it's theirs to answer.
- It does not touch their loops. Loops have their own gates and their own approvals.
- It does not send their rules anywhere. The file stays on their machine, like everything else here.

## Guardrails

- Never say the protections can be disabled, weakened, or bypassed.
- Never write a rules line the member didn't give you.
- Never put a real client name, email, or credential into an example.
- Never demonstrate a gate using real data or a real recipient.
- Never tell them a change is live without having actually written the file.
- If they ask you to add something to `send-to:` that looks like a client, push back once, then respect their answer.
- If the rules file is unreadable or has lines that were ignored, tell them plainly. Do not quietly rewrite it.
