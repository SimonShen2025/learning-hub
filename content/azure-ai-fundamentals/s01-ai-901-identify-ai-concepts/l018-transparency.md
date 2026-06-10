---
title: "Transparency - Making AI Understandable"
lectureId: 18
section: 1
sectionTitle: "AI-901 - Identify AI concepts and capabilities"
date: "2026-06-10"
tags: [responsible-ai, transparency, explainability, interpretability]
---

## 中文短总结

负责任 AI 原则之五：透明度。四个维度——系统本身（告知用户在与 AI 交互）、工作方式（可解释输出如何产生）、数据（公开训练数据及其影响）、局限性（诚实说明系统无法做什么）。核心挑战：传统软件可追踪代码逻辑，但 LLM/深度神经网络有数十亿参数，无法逐个解释各参数含义——这就是"黑盒"问题。透明度不要求完全理解每个参数，而是要在有意义的层面上解释系统行为。

## 中文长总结

### 透明度的四个维度

| 维度 | 含义 |
|------|------|
| 系统本身 | 让人知道自己在与 AI 交互而非人类 |
| 工作方式 | 能在有意义层面解释系统如何得出输出 |
| 数据 | 公开训练数据及其对能力/局限的影响 |
| 局限性 | 诚实说明系统不能做什么、可能失败的场景、不可信的情况 |

### 为什么透明度在 AI 中困难？

**传统软件**
- 确定性、基于规则
- 可追踪代码逻辑找到输出原因
- 可解释性是内建的

**AI 模型（特别是 LLM 和深度神经网络）**
- 不基于明确规则，而是从数据中学习模式
- 训练产生数十亿数值参数
- 单个参数的含义无法被独立理解
- "黑盒"问题：知道输入和输出，但中间过程不可解释

### 实践要求
- 不要求解释每个参数
- 要求在有意义的层面上让用户理解系统行为
- 需要明确声明系统的能力边界和失败条件

## 考试要点

- Transparency 四维度：系统身份、工作方式、数据来源、局限性
- 传统软件可追踪 → AI 模型是"黑盒"
- LLM 数十亿参数无法逐个解释
- 透明度 = 让人正确理解系统能力（understand capabilities）
- 需要公开局限性和失败条件

## English Short Summary

Transparency (Responsible AI principle #5) has four dimensions: system identity (users know it's AI), how it works (explainable at meaningful level), data (open about training data), and limitations (honest about failure conditions). Core challenge: traditional software is traceable, but LLMs with billions of parameters are "black boxes" — individual parameter meanings can't be understood. Transparency requires meaningful explanations, not full model interpretability.
