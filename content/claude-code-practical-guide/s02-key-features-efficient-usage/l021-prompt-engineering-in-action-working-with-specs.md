---
title: "Prompt Engineering In Action & Working with Specs"
lectureId: 21
section: 2
sectionTitle: "Key Features & Efficient Usage"
date: "2026-06-17"
tags: ["claude-code", "spec-md", "context-engineering", "betterauth"]
---

## 中文短总结

新项目从 Spec.md 规格文档开始：用 ChatGPT 生成技术规格，放入项目根目录。Prompt 中用 `@spec.md` 引用文件，并附 better-auth 官方 schema 文档（XML 标签包裹长文本）。先用 Claude Code 格式化 spec 并修正 auth 表结构。

## 中文长总结

### Spec 文档工作流

1. 用 AI（如 ChatGPT）一次性生成技术规格：功能、技术栈（Next.js/Bun/Tailwind/better-auth/Tiptap/SQLite）
2. 保存为 `Spec.md`（自定义文件名，非 Claude Code 要求）
3. 用 Claude Code 修订：格式化 Markdown + 对齐第三方库 schema

### Context Engineering 技巧

- **`@spec.md`**：官方文件引用语法，将文件注入 context
- 已知相关才引用——不要 dump 所有文件
- 长文档/文章用 XML 标签包裹，帮助 LLM 识别边界
- 例：粘贴 better-auth database schema 文档修正 users 表设计

### 示例 Prompt 结构

```
We're building an app described in @spec.md.
Field 1: Please format this file as proper Markdown
Field 2: Update auth-related tables per better-auth docs
<docs>...</docs>
```

### 实践

- Accept Edits 模式（Shift+Tab）加速迭代
- Spec 定稿后人工 review 一次再继续开发

## English Short Summary

Start new projects with a Spec.md (AI-generated tech spec). Reference files via @spec.md in prompts. Paste long docs in XML tags for boundary clarity. Demo: format spec + fix auth tables using better-auth schema docs. One-time setup, not repeated every prompt.
