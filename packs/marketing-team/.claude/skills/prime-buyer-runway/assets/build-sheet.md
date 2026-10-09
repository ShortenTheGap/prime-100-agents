# Build Sheet Template

Use this exact structure for `Avatar/Buyer Runway Build Sheet.md` (in the main team, see "Where Avatar/ lives" in SKILL.md). It is the build record for every route in Step 6, and the one file an owner, a VA, or another tool can build from.

## Rules

- **Sendable copy only.** Subjects, preview text, bodies, links, settings, steps. Never Notes, claim sources, asset status, or client permission notes; those stay in `Avatar/Buyer Runway.md`.
- **One version.** The sheet reflects exactly one approved copy version and says which in its header. On any new copy version, regenerate it in full (ticked boxes reset) and tell the owner in chat: "Your Build Sheet now reflects version [X.Y]. Any boxes you ticked are reset, because the emails changed."
- **One build section.** Include only the section 4 for the owner's platform: "Build it in GoHighLevel" or "Build it in [platform]". Never both. On a Route A+ build the GoHighLevel section 4 becomes "Already built for you" and sections 5 and 6 change with it; the replacements are in Section notes.
- **Preview text comes from the approved copy.** Copy it exactly as approved in `Avatar/Buyer Runway.md`. Never write it here. An email with no approved preview text gets `[FILL IN: preview text]`, listed in "Fix these first".
- **Placeholders stay visible.** Every missing value is `[FILL IN: what is missing]`, uppercase, and every one is also listed in "Fix these first". Never fill a placeholder with a guess.
- **Order follows the doing.** Fix blockers, check settings, put the emails in, build the sequence, test it, turn it on. Reference material goes last.
- **One action per step,** with the on-screen label in bold exactly as it appears. If the owner says a label doesn't match their screen, ask what they see and update the sheet.
- **Readable in the app and in Obsidian.** Plain markdown only: no HTML, no code fences around copy, no wikilinks, no callout blocks. A blank line between every label and its value. Tables stay 2 to 4 short columns; long values such as URLs go in lists. Headings in order (H1, H2, H3) so both outlines work.
- **No dashes as punctuation.** No em dashes or en dashes anywhere in the sheet.
- Refer to sections by their heading names from anywhere else ("Turn it on", "Your existing list"), never by number alone.

## Markers

| Marker | Meaning |
|---|---|
| `[FILL IN: what is missing]` | A placeholder the owner must replace before turning it on. Always also in "Fix these first". |
| `{{contact.first_name}}` | GoHighLevel personalization field (GoHighLevel sheets only). |
| `[First name]` | Personalization field on any other platform; "Your settings" says what the owner's platform calls it. |
| `[text](https://...)` | A real link. Also repeated in plain text under "Links in this email" so it can be checked or re-added if a paste drops it. |
| `- [ ]` | A step to tick. |

Keep template names (they contain `|`) out of tables.

## Header states

