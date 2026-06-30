---
title: "Unit 1: What Is an AI Agent?"
lectureId: 1
section: 1
sectionTitle: "Theory"
date: "2026-07-01"
tags: ["AI-103", "AI-agent", "Microsoft-Foundry", "Entra-Agent-ID", "reasoning-tools-memory"]
---

## 中文短总结

AI-103 取代 AI-102，重心从通用 Azure AI 转向 **Agentic AI**。Agent 是用 LLM 驱动的软件服务，具备 **reasoning（推理）**、**tool use（工具调用）**、**memory（记忆）** 三大能力，可自主完成多步任务并产生真实世界动作。与无状态 API 调用不同，Agent 是 **stateful** 的。LLM 只是 Agent 的“大脑”，外层软件负责执行工具、管理记忆与身份。课程还引入 Microsoft Foundry、Foundry Trace、Entra Agent ID、Content Safety、Red Teaming 等 AI-103 核心考点。

## 中文长总结

### AI-102 → AI-103 转变
- **AI-102**：文档 OCR、语音合成等通用 AI 服务
- **AI-103**：聚焦 **Agentic AI**——推理、工具、记忆、多 Agent 编排、MCP、Content Safety

### Agent 定义与三大能力
- **Agent**：让 LLM **独立、多步** 完成用户目标的软件服务；像“员工”而非“工具”
- **Reasoning**：将目标拆解为步骤，按情境决策
- **Tool use**：调用搜索引擎、数据库、内部 API 获取信息或执行动作
- **Memory**：短期（会话内）与长期（跨会话偏好、地址等）；区别于 **reprompting**（每次重发全量历史）

### API 调用 vs Agent
| 维度 | 普通 API | Agent |
|------|----------|-------|
| 状态 | 通常 **stateless** | **Stateful**，保留上下文 |
| 能力 | 单次 Q&A | 多步推理 + 工具 + 记忆 |
| 输出 | 文本 | 可触发数据库更新、发邮件等 **真实动作** |

### LLM 与 Agent 的关系
- LLM = 统计预测模型，决定“下一步该做什么”，**不能自行执行**
- Agent = 包裹 LLM 的软件层，负责解析 tool-call JSON、调用 API、持久化记忆

### Token 与 System Message
- **Token**：计费单位（约 4 英文字符），有模型级 **token limit**；多轮对话 token 累积，成本与上下文窗口均上升
- **System message**：持久约束 Agent 行为与边界（如 Contoso 客服规则），区别于 user message；是安全与防攻击的第一道防线

### Tool Calling 机制
- LLM 输出特殊 **JSON**（工具名 + 参数）→ Agent 运行时执行 → 结果回传继续推理

### Microsoft Foundry 概览
- AI-103 **核心平台**，取代 Azure AI Studio；一站式：模型部署、Agent 托管、身份、Trace、安全
- 层级：**Hub** → **Project** → **Agent Service**（托管运行时）
- **Foundry Trace**：记录每步 LLM 调用、工具调用、记忆查找；用于排查 **reasoning loop**（重复调用同一工具无进展）

### Entra Agent ID
- Agent 获得与 human user 同级的 **独立身份**（Service Principal），不再冒充开发者
- 可审计、最小权限、**Sponsor**（人类责任人）审批高风险操作

### Content Safety 与 Red Teaming
- Azure Content Safety 扫描输入/输出四类有害内容
- **Jailbreak**：绕过 system message / 安全过滤的 crafted prompt
- **Prompt injection**：隐藏指令覆盖 Agent 规则
- **Red Teaming**：自动化攻击 Agent 发现漏洞（Foundry 内置，基于 PyRIT）

### SDK vs REST
- **SDK**：预封装 Python/C# 函数，开发快
- **REST**：HTTP 直调，灵活；考试两种都要会

### 考试五大域（预告）
Foundry 管理、Generative AI/Grounding、Orchestration、Observability、Enhancement

## 考试要点

- Agent 三要素：**reasoning + tools + memory**；LLM ≠ Agent
- **Stateful vs stateless** 是常见考题场景
- **System message** 持久生效，定义 persona 与边界
- Tool calling 流程：LLM 输出 JSON → 执行 → 回传
- Foundry 层级：Subscription → **Hub** → **Project**（存 agent code）→ **Agent Service**（运行）
- **Entra Agent ID**：独立 Service Principal + Sponsor 机制
- Content Safety 四类 + Red Teaming / jailbreak / prompt injection 概念
- AI-103 以 **Microsoft Foundry** 为中心；SDK 与 REST 均需掌握

## English Short Summary

AI-103 replaces AI-102 with an agentic-AI focus. An agent is software wrapping an LLM to autonomously complete multi-step goals via reasoning, tool calling, and memory—stateful unlike typical stateless API calls. Tokens drive cost and context limits; system messages persistently bound behavior. Microsoft Foundry (successor to Azure AI Studio) is the exam’s central platform: hubs, projects, managed agent service, and Foundry Trace for debugging loops. Entra Agent ID gives agents their own service principal and sponsor accountability. Content Safety, jailbreak/prompt-injection defenses, and automated red teaming round out the security baseline.
