---
title: "Understanding Sessions & Context"
lectureId: 10
section: 1
sectionTitle: "Getting Started"
date: "2026-06-17"
tags: ["claude-code", "sessions", "context-window", "slash-commands"]
---

## 中文短总结

Claude Code 基于 session 工作。`/clear` 清空上下文开始新 session；`/context` 显示 token 占用（系统 prompt、工具描述、MCP 等）；`/usage` 查看订阅剩余额度。支持多 session 并行，但避免同时改同一文件。

## 中文长总结

### Session 管理

- 每个 Claude Code 实例是一个独立 session，有独立 context window
- `/clear`：清空对话与上下文，适合 AI 卡住或切换任务
- 也可开新终端窗口启动另一个 `claude` 实例并行工作

### Context 组成（`/context`）

即使刚 clear，也有约 20k/200k tokens 被占用：
- System prompt（Anthropic 预设）
- System tools 描述
- MCP tools（若已配置）
- **Auto compact buffer**：预留用于自动压缩的 token

### Compaction

接近 context 上限时，Claude Code 自动生成工作摘要，丢弃旧 context 继续执行。

### 其他命令

- `/usage`：查看当前 Claude Code 订阅剩余用量

## English Short Summary

Sessions have independent context windows. /clear resets context; /context shows token breakdown (system prompt, tools, MCP, auto-compact buffer). Multiple parallel sessions OK—avoid editing same files. /usage shows subscription limits. Auto-compaction summarizes old context when nearing limits.
