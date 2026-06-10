---
title: "AI Models Landscape Anthropic and OpenAI"
lectureId: 6
section: 1
sectionTitle: "AI-901 - Identify AI concepts and capabilities"
date: "2026-06-10"
tags: [openai, anthropic, claude, gpt, ai-models, tokens, pricing]
---

## 中文短总结

AI 模型供应商概览：OpenAI（GPT 系列，聊天/图像/代码）和 Anthropic（Claude Opus/Sonnet/Haiku，分别对应复杂推理/日常任务/高速轻量）。消费者端按月订阅使用（ChatGPT/Claude.ai），开发者端按 token 计费（input + output tokens）。核心区分：消费者版不用关心 tokens，开发者版按 token 付费。考试重点是通过 Microsoft Foundry 使用这些模型。

## 中文长总结

### 主要 AI 供应商和模型

**OpenAI**
- GPT 系列（当前 5.5）：聊天对话、文本生成
- 不同变体用于不同任务：图像生成、代码生成等
- 消费者入口：chatgpt.com

**Anthropic**
- Claude Opus（旗舰）：复杂推理、自主编码、agentic 任务
- Claude Sonnet（中端）：日常任务、聊天、编码、分析
- Claude Haiku（轻量）：速度最快、成本最低
- 消费者入口：claude.ai

### 使用方式对比

| 维度 | 消费者版 | 开发者版 |
|------|----------|----------|
| 计费 | 月费订阅 | 按 token 计费 |
| 接口 | 网页聊天界面 | API 调用 |
| Token 关注度 | 不需要 | 核心成本因素 |
| 限制 | 免费版有功能限制 | 按用量付费 |

### Token 计费模型
- 发送请求（input tokens）+ 接收响应（output tokens）均计费
- 按百万 token 计费，但阈值可快速达到
- 这就是为什么 Microsoft Foundry 中需要关注 max_output_tokens 等参数

### 考试定位
- 考试重点不在 OpenAI/Anthropic 本身
- 重点是如何通过 Microsoft Foundry 部署和使用这些模型

## 考试要点

- OpenAI GPT 模型用于文本生成/聊天
- Anthropic Claude 系列：Opus（复杂推理）> Sonnet（均衡）> Haiku（快速廉价）
- 消费者 vs 开发者：订阅 vs token 计费
- Token = input/output 的计费单位
- 考试侧重 Microsoft Foundry 中的模型使用

## English Short Summary

Overview of AI model vendors: OpenAI (GPT series for chat/images/code) and Anthropic (Claude Opus for complex reasoning, Sonnet for everyday tasks, Haiku for speed/cost). Consumer tier uses monthly subscriptions; developer tier charges per token (input + output). The exam focuses on using these models through Microsoft Foundry, not the vendor platforms directly.
