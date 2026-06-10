---
title: "Azure AI Speech service"
lectureId: 53
section: 3
sectionTitle: "AI-901 - Implement AI solutions - Azure AI Services"
date: "2026-06-10"
tags: [azure-speech, speech-to-text, text-to-speech, speech-translation, foundry-tools]
---

## 中文短总结

Azure AI Speech 服务在 Foundry Tools 中提供四大能力：Speech-to-Text（语音转文本，支持实时转录和批量转录）、Text-to-Speech（文本转语音，有多种自然发音声音）、Speech Translation（语音翻译）、Speech Recognition（语音识别）。实时转录适合会议直播；批量转录适合离线处理已有音频文件。从 Foundry 使用时，需要 Foundry 资源的 key 和 region。考试要求能写基本的 Python 代码调用 Speech 服务。

## 中文长总结

### Azure Speech 四大能力

| 能力 | 说明 | 用例 |
|------|------|------|
| Speech-to-Text | 语音转文本 | 会议转录、客服记录、视频字幕 |
| Text-to-Speech | 文本转语音 | 语音助手、有声书 |
| Speech Translation | 语音翻译 | 实时多语言沟通 |
| Speech Recognition | 语音识别 | 语音命令 |

### Speech-to-Text 模式
| 模式 | 适用场景 |
|------|----------|
| Real-time transcription | 流式音频（会议直播） |
| Fast transcription | 快速处理短音频 |
| Batch transcription | 离线处理大量音频文件 |
| LLM speech | 与 LLM 结合的语音处理 |

### 在 Foundry 中使用
- Build → Models → AI Services → Azure Speech
- 使用时需要：Foundry 资源的 **Key** + **Region**
- 不再需要单独创建 Speech 资源

### 考试要求
- 需要能写基本 Python 代码使用 Speech SDK
- 使用 `azure.cognitiveservices.speech` 包

## 考试要点

- Speech 四大能力：STT, TTS, Translation, Recognition
- Speech-to-Text 三种模式：Real-time, Fast, Batch
- 通过 Foundry 资源的 key + region 认证
- 不再需要单独的 Speech 资源
- 考试要求基本 Python SDK 代码

## English Short Summary

Azure AI Speech in Foundry Tools provides: Speech-to-Text (real-time, fast, batch transcription), Text-to-Speech (natural voices), Speech Translation, Speech Recognition. Uses Foundry resource key + region for authentication (no separate Speech resource needed). Exam requires basic Python SDK code using azure.cognitiveservices.speech package.
