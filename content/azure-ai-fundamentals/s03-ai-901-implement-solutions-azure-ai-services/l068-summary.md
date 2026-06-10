---
title: "Summary"
lectureId: 68
section: 3
sectionTitle: "AI-901 - Implement AI solutions - Azure AI Services"
date: "2026-06-10"
tags: [summary, azure-ai-services, vision, speech, language, content-understanding]
---

## 中文短总结

Section 3 总结。Azure AI Services 包含：Vision（图像分析、OCR、Face Service）、Language（语言检测、NER、情感分析、PII、关键短语）、Speech（STT、TTS）、Translator（文本/文档翻译）。Content Understanding 综合处理文档/音频/视频/图像（Analyzer 模式，比单一服务更智能）。所有服务现通过 Foundry Tools 提供。Python SDK 可直接调用各服务。

## 中文长总结

### Azure AI Services 全景

| 服务 | 核心能力 |
|------|----------|
| Azure AI Vision | Image Analysis, OCR, Face Service |
| Azure AI Language | Language Detection, NER, Sentiment, PII, Key Phrase |
| Azure AI Speech | Speech-to-Text, Text-to-Speech |
| Azure Translator | Text Translation, Document Translation |
| Content Understanding | Document/Audio/Video/Image Analyzers |

### Azure AI Language 功能
- Language Detection：识别文本语言
- NER：识别人名、组织、地点、日期
- PII Detection：检测个人敏感信息
- Sentiment Analysis：正面/负面/中性
- Key Phrase Extraction：提取关键短语

### Azure AI Speech
- Speech-to-Text：实时/批量转录
- Text-to-Speech：多种自然声音
- 使用 `azure.cognitiveservices.speech` SDK

### Azure Content Understanding
- 综合多种能力的智能分析
- Document Analyzer：发票、收据等结构化提取
- Audio Analyzer：转录 + 摘要 + 主题 + 实体
- 需要 Microsoft Foundry 资源
- 需要部署支持模型（GPT-4.1 等）

### 统一入口
- 所有服务现通过 Foundry Tools 提供
- 统一管理和访问

## 考试要点

- Azure AI Services = 预构建 AI 能力集合
- Vision：Image Analysis + OCR + Face
- Language：Detection + NER + Sentiment + PII + Key Phrase
- Speech：STT + TTS（SDK: azure.cognitiveservices.speech）
- Translator：Text + Document Translation
- Content Understanding：综合分析器（超越单一服务）
- 所有服务通过 Foundry Tools 提供

## English Short Summary

Section 3 recap: Azure AI Services includes Vision (image analysis, OCR, face), Language (detection, NER, sentiment, PII, key phrases), Speech (STT/TTS), Translator (text/document). Content Understanding provides comprehensive analyzers (document, audio, video, image) powered by GenAI — more intelligent than individual services. All services now accessed through Foundry Tools. Python SDKs available for programmatic access.
