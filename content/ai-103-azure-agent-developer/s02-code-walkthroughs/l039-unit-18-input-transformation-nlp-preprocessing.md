---
title: "Unit 18: Input Transformation – NLP Preprocessing"
lectureId: 39
section: 2
sectionTitle: "Code Walkthroughs"
date: "2026-07-01"
tags:
  - azure-ai-language
  - nlp
  - pii-redaction
  - ner
  - sentiment-analysis
  - lab
---

## 中文短总结

部署 **Azure AI Language** 服务，构建 NLP 预处理 pipeline：语言检测 → **PII redaction** → NER → key phrase extraction → sentiment analysis，在 Content Safety 之后、LLM 之前增强/净化用户输入。

## 中文长总结

### Bicep

- Foundry + Project + Content Safety + **Azure AI Language** (NLP)
- Free tier（单实例；删后需单独 delete cognitive service）
- Outputs：language endpoint + API key

### NLP Pipeline 顺序

```
1. detect_language     → ISO code + confidence
2. recognize_pii_entities → redact credit cards, SSN, emails
3. recognize_entities  → NER (location, datetime, product...)
4. extract_key_phrases → main topics
5. analyze_sentiment   → positive/negative/neutral
```

### SDK 调用

```python
from azure.ai.textanalytics import TextAnalyticsClient

# 语言检测
result = client.detect_language(documents=[{"id": "1", "text": user_input}])

# PII 脱敏
pii = client.recognize_pii_entities(documents=[...])
# → redacted_text: "my credit card is ****"

# 实体识别
entities = client.recognize_entities(documents=[...])
# → New York (Location/City), next week (DateTime/DateRange)

# 关键短语
phrases = client.extract_key_phrases(documents=[...])

# 情感分析
sentiment = client.analyze_sentiment(documents=[...])
# → neutral 99% confidence
```

### 输出整合

Pipeline 返回 `preprocessed` dict → 应用层决定如何使用：

- **User message** 替换为 redacted + tagged 版本
- **System instructions** 扩展：

```
Detected language: English
User sentiment: neutral
Key topics: weather, New York, credit card
If sentiment is negative, be extra empathetic.
Respond in the user's language.
```

### 业务价值

- PII 在到达 LLM **之前**移除（信用卡号 → `****`）
- NLP 比 LLM 便宜，可显著提升 accuracy 与 safety
- Negative sentiment → 可路由人工或特殊 workflow
- Content Safety 通过后才运行 NLP（避免浪费）

### 端到端示例

输入含 fake 信用卡 + "weather in New York next week" → agent 回复提醒勿分享卡号，并回答天气（无实时数据 disclaimer）。

## 考试要点

- **PII redaction** = 自动检测并移除敏感信息（credit card, SSN, email）
- **NER** (Named Entity Recognition)：people, orgs, dates, locations
- Pipeline 顺序：language → PII → entities → key phrases → sentiment
- Azure AI Language 使用专用模型（非 LLM），成本更低
- 在 Content Safety **之后**、LLM **之前**运行 NLP
- Sentiment 可用于 escalation 逻辑
- Free tier 单实例限制同 Vision/Speech

## English Short Summary

Unit 18 deploys Azure AI Language for an NLP preprocessing pipeline: language detection, PII redaction, NER, key phrase extraction, and sentiment analysis—run after content safety, before LLM. Redacted/tagged user messages and enriched system instructions improve safety and quality cheaply. Exam focus: PII redaction, NER, pipeline ordering, sentiment-based routing, and specialized NLP vs LLM tradeoffs.
