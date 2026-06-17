---
title: "Dispatching Tasks From The Mobile App"
lectureId: 49
section: 3
sectionTitle: "Beyond Local CLI Usage"
date: "2026-06-17"
tags: ["claude-code", "mobile-app", "dispatch"]
---

## 中文短总结

**Dispatch** 功能：从 Claude Mobile App 向本地 Desktop App dispatch 任务（需 Desktop 开机且启用 Dispatch）。可设置 keep awake 防止电脑休眠。适合不在电脑前时远程触发本地 Claude Code 执行任务。

## 中文长总结

### Dispatch 工作流

1. Desktop App 中首次启用 Dispatch
2. 确保电脑开机、Desktop App 运行
3. Mobile App 发送 task prompt
4. 本地 Desktop 上的 Claude Code 执行

### 前提

- 本地机器必须 online
- Dispatch 功能需手动 enable
- 可选 Keep Awake 防止 sleep 中断任务

### 使用场景

- 通勤/外出时触发本地项目上的 coding task
- 本地有 GPU/特定环境依赖，不能用 Cloud
- 原属 Claude Cowork 功能，现也支持 Claude Code

### 局限

- 依赖本地机器 availability
- 不如 Claude Code Web 方便（Web 不需要本地 online）

## English Short Summary

Dispatch: send tasks from Claude Mobile App to locally running Desktop App. Requires machine on, Dispatch enabled, optionally Keep Awake. Remote-trigger local Claude Code when away from desk. Originally Cowork feature, now works with Claude Code too.
