---
title: "Comprehend Medical Overview"
lectureId: 261
section: "s23"
sectionTitle: "Machine Learning"
date: "2026-03-05"
tags: [comprehend-medical, ml, nlp, healthcare, phi]
---

## 中文短总结

Amazon Comprehend Medical 使用 NLP 从非结构化临床文本中检测和提取有用信息（医生笔记、出院摘要、检验结果、病例记录）。可通过 DetectPHI API 检测受保护的健康信息（PHI）。架构：S3 存储文档→调用 Comprehend Medical API；或 Kinesis Data Firehose 实时分析；或 Transcribe 先将语音转文本→再传入 Comprehend Medical。能提取分子名称、强度、剂量、给药途径、频率等结构化医疗数据。

## 中文长总结

Amazon Comprehend Medical 是 Comprehend 的医疗健康领域特化版本，使用 NLP 处理非结构化临床文本。

**数据来源类型：**
- 医生笔记
- 出院摘要
- 检验结果
- 病例记录

**核心功能：**
- 从非结构化文本中提取结构化医疗信息
- **DetectPHI API**：检测受保护的健康信息（Protected Health Information）
- 提取：分子/药物名称、强度、剂量、给药途径、频率、手术名称、日期等

**架构模式：**
1. S3 存储文档 → 调用 Comprehend Medical API
2. Kinesis Data Firehose → 实时分析
3. Amazon Transcribe（语音→文本）→ Comprehend Medical（文本分析）

## 考试要点

- Comprehend Medical = 医疗文本 NLP
- DetectPHI API 检测受保护健康信息
- 可与 Transcribe 配合：语音→文本→医疗信息提取
- S3 或 Kinesis Firehose 作为数据输入

## English Short Summary

Amazon Comprehend Medical uses NLP to detect and extract useful information from unstructured clinical text (doctor's notes, discharge summaries, test results, case notes). DetectPHI API detects Protected Health Information. Architecture: S3→Comprehend Medical API, Kinesis Data Firehose for real-time analysis, or Transcribe (speech→text)→Comprehend Medical. Extracts structured data: molecule names, strength, dosage, route, frequency, procedures, dates.
