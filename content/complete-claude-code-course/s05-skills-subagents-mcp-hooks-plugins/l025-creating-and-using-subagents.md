---
title: "Creating and Using Subagents"
lectureId: 25
section: 5
sectionTitle: "Skills, Subagents, MCP, Hooks & Plugins"
date: "2026-11-10"
tags: ["subagents", "delegation", "testing", "security-review"]
---

## 中文短总结

Subagent 是拥有独立上下文和明确职责的委派工作者。课程分别定义测试、安全和前端专家，再由主会话汇总结果；工具权限应与职责相匹配。

## 中文长总结

- 项目可在 `.claude/agents/` 中定义专门 agent，说明名称、用途、可用工具和执行要求；示例还为 agent 指定了模型。
- 测试专家负责相关验证和失败分析；安全专家关注可复现的风险与证据；前端专家检查组件、响应式行为和可访问性。
- 每个 agent 在独立上下文中处理具体任务并返回结果，主会话负责协调和综合，不必携带全部中间调查。
- 审查任务应默认只读；是否允许执行命令或修改文件应显式限定。只在责任清晰且隔离确有价值时增加 agent，避免无意义的复杂度。

## English Short Summary

Define focused subagents with clear responsibilities and appropriate tool access. They investigate in separate contexts and return relevant findings to a coordinator. The lesson illustrates testing, security, and frontend specialists while cautioning against unnecessary agents.
