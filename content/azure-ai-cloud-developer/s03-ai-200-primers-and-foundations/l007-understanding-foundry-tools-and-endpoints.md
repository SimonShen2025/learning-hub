---
title: "Understanding Foundry Tools and Endpoints"
lectureId: 7
section: 3
sectionTitle: "AI-200 Primers and Foundations"
date: "2026-09-22"
tags: ["microsoft-foundry", "api-endpoints", "authentication", "entra-id"]
---

## 中文短总结

本课讲解 Microsoft Foundry 资源的组织结构：资源（部门/组织层）→ 项目（团队协作层）→ 工作区（部署模型、创建智能体）。资源提供多种 API 端点（OpenAI、AI Services、Foundry 模型目录），可用 API Key（主/副密钥）或 Microsoft Entra ID 进行身份验证。

## 中文长总结

### 资源层级结构

- **资源（Resource）**：部署在 Azure 门户中的 Microsoft Foundry 平台即服务实例，通常对应组织或部门层级
- **项目（Project）**：资源内的协作单元，对应团队层级，供同事共同迭代
- **工作区（Workspace）**：每个项目内的操作平面，用于部署模型目录中的模型、创建 Agent Service 智能体

### API 端点分类

- **OpenAI 标签页**：访问 OpenAI 系列大语言模型（GPT-4.1、GPT-5 等）的端点
- **AI Services 标签页**：访问预测式 AI 能力的端点，如计算机视觉、内容安全、文档智能、语言翻译、语音转文本/文本转语音
- **Foundry 标签页**：访问模型目录中其他厂商模型（如 Anthropic、Google Gemini）的端点

### 身份验证

- 每个资源提供主密钥（Key 1）与副密钥（Key 2），可随时轮换
- 也支持通过 Microsoft Entra ID 进行身份验证（因为 Foundry 本质是 Azure 账户内的 PaaS 资源）

## English Short Summary

This lecture explains the Microsoft Foundry resource hierarchy: a Resource (org/department level) contains Projects (team collaboration level), each with a Workspace for deploying models and creating agents. Each resource exposes multiple API endpoint groups — OpenAI (LLMs), AI Services (predictive AI like vision, content safety, translation, speech), and Foundry (other model-catalog vendors) — secured via rotatable primary/secondary API keys or Microsoft Entra ID authentication.
