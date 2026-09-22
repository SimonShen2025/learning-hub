---
title: "Intro to the Microsoft Foundry Ecosystem"
lectureId: 6
section: 3
sectionTitle: "AI-200 Primers and Foundations"
date: "2026-09-22"
tags: ["microsoft-foundry", "model-catalog", "ai-agents", "platform-as-a-service"]
---

## 中文短总结

Microsoft Foundry 是一站式 AI 开发平台即服务，解决快速原型、实验评估与生产级 AI 工作负载三大痛点。核心能力包括：模型目录（11000+ 模型，按需部署）、Agent Service、Foundry IQ（企业知识库）、工具集成（MCP、Logic Apps、向量索引）、控制平面可观测性、Foundry Local，以及内置安全合规与第三方 SDK（LangChain、CrewAI 等）支持。

## 中文长总结

### 解决的三大问题

1. **快速原型/POC**：模型部署与端点管理缺乏统一平台
2. **实验与评估**：难以快速测试不同 prompt/数据集效果
3. **生产级工作负载**：需要可观测性、安全性与可扩展性的统一保障

### 核心能力

- **模型目录（Model Catalog）**：一键部署来自 Meta、Anthropic、OpenAI、Grok 等厂商的 11000+ 模型，按 token/用量付费，无需管理底层基础设施
- **Agent Service**：基于 LLM 创建带有 API 插件、工具与知识库的智能体，可对接企业数据（SharePoint、OneDrive、M365、SQL）
- **Foundry IQ**：汇聚企业知识库以驱动 Agent Service 中的智能体
- **工具（Tools）**：MCP 服务器、Logic Apps、向量索引、API 定义等
- **机器学习集成**：支持自定义模型训练
- **Foundry 控制平面**：跟踪智能体数量与运行状态，提供可观测性
- **Foundry Local**：本地私有化运行 LLM 应用
- **内置安全、合规与治理**

### 其他要点

- Foundry 不局限于生成式 AI，也涵盖预测式 AI（图像识别、OCR、语言分析、语音转文本等）
- 原生支持第三方框架：Microsoft Agent Framework、LangChain、LangGraph、CrewAI、LlamaIndex

## English Short Summary

Microsoft Foundry is a one-stop platform-as-a-service that solves three developer pain points: rapid prototyping/MVP deployment, prompt/dataset experimentation, and production-grade AI workloads (observability, security, scalability). Key capabilities include a 11,000+ model catalog (pay-per-use), Agent Service, Foundry IQ for enterprise knowledge, tool integrations (MCP, Logic Apps, vector indexes), a control plane for observability, Foundry Local, built-in security/compliance, and native support for third-party SDKs like LangChain and CrewAI.
