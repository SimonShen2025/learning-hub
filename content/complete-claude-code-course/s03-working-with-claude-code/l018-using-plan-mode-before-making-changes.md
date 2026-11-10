---
title: "Using Plan Mode Before Making Changes"
lectureId: 18
section: 3
sectionTitle: "Working with Claude Code"
date: "2026-11-10"
tags: ["plan-mode", "change-planning", "code-review", "verification"]
---

## 中文短总结

Plan Mode 将调查和方案审查与实施分开，适合范围大、存在不确定性或风险较高的改动。批准计划后仍需审查实际修改并验证行为。

## 中文长总结

1. 提供目标、相关文件、约束和验证要求；课程演示用 `/plan` 进入规划，并通过已有需求和代码分析订单邮箱搜索。
2. 让 agent 检查调用方、依赖及测试，提出尽量小的改动；审查方案并补充“不新增依赖、保留原有搜索行为”等边界。
3. 确认方案后切换到允许实施的模式，在适当权限下执行，再验证新增邮箱搜索以及原有 ID、姓名搜索。
4. 规划降低返工风险，但不保证实现正确。简单低风险修改不一定需要完整计划；高风险和跨模块变更更值得先规划。

命令及模式切换方式取决于客户端版本，规划阶段的具体权限也应以当前工具提示为准。

## English Short Summary

Plan Mode separates investigation and review of an approach from implementation. Supply context and constraints, inspect dependencies, refine the plan, then authorize changes and verify both new and existing behavior. Use the extra planning step where risk or uncertainty warrants it.
