---
title: "Using Claude Code's Built-in Tools"
lectureId: 27
section: 2
sectionTitle: "Key Features & Efficient Usage"
date: "2026-06-17"
tags: ["claude-code", "built-in-tools", "web-search", "plan-mode"]
---

## 中文短总结

Claude Code 内置多种 tools（文件读写、bash、web search 等），Claude 按需自动调用。复杂任务如实现 auth+database 时，应结合 Plan Mode 并引用 Spec.md；CLAUDE.md 中的 Spec 引用让 Claude 自动找到规格文档。

## 中文长总结

### Built-in Tools

Claude Code 暴露一组 tools 给模型，包括：
- Read / Write / Edit — 文件操作
- Bash — 执行命令
- WebSearch — 查找文档
- 等（随版本更新）

Claude 根据任务自动选择 tools，无需手动指定。

### 复杂 Prompt 优化

实现 authentication + database 时：
- CLAUDE.md 已引用 Spec.md → Claude 应自动定位
- 可加 `@spec.md` 或 "As described in Spec.md" 双保险
- 复杂任务优先用 **Plan Mode** 审查方案再执行

### Context 提示

- `/context` 可查看 tools 描述占用的 token
- Tool descriptions 是 context 的固定开销

## English Short Summary

Claude Code auto-invokes built-in tools (Read, Write, Bash, WebSearch, etc.) as needed. For complex tasks like auth+DB, use Plan Mode and reference Spec.md. Tool descriptions consume context tokens—visible via /context.
