---
title: "Understanding Claude Models in Claude Code"
lectureId: 5
section: 1
sectionTitle: "Claude Code Foundations"
date: "2026-11-10"
tags: ["claude-code", "claude-models", "model-selection"]
---

## 中文短总结

Claude Code 是使用模型和工具的环境，模型选择需要权衡推理能力、速度、用量和任务复杂度。课程以 Haiku、Sonnet、Opus 和 Fable 说明不同定位；具体版本与可用性会变化。

## 中文长总结

- **Haiku：**课程将其用于快速查找、小范围修改和其他相对机械的任务。
- **Sonnet：**强调速度与能力的平衡，适合许多日常开发、常规修复和测试任务。
- **Opus：**适合需要更深入推理的排障、架构分析、复杂重构与审查。
- **Fable：**课程将其作为复杂、长周期 agentic 任务的示例，例如跨多个系统的迁移。

这些定位是选择起点，不是模型能力的永久排名。长任务会多次调用模型，因此延迟和用量也重要；更强的模型同样需要充分上下文和结果验证。型号、价格、官方建议及账户可用性应以 [Anthropic 模型概览](https://platform.claude.com/docs/en/models/overview) 和实际界面为准。

## English Short Summary

Model choice balances reasoning, latency, usage, and task complexity. The lecture presents Haiku for quick work, Sonnet for balanced development, Opus for deeper reasoning, and Fable for demanding long-horizon work. Check current availability and guidance rather than relying on fixed rankings.
