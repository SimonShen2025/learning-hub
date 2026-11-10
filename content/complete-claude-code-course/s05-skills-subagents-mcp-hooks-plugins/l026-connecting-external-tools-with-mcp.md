---
title: "Connecting External Tools with MCP"
lectureId: 26
section: 5
sectionTitle: "Skills, Subagents, MCP, Hooks & Plugins"
date: "2026-11-10"
tags: ["mcp", "playwright", "browser-testing", "permissions"]
---

## 中文短总结

MCP 为 Claude Code 增加外部工具能力。课程以 Playwright 为例，在注册并确认连接后，让 agent 操作运行中的应用，再结合代码调查实际问题。

## 中文长总结

1. 根据服务器当前要求检查运行环境；课程录制时的 Playwright 示例要求 Node.js 20 或更高版本。
2. 在终端注册 MCP server，使用 `claude mcp list` 和会话内的 `/mcp` 检查配置、连接状态及可用工具；配置共享范围取决于选择的 scope。
3. 启动目标应用后，让浏览器工具导航、交互并观察界面或错误，再关联相关源代码定位问题；课程示例先报告而不修改代码。
4. MCP 增加的是能力而非自动信任。审查服务器来源、暴露的工具、网络及账户权限，仅批准任务确实需要的操作；按需禁用或移除连接。

## English Short Summary

Connect and inspect an MCP server to give Claude Code additional capabilities. The lesson uses Playwright to interact with a running app, observe behavior, and correlate issues with source code. Review server provenance, scope, and permissions.
