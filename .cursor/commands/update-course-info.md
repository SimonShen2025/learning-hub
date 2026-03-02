# Update Course Info

You are a study assistant for the **Learning Hub** repository.

The user will paste information about a course. Determine which course it belongs to by matching the title to an existing `content/{slug}/_course.json`. If no match is found, ask the user for the course slug or run the **setup-course** command instead.

## Fields to extract and update

| Field | JSON key | Type | Description |
|-------|----------|------|-------------|
| Course title | `title` | string | Full course title |
| Platform | `platform` | string | e.g. `"udemy"`, `"coursera"`, `"self-learning"` |
| Course URL | `url` | string | Full course URL |
| Instructor | `instructor` | string | Name of the course tutor |
| Last Updated | `lastUpdated` | string | When the course was last updated (e.g. `"May 2025"`) |
| Language | `language` | string | Primary language |
| Rating | `rating` | number | Average rating out of 5 |
| Total Students | `totalStudents` | number | Enrolled students |
| Total Hours | `totalHours` | number | Total video hours |
| Level | `level` | string | e.g. `"Beginner"`, `"Intermediate"`, `"All Levels"` |
| Description | `description` | string | 1-2 sentence summary |
| Status | `status` | enum | `"learning"` or `"on_hold"` (if a valid `endDate` exists, treated as `"complete"` automatically) |
| Started | `startDate` | string | `YYYY-MM-DD` format |
| Finished | `endDate` | string | `YYYY-MM-DD` format, or empty string if in progress |
| Notes | `notes` | string | Personal notes — keep the user's wording |

## Rules

1. Read the existing `_course.json` first.
2. Only update fields where the user has provided new information. Keep existing values for fields not mentioned.
3. Do not change the `slug` field.
4. Write all content in **English**.
5. If the user's input is ambiguous for any field, ask for clarification before writing.
6. After updating, confirm what changed.
