---
title: "Managing Context in Long Claude Code Sessions"
lectureId: 22
section: 4
sectionTitle: "Context Engineering & CLAUDE.md"
date: "2026-11-10"
tags: ["context-management", "compaction", "sessions", "claude-code"]
---

## 中文短总结

长会话应保留有用历史而不是无限累积内容：用 `/context` 检查、用 `/compact` 压缩仍在进行的任务；无关的新任务可使用新会话或 `/clear`。

## 中文长总结

- **观察：**上下文包含指令、会话历史、文件和工具结果；查看分布后再决定是否需要处理。
- **继续当前任务：**`/compact` 对历史做有损总结，可提示保留目标、关键决策、已修改文件、未解决问题和待验证事项；自动压缩也可能在接近限制时发生。
- **开始独立任务：**`/clear` 或新会话可避免携带无关历史；项目文件和持久指引仍按配置存在，但旧对话不再是当前上下文。
- **减少噪声：**按需引用文件和关键错误，避免粘贴大量无关日志；课程还介绍在支持的版本中使用 `/btw` 处理简短旁支问题。
- 压缩不能保证保留每个细节；跨会话必须保留的项目知识应放在适当的项目指引、规则或文档中。

## English Short Summary

Inspect context with `/context`; compact ongoing work while explicitly preserving critical decisions and outstanding checks. Use a fresh session or `/clear` for unrelated work. Compaction is lossy, so durable project knowledge belongs in appropriate persistent files.
