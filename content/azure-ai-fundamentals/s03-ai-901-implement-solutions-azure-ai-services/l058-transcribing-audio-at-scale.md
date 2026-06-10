---
title: "Real-World Use Case Transcribing Audio at Scale with Azure Blob Storage"
lectureId: 58
section: 3
sectionTitle: "AI-901 - Implement AI solutions - Azure AI Services"
date: "2026-06-10"
tags: [architecture, azure-blob-storage, batch-transcription, speech-to-text]
---

## 中文短总结

企业级语音转文本架构。音频来源（会议录音、客服电话、HR面试、销售电话）→ 存储到 Azure Blob Storage（对象存储服务）→ 通过 Microsoft Foundry Speech-to-Text 批量转录 → 输出转录文本存回 Blob Storage。可设置输入容器（音频文件）和输出容器（转录文本）。这是企业大规模处理音频的典型架构模式。

## 中文长总结

### 架构流程
```
音频来源 → Azure Blob Storage → Speech-to-Text (Batch) → 转录文本
```

### 音频来源
- 会议录音
- 客服电话
- HR 面试
- 销售通话记录
- 语音备忘

### Azure Blob Storage
- Azure 的对象存储服务
- 用于存储文件（音频、文档等）
- 全球企业广泛使用
- 组织结构：Storage Account → Container → Blobs

### 架构设计
- Input Container：存放原始音频文件
- 处理层：Microsoft Foundry Speech-to-Text（批量转录）
- Output Container：存放转录后的文本

### 为什么用 Batch Transcription？
- 大量音频文件的离线处理
- 不需要实时结果
- 适合批量工作负载

## 考试要点

- Azure Blob Storage = 对象存储服务
- Batch Transcription 适合大规模离线音频处理
- 典型架构：音频源 → Blob Storage → Batch STT → 输出
- Container 是 Blob Storage 中的顶层文件夹

## English Short Summary

Enterprise audio transcription architecture: Audio sources (meetings, calls, interviews) → Azure Blob Storage (object storage) → Microsoft Foundry Speech-to-Text batch transcription → transcripts stored back in Blob Storage. Uses input container (audio files) and output container (transcripts). Batch transcription is ideal for large-scale offline audio processing.
