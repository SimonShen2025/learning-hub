---
title: "Unit 18: Input Transformation – NLP Preprocessing for Agents"
lectureId: 19
section: 1
sectionTitle: "Theory"
date: "2026-07-01"
tags: ["Input Transformation", "NLP", "Entity Recognition", "PII Redaction", "Sentiment Analysis", "Language Detection"]
---

## 中文短总结

本讲介绍 **Input Transformation**：在 user input 到达 LLM 前，用 **Azure AI Language** 服务清洗与增强文本。核心功能包括 **Named Entity Recognition**、**Key Phrase Extraction**、**Sentiment Analysis**、**PII Detection/Redaction**（`recognize_pii_entities`）、**Language Detection**。推荐处理顺序（考试高频）：Language Detection → PII Redaction → Entity Extraction → Key Phrase Extraction。统一通过 **TextAnalyticsClient** 调用。Sentiment 可用于路由（强负面 → 人工）；PII 必须在 LLM 前 redact。比 LLM prompt 更便宜、更准确。

## 中文长总结

### Input Transformation 定义

- 用 NLP 服务在 LLM/Orchestration 之前清理、结构化、增强用户输入
- 原因：人类输入有拼写错误、歧义、冗余、敏感数据
- 流程：Raw text → NLP pipeline → Clean enriched text → LLM/Agent

### Azure AI Language 服务套件

统一客户端：**TextAnalyticsClient**

| 功能 | SDK 方法 | 用途 |
|------|----------|------|
| Entity Recognition | `recognize_entities()` | 提取人名、日期、地点、组织等 |
| Key Phrase Extraction | `extract_key_phrases()` | 提取核心主题，去除 filler words |
| Sentiment Analysis | `analyze_sentiment()` | 检测 positive/negative/neutral |
| PII Detection | `recognize_pii_entities()` | 检测并 redact 信用卡、SSN 等 |
| Language Detection | `detect_language()` | 返回 language code + confidence |

### Named Entity Recognition (NER)

- 识别 entities 及其在文本中的位置
- 示例：「book flight to Seattle on May 15」→ location=Seattle, date=May 15
- 可 hard-code entity 值直接传给 tool parameters，提升 tool accuracy

### Key Phrase Extraction

- 「my laptop screen cracked after I dropped it」→ laptop, screen, crack, dropped
- 减少 noise，Agent 聚焦关键信息

### Sentiment Analysis 路由

- **Strong negative**（confidence ≥ 80%）→ 直接 escalate 到人工
- Positive → 继续 AI Agent
- Moderate → 持续监控 sentiment 变化
- 适用于 hybrid human-AI support

### PII Redaction

- 检测：credit card、SSN、bank account、driver license、passport、email、phone、address
- `recognize_pii_entities()` 返回 **redacted text**
- **必须在 LLM 前 redact**——LLM 是第三方服务
- 若需存储 PII → 加密并遵守数据保护法规
- 日志/monitoring span 中**不应**包含敏感数据

### Language Detection 多语言 Agent

- 检测用户语言 → 加载对应 system instruction / 确保响应同语言
- 低资源语言：detect → translate 到高资源语言处理 → 再 translate 回用户语言

### 推荐处理顺序（考试必记）

1. **Language Detection**
2. **PII Redaction**
3. **Entity Extraction**
4. **Key Phrase Extraction**
5. → 增强后的 prompt 发送给 Agent

### 转换示例

- Raw: `book a flight to Seattle on May 15`
- Transformed: `book flight to location Seattle on date May 15`

### 监控 Spans

- `lang.detection`（language, confidence, duration）
- `pii.redaction`（categories found, length——不含敏感数据）
- `entity.extraction`（entity count, categories）
- `input.transform`（raw vs transformed 对比）

## 考试要点

- Input transformation = NLP 预处理，在 LLM **之前**执行
- 处理顺序：**Language → PII → Entity → Key Phrase**（顺序题高频）
- 统一客户端：**TextAnalyticsClient**
- PII 方法：`recognize_pii_entities()` → redacted text
- PII **必须**在发送到 LLM 前 redact
- Sentiment routing：强负面 → human escalation
- Entity extraction 可提升 tool call accuracy（直接传参数）
- 比 LLM specialized prompt **更便宜、更准确**
- Language detection 用于 multilingual agents 和 system instruction 选择
- Monitoring span 不含 PII 敏感内容
- AI-103 考试会考处理顺序

## English Short Summary

This lecture covers input transformation using Azure AI Language services to preprocess user text before LLM processing. Core functions via TextAnalyticsClient: recognize_entities(), extract_key_phrases(), analyze_sentiment(), recognize_pii_entities(), and detect_language(). Critical exam order: language detection → PII redaction → entity extraction → key phrase extraction. PII must be redacted before LLM calls. Sentiment analysis enables routing (strong negative → human escalation). Entity extraction improves tool accuracy by providing structured parameters. These NLP services are cheaper and more accurate than LLM-based preprocessing. Multilingual agents use language detection for instruction selection and optional translate-process-translate patterns. Monitor via spans without logging sensitive PII data.
