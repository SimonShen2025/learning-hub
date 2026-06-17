---
title: "Using Claude Code Channels (Telegram)"
lectureId: 51
section: 3
sectionTitle: "Beyond Local CLI Usage"
date: "2026-06-17"
tags: ["claude-code", "channels", "telegram", "integrations"]
---

## 中文短总结

**Channels** 允许通过任意通信渠道（Slack、WhatsApp、Telegram 等）向 Claude Code 发消息。官方支持 Telegram channel。在 Claude session 中配置后，可从 Telegram 远程与本地 Claude Code 交互——Desktop/Mobile App 之外的第三种远程方式。

## 中文长总结

### Channels 概念

- 将 Claude Code 连接到外部 messaging platform
- 从任何 channel 推送 prompt → 本地 Claude Code 执行
- 可自建 custom channels（官方文档）

### Telegram 示例

- 官方内置 Telegram channel 支持
- 在 Claude session 中 setup
- 通过 Telegram bot 发送 coding 指令

### 适用场景

- 不想装 Claude Mobile App
- 团队已有 Slack/Telegram 工作流
- 从任意 device 快速 fire prompt

### 与其他远程方式对比

| 方式 | 渠道 | 绑定 |
|------|------|------|
| Dispatch | Mobile App | 本地 Desktop |
| Remote Control | Mobile App | Project/Session |
| Channels | Telegram/Slack/等 | Custom |

## English Short Summary

Channels connect Claude Code to messaging platforms (Telegram officially supported, also Slack/WhatsApp). Send prompts from any channel to local Claude Code. Alternative to Mobile App for remote access. Custom channels buildable per official docs.
