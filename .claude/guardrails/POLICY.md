# My Guardrails

This file is yours. Edit it directly, or just tell Sue "set up my guardrails" and
she'll walk you through it.

## What's already on, whatever this file says

Sue stops and asks you before she:

- **Sends anything outside your business** — email, texts, posts, anything
  addressed to someone else.
- **Sends out client-confidential material** — if she'd already opened your
  client files or your inbox in that reply, the ask names what she read.
- **Deletes or overwrites anything**, or writes a file outside this folder.
- **Spends money.**

And she will never read your passwords and keys, even if you tell her to. There's
no approve button on that one, on purpose: by the time you saw the question the
password would already be in the chat, which is the leak.

**None of that is configurable, and nothing in this file can switch it off.** This
file only ever *adds*.

## What you can change

The block below is the part Sue reads. Four kinds of line:

- `confidential:` — a folder holding client material. Reading it stays free and
  won't interrupt you. Sending anything out *after* reading it will ask, and the
  question will name the folder.
- `never-read:` — a file Sue shouldn't open at all.
- `send-to:` — an address, or `@yourdomain.com` for everyone at your place. Sue
  writes to these without asking. Leave your clients off this list.
- `allow-bash:` — a command you're happy for Sue to run unprompted.

Paths are relative to this folder. No leading slash, no `..`. Anything Sue can't
understand is ignored and reported back to you in the Guardrails panel, so a typo
is never silently obeyed.

```guardrails-policy
# Your business brain's client and financial folders are already treated as
# confidential out of the box. Add your own below, one per line, e.g.:
#
# confidential: Transaction Files
# send-to: @yourfirm.com
```

An empty block is a perfectly good starting point. It means you're running on the
built-in protections, which is where everyone starts.
