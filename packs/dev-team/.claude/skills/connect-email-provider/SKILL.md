---
name: connect-email-provider
description: Walk a member who does not use GoHighLevel through connecting their email provider (Mailchimp, Kit, ActiveCampaign, Klaviyo, Brevo, HubSpot, Constant Contact, MailerLite, AWeber, Keap, or any other) so David, their marketing agent, can reach it. Use whenever the member asks to connect, hook up, or link an email platform, email marketing tool, newsletter tool, or CRM that is not GoHighLevel, asks how David can see their email list or build in their email tool, or says "I don't use GoHighLevel." For GoHighLevel, send them to the GHL MCP card in Team & Tools instead.
---

# Connect an email provider (not GoHighLevel)

The member wants David to reach their email platform. GoHighLevel has its own card in the app; every other platform goes through this skill. You work for any provider, including ones you have never heard of. Talk the member through it in plain language, one step at a time, one question at a time.

**Punctuation:** never use an em dash or an en dash in any reply during this skill, even though your usual instructions use them. Use a comma, a period, a colon, or parentheses. Check each reply for them before you send it.

## Before you start

1. **Which platform?** Ask which email platform they send from, if they haven't said. If it's GoHighLevel, HighLevel, or LeadConnector, stop and say: "GoHighLevel has its own connection. Go to Team & Tools, find the GHL MCP card, and click Manage; it walks you through it in about two minutes." Then you're done: don't ask what they want to build.
2. **Set expectations in one line.** "I'll find the safest way to connect [platform] to David, set it up so nothing can send an email without you, and test it. About ten to fifteen minutes."

## Step 1: Find the connection (research, don't guess)

Look up the provider's current options on the web before you say anything about them. Never describe a provider's screens, plans, or connector from memory. Check, in this order, and stop at the first that fits:

1. **An official connector (MCP server) from the provider itself**, ideally a hosted one they sign into with their normal login (no key to paste). Confirm it on the provider's own site or docs.
2. **An official API plus a well-maintained open-source MCP server** for it: many users, recent updates, a known publisher, source you can read. Read its tool list and README before recommending it. Never pick an unknown package just because it's first in search results.
3. **No connector at all:** tell the member plainly, and offer two choices: "I can build a small connector for [platform] with my team, the same way we build anything else (about an hour, Standard build mode, read and draft only), or David can keep using a Build Sheet you paste into [platform] yourself." If they choose the build, run it as a normal Standard build: the connector lives in a folder inside this dev team folder, and the rest of this skill applies to it.

If the provider has no API at all, say so and point them back to David's Build Sheet. Don't invent a workaround.

Tell the member what you found in two or three sentences: which option, who makes it, and what it lets David do. Then ask one question: "Want me to set it up?" Stop and wait for their yes before Step 2. Never install anything or change settings on their computer in the same reply as your recommendation.

## Step 2: Access, safely

- **Prefer a sign-in (OAuth) connector** over a pasted key whenever one exists.
- **If a key is needed:** walk them to the provider's API key page using the provider's own current docs, and ask for the least access that works: read access plus creating drafts or templates. If the platform lets them create a key without send permission, have them do that.
- Tell them once: "Paste the key here. It stays on this computer. If you ever want to cut David off, delete the key in [platform] and it stops working instantly."
- Never write the key into any file inside a team folder (those folders can sync across their computers). Never repeat the key back in chat. Never save it to memory, the Business Brain, notes, or a commit.

## Step 3: Test the access before you install anything

Make one **read-only** call to the provider's API with the key (for example: account info, or the list of lists or audiences). Never call anything that creates, sends, schedules, or deletes. If it fails, read the error, tell the member in plain words what's wrong (wrong key, wrong region or data center, key lacks access), and fix it with them. Don't move on until the read works. For a sign-in connector, the test happens in Step 6 instead.

## Step 4: Install it for David

David's folder is the sibling folder `../my-ai-marketing-team` (resolve it to a full path first and confirm it exists; if it doesn't, stop and tell the member David isn't set up on this computer). Install the connector for **that folder only**, named after the provider in lowercase with no spaces (for example `mailchimp`, `kit`, `activecampaign`). This keeps the key in the computer's private Claude settings, not in a synced folder.

- **If a `claude` command works in your shell:** run `claude mcp add` from inside David's folder (local scope, the default), using the transport the connector's docs give (`--transport http` for a hosted connector; a command for a local one; the key passed as an `--env` or `--header` value exactly as its docs say).
- **If there's no `claude` command:** edit `~/.claude.json` directly (on Windows, `%USERPROFILE%\.claude.json`). First copy it to `~/.claude.json.bak-[today's date]`. Then, with a small script (not by hand), load the JSON, add the server under `projects["<David's full folder path>"].mcpServers.<name>` (create those keys if missing), keep every other key exactly as it was, write it back, and re-read it to confirm it parses. If anything fails, restore the backup and tell the member.

Only install it for Sue or the whole team if the member asks for that. Then use user scope (`claude mcp add -s user`, or the top-level `mcpServers` in `~/.claude.json`) and tell them every agent can now reach it.

## Step 5: Make sure nothing can send

Nothing David builds sends by default, and a connection must not change that. Read the connector's tool list (its docs or source). For every tool that sends, schedules, or triggers email or SMS to real people (send campaign, send email, schedule, trigger automation, activate or start a sequence or flow, add to an automation), add a deny rule to `permissions.deny` in David's `.claude/settings.local.json` (create the file if needed; keep anything already in it). Tool names are `mcp__<name>__<tool>`, for example `mcp__mailchimp__send_campaign`. If you can't tell whether a tool sends, deny it. Leave tools that only create or update drafts or templates allowed (and all read tools): David uses those to put emails in for the member, and he never fills a recipient or send time. A create tool that requires a list, recipients, or a send time counts as a sending tool.

Tell the member in one line which actions you blocked, and that they can ask you to unblock one later on purpose.

## Step 6: Hand off and verify

Connections load when a chat starts, so David's current chat won't see it. Say:

> [Platform] is connected to David. Open a new chat with David, then open the "…" menu and choose Connections: you should see [name] there, switched on. Ask David "what can you see in my [platform]?" and he'll list what he can reach. Anything that sends email is blocked, so nothing goes out without you.

If they come back and it isn't listed or David can't reach it: check the entry in `~/.claude.json` is under David's exact folder path, that they opened a **new** David chat, and that the connection isn't switched off under Connections. Then retest the key (Step 3).

## Rules

- Never send, schedule, or trigger anything in their platform yourself, even as a test.
- Never change their lists, contacts, or automations while connecting.
- Don't describe what David will build with it; that's David's job. Your job ends when the connection works and sending is blocked.
- If the member wants to disconnect: remove the server entry you added (same place), and tell them to delete the key in their platform too.
