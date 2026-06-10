---
title: "Behind the Scenes - How Azure AI Vision Works"
lectureId: 120
section: 7
sectionTitle: "AI-900 - Describe features of computer vision workloads on Azure"
date: "2026-06-10"
tags: [azure-ai-vision, architecture, api, endpoint]
---

## 中文短总结

Azure AI Vision 三层架构：Layer 1 = 预训练模型（Microsoft 已部署，无需自建）；Layer 2 = API 调用（Microsoft Foundry 在后台发送 API 请求到 Vision endpoint + 图像 → 模型处理 → JSON 响应）；Layer 3 = 客户端（Microsoft Foundry UI / 自定义应用程序）。本质：提交图像 + 选择功能 → API call → 模型处理 → JSON 响应。

## 考试要点

- 三层架构：模型 → API → 客户端
- 模型已由 Microsoft 预训练和部署
- API call 携带图像发送到 endpoint
- 响应格式：JSON
- 客户端可以是 Foundry UI 或自定义应用

## English Short Summary

Azure AI Vision 3-layer architecture: Layer 1 = pre-trained model (Microsoft deployed, no need to build); Layer 2 = API call (Foundry sends request to Vision endpoint + image → model processes → JSON response); Layer 3 = client (Foundry UI or custom app). Essence: submit image + select feature → API call → model → JSON response.
