---
title: "Running Claude Code In A (Ralph) Loop"
lectureId: 44
section: 2
sectionTitle: "Key Features & Efficient Usage"
date: "2026-06-17"
tags: ["claude-code", "ralph-loop", "automation"]
---

## 中文短总结

Ralph Loop（得名于 Simpsons 角色 Ralph Wiggum 的 naive persistence）是 shell script 驱动的全自动循环：Claude Code 迭代执行任务 + 自验证（tests/browser），直到完成或达到最大 iteration 上限。极端 hands-off 模式。

## 中文长总结

### Ralph Loop 概念

将 browser access / automated tests 的 feedback loop 推到极端：
- Shell script 循环调用 Claude Code
- 每轮：执行任务 → 验证 → 若失败则继续
- 设置 **max iterations** 防止无限循环
- 开发者完全不介入

### 组成

1. Shell script（课程附 starter 含示例）
2. 明确的 task prompt
3. 验证机制（tests 或 Playwright）
4. Iteration 上限

### 适用场景

-  well-defined、可自动验证的任务
- 夜间/离线运行
- 已有完善 test suite 的项目

### 风险

- 无 iteration 上限可能 burn tokens 无限循环
- 复杂/模糊任务不适合
- 仍需 good CLAUDE.md + Spec 作为 guardrails

### 命名由来

Ralph Wiggum（Simpsons）—  naive but persistent，象征 AI 反复尝试直到成功。

## English Short Summary

Ralph Loop: shell script repeatedly invokes Claude Code with self-verification (tests/browser) until done or max iterations hit. Ultimate hands-off pattern—named after Ralph Wiggum's naive persistence. Requires well-defined tasks and verification guardrails.
