---
title: "Summary"
lectureId: 21
section: 1
sectionTitle: "AI-901 - Identify AI concepts and capabilities"
date: "2026-06-10"
tags: [summary, generative-ai, llm, responsible-ai, ai-workloads, prompt-engineering]
---

## 中文短总结

Section 1 总结：GenAI 创建新内容（文本/图像/音频/代码/视频），由 LLM 驱动，基于 Transformer 架构，通过 tokens 处理。Prompt 包含 context + instructions + query。四大 AI 工作负载：文本分析、语音、计算机视觉、信息提取。负责任 AI 六原则：Fairness、Reliability & Safety、Privacy & Security、Inclusiveness、Transparency、Accountability。Agentic AI 通过工具使用、规划、记忆实现自主行动。

## 中文长总结

### 生成式 AI
- 创建新内容（文本、图像、音频、代码、视频）
- 与传统 AI（分类/预测）不同，从零构建响应
- 企业用于减少起草、分析、内容创建的时间

### LLM 工作原理
- 在海量文本上训练，学习语言模式
- 流程：Prompt → Tokens → Transformer(Self-Attention) → Response
- 逐 token 生成响应，基于概率选择最佳下一个 token
- Context Window = token 上限

### Prompt Engineering
- Prompt 元素：Context, Instructions, Query
- System Prompt 定义模型角色和约束
- 具体 + 结构化 = 更好输出

### AI 工作负载类型
| 类型 | 功能 |
|------|------|
| Text Analysis | 情感分析、分类、摘要、翻译 |
| Speech | 语音转文本、文本转语音 |
| Computer Vision | 图像分类、目标检测、人脸识别 |
| Information Extraction | NER、发票处理、文档信息提取 |

### 负责任 AI 六原则
1. Fairness — 公平对待所有人
2. Reliability & Safety — 可靠运行不造成伤害
3. Privacy & Security — 保护个人数据
4. Inclusiveness — 为所有人服务
5. Transparency — 可理解、公开局限
6. Accountability — 有人为系统负责

### Agentic AI
- 不仅响应，还能行动
- 循环工作流：think → act → observe → repeat
- 核心能力：工具使用、规划、记忆、自我纠正、自主性

## 考试要点

- GenAI = 创建新内容，由 LLM 驱动
- LLM 处理流：Prompt → Tokens → Transformer → Token-by-token response
- 四大工作负载：Text, Speech, Vision, Information Extraction
- 六大负责任 AI 原则（必背）
- Agent 五大能力：Tools, Planning, Memory, Self-correction, Autonomy
- Temperature 参数控制输出随机性

## English Short Summary

Section 1 recap: GenAI creates new content via LLMs (Transformer architecture, token-based processing). Prompts contain context + instructions + query. Four AI workloads: text analysis, speech, computer vision, information extraction. Six Responsible AI principles: Fairness, Reliability & Safety, Privacy & Security, Inclusiveness, Transparency, Accountability. Agentic AI uses tools, planning, memory, self-correction, and autonomy to act beyond simple chat.
