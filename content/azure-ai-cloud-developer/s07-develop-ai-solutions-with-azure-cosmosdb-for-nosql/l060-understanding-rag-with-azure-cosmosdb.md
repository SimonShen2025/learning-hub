---
title: "Understanding RAG with Azure CosmosDB"
lectureId: 60
section: 7
sectionTitle: "Develop AI Solutions with Azure CosmosDB for NoSQL"
date: "2026-09-22"
tags: ["cosmosdb", "rag", "vector-search", "azure-openai"]
---

## 中文短总结

基于 Azure Cosmos DB 的 RAG（检索增强生成）架构：先为 JSON 数据集中的内容字段生成向量嵌入并存入新字段（如 `embeddings`），上传至容器，形成向量存储；用户查询同样通过嵌入引擎生成向量，与容器中的向量做相似度检索（余弦相似度、点积或 L2 距离），取回 top-K 文档作为上下文，与原始查询组合成增强提示词后发送给大语言模型，最终返回回答。

## 中文长总结

### RAG 架构流程

1. **数据准备**：已有 JSON 文档上传至 Cosmos DB 容器；为其中某个字段（如 `content`，包含描述性文本）调用 Microsoft Foundry 中的嵌入生成引擎，创建向量嵌入
2. **存储向量**：在 JSON 数据集中新增 `embeddings` 字段存储向量，并将更新后的数据上传到容器，形成向量存储
3. **模型部署**：在 Microsoft Foundry 中部署大语言模型（用于最终问答）

### 查询处理流程

- 用户以自然语言形式发起查询（如"基于 XYZ 数据生成 10 道题的测验"）
- 使用相同的嵌入生成引擎，为用户查询生成向量嵌入
- 在 Cosmos DB 容器上执行相似度检索操作，支持的相似度函数包括：余弦相似度（cosine similarity）、点积（dot product）、L2 距离
- 检索出 top-K（如 3 或 5）个最相关的 JSON 文档作为 grounding 知识
- 将原始用户查询与检索到的上下文组合成增强提示词（augmented prompt）
- 将增强提示词发送给大语言模型，获取并展示回答

### 需要关注的设计问题

- 向量索引与存储：应使用什么数据类型存储向量嵌入？JSON 文档结构如何设计以包含向量字段？
- Cosmos DB 支持哪些相似度函数，应根据需求选择余弦相似度、点积还是欧几里得（L2）距离？
- Microsoft Foundry 需要部署两类模型：（1）向量嵌入引擎，用于数据集和用户查询；（2）聊天补全模型（如 GPT-4.1），作为核心大语言模型

## English Short Summary

The RAG architecture on Azure Cosmos DB: generate vector embeddings for a content field of existing JSON documents, store them in an `embeddings` field, and upload to the container as a vector store. A user's natural-language query is embedded the same way, compared against stored vectors using cosine similarity, dot product, or L2 distance, and the top-K matching documents form the grounding context combined with the original query into an augmented prompt sent to the deployed LLM.
