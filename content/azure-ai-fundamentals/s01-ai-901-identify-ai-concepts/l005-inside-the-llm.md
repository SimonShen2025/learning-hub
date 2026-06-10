---
title: "Inside the LLM - From Prompt to Response"
lectureId: 5
section: 1
sectionTitle: "AI-901 - Identify AI concepts and capabilities"
date: "2026-06-10"
tags: [llm, tokens, transformer, self-attention, prompt, context-window]
---

## 中文短总结

LLM（大语言模型）是在海量文本上训练的 AI 模型。工作流程：用户提交 Prompt → 模型将其拆分为 Tokens → 进入 Transformer 架构处理（Self-Attention 机制让每个 token 关注其他所有 token）→ Tokens 转换为 Vectors（数学向量）→ 逐层更新位置 → 逐 token 生成响应。Context Window 决定模型一次能处理的 token 上限。模型按概率逐 token 预测下一个最佳 token。

## 中文长总结

### LLM 基础
- 定义：在大量文本（书籍、文章、网站、代码、对话）上训练的 AI 模型
- 通过训练学会语言的模式、结构和含义

### 处理流程详解
1. **Prompt（提示）**：用户输入，可包含 context（背景）、instructions（指令）和 query（查询）
2. **Tokenization（分词）**：模型将 prompt 分解为 tokens（最小文本单位）
   - Token 可以是完整单词、词根、前缀、后缀、标点或空格
   - "Explain quantum computing in simple terms" ≈ 9-10 tokens
3. **Transformer 处理**：
   - 2017年突破性架构
   - 同时处理所有 tokens（非顺序处理）
   - **Self-Attention 机制**：每个 token 关注序列中所有其他 token
   - 示例："The bank by the river was steep" — "bank" 与 "river" 相关而非 "finance"
4. **Vectors（向量）**：
   - Tokens 转换为数字列表（数百/数千维）
   - 在多维空间中编码含义
   - Transformer 逐层更新这些向量位置
5. **Response Generation（响应生成）**：
   - 逐 token 生成（非一次性输出完整答案）
   - 每步基于已有内容预测下一个最佳 token
   - 在整个词汇表（数万 tokens）中进行概率计算

### 关键概念
- **Context Window**：模型一次能接收的 token 数量上限
- **Tokens = 成本单位**：开发者平台按 token 计费
- **非确定性**：相同输入可能产生不同输出（概率选择）
- **幻觉可能性**：基于概率生成，偶尔会出错

## 考试要点

- LLM 将 prompt 分解为 tokens（非 words）
- Transformer 架构（2017）使所有 tokens 同时处理
- Self-Attention = 每个 token 关注所有其他 token 以理解上下文
- 响应是逐 token 生成的（one token at a time）
- Context Window = 模型能处理的 token 上限
- Tokens 是成本和速度的计量单位

## English Short Summary

LLMs are trained on massive text corpora. Processing flow: Prompt → Tokenization → Transformer (self-attention lets each token attend to all others) → Vectors (mathematical representations) → Token-by-token response generation via probability prediction. Key concepts: context window (token limit), self-attention (contextual understanding), and non-deterministic output. Tokens are the unit of cost/speed.