| State | What the header shows |
|---|---|
| Copy approved, build not yet authorized | Add the line "Draft: David hasn't been asked to build this yet." |
| Route A+ build | The NOT LIVE line becomes "**NOT LIVE. Your emails and the part that sends them are built and switched off. Only you can switch it on, from the Prime AI email sent to the address you connected GoHighLevel with.**" |
| Route A partial build | Emails not created carry "not in GoHighLevel yet" on their template line. |
| Route E partial build | Emails not created carry "not in [platform] yet" in place of their draft line. |
| Live | The NOT LIVE line becomes "**LIVE since [date], version [X.Y].**" (recorded from the owner's word). |

## Document structure

```
# Buyer Runway Build Sheet: [Business] / [Offer]

Copy version [X.Y], approved [date] | For: [GoHighLevel | platform name] | Written [date]

**NOT LIVE. Nothing in this sheet sends until you finish "Turn it on".**

## Start here

About [minutes] minutes today, plus two minutes tomorrow.

You'll need:
- Your [GoHighLevel | platform] login
- An inbox you can check for the test (yours is fine)
- The [N] things from "Fix these first", or just the list of them

How this works:
1. Fix what's open (section 1)
2. Check your settings (section 2)
3. Put the emails in (sections 3 and 4)
4. Test it on yourself (section 5)
5. Turn it on, only after the test passes (section 6)

Stuck on a step? Tell David the section and step number, for example "4.7".
Want one email on its own to copy? Tell David "show me email 3" and he'll post it in the chat, where it has a Copy button.

## 1. Fix these first

You can build with these open. Don't turn it on until every box here is ticked.

- [ ] Email [N]: [FILL IN: what is missing]
- [ ] Email [N]: confirm "[claim]" is accurate and you can say it
- [ ] Email [N]: the [asset] link doesn't open yet

(One line per open item: every visible FILL IN, every unconfirmed claim, every broken or unchecked link, each naming the email. Nothing open: "Nothing open. Go to section 2.")

## 2. Your settings

Check each of these. If anything is wrong, tell David before you build.

| Setting | Yours |
|---|---|
| From name | [name] |
| From email | [address] |
| Replies go to | [address] |
| Who answers replies | [name] |
| Send time | [time], [timezone] |
| Who gets it | People who opt in for [entry resource] |
| Leaves early when they | [Book a call, or buy] |
| Never sent to | Existing customers |
| The one link everything points to | [link, or "see Links" if long] |
| First name, if we don't have it | "[fallback]" |

(A row with no value shows [FILL IN: ...] and is listed in section 1.)

## 3. The emails

Day 1 is the day someone signs up. Email 1 goes out right away.

| Email | Day | Wait before it | Subject |
|---|---|---|---|
| 1 | 1 | none, sends right away | [subject] |
| 2 | 2 | 1 day | [subject] |
| ... | | | |

Paste each email exactly as written. Anything in [FILL IN: ...] must be replaced before you turn it on.

### Email [N] of [T]: Day [D]

**Not ready:** see Fix these first.   (only when this email has an open item)

**Sends:** Day [D], [wait] after Email [N-1], at [send time]

**GoHighLevel template:** [see the template line rule below]

**Subject:**

[subject]

**Preview text:**

[preview text]

**Body** (copy from the next line down to the end of the P.S.):

[body paragraphs, blank line between each]

[link text](https://...)

[sign-off]

P.S. [P.S. restating the link]

**Links in this email:**
- [link text]: https://...

---

(Repeat the block for every sendable email.)

## 4. Build it in GoHighLevel

### 4a. Put the emails in

- [ ] 4.1 In GoHighLevel, go to **Marketing**, then **Emails**, then **Templates**.
- [ ] 4.2 Click **New**, choose a blank template.
- [ ] 4.3 Name it exactly as the "GoHighLevel template" line in section 3 says.
- [ ] 4.4 Paste the body. Check the links still work.
- [ ] 4.5 Save. Repeat 4.2 to 4.5 for every email.

### 4b. Build the sequence

- [ ] 4.6 Go to **Automation**, then **Workflows**, click **Create Workflow**, **Start from scratch**.
- [ ] 4.7 Name it: Buyer Runway v[X.Y] (new leads). Leave it in draft for now.
- [ ] 4.8 Add a trigger: **Contact Tag**, tag added: runway-test. This is the only trigger for now, so only your test contact can enter.
- [ ] 4.9 Add action **Add Contact Tag**: in-runway.
- [ ] 4.10 For each row in the table at the top of section 3, in order: add **Wait** (the "Wait before it" time), then **Send Email** (choose that email's template, type its subject). Email 1 has no wait.
- [ ] 4.11 After the last email: **Remove Contact Tag** in-runway, then **Add Contact Tag** runway-complete.
- [ ] 4.12 Add a goal so people leave when they [book a call on "[calendar name]" | reach "[won stage]" in "[pipeline name]"].
- [ ] 4.13 In workflow **Settings**: re-entry off. Leave "stop on response" off, so replies to Email 2 don't end the sequence.
- [ ] 4.14 Add a filter at the start so existing customers skip it: [rule from section 2].
- [ ] 4.15 If your newsletter goes out by workflow or campaign, exclude the tag in-runway from it.
- [ ] 4.16 Click **Save**, then switch the workflow to **Publish**. It can only reach you right now (trigger in 4.8).

Moving to a different platform later? Ask David to rewrite this section for it.

## 5. Test it on yourself

Today (about 15 minutes)
- [ ] 5.1 Send yourself a preview of every email (in GoHighLevel: open the template, **Send Test Email**). Check: subject, links open the right page, no [FILL IN] left, it looks right on your phone.
- [ ] 5.2 Create a test contact that is you: your email with +runway before the @ (you+runway@yourdomain.com). If your email doesn't accept that, use a second address you own.
- [ ] 5.3 Add the tag runway-test to that contact.
- [ ] 5.4 Within 5 minutes Email 1 arrives. Check the from name, and that your first name shows (not blank, not braces).
- [ ] 5.5 Open the test contact and check the workflow shows Email 2 waiting for tomorrow.
- [ ] 5.6 Make a second test contact, tag it runway-test, then [book it a call | move it to won]. Check it leaves the workflow.

Tomorrow (2 minutes)
- [ ] 5.7 Email 2 arrives.
- [ ] 5.8 Reply to it. Check the reply reaches [reply owner].

Then tell David: "the test passed", or what went wrong.

## 6. Turn it on

Only you do this, and only after the test passed.

- [ ] 6.1 Every box in section 1 is ticked.
- [ ] 6.2 Open the workflow Buyer Runway v[X.Y] (new leads).
- [ ] 6.3 Add the real trigger: [form submitted: "[form name]" | tag added: [tag]]. Leave runway-test in place; it only ever reaches you.
- [ ] 6.4 Save. Check it says **Published**.
- [ ] 6.5 Tell David "it's live" so he records the date and version.

## 7. Your existing list

Not built. Ask David if you want your current list to get this too.

## 8. Rules this sequence follows

[Plain sentences, for a VA or anyone checking the build.]
```

## Section notes

**The emails.** The heading is always "Email N of T: Day D", never the subject, so a heading never carries a placeholder or a pipe. Two emails on the same day: the second's "Sends" line uses hours ("Day 30, 4 hours after Email 14"). A horizontal rule after every block.

The "GoHighLevel template" line:
- Route A+: leave the line out. The emails live inside the sequence, not as separate templates.
- Route A: the template name, then "(already in your account)".
- Route B or by hand in GoHighLevel: "Create it with this name:" then `Buyer Runway v[X.Y] | Day [DD] | E[NN] | [subject]`.
- Route E: replace it with a "[platform] draft" line: the name, then "(already in your account)".
- Any other platform, built by hand: leave the line out.

**Build it in GoHighLevel.**
- Route A: 4a becomes one line: "Done for you. All [N] emails are already in your account as templates, named as shown in section 3. Go to 4b."
- Route B: the bracketed names (calendar, pipeline, won stage, existing nurture workflows) are the real names you read from the account. A name you couldn't find is `[FILL IN: your booking calendar]` and goes in section 1.

**Route A+: built for you** (David created the emails and the part that sends them). Sections 4, 5 and 6 are replaced in full by the ones below. "Start here" says "A minute today and two minutes tomorrow to check the test, then switch it on when you're ready" in place of the build minutes, and its "How this works" list becomes: fix what's open (section 1), check your settings (section 2), check the test David sends you (section 5), switch it on once the test passes (section 6). In "Your settings", "If anything is wrong, tell David before you build" becomes "If anything is wrong, tell David."

```
## 4. Already built for you

Nothing here for you to build. In "[account name]" there is now:

- Your emails, saved together as **Buyer Runway v[X.Y] (new leads)**, in the order and on the days shown in section 3.
- The part that sends them, switched off.

| What it does | Yours |
|---|---|
| Starts when a contact | [gets the tag [tag] / fills in "[form name]"] |
| Leaves early when they | [buy / book on "[calendar name]" / reach "[won stage]"] |
| Sends at | [hour], [timezone] |
| Comes from | [sender name] |

If any of that is wrong, tell David. Changing it switches the runway off until you switch it back on, and you get a fresh email to switch it back on with.

## 5. Test it on yourself

- [ ] 5.1 Tell David "test it". The real sequence goes to your own address and nobody else's.
- [ ] 5.2 Email 1 arrives in a minute or two. Check the from name, that your first name shows (not blank, not braces), that the links open the right page, and that it looks right on your phone.
- [ ] 5.3 Tomorrow, email 2 arrives on its real day. Reply to it and check the reply reaches [reply owner].
- [ ] 5.4 Tell David "the test passed", or what went wrong.

## 6. Turn it on

Only you do this, and only after the test passed.

- [ ] 6.1 Every box in section 1 is ticked.
- [ ] 6.2 Open the email from Prime AI (admin@mail.primelive.ai), subject "Confirm: Switch on the email sequence". It went to the address you connected GoHighLevel with. The page it opens shows every email and what starts and stops them.
- [ ] 6.3 Decide the tickbox: "Also send it to contacts who already have the tag". Unticked, only people tagged from now on get the runway. Ticked, up to 200 people who already have the tag start it too.
- [ ] 6.4 Press the button to switch it on.
- [ ] 6.5 Tell David "it's live" so he records the date and version.

The link lasts 7 days. If it has expired or you can't find the email, tell David and he'll have a fresh one sent.
```

**Build it in [platform]** (every platform other than GoHighLevel; plain words, never invented screens). Replaces the GoHighLevel section 4 entirely:

```
## 4. Build it in [platform]

Your platform may call this an automation, a sequence, a drip, a journey, or a campaign. Look for the one that sends emails on a schedule after someone joins.

- [ ] 4.1 Create a new automation. Name it: Buyer Runway v[X.Y] (new leads). Keep it off or in draft.
- [ ] 4.2 Set it to start when a contact gets the tag (or joins the list) runway-test. Nothing else starts it for now.
- [ ] 4.3 Add Email 1 to send right away.
- [ ] 4.4 For each next row in the section 3 table: add a delay of the "Wait before it" time, then the email. Paste subject, preview text, and body.
- [ ] 4.5 Set the send time to [send time] if your platform allows it.
- [ ] 4.6 Make sure people leave the automation when they [book | buy]. It may be called a goal, an exit condition, or "remove when".
- [ ] 4.7 Leave out existing customers: [rule].
- [ ] 4.8 Make sure a reply does not stop the automation.
- [ ] 4.9 Keep new people in the runway off your regular newsletter until Day 31.
- [ ] 4.10 Save and switch it on. It can only reach you right now (step 4.2).

If your platform can't do one of these, tell David which step and he'll suggest the closest option.
```

Route E: add one line under the heading: "All [N] emails are already in your account as drafts, named as shown in section 3." In 4.4, "Paste subject, preview text, and body" becomes "Use the draft with that email's name (copy it into the automation if your platform needs that), and check the subject and preview text match section 3". Emails marked "not in [platform] yet" are still pasted.

In "Test it on yourself" on another platform, use the same steps in plain words: 5.1 becomes "Send yourself a test of every email (your platform may call it preview or send test)", and 5.5 becomes "Check your platform shows the next email scheduled". In "Turn it on", 6.3 and 6.4 become "Add the real start: [the opt-in form or list]" and "Save, and check it's switched on".

**Your existing list.** Only when a Backfill version is approved; otherwise the one line shown above. When approved, the same pattern, compressed:
- Who gets it: "Everyone on your list except existing customers."
- The opener email, in the section 3 block format.
- Which emails are reused unchanged, by number.
- Its own build steps: a separate workflow "Buyer Runway v[X.Y] (existing list)", trigger tag runway-backfill.
- Its own two-step test and its own turn-on.
- If it was built as a GoHighLevel sequence: "Built, nothing sent. To send it, ask David in a new message: "send the Backfill to my list". He'll read back who gets it and wait for your yes."
- If sending from here isn't available, the turn-on is "add the tag runway-backfill to the contacts in [segment]" in GoHighLevel, or the platform equivalent.

**Rules this sequence follows.** Plain sentences, covering: who gets it; who never gets it; when someone leaves early; unsubscribe, bounce, and complaint handling; the newsletter overlap ("New leads are in this runway for 30 days. Your regular newsletter resumes for them on Day 31."); what happens after Day 30; deadline logic (none, or the exact real rule); personalization fields with their blank fallback; what to track (replies, clicks, bookings, sales). On a Route A+ build, also: a new lead is picked up within about a minute of getting the tag; the exits are checked right before every send; every email carries an unsubscribe link and the business address automatically, and an unsubscribe ends the runway for that person and marks them do-not-email in GoHighLevel; contacts partway through carry the tag in-runway and finished contacts carry runway-complete, and neither tag should be deleted; the account sends up to 200 of these emails a day.
