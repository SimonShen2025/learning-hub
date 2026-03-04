"use client";

import { useEffect, useState } from "react";

const LANG_KEY = "learningHub.guide.lang";

type Lang = "en" | "zh";

interface Step {
  title: { en: string; zh: string };
  description: { en: string; zh: string };
  code?: string;
}

const STEPS: Step[] = [
  {
    title: {
      en: "Add a Course",
      zh: "添加课程",
    },
    description: {
      en: 'Open VS Code Copilot Chat (⌘⇧I / Ctrl+Shift+I), then type the prompt command and paste the Udemy course URL:',
      zh: '打开 VS Code Copilot Chat（⌘⇧I / Ctrl+Shift+I），输入 prompt 命令并粘贴 Udemy 课程 URL：',
    },
    code: '/add-course-from-url https://www.udemy.com/course/your-course-slug/',
  },
  {
    title: {
      en: "Export Transcripts",
      zh: "导出字幕文本",
    },
    description: {
      en: "Open any lecture page of the course in your browser. Press F12 → Console, paste the extractor script and press Enter. Wait for the JSON file to auto-download.",
      zh: "在浏览器中打开该课程的任意一节课，按 F12 → Console，粘贴提取脚本并回车。等待 JSON 文件自动下载。",
    },
    code: "// Paste the entire content of tools/udemy-transcript-extractor.js\n// into the browser console and press Enter",
  },
  {
    title: {
      en: "Batch Summarise",
      zh: "批量生成笔记",
    },
    description: {
      en: "Back in VS Code Copilot Chat, use the batch summarise prompt. Attach the downloaded JSON file, and Copilot will generate lecture summary notes for every section.",
      zh: "回到 VS Code Copilot Chat，使用批量摘要 prompt。附上下载的 JSON 文件，Copilot 会为每个 section 自动生成课程笔记。",
    },
    code: "/batch-summarise-transcripts",
  },
];

export function WorkflowGuide() {
  const [lang, setLang] = useState<Lang>("en");
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem(LANG_KEY);
    if (stored === "en" || stored === "zh") {
      setLang(stored);
    }
  }, []);

  function switchLang(newLang: Lang) {
    setLang(newLang);
    localStorage.setItem(LANG_KEY, newLang);
  }

  return (
    <div className="rounded-xl border border-blue-200 bg-gradient-to-br from-blue-50 to-sky-50 dark:border-blue-800 dark:from-blue-950/40 dark:to-sky-950/30">
      {/* Header — always visible, acts as toggle */}
      <button
        onClick={() => setOpen((v) => !v)}
        className="flex w-full items-center justify-between p-4 text-left"
      >
        <div className="flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-600 text-white text-sm font-bold">
            ?
          </div>
          <h3 className="text-base font-semibold text-blue-900 dark:text-blue-100">
            {lang === "en" ? "How to Add a Course" : "如何添加课程"}
          </h3>
        </div>

        <div className="flex items-center gap-2">
          {/* Language toggle — stop propagation so clicking it doesn't toggle collapse */}
          <div
            onClick={(e) => e.stopPropagation()}
            className="flex rounded-lg border border-blue-200 bg-white/70 dark:border-blue-700 dark:bg-blue-900/40 overflow-hidden text-xs font-medium"
          >
            <button
              onClick={() => switchLang("en")}
              className={`px-2.5 py-1 transition-colors ${
                lang === "en"
                  ? "bg-blue-600 text-white"
                  : "text-blue-700 hover:bg-blue-100 dark:text-blue-300 dark:hover:bg-blue-800/50"
              }`}
            >
              EN
            </button>
            <button
              onClick={() => switchLang("zh")}
              className={`px-2.5 py-1 transition-colors ${
                lang === "zh"
                  ? "bg-blue-600 text-white"
                  : "text-blue-700 hover:bg-blue-100 dark:text-blue-300 dark:hover:bg-blue-800/50"
              }`}
            >
              中文
            </button>
          </div>

          {/* Chevron */}
          <svg
            className={`h-5 w-5 text-blue-500 transition-transform duration-200 ${open ? "rotate-180" : ""}`}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </button>

      {/* Collapsible steps */}
      {open && (
        <ol className="space-y-4 px-5 pb-5">
          {STEPS.map((step, i) => (
            <li key={i} className="flex gap-3">
              {/* Step number */}
              <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-blue-600 text-white text-xs font-bold mt-0.5">
                {i + 1}
              </div>
              <div className="min-w-0 flex-1">
                <p className="text-sm font-semibold text-blue-900 dark:text-blue-100">
                  {step.title[lang]}
                </p>
                <p className="mt-0.5 text-sm text-blue-800/80 dark:text-blue-200/70">
                  {step.description[lang]}
                </p>
                {step.code && (
                  <pre className="mt-1.5 overflow-x-auto rounded-md bg-blue-900/90 px-3 py-2 text-xs text-blue-100 dark:bg-blue-950">
                    <code>{step.code}</code>
                  </pre>
                )}
              </div>
            </li>
          ))}
        </ol>
      )}
    </div>
  );
}
