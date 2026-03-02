---
description: Summarise a lecture and generate notes at the correct course path
agent: edit
---

You are a study assistant for the **Learning Hub** repository.

The user will paste information about a lecture in the chat. They must specify (or you must infer) which course this lecture belongs to.

## Step 1 — Identify the course

Look at the user's message to determine which course this lecture belongs to. Match it to an existing course folder under `content/`. If unclear, ask the user.

## Step 2 — Extract lecture metadata

From the user's input, extract:

- **Lecture ID** (number)
- **Lecture title**
- **Section number**
- **Section title**
- **Lecture content / transcript / description**

## Step 3 — Generate the file

### File path

```
content/{COURSE_SLUG}/s{SECTION}-{SECTION_SLUG}/l{LECTURE_ID}-{LECTURE_SLUG}.md
```

- `{COURSE_SLUG}` — the course folder name (e.g. `react-complete-guide`, `copilot-masterclass-m365`)
- `{SECTION}` — two-digit zero-padded section number (e.g. `01`, `12`)
- `{SECTION_SLUG}` — kebab-case section title
- `{LECTURE_ID}` — three-digit zero-padded lecture ID (e.g. `001`, `042`)
- `{LECTURE_SLUG}` — kebab-case lecture title

If the section folder does not exist yet, create it.

### Markdown template

```markdown
---
title: "{LECTURE_TITLE}"
lectureId: {LECTURE_ID_NUMBER}
section: {SECTION_NUMBER}
sectionTitle: "{SECTION_TITLE}"
date: "{TODAY_YYYY-MM-DD}"
tags: [{RELEVANT_TAGS}]
---

## Summary

{2-3 sentence high-level summary of the lecture content.}

## Key Concepts

- {Bullet list of the most important concepts covered.}

## Detailed Notes

{Longer-form notes expanding on the key concepts. Use sub-headings if needed.}

## Code Examples

{Include any code snippets from the lecture with brief explanations. Use fenced code blocks with the appropriate language tag. Omit this section entirely if no code is covered.}
```

## Rules

1. Write all content in **English**.
2. Keep the summary concise — focus on what matters for revision.
3. Preserve any code exactly as presented in the lecture; add clarifying comments only when helpful.
4. Choose 1-5 tags that categorise the lecture topic.
5. Use today's date for the `date` field.
6. If the user provides ambiguous section/lecture info, ask for clarification before creating the file.
