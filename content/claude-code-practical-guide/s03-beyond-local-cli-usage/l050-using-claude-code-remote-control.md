---
title: "Using Claude Code Remote Control"
lectureId: 50
section: 3
sectionTitle: "Beyond Local CLI Usage"
date: "2026-06-17"
tags: ["claude-code", "remote-control", "mobile"]
---

## 中文短总结

**Remote Control**（`/remotecontrol` 或 `claude remotecontrol`）与 Dispatch 类似但绑定具体项目和 session——可从 mobile 继续或启动某个项目的 Claude Code session。首次使用需 activate。

## 中文长总结

### Remote Control vs Dispatch

| | Dispatch | Remote Control |
|---|----------|---------------|
| 绑定 | 任意 task → 本地机器 | 具体 project + session |
| 继续 session | ❌ 新 task | ✅ 可继续已有 session |
| 启动方式 | Mobile App | `/remotecontrol` 或 CLI |

### 启用

```bash
claude
/remotecontrol
# 或
claude remotecontrol
```

首次需 activate。

### 使用场景

- 在 CLI 中开始 session，外出后用 mobile 继续同一 context
- 远程向特定项目发送 prompt
- 比 Dispatch 更精准的项目/session 绑定

### 工作流

1. 本地启动 remote control mode
2. Mobile App 连接
3. 发送 prompt 或继续现有 conversation

## English Short Summary

Remote Control (/remotecontrol): continue or start project-bound Claude Code sessions from mobile. Unlike Dispatch (fire-and-forget tasks), binds to specific project/session. Activate on first use. Bridge between local CLI work and mobile access.
