---
title: "The Art of the Prompt Engineering - Better Conversations with AI"
lectureId: 7
section: 1
sectionTitle: "AI-901 - Identify AI concepts and capabilities"
date: "2026-06-10"
tags: [prompt-engineering, system-prompt, user-prompt, ai-communication]
---

## 中文短总结

Prompt 是提交给模型的全部输入，可包含：Context（背景信息）、Instructions（行为指令）、Examples（示例）、Data（文档/数据）。Prompt Engineering 是优化输入以获得最佳输出的实践。核心原则：越具体、越结构化，响应越好。System Prompt 是位于对话之上的特殊指令，定义模型的角色、行为和约束，每次用户交互时自动附加。

## 中文长总结

### Prompt 的组成要素
1. **Context** — 帮助模型理解需求的背景信息
2. **Instructions** — 关于模型行为、格式、语气的具体指令
3. **Examples** — 展示期望响应的示例
4. **Data** — 文档、表格等需要模型处理的内容

多数实际 prompt 会组合多个要素，越丰富精确越好。

### Prompt Engineering 核心
- 定义：优化输入以获得模型最佳输出的实践
- 逻辑：模型能力强，但只能处理你给它的内容
- 模糊输入 → 模糊输出；清晰输入 → 优质输出

### 好 prompt vs 差 prompt 示例
| 差 prompt | 好 prompt |
|-----------|-----------|
| "Write me something about climate change" | "Write a 200-word executive summary of business risks posed by climate change, for a board of directors, formal tone, 3 bullet points" |
| "Fix my code" | "Here is a Python function that sorts dictionaries by date. It throws TypeError. Identify the bug, explain cause, provide fix" |

### System Prompt（系统提示）
- 特殊输入，位于对话之上
- 定义模型的整体行为、角色/人设、约束条件
- 示例："You are a helpful support assistant for Company X. Only answer questions about company products. Always respond professionally."
- 每次用户发消息时，system prompt 自动附加，模型先读取它再处理用户输入

## 考试要点

- Prompt 四要素：Context, Instructions, Examples, Data
- Prompt Engineering = 优化输入获得最佳输出
- System Prompt 定义模型角色和约束，位于对话之上
- 精确度原则：specific + structured = better output
- 弱 prompt 缺少上下文、格式、受众信息

## English Short Summary

A prompt contains context, instructions, examples, and data. Prompt engineering is the practice of crafting precise inputs for optimal outputs. Key principle: specific + structured prompts yield better responses. System prompts sit above the conversation to define model behavior, role, and constraints — they are automatically prepended to every user interaction.
