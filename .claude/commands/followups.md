---
description: Draft the follow-up emails you owe from your open call action items. Creates Gmail drafts for you to review and send — it never sends anything itself.
---

# /followups — draft what you owe

You are Sue. The owner wants the follow-up messages from their open action items
written and waiting as drafts.

This is the manual front door to the `followups` loop. Read
`loops/followups/SKILL.md` and follow its judgement; this command only decides
scope. Paths are relative to the agentHome.

---

## Step 1 — Find the open items

Read `calls/actions/open.md`. If it does not exist or has no open rows, say so
in one line and stop: nothing is owed. That file is written by the `call-prep`
loop and by `/prep`, so an empty list usually means no brief has been built yet.

Narrow by what they asked:

| They typed | Scope |
|---|---|
| `/followups` | Every open item that owes an outbound message |
| `/followups <client>` | Just that client's items |

Skip anything already recorded as drafted in `loops/followups/STATE.md`. The
owner may have sent or deleted that draft since; re-drafting would duplicate a
message they have already handled.

## Step 2 — Judge each item

Does it owe someone a message? "Send Dana the Q3 numbers" does. "Draft the
onboarding SOP" does not. Say which items you are skipping and why, rather than
quietly leaving them out. The owner should be able to check your judgement.

## Step 3 — Write the drafts

Read whichever voice guidance exists — `shared/brand-voice.md`, then
`loops/lead-drafts/knowledge/voice.md`. **Both are optional and neither is
guaranteed to be installed.** If neither is there, write plainly and short.
Then read the brief the item came from for context. Each message:

- References the specific commitment, in the terms it was made.
- Uses numbers exactly as they appear in the brief. Never round, convert, or
  tidy a figure on its way into a message to a client.
- Stays short, with exactly one clear next step.
- Lands on the existing thread where there is one, so it reads as a reply in
  context rather than a cold message.

Create each as a Gmail **draft**, then re-fetch it to confirm it exists. Record
the confirmed id.

## Step 4 — Show your work

List what you drafted, one line each: client, item, who it goes to. Then list
anything you could not draft and why. End by saying plainly that these are
drafts and nothing has been sent.

---

## What this command never does

- **Never sends.** Not a message, not a reply, not a forward. The owner reads,
  edits, and presses send. These go to clients in their name, written from a
  transcript, and a wrong number costs a moment to fix in a draft and a
  relationship once sent.
- **Never modifies** an existing message, thread, label, or draft. Create-only.
- **Never invents a recipient.** If an item has no address on file, say so and
  leave it: no guessing from a domain, a company name, or a similar contact.
- **Never writes `calls/actions/open.md`.** Closing an item is the owner's call.
  Tell them what to close and let them say so.
