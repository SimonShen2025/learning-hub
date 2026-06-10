---
title: "Privacy & Security - Protecting People in an AI World"
lectureId: 16
section: 1
sectionTitle: "AI-901 - Identify AI concepts and capabilities"
date: "2026-06-10"
tags: [responsible-ai, privacy, security, data-governance]
---

## 中文短总结

负责任 AI 原则之三：隐私与安全。Privacy = 个人信息被尊重处理（仅在需要时收集、仅用于同意的目的、防止滥用），人们对数据保持控制。Security = 系统防御攻击、操纵和未授权访问，数据加密和访问控制。核心挑战：训练数据的规模（数十亿文档几乎必然包含个人信息）和 prompt injection（恶意用户可能诱导模型泄露训练数据中的敏感信息）。需要前所未有规模的数据治理。

## 中文长总结

### Privacy（隐私）
- 个人信息被尊重处理
- 仅在需要时收集，仅用于同意的目的
- 人们保持对自身数据的有意义控制
- AI 系统不应在无知情/同意的情况下进行监视、画像或暴露个人

### Security（安全）
- 系统防御攻击、操纵和未授权访问
- 流经系统的数据（包括敏感信息）需加密和访问控制

### 核心挑战

**1. 数据消费规模**
- 训练 LLM 需处理数十亿文档
- 训练语料几乎必然包含真实个人信息（姓名、地址、医疗、财务）
- 这些人可能从未明确同意将信息用于 AI 训练
- 需要前所未有规模的数据治理

**2. Prompt Injection 攻击**
- 恶意用户可能设计特殊 prompt 诱导模型泄露训练数据中的敏感信息
- 需要防护措施阻止此类攻击

### 应对措施
- 严格的数据治理框架
- 数据加密和访问控制
- 防止 prompt injection 的安全机制
- 从设计阶段即纳入隐私保护

## 考试要点

- Privacy = 尊重个人数据、仅在必要时收集、用户保持控制
- Security = 防御攻击和未授权访问、数据加密
- 训练数据几乎必然包含个人信息 → 需数据治理
- Prompt injection = 安全威胁（诱导模型泄露敏感信息）
- 隐私与安全位于敏感交叉点：AI 越强大 → 消耗越多数据 → 隐私风险越大

## English Short Summary

Privacy & Security (Responsible AI principle #3): Privacy means personal data is handled with respect, collected only when needed, and people retain control. Security means protecting the system from attacks and unauthorized access. Key challenges: massive training data almost certainly contains personal information without consent, and prompt injection attacks can extract sensitive info. Requires unprecedented data governance.
