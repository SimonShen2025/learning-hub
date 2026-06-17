---
title: "Scheduling Tasks With Claude Code"
lectureId: 53
section: 3
sectionTitle: "Beyond Local CLI Usage"
date: "2026-06-17"
tags: ["claude-code", "scheduled-tasks", "routines", "automation"]
---

## 中文短总结

**Routines/Scheduled Tasks**：在 Desktop App 或 CLI（`/schedule`）中创建定时执行的 Claude Code 任务。可设每日/每周 schedule、绑定项目文件夹、选 model、设 bypass permissions。适合定期 code review、dependency audit 等 recurring 任务。

## 中文长总结

### Routines 功能

- Desktop App 中叫 **Routines**
- CLI 中用 `/schedule`
- 定时向 Claude Code 发送 preset prompt

### 配置项

- **Schedule**：每天、每个 weekday、每周特定时间
- **Scope**：Local（本地）或 Remote（云端）
- **Project folder**：绑定工作目录
- **Permissions**：可设 bypass 避免被 permission 阻塞
- **Model**：选择 AI model
- **Prompt**：任务描述

### 示例用例

- 每日 morning：分析 overnight CI failures
- 每周：dependency audit + 安全更新 PR
- 每日：code quality review on main branch

### 与 Ralph Loop 的关系

Routines = 定时触发；Ralph Loop = 单次任务内循环迭代。可组合使用。

## English Short Summary

Scheduled Tasks/Routines: cron-like Claude Code automation via Desktop App or /schedule in CLI. Configure schedule, project folder, model, permissions. Use for daily code reviews, weekly dependency audits, recurring analysis tasks.
