---
title: "Transcribe Overview"
lectureId: 256
section: "s23"
sectionTitle: "Machine Learning"
date: "2026-03-05"
tags: [transcribe, ml, speech-to-text, asr, pii]
---

## 中文短总结

Amazon Transcribe 使用深度学习（ASR 自动语音识别）将语音自动转换为文本。关键功能：①自动移除 PII（个人身份信息），如姓名、电话号码、社保号等②多语言音频自动语言识别。用例：客服通话转录、自动字幕和配字幕、媒体资产元数据生成（创建可搜索的档案库）。

## 中文长总结

Amazon Transcribe 是一项语音转文本服务，使用深度学习的自动语音识别（ASR）技术。

**核心功能：**
- 快速准确地将语音转换为文本
- **PII 移除（Redaction）**：自动识别并移除个人身份信息
  - 支持：姓名、年龄、社保号、电话号码等
  - 可选择识别并标记或直接遮盖（Redact）
- **多语言自动识别**：自动检测并转录多种语言（如英语、法语、西班牙语混合音频）

**用例：**
- 客服通话转录和分析
- 自动生成字幕和配看字幕（Closed Captioning）
- 媒体资产元数据生成，创建可搜索的档案库

## 考试要点

- Transcribe = 语音→文本（ASR）
- 支持自动 PII 移除
- 支持多语言自动识别
- 与 Polly 相反（Polly 是文本→语音）

## English Short Summary

Amazon Transcribe uses deep learning ASR (Automatic Speech Recognition) to convert speech to text. Key features: automatic PII removal/redaction (names, phone numbers, SSN, etc.) and automatic language identification for multilingual audio. Use cases: customer service call transcription, automated closed captioning/subtitling, and media asset metadata generation for searchable archives.
