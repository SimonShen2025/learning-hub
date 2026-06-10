---
title: "Evaluating AI Output Quality with General Purpose Evaluators"
lectureId: 42
section: 2
sectionTitle: "AI-901 - Implement AI solutions - Microsoft Foundry"
date: "2026-06-10"
tags: [evaluators, ai-quality, fluency, coherence, safety, microsoft-foundry]
---

## 中文短总结

Microsoft Foundry 内置的评估器（Evaluators）用于自动化测量 AI 输出的质量、安全性和可靠性。两类评估器：General Purpose（通用，评估 fluency 流畅度和 coherence 连贯性）和 Risk & Safety（风险安全，检测暴力、仇恨言论等有害内容）。位于 Build → Evaluations → Catalog。替代手动逐条审查响应的低效方式。对于 Agent 和模型都适用。

## 中文长总结

### 评估器的作用
- 自动化工具，测量 AI 响应质量
- 替代手动逐条审查
- 基于特定标准为模型输出打分

### 两类评估器

**1. General Purpose Evaluators（通用评估器）**
| 指标 | 评估内容 |
|------|----------|
| Fluency | 语言流畅度，是否通顺 |
| Coherence | 逻辑连贯性，是否前后一致 |

**2. Risk & Safety Evaluators（风险安全评估器）**
| 指标 | 评估内容 |
|------|----------|
| Violence | 暴力内容 |
| Hate Speech | 仇恨言论 |
| Harmful Output | 其他有害输出 |

### 在 Foundry 中使用
- 路径：Build → Evaluations → Catalog
- 可选择不同评估器类别
- 内置适用于 agents 的专用评估器

### 使用场景
- 客服 Agent 上线前验证响应质量
- 持续监控模型输出是否符合标准
- 检测安全风险和有害内容

## 考试要点

- Evaluators = 自动化 AI 输出质量评估工具
- General Purpose：Fluency（流畅度）+ Coherence（连贯性）
- Risk & Safety：Violence, Hate Speech, Harmful Content
- 位于 Build → Evaluations
- 适用于 Models 和 Agents

## English Short Summary

Microsoft Foundry's built-in Evaluators automatically measure AI output quality, safety, and reliability. Two categories: General Purpose (fluency, coherence) and Risk & Safety (violence, hate speech, harmful content). Located at Build → Evaluations → Catalog. Replaces manual review of responses. Applicable to both models and agents.
