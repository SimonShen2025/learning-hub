---
title: "Using Claude Code Web (Cloud)"
lectureId: 45
section: 2
sectionTitle: "Key Features & Efficient Usage"
date: "2026-06-17"
tags: ["claude-code", "cloud", "claude-code-web"]
---

## 中文短总结

Claude Code Web（claude.ai/code）可将任务 offload 到云端执行。代码需在 GitHub 仓库中。需 Pro/Max/Teams/Enterprise 订阅。适合离开电脑时 dispatch 简单变更（如全局换色）。

## 中文长总结

### Claude Code Web

- 访问 **claude.ai/code**
- 连接 GitHub repo，在云端运行 Claude Code
- 本地无需保持 Claude CLI 运行

### 前提条件

- 代码 push 到 GitHub
- Pro、Max、Teams 或 Enterprise 订阅（录制时要求）

### 使用场景

- 离开电脑但需要小改动（"change blue to purple everywhere"）
- 不想占用本地资源
- 与本地 CLI 互补，非替代

### 工作流

1. Push 项目到 GitHub
2. 在 claude.ai/code 选择 repo
3. 描述任务 → 云端 Claude Code 执行 → PR 或 direct commit

### 与 Desktop Dispatch 的区别

Web = 完全云端；Dispatch/Remote Control = 本地机器执行，远程触发。

## English Short Summary

Claude Code Web (claude.ai/code) offloads tasks to cloud—connect GitHub repo, dispatch prompts remotely. Requires Pro/Max/Teams/Enterprise. Use when away from machine for simple changes. Code must be in GitHub. Complements local CLI, doesn't replace it.
