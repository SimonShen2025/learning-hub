# Udemy Transcript Extractor

A browser console script that extracts English transcripts from any Udemy course you're enrolled in.

## Prerequisites

- You must be **logged in** to Udemy
- You must be **enrolled** in the course (free or paid)
- The course must have **English captions/subtitles**

## Usage

### Step 1: Extract Transcripts

1. Open the Udemy course in your browser (any lecture page, e.g. `https://www.udemy.com/course/the-ultimate-react-course/learn/`)
2. Open **DevTools** → **Console** tab (`F12` or `Ctrl+Shift+J`)
3. Copy the entire contents of [`udemy-transcript-extractor.js`](./udemy-transcript-extractor.js)
4. Paste it into the console and press **Enter**
5. Wait for the script to finish — you'll see progress logs in the console
6. A JSON file will automatically download (e.g. `udemy-transcripts-the-ultimate-react-course.json`)

### Step 2: Process Transcripts into Notes

1. Move the downloaded JSON file into the repo (e.g. `tools/exports/`)
2. Open the chat and use the **`batch-summarise-transcripts`** prompt
3. Provide the JSON file path when asked
4. The AI will batch-generate lecture summary notes for all sections

## Output Format

The exported JSON has this structure:

```json
{
  "courseId": 4471614,
  "courseSlug": "the-ultimate-react-course",
  "extractedAt": "2026-03-04T10:00:00.000Z",
  "stats": {
    "totalSections": 40,
    "totalLectures": 505,
    "transcriptsFetched": 480,
    "skipped": 25,
    "errors": 0
  },
  "sections": [
    {
      "sectionNumber": 1,
      "title": "Welcome, Welcome, Welcome!",
      "lectures": [
        {
          "lectureId": 1,
          "title": "Course Roadmap and Projects",
          "id": 37351178,
          "transcript": "Hi everyone, welcome to the ultimate React course..."
        }
      ]
    }
  ]
}
```

## Notes

- The script adds a 300ms delay between API calls to avoid rate limiting
- Lectures without English captions (e.g. coding exercises, articles) will have `transcript: null`
- The script works on both `udemy.com` and Udemy Business domains (e.g. `company.udemy.com`)
- Typical processing time: ~3-5 minutes for a 500-lecture course

## Troubleshooting

| Issue | Solution |
|-------|----------|
| "Could not detect the course ID" | Make sure you're on the course page (not the homepage) |
| Most transcripts are null | The course may not have English captions enabled |
| Script stops with 403 errors | Your session may have expired — refresh the page and try again |
| Rate limited (429 errors) | Increase `DELAY_MS` at the top of the script (e.g. to `500`) |
