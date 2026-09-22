---
title: "Lab: Using a Vector Embedding Engine (Hands-On Lab)"
lectureId: 15
section: 3
sectionTitle: "AI-200 Primers and Foundations"
date: "2026-09-22"
tags: ["vector-embeddings", "openai-sdk", "microsoft-foundry", "hands-on-lab"]
---

## 中文短总结

本实验在 Foundry 模型目录中部署 OpenAI 的 `text-embedding-ada-002` 嵌入模型（返回 1536 维向量，Global Standard 部署），并改用 OpenAI SDK（而非 Foundry SDK）在 `vector_embeddings.ipynb` 中调用 `.embeddings.create()` 生成文本的向量嵌入。

## 中文长总结

### 部署嵌入模型

- 在 Discover → Models 中搜索 `text-embedding-ada-002`（来自 OpenAI）
- 该模型无论输入文本长度如何，均返回 1536 维的浮点数向量
- 部署类型选择 Global Standard，部署名与模型名一致，token 速率限制设为默认 150,000/分钟

### 代码实现（改用 OpenAI SDK）

- `.env` 需配置三个变量：OpenAI API 终结点、OpenAI API Key、嵌入模型部署名
- 终结点与密钥从 Foundry 资源的"密钥和终结点"页面获取（OpenAI 标签页的终结点、Key 1/Key 2）
- 使用 `AzureOpenAI` 客户端（来自 `openai` SDK），传入 API Key、API 版本（示例 `2024-06-01`）与终结点
- 调用 `client.embeddings.create(input=<text>, model=<embedding_deployment_name>)` 生成向量嵌入
- 输出为长度 1536、取值范围约 [-1, 1] 的浮点数数组

### 要点

- 本课有意展示 Foundry SDK 与 OpenAI SDK 两种不同的调用方式
- 不同嵌入模型返回维度不同：`text-embedding-ada-002` 为 1536 维，`text-embedding-3-large` 为 3072 维

## English Short Summary

Hands-on lab deploying OpenAI's `text-embedding-ada-002` model (1536-dimension vectors, Global Standard deployment) via the Foundry model catalog, then using the OpenAI SDK (instead of the Foundry SDK) in `vector_embeddings.ipynb` to call `.embeddings.create()` and generate vector embeddings for sample text — grabbing the endpoint and API key from the Foundry resource's Keys and Endpoint page, illustrating the difference in dimensionality between embedding models (1536 vs. 3072 for `text-embedding-3-large`).
