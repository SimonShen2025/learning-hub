---
title: "Example of Python code interacting with OpenAI - Implementation"
lectureId: 171
section: 9
sectionTitle: "AI-900 - Describe features of generative AI workloads on Azure"
date: "2026-06-10"
tags: [python, azure-openai, api, implementation, lab]
---

## 中文短总结

Python 代码调用 Azure OpenAI 模型实操。在 Foundry → Build → Models → 部署详情 → Code 选项卡获取 starter code。两种 API：Completions API（旧版，简单文本补全）和 Responses API（新版，支持工具/多轮对话）。代码结构：配置 endpoint + API key → 指定 deployment name → 发送 prompt → 获取 response。可选 Python/JavaScript/C#/curl。

## 考试要点

- 从 Foundry 获取 starter code（Code 选项卡）
- 需要：endpoint + API key + deployment name
- **Completions API** vs **Responses API**
- API = Application Programming Interface
- 模型通过 API 被应用程序调用
- 考试不考编程细节，考概念

## English Short Summary

Python code calling Azure OpenAI model. Get starter code from Foundry → Build → Models → deployment → Code tab. Two APIs: Completions API (legacy, simple text completion) and Responses API (new, supports tools/multi-turn). Code structure: configure endpoint + API key → specify deployment name → send prompt → get response. Languages: Python/JavaScript/C#/curl.
