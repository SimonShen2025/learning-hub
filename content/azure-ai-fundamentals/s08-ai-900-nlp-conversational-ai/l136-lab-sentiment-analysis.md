---
title: "Lab - Sentiment Analysis with Azure AI Language"
lectureId: 136
section: 8
sectionTitle: "AI-900 - Describe features of Natural Language Processing and Conversational AI"
date: "2026-06-10"
tags: [sentiment-analysis, positive-negative-neutral, confidence-score, lab]
---

## 中文短总结

Sentiment Analysis：理解文本中的情感（正面/负面/中性）。智能到可识别同一文本中的不同情感。示例："food was amazing(+), but waiting time was terrible(-)"→分别标记。返回：整体情感 + 每句话的独立情感 + 置信度分数。API：kind 改为 "SentimentAnalysis"。应用：产品评论自动分类、客户满意度监控。

## 考试要点

- Sentiment Analysis = 文本情感判断（positive/negative/neutral）
- 句子级别分析（同一段落中不同句子可有不同情感）
- 返回：整体情感 + 逐句情感 + 置信度
- API kind: "SentimentAnalysis"
- 应用：评论分析、客户满意度

## English Short Summary

Sentiment Analysis: understand feelings in text (positive/negative/neutral). Smart enough to identify different sentiments within same text: "food was amazing(+), but waiting time was terrible(-)". Returns: overall sentiment + per-sentence sentiment + confidence scores. API kind: "SentimentAnalysis". Applications: review classification, customer satisfaction monitoring.
