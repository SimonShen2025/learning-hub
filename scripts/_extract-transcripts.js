// One-off script: dump sections 1-5 transcripts from the exported JSON into
// readable per-lecture text files (wrapped to ~120 chars/line) for grounding
// markdown summaries. Not part of the app; safe to delete after use.
const fs = require("fs");
const path = require("path");

const SRC = "C:/Users/simon.shen/Downloads/udemy-transcripts-azure-ai-cloud-developer.json";
const OUT_DIR = path.join(__dirname, "_tmp-azure-ai-cloud-developer-s01-05");

function wrap(text, width) {
  const words = text.split(/\s+/);
  const lines = [];
  let line = "";
  for (const w of words) {
    if ((line + " " + w).trim().length > width) {
      lines.push(line.trim());
      line = w;
    } else {
      line = (line + " " + w).trim();
    }
  }
  if (line) lines.push(line.trim());
  return lines.join("\n");
}

const data = JSON.parse(fs.readFileSync(SRC, "utf8"));
const sections = data.sections.filter((s) => s.sectionNumber >= 1 && s.sectionNumber <= 5);

const manifest = [];
for (const s of sections) {
  for (const l of s.lectures) {
    const id = String(l.lectureId).padStart(3, "0");
    const fileName = `l${id}.txt`;
    const header = `SECTION: ${s.sectionNumber} ${s.title}\nLECTURE_ID: ${l.lectureId}\nTITLE: ${l.title}\nTRANSCRIPT_LENGTH: ${(l.transcript || "").length}\n---\n`;
    fs.writeFileSync(path.join(OUT_DIR, fileName), header + wrap(l.transcript || "", 120) + "\n");
    manifest.push({
      sectionNumber: s.sectionNumber,
      sectionTitle: s.title,
      lectureId: l.lectureId,
      title: l.title,
      transcriptLength: (l.transcript || "").length,
    });
  }
}

fs.writeFileSync(path.join(OUT_DIR, "_manifest.json"), JSON.stringify(manifest, null, 2));
console.log("Wrote", manifest.length, "lecture files to", OUT_DIR);
console.log("Sections:", [...new Set(manifest.map((m) => m.sectionNumber))]);
