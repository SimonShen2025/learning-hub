---
title: "Understanding AI Agents"
lectureId: 8
section: 1
sectionTitle: "Claude Code Foundations"
date: "2026-11-10"
tags: ["ai-agents", "context-engineering", "agent-memory", "mcp", "agent-security"]
---

## 中文短总结

AI agent 结合模型、上下文、工具、记忆和权限，在目标与限制内观察、行动并验证。固定流程不一定需要 agent；可靠性依赖停止条件、最小权限、评估和必要的人工批准。

## 中文长总结

### Agent 与执行循环

聊天主要返回回答，固定 workflow 按预设步骤执行；agent 可依据中间结果决定后续行动。典型循环是观察、理解、规划、执行和验证，由 harness 协调模型、工具及状态。应设置完成、预算耗尽、达到步骤上限或需要批准等停止条件；可预测的简单流程往往不必使用 agent。

### 上下文、记忆与扩展

- **Context：**当前任务所需的指令、历史、资料和工具结果；优先提供相关信息，详细资料按需读取。
- **Memory：**保存并在未来检索有价值的信息；应选择性记录来源和必要的时间信息，并允许审查、更新或删除，避免固化错误。
- **Tools、MCP、Skills：**工具提供操作；MCP 为连接外部能力提供共同协议；skill 则记录可复用的专业流程。标准化连接不等于自动获得授权或保证安全。

### 自主性与安全

按任务选择会话式或持续运行的 agent；多 agent 和模型路由可分工，但会增加成本与协调复杂度。对外发送、删除、付款等高影响操作应设置人工批准。防范不可信内容中的 prompt injection，采用最小权限、隔离环境、预算与步骤限制，并避免暴露密钥。

从可审查的小任务开始，先限制为读取或生成草稿，再依据测试、结果质量和人工反馈逐步扩展权限与能力。

## English Short Summary

An agent combines a model, context, memory, tools, and permissions to act toward a goal and verify outcomes. A harness coordinates the loop. Use fixed workflows when sufficient, define stopping limits, protect against prompt injection, require approval for sensitive actions, and evaluate results before expanding autonomy.
