---
title: "How Agentic Coding Works"
lectureId: 3
section: 1
sectionTitle: "Claude Code Foundations"
date: "2026-11-10"
tags: ["agentic-coding", "agent-loop", "development-workflow"]
---

## 中文短总结

Agentic coding 以目标驱动迭代：调查项目、决定下一步、调用工具、观察结果并验证；失败时继续排查，而不是只返回一次代码建议。自主性仍受权限和人工决策约束。

## 中文长总结

- **执行循环：**理解目标和现状 → 调查相关代码与约定 → 采取行动 → 观察工具输出 → 验证并按结果调整。步骤并非固定脚本，测试失败或信息不足都会改变后续行动。
- **工具与模型：**模型负责解释信息和选择行动；文件读取、搜索、编辑、终端和测试等工具提供与项目交互的能力。
- **示例：**修复表单验证时，先查找实现与已有验证方式，再修改相关位置，运行测试，并根据失败信息继续定位问题。
- **控制边界：**简单任务可能只需少量步骤；复杂任务需要更多迭代。Agent 应在完成、遇到阻碍或需要用户批准时停止，而不是无限运行。

## English Short Summary

Agentic coding iterates toward a goal by investigating the project, choosing actions, using tools, observing results, and verifying or revising the work. The path adapts to evidence, while permissions and human decisions constrain autonomy.
