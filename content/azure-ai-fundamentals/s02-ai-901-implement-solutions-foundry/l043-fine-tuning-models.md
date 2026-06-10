---
title: "Fine-Tuning Models in Microsoft Foundry"
lectureId: 43
section: 2
sectionTitle: "AI-901 - Implement AI solutions - Microsoft Foundry"
date: "2026-06-10"
tags: [fine-tuning, model-customization, training-data, microsoft-foundry]
---

## 中文短总结

Fine-tuning = 在现有基础模型上使用自己的数据进一步训练，产生定制化模型。目的：一致的风格/语气（无需每次加 system prompt）、领域特定知识（内部产品/流程）、输出格式控制。三种方法：Supervised（有监督）、Direct Preference Optimization (DPO)、Reinforcement（强化学习）。需要提供 training data + validation data。Fine-tuned 模型部署为独立部署，可直接调用。

## 中文长总结

### Fine-tuning 定义
- 取现有基础模型（如 GPT）
- 用自己的数据进一步训练
- 产出一个定制化的 fine-tuned 模型

### Fine-tuning 的目的

| 目的 | 说明 |
|------|------|
| 一致风格/语气 | 品牌有特定语调，不用每次加 system prompt |
| 领域知识 | 内部产品、流程、术语（基础模型不知道的） |
| 输出格式 | 强制特定结构化输出（JSON、表格等） |

### 三种方法
1. **Supervised**：提供输入-输出对，模型学习映射关系
2. **Direct Preference Optimization (DPO)**：提供偏好对比数据
3. **Reinforcement**：基于奖励信号优化

### Fine-tuning vs System Prompt
- System Prompt：每次请求都需附加，占用 context window
- Fine-tuning：行为内化到模型中，无需额外 prompt
- Fine-tuning 更高效但需要准备数据和训练时间

### 在 Foundry 中操作
- 选择基础模型 → 选择 fine-tuning 方法
- 提供 training data + validation data
- 产出 fine-tuned model → 独立部署

## 考试要点

- Fine-tuning = 用自定义数据在基础模型上进一步训练
- 目的：一致风格、领域知识、输出格式
- 三种方法：Supervised, DPO, Reinforcement
- 需要 training data + validation data
- vs System Prompt：内化行为 vs 每次附加指令
- Fine-tuned 模型需独立部署

## English Short Summary

Fine-tuning takes an existing base model and trains it further with custom data to produce a specialized model. Purposes: consistent style/tone (no system prompt needed), domain-specific knowledge (internal products), output format control. Three methods: Supervised, Direct Preference Optimization (DPO), Reinforcement. Requires training + validation data. Fine-tuned models deploy independently in Foundry.
