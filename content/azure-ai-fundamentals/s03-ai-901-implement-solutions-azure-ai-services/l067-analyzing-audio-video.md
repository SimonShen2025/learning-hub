---
title: "Analyzing Audio & Video with Azure Content Understanding"
lectureId: 67
section: 3
sectionTitle: "AI-901 - Implement AI solutions - Azure AI Services"
date: "2026-06-10"
tags: [azure-content-understanding, audio-analyzer, transcription, summarization]
---

## 中文短总结

Azure Content Understanding 的 Audio Analyzer 能分析音频文件，功能超越简单的 Speech-to-Text。不仅能转录文本，还能：生成摘要、提取讨论主题、识别关键实体。路径：Build → Models → AI Services → Content Understanding → 选择 Audio modality。与 Speech Service 对比：Speech Service 只做简单转录，Content Understanding 利用底层多个模型提取更深层的智能信息。

## 中文长总结

### Audio Analyzer 能力
| 能力 | 说明 |
|------|------|
| Transcription | 转录音频为文本 |
| Summary | 基于音频内容生成摘要 |
| Topic Extraction | 识别讨论的主题 |
| Entity Recognition | 提取关键实体 |

### vs Speech Service
| Speech Service | Content Understanding Audio |
|----------------|---------------------------|
| 简单 Speech-to-Text | 转录 + 摘要 + 主题 + 实体 |
| 单一模型 | 利用多个底层模型 |
| 输出仅文本 | 输出结构化智能信息 |

### 在 Foundry 中使用
- Build → Models → AI Services → Content Understanding
- 选择 Audio modality
- 提交音频文件
- 需要部署支持模型

### 价值
- 不仅是"转录"，而是"理解"
- 从音频中提取商业智能
- 适合会议分析、通话总结

## 考试要点

- Audio Analyzer 能力超越简单 STT：转录 + 摘要 + 主题 + 实体
- Content Understanding vs Speech Service 的区别
- 利用多个底层模型（包括 GenAI）
- 输出结构化智能信息

## English Short Summary

Azure Content Understanding's Audio Analyzer goes beyond simple Speech-to-Text: it transcribes, generates summaries, extracts discussion topics, and identifies key entities. Compared to the Speech Service (simple transcription only), Content Understanding leverages multiple underlying models including GenAI to extract deeper intelligence from audio content.
