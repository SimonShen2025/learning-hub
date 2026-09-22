---
title: "Intro to Retrieval Augmented Generation (RAG)"
lectureId: 14
section: 3
sectionTitle: "AI-200 Primers and Foundations"
date: "2026-09-22"
tags: ["rag", "vector-embeddings", "genai-fundamentals", "similarity-search"]
---

## 中文短总结

检索增强生成（RAG）通过为 LLM 提供外部检索到的私有/最新数据来解决幻觉、数据时效性与私有数据缺失问题。RAG 包含三步：检索（生成用户查询向量嵌入并与文档向量做相似度匹配，取 top-k）、增强（将原始查询与检索到的文档拼接为新提示词）、生成（将增强后的提示发送给 LLM 得到最终回答）。

## 中文长总结

### 问题背景

- 大语言模型基于静态数据训练，不了解企业私有数据或最新信息
- 若不接入外部工具（如联网搜索），无法回答训练集之外的问题

### RAG 定义

- 一种将 LLM 响应"落地"于外部知识的架构，解决幻觉（hallucination）、数据新鲜度、私有数据受限三大问题

### 向量嵌入（Vector Embeddings）

- 将文字、句子、图像等数据表示为高维空间（如 1536 或 3072 维）中的数值向量
- 由嵌入生成引擎（如 OpenAI、Microsoft 提供的模型）生成
- 语义相近的词/短语在向量空间中距离更近（如"犬类伙伴"与"汪汪"聚类，"四分卫扔橄榄球"则远离动物类簇）

### RAG 三步流程

1. **检索（Retrieval）**：为用户查询生成向量嵌入，与向量数据库（如 Azure Cosmos DB、Azure PostgreSQL）中存储的文档向量做相似度计算，取 top-k（如 k=3）个最相关文档
2. **增强（Augmentation）**：将原始用户查询与检索到的文档内容拼接组成新的提示词
3. **生成（Generation）**：将增强后的提示词发送给 LLM，生成基于外部知识的最终回答

### 实现难点

- 搭建同时存储文本与向量嵌入的数据库
- 实现高效的相似度检索函数，返回最相关的文档集合

## English Short Summary

Retrieval Augmented Generation (RAG) grounds LLM responses in externally retrieved private or up-to-date data, addressing hallucination, data freshness, and private-data limitations. RAG has three steps: retrieval (embed the user query, run a similarity search against a vector database like Cosmos DB or PostgreSQL to get top-k matching documents), augmentation (combine the original query with the retrieved documents into a new prompt), and generation (send the augmented prompt to the LLM for a grounded answer). Vector embeddings represent text as high-dimensional numeric vectors (e.g., 1536 or 3072 dims) that capture semantic similarity.
