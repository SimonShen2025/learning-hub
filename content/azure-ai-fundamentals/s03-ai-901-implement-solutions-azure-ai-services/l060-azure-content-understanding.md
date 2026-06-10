---
title: "Azure Content Understanding"
lectureId: 60
section: 3
sectionTitle: "AI-901 - Implement AI solutions - Azure AI Services"
date: "2026-06-10"
tags: [azure-content-understanding, analyzers, document-processing, foundry-tools]
---

## 中文短总结

Azure Content Understanding 是 Foundry Tools 的一部分，使用生成式 AI 处理多种内容类型（文档、图像、视频、音频）。核心概念：Analyzers（分析器）— 预构建的模型分析不同类型输入并输出结构化结果。必须有 Microsoft Foundry 资源才能使用。相比单一 Azure AI 服务，Content Understanding 是多种服务的综合（结合了 Vision、Language、Speech 的能力），且能利用 GenAI 提取更多智能信息。

## 中文长总结

### Azure Content Understanding 定义
- Foundry Tools 的一部分
- 使用生成式 AI 处理和摄取多种内容
- **必须有 Microsoft Foundry 资源**

### 支持的内容类型
- Documents（文档）
- Images（图像）
- Videos（视频）
- Audio（音频）

### 核心概念：Analyzers（分析器）
- 预构建的模型，分析特定类型输入
- Document Analyzer：分析文档信息
- Audio Analyzer：分析音频内容
- 每个分析器有定义好的 schema（输出字段）

### vs 单一 Azure AI 服务
| Azure AI Services | Content Understanding |
|-------------------|----------------------|
| 各服务独立（Vision, Speech, Language） | 综合多种能力 |
| 简单任务处理 | 利用 GenAI 提取更多智能 |
| 单一输入类型 | 多种内容类型 |
| 如：Speech-to-Text 仅转录 | 不仅转录，还能总结、提取主题、识别实体 |

### 使用前提
- 必须有 Microsoft Foundry 资源
- 某些分析器需要特定模型部署（如 GPT-4.1, text-embedding-3-large）

## 考试要点

- Azure Content Understanding = Foundry Tools 中的综合内容处理
- 必须有 Microsoft Foundry 资源
- Analyzers = 预构建分析器（Document, Audio, Image, Video）
- 比单一服务更强：结合 GenAI 提取智能信息
- 输出结构化结果（schema 定义的字段）

## English Short Summary

Azure Content Understanding (part of Foundry Tools) uses generative AI to process multiple content types (documents, images, videos, audio). Core concept: Analyzers — prebuilt models that analyze inputs and return structured results. Requires a Microsoft Foundry resource. More powerful than individual AI services: combines capabilities and extracts intelligence (summaries, topics, entities) beyond simple transcription/detection.
