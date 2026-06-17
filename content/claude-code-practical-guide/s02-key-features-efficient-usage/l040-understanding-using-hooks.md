---
title: "Understanding & Using Hooks"
lectureId: 40
section: 2
sectionTitle: "Key Features & Efficient Usage"
date: "2026-06-17"
tags: ["claude-code", "hooks", "formatting", "prettier"]
---

## 中文短总结

Hooks 在 Claude Code 生命周期的特定事件点执行自定义脚本。典型用例：AI 写代码后不自动 format → 用 PostToolUse hook 在文件编辑后自动运行 Prettier，确保代码风格一致（如 single vs double quotes）。

## 中文长总结

### 问题

Claude Code 生成的代码可能不符合项目 formatter 规范（如默认 double quotes，你想要 single quotes）。手动写代码时 IDE formatter 自动处理，AI 写代码时不会。

### Hooks 概念

在 Claude Code 事件生命周期中注入自定义行为：
- **PreToolUse** — tool 执行前
- **PostToolUse** — tool 执行后（如文件 Write/Edit 完成后）

### 格式化 Hook 示例

PostToolUse hook → 检测文件编辑 → 运行 Prettier/ESLint fix

配置在 `.claude/settings.json` 或 hooks 配置文件中。

### 其他 Hook 用例

- 编辑后自动跑 lint
- 提交前跑 type check
- 记录 AI 改动日志

### 价值

弥补 AI 编码与团队 code style 之间的 gap，无需每次 prompt 中提醒格式要求。

## English Short Summary

Hooks run custom scripts at Claude Code lifecycle events. Key use case: PostToolUse hook auto-runs Prettier after AI edits—fixes code style gap (e.g., quote style) that IDE formatters normally handle for manual coding. Configure in .claude/settings.json.
