---
title: "Azure AI Services"
lectureId: 48
section: 3
sectionTitle: "AI-901 - Implement AI solutions - Azure AI Services"
date: "2026-06-10"
tags: [azure-ai-services, vision, speech, language, prebuilt-models]
---

## 中文短总结

Azure AI Services 是微软提供的预构建 AI 能力集合，开发者无需从零训练模型。核心服务：Azure AI Vision（图像分析、目标检测、OCR）、Azure AI Speech（语音转文本、文本转语音）、Azure AI Language（文本分析、实体提取、情感检测）。架构：前端服务层 → 底层微软预构建模型 → 应用程序调用。这些服务现已整合到 Microsoft Foundry 中。

## 中文长总结

### Azure AI Services 定义
- 微软在 Azure 上托管和管理的预构建 AI 能力集合
- **无需**自己训练或构建模型
- 微软已为常见 AI 任务准备好了专用模型

### 核心服务

| 服务 | 能力 |
|------|------|
| Azure AI Vision | 图像分析、目标检测、OCR |
| Azure AI Speech | 语音转文本、文本转语音 |
| Azure AI Language | 文本分析、实体提取、情感检测 |

### 架构层次
```
应用程序（聊天机器人、客服、文档处理、语音助手）
        ↓ 调用
Azure AI Services（Vision, Speech, Language）
        ↓ 底层
Microsoft 预构建模型
```

### 与 Microsoft Foundry 的关系
- Azure AI Services 现在整合到 Foundry 中
- 作为 Foundry Tools 的一部分
- 统一入口管理

## 考试要点

- Azure AI Services = 预构建 AI 能力（无需自己训练模型）
- 三大服务：Vision, Speech, Language
- 由微软预构建模型驱动
- 现已整合到 Microsoft Foundry（Foundry Tools）
- 面向开发者的即用 AI 能力

## English Short Summary

Azure AI Services provides prebuilt AI capabilities hosted on Azure — no need to train models from scratch. Core services: Azure AI Vision (image analysis, object detection, OCR), Azure AI Speech (speech-to-text, text-to-speech), Azure AI Language (text analysis, entity extraction, sentiment). Architecture: Apps → Azure AI Services → Microsoft's prebuilt models. Now integrated into Microsoft Foundry as Foundry Tools.
