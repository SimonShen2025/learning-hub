---
title: "Installing & Using Plugins"
lectureId: 41
section: 2
sectionTitle: "Key Features & Efficient Usage"
date: "2026-06-17"
tags: ["claude-code", "plugins", "marketplace"]
---

## 中文短总结

`/plugin` 命令访问 Claude Code 插件系统，可安装预配置的 skills、commands、agents、MCP servers 等 bundle，省去手动 setup 时间。也可自建 custom plugins。适合快速引入 Playwright MCP 等常用集成。

## 中文长总结

### 为何需要 Plugins

手动配置 skills、agents、commands、MCP servers 不复杂但耗时。Plugins 打包这些配置为一键安装。

### 使用方式

- `/plugin` 浏览/安装/管理插件
- 社区和官方提供多种预配置 bundle
- 也可 build custom plugins（见官方文档）

### 典型 Plugin 内容

一个 plugin 可能包含：
- Pre-configured MCP servers（如 Playwright）
- Ready-made skills 和 commands
- Agent definitions
- Hooks 配置

### 与手动配置的关系

Plugins 是 shortcuts，底层机制相同。理解 skills/agents/MCP 后，plugins 是加速 adoption 的方式。

## English Short Summary

/plugins provides pre-bundled skills, commands, agents, and MCP servers—saves manual setup time. Install community/official plugins or build custom ones. Underlying mechanisms same as manual config; plugins are convenience bundles.
