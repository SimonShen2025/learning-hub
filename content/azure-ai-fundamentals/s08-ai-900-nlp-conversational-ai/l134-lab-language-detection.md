---
title: "Lab - Language Detection with Azure AI Language"
lectureId: 134
section: 8
sectionTitle: "AI-900 - Describe features of Natural Language Processing and Conversational AI"
date: "2026-06-10"
tags: [language-detection, rest-api, confidence-score, lab]
---

## 中文短总结

Language Detection：发送文本 → 返回语言名称 + 语言代码（如 EN, FR）+ 置信度分数 + 脚本信息。支持约 100 种语言。REST API 调用：只需更改 JSON body 的 kind 为 "LanguageDetection"，其余请求结构不变。可同时提交多个 documents（多行文本）一次检测。

## 考试要点

- Language Detection 返回：语言名称 + ISO 代码 + 置信度 + 脚本
- 支持 100+ 语言
- API：kind 改为 "LanguageDetection"
- 可批量检测（多个 documents）

## English Short Summary

Language Detection: send text → returns language name + language code (EN, FR) + confidence score + script info. Supports ~100 languages. REST API: just change JSON body kind to "LanguageDetection", request structure stays same. Can submit multiple documents for batch detection.
