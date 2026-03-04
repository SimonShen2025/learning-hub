/**
 * Udemy Transcript Extractor
 * ==========================
 * Run this script in your browser DevTools console while on a Udemy course page
 * (you must be logged in and enrolled in the course).
 *
 * It will:
 * 1. Detect the course ID from the current page
 * 2. Fetch the full curriculum (sections + lectures)
 * 3. Download English captions/transcripts for each lecture
 * 4. Export everything as a JSON file
 *
 * Usage:
 *   1. Open a Udemy course page in your browser (any lecture page works)
 *   2. Open DevTools (F12) → Console tab
 *   3. Paste this entire script and press Enter
 *   4. Wait for it to finish — it will auto-download a JSON file
 *
 * The exported JSON can then be processed by the `batch-summarise-transcripts`
 * prompt in the Learning Hub repo.
 */

(async function udemyTranscriptExtractor() {
  const DELAY_MS = 500; // delay between API calls to avoid rate limiting
  const MAX_RETRIES = 3; // retry failed requests
  const PAGE_SIZE = 100; // smaller page size to avoid 504 on UB domains

  // ── Helpers ──────────────────────────────────────────────

  function sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }

  function downloadJSON(data, filename) {
    const blob = new Blob([JSON.stringify(data, null, 2)], {
      type: "application/json",
    });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  }

  function parseVTT(vttText) {
    // Parse WebVTT caption file into plain text (removing timestamps and metadata)
    const lines = vttText.split("\n");
    const textLines = [];
    let skipNext = false;

    for (const line of lines) {
      const trimmed = line.trim();
      // Skip WEBVTT header, NOTE lines, and empty lines
      if (
        trimmed === "WEBVTT" ||
        trimmed.startsWith("NOTE") ||
        trimmed === ""
      ) {
        continue;
      }
      // Skip cue identifiers (numeric lines before timestamps)
      if (/^\d+$/.test(trimmed)) {
        continue;
      }
      // Skip timestamp lines (e.g., "00:00:01.000 --> 00:00:05.000")
      if (/^\d{2}:\d{2}/.test(trimmed) && trimmed.includes("-->")) {
        continue;
      }
      // This is actual caption text
      // Remove HTML tags if any
      const cleanText = trimmed.replace(/<[^>]*>/g, "");
      if (cleanText) {
        textLines.push(cleanText);
      }
    }

    // Deduplicate consecutive identical lines (common in VTT)
    const deduped = [];
    for (const line of textLines) {
      if (deduped.length === 0 || deduped[deduped.length - 1] !== line) {
        deduped.push(line);
      }
    }

    return deduped.join(" ");
  }

  async function apiFetch(path, retries = MAX_RETRIES) {
    const baseUrl = window.location.origin;
    for (let attempt = 1; attempt <= retries; attempt++) {
      try {
        const res = await fetch(`${baseUrl}${path}`, {
          credentials: "include",
          headers: {
            Accept: "application/json",
            "X-Requested-With": "XMLHttpRequest",
          },
        });
        if (res.status === 504 || res.status === 502 || res.status === 503) {
          if (attempt < retries) {
            const backoff = attempt * 2000;
            console.warn(`⏳ Server error ${res.status}, retrying in ${backoff / 1000}s... (attempt ${attempt}/${retries})`);
            await sleep(backoff);
            continue;
          }
        }
        if (!res.ok) {
          throw new Error(`API request failed: ${res.status} ${res.statusText}`);
        }
        return await res.json();
      } catch (e) {
        if (attempt < retries && (e.message.includes("504") || e.message.includes("502") || e.message.includes("Failed to fetch"))) {
          const backoff = attempt * 2000;
          console.warn(`⏳ Request error, retrying in ${backoff / 1000}s... (attempt ${attempt}/${retries})`);
          await sleep(backoff);
          continue;
        }
        throw e;
      }
    }
  }

  // ── Step 1: Get Course ID ───────────────────────────────

  console.log("🔍 Detecting course ID...");

  let courseId = null;
  let courseSlug = null;

  // Method 1: Extract from URL
  const urlMatch = window.location.pathname.match(
    /\/course\/([^/]+)\/?(learn)?/
  );
  if (urlMatch) {
    courseSlug = urlMatch[1];
  }

  // Method 2: Try to find course ID from Udemy's page data
  try {
    // Try the course detail API using the slug
    if (courseSlug) {
      const courseData = await apiFetch(
        `/api-2.0/courses/${courseSlug}/?fields[course]=id,title,url`
      );
      courseId = courseData.id;
      console.log(
        `✅ Found course: "${courseData.title}" (ID: ${courseId})`
      );
    }
  } catch (e) {
    console.warn("Could not fetch course by slug, trying alternative...");
  }

  // Method 3: Try to extract from page HTML/JS data
  if (!courseId) {
    try {
      const bodyText = document.body.innerHTML;
      const idMatch = bodyText.match(/"courseId"\s*:\s*(\d+)/);
      if (idMatch) {
        courseId = parseInt(idMatch[1], 10);
        console.log(`✅ Found course ID from page data: ${courseId}`);
      }
    } catch (e) {
      // ignore
    }
  }

  if (!courseId) {
    console.error(
      "❌ Could not detect the course ID. Make sure you are on a Udemy course page."
    );
    return;
  }

  // ── Step 2: Fetch Full Curriculum ───────────────────────

  console.log("📚 Fetching curriculum...");

  const allItems = [];
  let useSubscriberApi = true;

  // Try subscriber API first (has asset/caption info inline)
  // Fall back to public API if it fails (e.g. 504 on Udemy Business)
  const subscriberUrl = `/api-2.0/courses/${courseId}/subscriber-curriculum-items/?page_size=${PAGE_SIZE}&fields[lecture]=title,object_index,asset&fields[chapter]=title,object_index,sort_order&fields[asset]=captions,title&fields[quiz]=title,object_index`;
  const publicUrl = `/api-2.0/courses/${courseId}/public-curriculum-items/?page_size=${PAGE_SIZE}&fields[lecture]=title,object_index&fields[chapter]=title,object_index,sort_order`;

  let nextUrl = subscriberUrl;

  try {
    while (nextUrl) {
      const fetchUrl = nextUrl.startsWith("http")
        ? new URL(nextUrl).pathname + new URL(nextUrl).search
        : nextUrl;

      const data = await apiFetch(fetchUrl);
      allItems.push(...data.results);

      if (data.next) {
        const nextUrlObj = new URL(data.next);
        nextUrl = nextUrlObj.pathname + nextUrlObj.search;
      } else {
        nextUrl = null;
      }
    }
  } catch (e) {
    if (allItems.length === 0) {
      // Subscriber API failed completely, fall back to public API
      console.warn(`⚠️ Subscriber API failed (${e.message}). Falling back to public curriculum API...`);
      useSubscriberApi = false;
      nextUrl = publicUrl;

      while (nextUrl) {
        const fetchUrl = nextUrl.startsWith("http")
          ? new URL(nextUrl).pathname + new URL(nextUrl).search
          : nextUrl;

        const data = await apiFetch(fetchUrl);
        allItems.push(...data.results);

        if (data.next) {
          const nextUrlObj = new URL(data.next);
          nextUrl = nextUrlObj.pathname + nextUrlObj.search;
        } else {
          nextUrl = null;
        }
      }
    } else {
      console.warn(`⚠️ Curriculum fetch partially failed: ${e.message}. Proceeding with ${allItems.length} items.`);
    }
  }

  // Organize into sections and lectures
  const sections = [];
  let currentSection = null;

  for (const item of allItems) {
    if (item._class === "chapter") {
      currentSection = {
        sectionNumber: item.object_index,
        title: item.title,
        lectures: [],
      };
      sections.push(currentSection);
    } else if (item._class === "lecture" && currentSection) {
      currentSection.lectures.push({
        lectureId: item.object_index,
        title: item.title,
        id: item.id, // internal Udemy lecture ID (needed for API calls)
        asset: item.asset || null,
      });
    }
  }

  const totalLectures = sections.reduce(
    (sum, s) => sum + s.lectures.length,
    0
  );
  console.log(
    `📖 Found ${sections.length} sections with ${totalLectures} lectures total.`
  );

  // ── Step 3: Fetch Transcripts ───────────────────────────

  console.log("📝 Fetching transcripts (this may take a while)...");

  let fetched = 0;
  let skipped = 0;
  let errors = 0;

  for (const section of sections) {
    for (const lecture of section.lectures) {
      fetched++;
      const progress = `[${fetched}/${totalLectures}]`;

      // Find English caption URL from the asset
      let captionUrl = null;

      // Helper: find English caption from a captions array
      function findEnglishCaption(captions) {
        if (!captions || !Array.isArray(captions)) return null;
        return captions.find(
          (c) =>
            c.locale_id === "en_US" ||
            c.locale_id === "en_GB" ||
            (c.video_label && c.video_label.toLowerCase().includes("english")) ||
            (c.title && c.title.toLowerCase().includes("english")) ||
            (c.locale_id && c.locale_id.startsWith("en"))
        );
      }

      // If subscriber API gave us inline asset data, use it
      if (lecture.asset && lecture.asset.captions) {
        const enCaption = findEnglishCaption(lecture.asset.captions);
        if (enCaption && enCaption.url) {
          captionUrl = enCaption.url;
        } else if (enCaption && enCaption.id) {
          try {
            const captionData = await apiFetch(
              `/api-2.0/users/me/subscribed-courses/${courseId}/lectures/${lecture.id}/supplementary-assets/${enCaption.id}/?fields[caption]=url,data,file_name`
            );
            captionUrl = captionData.url || captionData.data;
          } catch (e) {
            captionUrl = enCaption.source || enCaption.data || null;
          }
        }
      }

      // If no caption yet (e.g. public API fallback), fetch per-lecture
      if (!captionUrl) {
        try {
          const lectureDetail = await apiFetch(
            `/api-2.0/users/me/subscribed-courses/${courseId}/lectures/${lecture.id}/?fields[lecture]=asset&fields[asset]=captions`
          );
          if (lectureDetail.asset && lectureDetail.asset.captions) {
            const enCap = findEnglishCaption(lectureDetail.asset.captions);
            if (enCap) {
              captionUrl = enCap.url || enCap.source || null;
            }
          }
        } catch (e) {
          // No captions available for this lecture
        }
      }

      // Fetch the actual transcript text
      if (captionUrl) {
        try {
          const captionRes = await fetch(captionUrl);
          if (captionRes.ok) {
            const vttText = await captionRes.text();
            lecture.transcript = parseVTT(vttText);
            console.log(
              `${progress} ✅ ${section.title} → ${lecture.title}`
            );
          } else {
            lecture.transcript = null;
            skipped++;
            console.log(
              `${progress} ⚠️ Failed to download caption: ${lecture.title}`
            );
          }
        } catch (e) {
          lecture.transcript = null;
          errors++;
          console.log(
            `${progress} ❌ Error fetching transcript: ${lecture.title}`
          );
        }
      } else {
        lecture.transcript = null;
        skipped++;
        console.log(
          `${progress} ⏭️ No English transcript: ${lecture.title}`
        );
      }

      // Clean up internal fields we don't need in the export
      delete lecture.asset;

      await sleep(DELAY_MS);
    }
  }

  // ── Step 4: Export ──────────────────────────────────────

  const exportData = {
    courseId: courseId,
    courseSlug: courseSlug,
    extractedAt: new Date().toISOString(),
    stats: {
      totalSections: sections.length,
      totalLectures: totalLectures,
      transcriptsFetched: totalLectures - skipped - errors,
      skipped: skipped,
      errors: errors,
    },
    sections: sections,
  };

  const filename = `udemy-transcripts-${courseSlug || courseId}.json`;
  downloadJSON(exportData, filename);

  console.log(`\n${"═".repeat(50)}`);
  console.log(`✅ Export complete!`);
  console.log(`   📄 File: ${filename}`);
  console.log(`   📚 Sections: ${sections.length}`);
  console.log(`   🎬 Lectures: ${totalLectures}`);
  console.log(`   📝 Transcripts fetched: ${totalLectures - skipped - errors}`);
  console.log(`   ⏭️  Skipped (no transcript): ${skipped}`);
  console.log(`   ❌ Errors: ${errors}`);
  console.log(`${"═".repeat(50)}`);
  console.log(
    `\nNext step: Use the "batch-summarise-transcripts" prompt in your Learning Hub repo to process this file.`
  );
})();
