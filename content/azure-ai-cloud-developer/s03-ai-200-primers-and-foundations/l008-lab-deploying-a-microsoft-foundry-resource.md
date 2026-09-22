---
title: "Lab: Deploying a Microsoft Foundry Resource (Hands-On Lab)"
lectureId: 8
section: 3
sectionTitle: "AI-200 Primers and Foundations"
date: "2026-09-22"
tags: ["microsoft-foundry", "azure-portal", "hands-on-lab", "model-catalog"]
---

## 中文短总结

本实验演示在 Azure 门户中搜索并创建 Microsoft Foundry 资源与默认项目，随后进入 Foundry 门户（ai.azure.com），介绍资源管理区（项目、密钥与端点）以及 Foundry 门户中的 Discover（模型目录、排行榜）、Build（Agent Service、模型部署、工具、知识库）、Operate（控制平面可观测性）等主要区域。

## 中文长总结

### 部署步骤

1. 在 Azure 门户搜索 "Microsoft Foundry"（紫色图标）
2. 创建新资源组，命名 Foundry 资源，选择区域（示例选用 Sweden Central）
3. 创建资源时会自动生成一个默认项目
4. 其余标签页（存储、网络、身份、加密、标记）保持默认值，点击"审阅并创建"完成部署

### 资源管理区

- **项目（Projects）**：可查看/创建多个项目，并为不同项目分配基于角色的访问权限
- **密钥和终结点（Keys and Endpoint）**：提供主/副密钥用于身份验证；分为 Foundry 端点、OpenAI 端点（GPT 系列 LLM）、AI Services 端点（语音转文本、文本转语音、文本翻译等预测式 AI 服务）

### Foundry 门户（ai.azure.com）主要区域

- **Discover**：模型目录（含 Anthropic、OpenAI、DeepSeek、Grok、Microsoft 等厂商模型）与排行榜（按质量指数、安全评分、吞吐量、成本对比模型）
- **Build**：Agent Service（创建智能体与多智能体工作流）、Models（管理已部署模型）、Fine-tuning（微调自有模型，本课程不涉及）、Tools（API 插件）、Knowledge（连接 CRM、SharePoint、OneDrive、SQL 等企业知识库）
- **Operate**：Foundry 控制平面，查看运行中的智能体数量、预估成本、token 用量与智能体成功率

## English Short Summary

Hands-on lab creating a Microsoft Foundry resource and its default project in the Azure portal, then exploring the Foundry portal (ai.azure.com). Covers the resource management area (Projects, Keys and Endpoints for OpenAI/AI Services/Foundry endpoints) and the portal's three main areas: Discover (model catalog and leaderboard), Build (Agent Service, model deployments, fine-tuning, tools, knowledge bases), and Operate (control plane observability for agent count, cost, token usage, and success rate).
