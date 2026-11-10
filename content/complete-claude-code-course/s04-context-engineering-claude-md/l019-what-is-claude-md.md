---
title: "What Is CLAUDE.md?"
lectureId: 19
section: 4
sectionTitle: "Context Engineering & CLAUDE.md"
date: "2026-11-10"
tags: ["claude-md", "project-instructions", "context-engineering"]
---

## 中文短总结

`CLAUDE.md` 是为 Claude Code 提供项目持久指引的 Markdown 文件，适合记录跨任务反复适用的命令、约定和边界；它占用上下文，不应堆积无关信息。

## 中文长总结

- **分离职责：**当前提示描述本次目标；项目指引记录长期适用的信息，例如包管理器、验证命令、代码位置和禁止手工修改的生成目录。
- **减少重复：**新会话无需完全依赖上一段对话，也能获得项目约定，减少反复解释、错误假设和返工。
- **控制体积：**只保留高价值、经常影响决策的信息；冗长指引也会消耗上下文，不能假设内容越多越有效。
- **仍需调查：**指引是项目工作的起点，不代替检查当前代码与验证实际行为；内容变化后应及时更新。

## English Short Summary

`CLAUDE.md` supplies recurring project instructions across sessions, such as commands, conventions, and boundaries. Keep it concise and current: it consumes context and guides investigation rather than replacing it.
