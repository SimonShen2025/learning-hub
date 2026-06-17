---
title: "Using MCP Servers & More On Permissions"
lectureId: 28
section: 2
sectionTitle: "Key Features & Efficient Usage"
date: "2026-06-17"
tags: ["claude-code", "mcp", "context7", "model-context-protocol"]
---

## 中文短总结

MCP（Model Context Protocol）是向 AI 暴露 tools/resources 的标准。Claude Code 可接入多种 MCP server 扩展能力。**Context7** MCP 特别实用：提供第三方库的官方文档访问，避免 Claude 用过时 API 知识。

## 中文长总结

### MCP 概念

- **Model Context Protocol**：标准化 AI tools/resources 接口
- Claude Code 按需调用 MCP tools（类似 web search）
- 官方文档维护 popular MCP servers 列表

### Context7 MCP（推荐）

- 专门提供**库官方文档**访问
- 解决 LLM 训练数据过时问题
- 适合 better-auth、Tiptap 等需要准确 API 的场景

### 配置方式

通过 Claude Code 配置添加 MCP server（具体命令见官方文档，课程演示 Context7 安装）。

### 与 Permissions 的关系

MCP tools 也会出现在 `/context` 的 token 占用中，且某些 MCP 操作可能触发额外 permission 请求。

## English Short Summary

MCP (Model Context Protocol) extends Claude Code with external tools/resources. Context7 MCP provides official library docs—critical for accurate API usage. MCP tools appear in context window and may trigger permission prompts like built-in tools.
