---
title: "CLAUDE.md vs Skills vs Subagents vs MCP vs Hooks vs Plugins"
lectureId: 23
section: 5
sectionTitle: "Skills, Subagents, MCP, Hooks & Plugins"
date: "2026-11-10"
tags: ["claude-md", "skills", "subagents", "mcp", "hooks"]
---

## 中文短总结

这些机制解决不同问题：`CLAUDE.md` 提供持续项目上下文，skill 提供流程，subagent 隔离任务，MCP 连接工具，hook 响应事件，plugin 打包分发能力。

## 中文长总结

| 机制 | 主要职责 |
| --- | --- |
| `CLAUDE.md` | 提供跨任务适用的项目约定、命令和边界。 |
| Skill | 在需要时提供可复用的专业知识或步骤。 |
| Subagent | 在独立上下文中完成有明确边界的委派任务。 |
| MCP | 暴露外部系统、数据或工具能力。 |
| Hook | 在指定生命周期事件触发自动操作或检查。 |
| Plugin | 将多个扩展资源打包、共享和安装。 |

它们可以组合：例如 skill 描述排查步骤，MCP 提供监控工具，subagent 执行独立调查。选择能解决问题的最简单机制，避免把所有流程永久放入项目上下文或为简单任务增加不必要的委派。

## English Short Summary

Project instructions provide persistent context; skills provide procedures; subagents isolate delegated work; MCP connects external capabilities; hooks react to events; and plugins package extensions. These layers complement one another rather than being interchangeable.
