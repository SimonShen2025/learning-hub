---
title: "Design Considerations for Vector Storage in CosmosDB"
lectureId: 61
section: 7
sectionTitle: "Develop AI Solutions with Azure CosmosDB for NoSQL"
date: "2026-09-22"
tags: ["cosmosdb", "vector-search", "vector-embeddings", "indexing"]
---

## 中文短总结

在 Cosmos DB 中设计向量存储需考虑：文档结构（新增 embedding 字段存储向量数组）、生成嵌入的字段与嵌入引擎（必须与查询使用同一引擎，避免维度不匹配）、数据类型选择（float32 精度最高，为默认推荐；float16/int8/uint8 用于超大规模数据以节省存储但损失精度）、向量索引类型（flat/quantized flat 为精确搜索，disk ANN 为近似最近邻搜索，性能与召回率的权衡），以及相似度函数选择（RAG 场景推荐余弦相似度，因其只关注向量夹角而非幅值）。

## 中文长总结

### 文档结构与嵌入字段

- 在现有 JSON 文档（含 id、title、content、category 等字段）基础上新增 `embedding` 字段，以数组形式存储向量嵌入
- 嵌入生成引擎来自 Microsoft Foundry 的模型部署；**必须对数据集和用户查询使用同一个嵌入引擎**，否则会因维度不匹配（如 3072 维 vs 1536 维）导致相似度函数无法工作

### 向量数据类型选择

| 数据类型 | 精度 | 适用场景 |
|---|---|---|
| float32 | 最高，默认推荐 | 绝大多数 AI 嵌入场景 |
| float16 | 略有损失 | 超大规模向量库，兼顾成本与精度 |
| int8 | 更低 | 超大规模数据、追求更快相似度搜索 |
| uint8 | 最低，存储占用最小 | 仅在数十亿级记录且可接受精度损失时使用 |

- 课程演示统一使用 float32，因为数据规模不大且是业界最常见做法

### 相似度/距离函数

- **欧几里得距离（Euclidean distance）**：计算两点间的直线距离，不考虑向量夹角
- **余弦相似度（Cosine similarity）**：只关注向量间夹角，语义相近的词夹角小 —— RAG 场景的推荐选择
- **点积（Dot product）**：同时考虑夹角和向量长度（幅值），RAG 场景通常不需要考虑幅值

### 向量嵌入策略（Vector Embedding Policy）

- 需定义：向量字段路径（如 `/vector`）、数据类型（float32）、距离函数（cosine/dot/euclidean）、维度数（需与嵌入引擎输出维度一致，如 1536 或 3072）
- 若有多个向量字段，需为每个字段单独定义策略

### 向量索引类型

- **Flat** 和 **Quantized Flat**：执行精确搜索（exact search），召回率接近 100%，但性能较差，适合小数据集
- **DiskANN**（Cosmos DB 专有）：执行近似最近邻搜索（approximate nearest neighbor），牺牲少量召回率换取更低的 RU 消耗和更低延迟，是最常用的选择
- 索引策略需将向量字段路径从自动元数据索引中排除，转而纳入专门的向量索引定义

## English Short Summary

Designing vector storage in Cosmos DB involves: adding an embedding field to the JSON schema, using the same embedding engine for dataset and query vectors (avoiding dimension mismatches), choosing a data type (float32 is default/recommended; float16/int8/uint8 trade precision for storage at scale), selecting a vector index (flat/quantized flat for exact search vs. DiskANN for approximate search, most common), and picking cosine similarity for RAG since it captures angle, not magnitude.
