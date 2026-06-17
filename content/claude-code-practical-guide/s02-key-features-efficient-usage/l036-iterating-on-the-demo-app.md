---
title: "Iterating On The Demo App"
lectureId: 36
section: 2
sectionTitle: "Key Features & Efficient Usage"
date: "2026-06-17"
tags: ["claude-code", "demo-project", "iteration"]
---

## 中文短总结

演示用 Claude Code 迭代开发笔记 app 的实际 prompt 流程（跳过 AI 思考/plan 等待部分）。Subagents、skills、CLAUDE.md 本应在项目开始前就配置好；课程为教学逐步添加。现在基础设施就绪，进入功能迭代阶段。

## 中文长总结

### 当前项目状态

- Spec.md、CLAUDE.md、依赖、subagents、skills 已就位
- 可高效用 Claude Code 添加功能

### 迭代模式

- 发送聚焦 prompt → Plan Mode 审查 → 执行 → 验证
- 跳过 AI 思考过程的等待（可快进本节）
- 典型迭代：dashboard 显示笔记 → 点击查看 → 编辑/删除 → 分享

### 教学 vs 实践

课程 step-by-step 添加 features 是为演示各工具价值。实际项目中应**先**配置 CLAUDE.md、skills、agents，**再**开始编码。

### 可跳过

本节主要是 walkthrough，若已理解迭代模式可跳过。

## English Short Summary

Walkthrough of iterative prompts building the note app (skippable). Infrastructure (CLAUDE.md, skills, agents) should ideally be set up before coding—course added them step-by-step for teaching. Now ready for feature iteration via focused prompts + Plan Mode.
