---
title: "Lab - Key Phrase Extraction via API Call"
lectureId: 132
section: 8
sectionTitle: "AI-900 - Describe features of Natural Language Processing and Conversational AI"
date: "2026-06-10"
tags: [rest-api, key-phrase-extraction, multi-service-account, lab]
---

## 中文短总结

通过 REST API 调用 Key Phrase Extraction。两种资源选择：1) 单独 Language Service 资源；2) **Azure AI Services multi-service account**（一个资源访问 Language + Speech + Vision + Document Intelligence）。API 调用：POST 请求 + Subscription-Key + JSON body（kind: "KeyPhraseExtraction", documents: [{id, language, text}]）。响应返回提取的关键短语。

## 考试要点

- **Multi-service account** = 一个资源访问多种 AI 服务
- REST API 调用格式：endpoint + /language + feature
- JSON body 结构：kind + analysisInput.documents
- Subscription-Key 用于认证
- 可提交多个 documents 一次处理

## English Short Summary

Call Key Phrase Extraction via REST API. Two resource options: 1) Standalone Language Service; 2) Azure AI Services multi-service account (single resource for Language + Speech + Vision + Document Intelligence). API: POST + Subscription-Key + JSON body (kind: "KeyPhraseExtraction", documents: [{id, language, text}]). Returns extracted key phrases.
