---
title: "Introduction to the Microsoft Foundry SDK"
lectureId: 10
section: 3
sectionTitle: "AI-200 Primers and Foundations"
date: "2026-09-22"
tags: ["microsoft-foundry", "python-sdk", "entra-id", "ai-project-client"]
---

## 中文短总结

Microsoft Foundry SDK 是本课程实验中最核心的 Python SDK。核心对象为 `AIProjectClient`，通过 Foundry 项目端点与凭据（API Key 或 Microsoft Entra ID）建立连接，并可派生出 OpenAI Client、Anthropic Client、Agent Client 等子客户端，分别用于调用对应厂商模型或管理 Agent Service 中的智能体。

## 中文长总结

### AIProjectClient

- 通过 Foundry SDK 建立与 Microsoft Foundry 资源连接的顶层对象
- 构造参数：Foundry 项目端点（来自 Foundry 门户）、凭据（API Key 或 Microsoft Entra ID）
- 课程示例采用 Microsoft Entra ID 进行身份验证

### 派生子客户端

- **OpenAI Client**：用于向部署在 Foundry 资源中的 OpenAI 模型（如 GPT 系列）发起 API 调用
- **厂商专属客户端**：如 Anthropic Client，用于调用 Claude 等非 OpenAI 模型
- **Agent Client**：用于创建、管理与调用 Foundry Agent Service 中的智能体

### 关键要点

- 每次需要连接 Foundry 资源时，都先创建 `AIProjectClient`
- 再根据具体使用场景（OpenAI 模型、其他厂商模型、Agent Service）实例化对应的子客户端

## English Short Summary

The Microsoft Foundry SDK is the primary Python SDK used across the course's hands-on labs. Its top-level object is the `AIProjectClient`, constructed with a Foundry project endpoint and a credential (API key or Microsoft Entra ID). From it, you instantiate sub-clients — an OpenAI client for OpenAI models, vendor-specific clients (e.g., Anthropic) for other models, and an agent client for creating and invoking agents in the Foundry Agent Service.
