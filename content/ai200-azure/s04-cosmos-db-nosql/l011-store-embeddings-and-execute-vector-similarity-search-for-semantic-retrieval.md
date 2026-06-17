---
title: "Store embeddings and execute vector similarity search for semantic retrieval"
lectureId: 11
section: 4
sectionTitle: "Develop AI solutions by using Azure Cosmos DB for NoSQL"
date: "2026-06-17"
tags: ["cosmos-db", "vector-search", "embeddings", "ai-200"]
---

## 中文短总结

Cosmos DB NoSQL 作 vector store：Settings → Features 启用 **Vector Search**（约 15 分钟生效）。新建 container 时配置 **vector embedding policy**（path、float32、distance function 如 **cosine**、dimensions 如 1536）。用 Azure OpenAI `text-embedding-ada-002` 将文档与 query 向量化，存入 `embedding` 字段；用 **vector similarity search** 找 top-K 最近邻。跨 partition 查询需 `enable_cross_partition_query=True`。语义检索通过向量距离（非关键词匹配）实现。

## 中文长总结

本讲实现 AI-200 核心场景：在 Cosmos DB for NoSQL 中存储 embedding 并执行向量相似度搜索。

**启用向量能力**：在 Cosmos DB 账户 Settings → Features 中打开 Vector Search。这是前提，默认关闭。

**Container 与 vector policy**：在已有 database 下新建 container（如 `documents`），partition key 可简化为 `id`。创建时或后续 Settings 中定义 vector embedding policy：
- **path**：存放向量的 JSON 属性名（如 `embedding`）
- **data type**：float32
- **distance function**：cosine（另有 euclidean、dot product 等）
- **dimensions**：须与 embedding 模型一致（demo 用 1536，对应 ada-002）

**端到端流程**（Python + `azure.cosmos` + OpenAI SDK）：
1. 将若干文本文档通过 embedding 模型转为 1536 维向量
2. `create_item` 写入 container（含 `text` + `embedding`）
3. 将用户 query 同样向量化
4. 执行 vector similarity query，返回 top-N 及相似度 score

**与 AWS 对比**：类似 OpenSearch k-NN 或 Aurora pgvector，但 Cosmos 将 vector index 集成在 NoSQL container policy 中，无需单独 extension。

**注意**：向量查询若跨 partition，必须显式开启 cross-partition；RU 消耗需监控。Data Explorer 中可看到 embedding 为 1536 元素浮点数组。

## 考试要点

- 向量搜索需在 **account 级别** 启用 Vector Search feature
- Container 创建时必须/后续配置 **vector embedding policy**（path、dimensions、distance metric）
- **Cosine distance** 是常见相似度度量；dimensions 必须与模型输出匹配
- 语义检索 = query embedding 与 stored embeddings 的 **nearest neighbor** 搜索
- 跨 partition vector query 需要 **cross partition query**
- 典型 embedding 模型：`text-embedding-ada-002`（1536 维）
- 与 RU 计费、indexing policy 独立——向量索引是 container 级配置

## English Short Summary

Enable **Vector Search** on the Cosmos DB account (Features blade). Create a container with a **vector embedding policy**: path, float32, distance function (cosine), and dimensions (e.g. 1536 for ada-002). Store documents with text + embedding arrays via SDK; vectorize queries with Azure OpenAI and run **top-K similarity search**. Cross-partition queries require explicit enablement. Cosmos DB acts as a managed vector store for semantic retrieval.
