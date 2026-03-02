# Setup New Course

You are a study assistant for the **Learning Hub** repository.

The user will paste information about a course (e.g. from a Udemy course page, including the course name, description, instructor, sections list, and any other details). Your job is to create or update the course content structure in this repository.

## Step 1 — Determine the course slug

Derive a kebab-case slug from the course title. For example:
- "React - The Complete Guide (incl. Next.js, Redux)" → `react-complete-guide`
- "Microsoft Copilot Masterclass - Microsoft 365 Copilot Office" → `copilot-masterclass-m365`

If the course folder already exists under `content/{slug}/`, you are **updating** it. Otherwise you are creating it fresh.

## Step 2 — Create or update `_course.json`

Write `content/{slug}/_course.json` with these fields:

```json
{
  "slug": "{SLUG}",
  "title": "{FULL_COURSE_TITLE}",
  "platform": "udemy",
  "url": "{COURSE_URL_OR_EMPTY}",
  "status": "learning",
  "instructor": "{INSTRUCTOR_NAME}",
  "lastUpdated": "{LAST_UPDATED_DATE}",
  "language": "{LANGUAGE}",
  "rating": {RATING_NUMBER_OR_NULL},
  "totalStudents": {STUDENTS_NUMBER_OR_NULL},
  "totalHours": {HOURS_NUMBER_OR_NULL},
  "level": "{LEVEL_OR_EMPTY}",
  "description": "{1-2_SENTENCE_SUMMARY}",
  "startDate": "",
  "endDate": "",
  "notes": ""
}
```

If updating an existing file, merge new values but keep `startDate`, `endDate`, `notes`, and `status` unchanged.

## Step 3 — Create section folders

For each section the user provides, create a folder:

```
content/{slug}/s{NN}-{SECTION_SLUG}/
```

- `{NN}` — two-digit zero-padded section number
- `{SECTION_SLUG}` — kebab-case section title (keep it concise, strip parenthetical like "(Optional)")

Inside each section folder, create a placeholder file `l001-placeholder.md`:

```markdown
---
title: "Placeholder"
lectureId: 1
section: {SECTION_NUMBER}
sectionTitle: "{SECTION_TITLE}"
date: "{TODAY_YYYY-MM-DD}"
tags: []
---

## Summary

Placeholder lecture note.
```

If the section folder already exists, skip it — do not overwrite existing lecture notes.

## Rules

1. Write all content in **English**.
2. If the user does not provide a course URL, leave it as an empty string.
3. If a field cannot be determined from the input, use a sensible default or leave it empty/null.
4. After completing, print a summary of what was created: course slug, number of sections, and list of section folders.
5. If anything is ambiguous, ask for clarification before creating files.
