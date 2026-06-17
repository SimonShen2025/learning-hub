---
title: "Introducing Agent Skills"
lectureId: 32
section: 2
sectionTitle: "Key Features & Efficient Usage"
date: "2026-06-17"
tags: ["claude-code", "agent-skills", "open-standard"]
---

## 中文短总结

Agent Skills 是开放标准（Cursor、OpenCode 等也支持），定义按需加载的额外 context。每个 skill 包含必需的 `SKILL.md` 和可选的附加文档/脚本。适合封装 React 最佳实践、Python 规范等可复用知识。

## 中文长总结

### Skills vs Subagents

| | Subagents | Skills |
|---|-----------|--------|
| 执行方式 | 独立 agent 运行子任务 | 动态加载 context 片段 |
| 标准 | Claude Code 特有 | 开放标准，跨工具 |
| 内容 | 完整 agent 定义 | SKILL.md + 可选资源 |

### Skill 结构

```
.claude/skills/my-skill/
  SKILL.md          # 必需：name + description + 指令
  docs/             # 可选：参考文档
  scripts/          # 可选：可执行脚本
```

### 加载机制

Claude 根据 skill description 判断何时加载——类似 subagent 触发，但是注入 context 而非 spawn 新 agent。

### 典型用例

- React 组件最佳实践
- 项目特定的 coding conventions
- 重复性工作流的领域知识

## English Short Summary

Agent Skills are an open standard for dynamically loaded context (SKILL.md + optional docs/scripts). Supported across Cursor, OpenCode, etc. Unlike subagents (spawn workers), skills inject specialized knowledge when relevant—e.g., React best practices or project conventions.
