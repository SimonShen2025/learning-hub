---
title: "Understanding Model Deployment"
lectureId: 26
section: 2
sectionTitle: "AI-901 - Implement AI solutions - Microsoft Foundry"
date: "2026-06-10"
tags: [model-deployment, inference, microsoft-foundry, openai, api]
---

## 中文短总结

模型部署概念解析。消费者端（ChatGPT）：prompt 发送到 OpenAI 服务器上运行的模型，用户无需关心基础设施。开发者端：应用通过 API 调用模型，按 token 计费。Microsoft Foundry 的角色：将 OpenAI 等模型部署到微软管理的基础设施上，开发者通过 Foundry 调用这些模型（而非直接调用 OpenAI 服务器）。关键术语：Inference = 向模型发送输入并接收输出的过程。

## 中文长总结

### 三种使用模式对比

| 模式 | 谁的模型？ | 谁的基础设施？ | 计费方式 |
|------|-----------|--------------|----------|
| 消费者（ChatGPT） | OpenAI | OpenAI 服务器 | 月费订阅 |
| 开发者（OpenAI API） | OpenAI | OpenAI 服务器 | 按 token |
| Microsoft Foundry | OpenAI 等 | Microsoft 管理 | 按 token |

### Microsoft Foundry 的作用
- 将 OpenAI 等供应商的模型部署到微软管理的计算基础设施
- 开发者通过 Foundry 的端点调用模型
- 基础设施完全由微软管理，开发者无需关心

### 关键概念
- **Inference（推理）**：向模型发送输入并接收输出的过程
- **Deployment（部署）**：将模型放到计算基础设施上使其可被调用
- **Endpoint（端点）**：应用调用模型的 URL 地址

### 为什么需要 Foundry（而非直接用 OpenAI）？
- 企业级管控和合规
- 多供应商模型统一管理
- 与 Azure 生态集成
- 安全性和治理

## 考试要点

- Inference = 向模型发送输入并接收输出的过程
- 模型需要计算基础设施来处理 prompt 和生成响应
- Microsoft Foundry 管理模型的部署基础设施
- 消费者工具（ChatGPT）隐藏基础设施；开发者平台暴露 API
- Foundry 的优势：企业管控、多供应商、Azure 集成

## English Short Summary

Model deployment explained: Consumer tools (ChatGPT) hide infrastructure; developer platforms expose APIs charged per token. Microsoft Foundry deploys vendor models (OpenAI, etc.) on Microsoft-managed infrastructure. Key term: Inference = the process of sending input to a model and receiving output. Foundry provides enterprise governance, multi-vendor management, and Azure ecosystem integration.
