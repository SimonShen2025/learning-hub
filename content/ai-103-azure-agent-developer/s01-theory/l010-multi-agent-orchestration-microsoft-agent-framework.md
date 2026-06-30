---
title: "Unit 9: Multi-Agent Orchestration – Microsoft Agent Framework"
lectureId: 10
section: 1
sectionTitle: "Theory"
date: "2026-07-01"
tags: ["AI-103", "Azure AI", "multi-agent", "Microsoft Agent Framework", "orchestration", "Semantic Kernel", "AutoGen"]
---

## 中文短总结

Microsoft Agent Framework 是 Semantic Kernel + AutoGen 的官方继任，Python/C# SDK。三大编排模式（必背）：Magentic（Manager 路由子 Agent，不传历史）、Handoff（完整对话+状态转移）、Group Chat（共享空间+speaker selection）。Orchestrator 管理路由、conversation ID、JSON payload。Handoff 序列化 history/short-term/long-term memory/pending tool results。错误：retry/escalation/fallback。Foundry Trace span 追踪。考试占比约 35%。

## 中文长总结

### 为何需要多 Agent
- 单 Agent 无法精通一切；system instruction、工具集、权限都有上限
- 专业化 Agent + 特定工具 + 特定权限 → 协作产出最优结果

### Microsoft Agent Framework
- **Semantic Kernel + AutoGen 统一继任**（Python & C#）
- 内置：Agent 类、工具定义、对话管理、多 Agent 工作流编排
- 企业需要**标准化模式**，避免每个项目写自定义编排代码

### 三大编排模式（100% 必背）

#### 1. Magentic / Manager Pattern
- 中央 **Manager Agent** 接收请求，委派给专业化子 Agent
- Manager system instruction：「协调专家，不直接回答，委派正确子 Agent」
- 子 Agent **互不知晓**（refund / tech support / account）
- 流程：用户问退款 → Manager → Refund Agent → 返回结果

#### 2. Handoff Pattern
- **完整对话控制权转移**，含 context、state、memory
- Agent A：「无法处理账单，转接 Billing Agent」→ A 停止，B 接续
- **State transfer** 含：conversation history、short-term memory、long-term memory（用户偏好）、pending tool results
- 序列化：`json.dumps` / `json.loads`
- Framework 提供 **handoff_to_agent** 工具，Orchestrator 自动转移

#### 3. Group Chat Pattern
- 多 Agent 共享**同一对话空间**，轮流发言
- 所有 Agent 看到每条消息；**无 Manager**
- **Speaker selection algorithm**（非 Manager）根据 system instruction + 对话上下文决定下一发言者
- 例：架构 Agent + 编码 Agent + 测试 Agent 协作

### Magentic vs Handoff（考试选择）
| 场景 | 模式 |
|------|------|
| Manager 路由，**不需**传递对话历史 | **Magentic** |
| 跨域对话需**无缝延续**上下文 | **Handoff** |
| 独立问题（「退款状态？」） | Magentic |
| 同一问题跨域（「订单迟了，还要退运费」） | Handoff |

### Orchestrator
- **运行时协调器**：接收用户消息、路由 Agent、管理 conversation state
- 职责：注册 Agent 列表、维护 history、group chat speaker selection、消息路由
- 每对话唯一 **conversation ID** → 检索 history、路由后续消息
- JSON payload 贯穿：message、tool call、handoff state

### JSON 结构（考试）
- **Message**：role, content, conversationId
- **Tool call**：tool name, parameters, toolCallId
- **Handoff**：fromAgent, toAgent, conversationState, messages

### API Key 管理
- **Per-agent** 字典映射 endpoint + API key（非全局）
- Tool call 时注入对应 Agent 的 key
- Key rotation 只更新该 Agent 配置

### Sequential vs Concurrent（预览）
- Sequential：`.process()`，A 完成 → B 用 A 输出
- Concurrent：`process.async` / `asyncio.gather`，并行后合并

### 错误处理策略
- **Retry**：工具失败指数退避重试 3 次
- **Escalation**：Refund Agent 无法处理国际订单 → 转 Escalation Agent
- **Fallback**：「无法完成，已通知人工」+ Foundry Trace 记录

### 监控（Foundry Trace）
- 每 Agent 动作 = 一个 **span**（agent name, operation type, duration）
- Handoff 可视化为 span 间连线
- **Reasoning loop**：Agent 来回 handoff 无进展 → 高成本，Trace 可识别

## 考试要点

- Agent Framework = SK + AutoGen 继任；**~35% 考试权重**
- 三模式：**Magentic、Handoff、Group Chat**
- Magentic：Manager 路由，子 Agent 隔离；Handoff：完整 state 转移
- Orchestrator + conversation ID + JSON payloads
- Handoff 转移：history、short/long memory、pending tool results
- Per-agent API key；错误 retry/escalation/fallback
- Foundry Trace span、reasoning loop 调试

## English Short Summary

Microsoft Agent Framework unifies Semantic Kernel and AutoGen for Python/C# multi-agent systems. Three orchestration patterns to memorize: Magentic (central manager delegates to specialists without sharing history), Handoff (full conversation and state transfer including history, memory, pending tools), and Group Chat (shared space with speaker-selection algorithm). The Orchestrator routes messages, manages conversation IDs, and handles JSON payloads for messages, tool calls, and handoffs. Manage API keys per agent. Error strategies: retry, escalation, fallback. Foundry Trace spans visualize agent actions and handoffs; detect costly reasoning loops. This domain is ~35% of the AI-103 exam.
