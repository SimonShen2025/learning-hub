---
title: "Undoing Actions & The Importance of Version Control Systems"
lectureId: 16
section: 1
sectionTitle: "Getting Started"
date: "2026-06-17"
tags: ["claude-code", "git", "rewind", "version-control"]
---

## 中文短总结

撤销 AI 改动两种方式：Git 版本控制（推荐，AI 时代更重要）和 Claude Code 内置 rewind（双击 Escape 或 `/rewind`）。Rewind 目前不够可靠，不能替代 Git。频繁 commit + VS Code diff 审查是最佳实践。

## 中文长总结

### 方案一：Git（首选）

- AI 可能误删文件、引入 anti-pattern，版本历史是安全网
- **频繁 commit**，便于回滚任意时间点
- VS Code git diff 可高效审查 AI 改动（side benefit）

### 方案二：Claude Code Rewind

- **双击 Escape** → 选择回退到 conversation 中的某个时间点
- 或 `/rewind` 浏览历史 session 回退
- ⚠️ 录制时 rewind 有 bug：提示成功但文件未实际恢复

### 结论

Rewind 可作为快捷尝试，但 **Git 不可替代**。Rewind 失败时 git 是最后防线。

### Gotcha

AI 生成的代码可能含 anti-pattern（如错误的状态更新方式）——即使功能「能用」，也应 review 后决定是否保留。

## English Short Summary

Two undo options: Git (essential—commit frequently, use VS Code diffs to review AI changes) and Claude Code rewind (double-Escape or /rewind). Rewind is buggy and unreliable—never replaces version control. AI can introduce anti-patterns even when code "works."
