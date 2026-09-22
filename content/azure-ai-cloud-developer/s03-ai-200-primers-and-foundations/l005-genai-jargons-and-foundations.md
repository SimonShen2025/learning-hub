---
title: "GenAI Jargons and Foundations"
lectureId: 5
section: 3
sectionTitle: "AI-200 Primers and Foundations"
date: "2026-09-22"
tags: ["genai-fundamentals", "tokens", "prompt-engineering", "multimodal", "llm"]
---

## 中文短总结

本课梳理生成式 AI 核心术语：Token（模型按 token 而非字符计费）、系统提示词/用户提示词（系统提示优先级更高）、Chat Completions API（需要模型部署名与 messages payload），以及单模态与多模态模型的区别（多模态可综合文本、图像、音频等多种输入以获得更丰富上下文）。

## 中文长总结

### Tokens（词元）

- 模型无法直接理解自然语言，需要将文本转换为数值化的 token
- 计费依据是输入/输出的 token 数量，而非字符数或 API 调用次数
- 一个 token 可能是完整单词、子词、字符甚至多个词的组合，具体取决于编解码模型
- 输入 token 通常比输出 token 便宜，因此控制输出长度对成本更关键

### 系统提示词与用户提示词

- **系统提示（System Prompt）**：定义 AI 的角色、行为与约束（全局指令、语气、专业领域、安全边界）
- **用户提示（User Prompt）**：用户希望模型完成的具体任务或问题
- 执行优先级：**系统提示 > 用户提示**；若两者冲突，可能导致模型产生幻觉（hallucination）

### Chat Completions API

- 向大语言模型发起请求的方式，请求体中包含 model 部署名称与 messages payload（系统提示 + 用户提示）
- 基于对话历史生成响应

### 单模态 vs 多模态

- **模态（Modality）**：数据类型，如文本、图像、音频、视频
- **单模态模型**：仅处理一种输入类型
- **多模态模型**（如 GPT-4.1）：可同时处理多种输入类型，能结合多源上下文，构建更丰富的语义理解，是构建强大 AI 应用的更优选择

## English Short Summary

This lecture covers core GenAI terminology: tokens (billing is based on token count, not characters or API calls, with input tokens typically cheaper than output); system vs. user prompts (system prompt defines role/behavior and takes priority over the user prompt); the Chat Completions API (requires a model deployment name and a messages payload); and unimodal vs. multimodal models (multimodal models like GPT-4.1 combine text, image, audio, etc. for richer context).
