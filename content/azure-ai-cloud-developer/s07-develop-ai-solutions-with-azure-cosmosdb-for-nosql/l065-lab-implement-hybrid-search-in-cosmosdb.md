---
title: "Lab: Implement Hybrid Search in CosmosDB (Hands-On Lab)"
lectureId: 65
section: 7
sectionTitle: "Develop AI Solutions with Azure CosmosDB for NoSQL"
date: "2026-09-22"
tags: ["cosmosdb", "hybrid-search", "full-text-search", "hands-on-lab"]
---

## 中文短总结

为容器新增全文搜索策略（英文 en-US，作用于 `content` 字段）和全文索引，与已有的向量索引共存；分别演示纯全文搜索查询、纯向量搜索查询（结果存在差异），最后使用 Cosmos DB 内置的 `RRF()` 函数结合 `VectorDistance` 和 `FullTextScore` 实现混合搜索排序，并展示了为两者分配不同权重（如 1:2）的加权混合搜索写法。

## 中文长总结

### 创建全文搜索策略与索引

- 容器已有向量嵌入索引，但缺少全文搜索索引（Full Text Indexes 数组为空）
- 新建全文搜索策略：语言设为 `en-US`，作用路径为 `/content`（与向量嵌入所依据的字段相同）
- 更新容器索引策略，使其同时包含向量索引和全文索引（路径均含 `/content`）
- 应用后可在门户 Container Policy → Full Text Policy 及 Indexing Policy 中确认已生效

### 对比纯全文搜索与纯向量搜索结果

- 全文搜索查询：`SELECT TOP 5 ... ORDER BY FullTextScore(c.content, @query)`，用户查询 "protein rich smoothies with raw cacao"
- 向量搜索查询：`SELECT TOP 5 ... ORDER BY VectorDistance(c.vector, @queryVector)`，同样的用户查询
- 两者结果存在明显差异：全文搜索命中包含关键词的文档，向量搜索命中语义相近但关键词不同的文档（如某些命名奇特的 smoothie）

### 混合搜索查询（RRF）

- 使用 Cosmos DB 内置的 `RRF()` 函数，将 `VectorDistance` 和 `FullTextScore` 两个子表达式作为参数传入，ORDER BY 该 RRF 分数
- 需要为用户查询同时生成向量嵌入（传给 `VectorDistance`）和保留自然语言文本（传给 `FullTextScore`）
- 执行结果综合了向量搜索和全文搜索的排名，结果分布往往偏向其中一方，取决于用户查询与文档结构的匹配程度

### 加权混合搜索

- 默认 RRF 对向量搜索和全文搜索权重相等（1:1）
- 可在 `RRF()` 函数中显式指定权重（如向量权重 1、全文权重 2），实现加权混合搜索，调整两种排序方式对最终结果的影响力

## English Short Summary

Added a full-text search policy (en-US, on the `content` field) and index alongside the existing vector index, then compared full-text-only and vector-only search results (they differ), and finally implemented hybrid search using Cosmos DB's built-in `RRF()` function combining `VectorDistance` and `FullTextScore`, including a weighted variant that assigns different weights (e.g., 1:2) to the two ranking signals.
