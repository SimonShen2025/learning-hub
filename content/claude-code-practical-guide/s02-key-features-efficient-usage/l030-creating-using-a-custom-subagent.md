---
title: "Creating & Using A Custom Subagent"
lectureId: 30
section: 2
sectionTitle: "Key Features & Efficient Usage"
date: "2026-06-17"
tags: ["claude-code", "subagents", "docs-explorer"]
---

## 中文短总结

在 `.claude/agents/` 下创建自定义 subagent（如 Docs Explorer）。每个 agent 是一个 markdown 文件，含 name、description、instructions。Description 决定 Claude 何时自动委派；专门用于隔离文档查阅任务，保护主 context。

## 中文长总结

### 创建步骤

```
.claude/agents/docs-explorer.md
```

文件包含 frontmatter：
- **name**：agent 名称
- **description**：Claude 用此判断何时委派（关键字段）
- **instructions**：agent 行为规则

### Docs Explorer 示例

专门负责：
- 查阅第三方库官方文档
- 通过 Context7 MCP 或 web search 获取最新 API 信息
- 返回精简摘要给主 agent

### 为何自定义

录制时可能尚无内置 docs agent，但 pattern 通用——任何会大量消耗 context 的子任务都适合独立 subagent。

### 最佳实践

- Description 要具体，提高自动触发率
- Instructions 限定输出格式（摘要，非全文粘贴）
- 一个 agent 一个职责

## English Short Summary

Create custom subagents in .claude/agents/ as markdown files with name, description, and instructions. Description drives auto-delegation. Docs Explorer example isolates documentation lookups to protect main context. One agent, one responsibility.
