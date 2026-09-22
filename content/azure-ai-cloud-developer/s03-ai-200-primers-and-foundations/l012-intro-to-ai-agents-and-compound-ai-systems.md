---
title: "Intro to AI Agents and Compound AI Systems"
lectureId: 12
section: 3
sectionTitle: "AI-200 Primers and Foundations"
date: "2026-09-22"
tags: ["ai-agents", "compound-ai-systems", "genai-fundamentals"]
---

## 中文短总结

复合 AI 系统（Compound AI System）通过组合多个交互组件来完成任务，而非仅依赖单一大语言模型的聊天能力，从而提升投资回报率。AI 智能体（Agent）本质上是一种复合 AI 系统：大语言模型被赋予调用外部工具/API 的能力，并能根据用户意图在运行时动态规划执行步骤，而非依赖硬编码的 if-else 逻辑。

## 中文长总结

### 背景与动机

- 早期生成式 AI 应用（如 2021 年 ChatGPT 出现后）多为基于基础大语言模型的简单聊天机器人
- 企业发现单纯聊天机器人难以证明投资回报率（ROI），因此需要让 LLM 具备调用 API、对接外部系统的能力，实现业务流程自动化

### 复合 AI 系统（Compound AI System）

- 定义：通过组合多个交互组件来处理 AI 任务的系统，而非单一模型
- LLM 不再只用于对话，还能调用 API 执行后端操作或与其他软件交互

### AI 智能体（AI Agent）

- 可视为复合 AI 系统的一种特殊形态
- 组成：基础大语言模型 + 工具/API 访问权限 + 基于用户意图动态规划执行顺序的自主能力
- 与传统硬编码 if-else 逻辑的系统不同，Agent 在运行时动态决定工具调用的顺序
- 行业对 Agent 尚无统一定义，但普遍理解为：模型承担部分或全部规划决策的 AI 系统

### 演进过程

1. 早期：基础 LLM 构建简单聊天机器人
2. 过渡期：LLM 接入外部系统，但执行顺序仍由开发者硬编码
3. 现阶段：赋予 LLM 自主规划能力，形成真正的 AI Agent

## English Short Summary

A compound AI system tackles tasks by combining multiple interacting components rather than relying on a single LLM chat interface, improving ROI over plain chatbots. AI agents are a form of compound AI system: a foundational LLM is given access to tools/APIs and the autonomy to dynamically plan the execution sequence at runtime based on user intent, rather than following hard-coded if-else logic — marking the evolution from early 2021-era chatbots to today's autonomous agents.
