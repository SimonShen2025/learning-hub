---
title: "Leveraging Plan Mode"
lectureId: 26
section: 2
sectionTitle: "Key Features & Efficient Usage"
date: "2026-06-17"
tags: ["claude-code", "plan-mode", "workflow"]
---

## 中文短总结

Plan Mode 让 Claude Code 先出计划再执行。用 `/clear` 清空 context 后发第一个开发 prompt：搭建核心路由结构，暂不实现 auth 和页面内容。较小、聚焦的任务通常效果更好；可并行多个 Claude 实例处理不同任务。

## 中文长总结

### Plan Mode 工作流

1. `/clear` 清空 session
2. 发送聚焦任务 prompt
3. Claude 生成计划 → 用户审查/批准 → 执行

### 首个开发任务示例

- 搭建项目核心 route/pages 结构
- 明确排除：暂不实现 authentication
- 明确排除：暂不填充实际页面内容

### 任务粒度建议

- 较小、聚焦的任务 → 更好结果
- 复杂任务可拆分为多个 session 并行
- 多个 Claude Code 实例可同时跑不同任务

### 与直接编辑模式的区别

Plan Mode 适合较大变更——先看 plan 再决定，避免 AI 直接改代码走偏。

## English Short Summary

Plan Mode: Claude drafts a plan before executing. Start with /clear, then a focused prompt (e.g., scaffold routes, skip auth/content). Smaller tasks yield better results. Run multiple Claude instances in parallel for different tasks. Review plan before approving execution.
