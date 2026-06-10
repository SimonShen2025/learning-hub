---
title: "Identifying AI Workloads - Text"
lectureId: 10
section: 1
sectionTitle: "AI-901 - Identify AI concepts and capabilities"
date: "2026-06-10"
tags: [ai-workloads, text-analysis, sentiment-analysis, classification, summarization, nlp]
---

## 中文短总结

四大 AI 工作负载类型之一：文本分析。输入非结构化文本，目标是提取含义和结构。核心任务包括：Sentiment Analysis（情感分析：正面/负面/中性）、Classification（分类：投诉/询价/一般查询）、Summarization（摘要：长文本浓缩）、Translation（翻译：跨语言转换）。文本分析由 LLM 直接驱动，能在大规模和高速度下运作。

## 中文长总结

### 四大 AI 工作负载类型概览
1. Text Analysis（文本分析）— 本节重点
2. Speech（语音）
3. Computer Vision（计算机视觉）
4. Information Extraction（信息提取）

### 文本分析详解
**定义**：输入为非结构化文本，目标是从文本中获取含义和结构

**核心任务：**

| 任务 | 描述 | 用例 |
|------|------|------|
| Sentiment Analysis | 判断文本情感倾向 | 社交媒体监测、电商评论分析 |
| Classification | 将文本分配到特定类别 | 邮件分类（投诉/询价/一般） |
| Summarization | 长文本浓缩为简短摘要 | 研究论文、会议记录、邮件线程 |
| Translation | 跨语言文本转换 | 多语言客户反馈处理 |

### 核心特点
- 由 LLM 直接驱动
- 能在大规模（thousands of documents）和高速度下运作
- 从非结构化文本中获取结构化洞察

## 考试要点

- 文本分析 = 从非结构化文本中提取含义和结构
- 四项核心功能：Sentiment Analysis, Classification, Summarization, Translation
- 文本分析由 LLM 直接驱动
- 识别场景：看到 "reviews", "emails", "documents" → 文本分析工作负载

## English Short Summary

Text analysis is one of four AI workload types. Input: unstructured text; goal: derive meaning and structure. Core tasks: Sentiment Analysis (positive/negative/neutral), Classification (categorize text), Summarization (condense long content), Translation (cross-language). Powered directly by LLMs, operates at scale and speed.
