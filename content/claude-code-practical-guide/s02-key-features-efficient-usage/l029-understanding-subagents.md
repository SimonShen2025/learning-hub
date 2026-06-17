---
title: "Understanding Subagents"
lectureId: 29
section: 2
sectionTitle: "Key Features & Efficient Usage"
date: "2026-06-17"
tags: ["claude-code", "subagents", "context-management"]
---

## 中文短总结

Subagents 是 Claude Code 派生的子 AI 代理，在独立 context 中执行子任务。主 agent 保持 context 干净。示例：让主 agent 审查代码实现时，文档查阅应在 subagent 中完成，避免大量文档 text 污染主 context window。

## 中文长总结

### 为何需要 Subagents

主 agent 的 context window 有限且宝贵。某些任务（如阅读长篇官方文档）会：
- 消耗大量 tokens
- 污染主 context，影响后续编码质量
- 耗时且 sequential

### Subagent 工作方式

- 主 agent 将子任务委派给 subagent
- Subagent 在**独立 context** 中运行
- 完成后将**摘要结果**返回主 agent
- 主 agent context 保持精简

### 典型用例

- 文档查阅与 API 验证
- 代码审查（review-only，非 edit/plan mode）
- 独立探索代码库某区域

### 触发方式

Claude 根据 subagent 的 description 自动决定是否委派；也可在 CLAUDE.md 中强制要求使用特定 subagent。

## English Short Summary

Subagents run subtasks in isolated contexts, returning summaries to the main agent. Prevents documentation lookups from polluting the main context window. Use for doc exploration, code review, or scoped analysis while keeping the primary session focused on implementation.
