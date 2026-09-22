---
title: "Lab: Execute Vector Similarity Queries for Semantic Search (Hands-On Lab)"
lectureId: 63
section: 7
sectionTitle: "Develop AI Solutions with Azure CosmosDB for NoSQL"
date: "2026-09-22"
tags: ["cosmosdb", "vector-search", "semantic-search", "hands-on-lab"]
---

## 中文短总结

使用 `VectorDistance` 函数结合 `ORDER BY` 实现语义相似度检索，为用户查询实时生成向量嵌入后传入查询参数；演示了加相似度阈值过滤（`WHERE` 距离 > 0.7）、暴力搜索（brute-force，将 `VectorDistance` 的精确参数设为 true，牺牲性能换取更高召回率）、结合元数据过滤（如 dietary tags 数组）的混合过滤，以及单分区查询相比跨分区查询能显著降低 RU 消耗和延迟的最佳实践。

## 中文长总结

### 基础向量相似度查询

- SQL 查询选取 top 5 文档的 id、name、category、content，使用 `VectorDistance(c.vector, @queryVector)` 计算相似度分数并按分数排序
- 查询参数 `@queryVector` 在运行时通过 `generate_embeddings` 辅助函数为用户查询（如 "high protein food"）动态生成
- 需要设置跨分区查询（`enable_cross_partition_query=True`），因为要在所有分类中检索

### 相似度阈值过滤

- 在 WHERE 子句中加入 `VectorDistance(...) > 0.7` 条件，只返回相似度分数超过阈值的文档

### 暴力搜索（Brute-Force Similarity Search）

- 默认查询使用 DiskANN 向量索引执行近似最近邻搜索（approximate nearest neighbor），消耗 RU 较少但精度稍逊
- 将 `VectorDistance` 函数的第三个参数设置为 `true`（同时用于 SELECT 和 ORDER BY 子句）可切换为暴力搜索，即对每个文档逐一计算精确相似度
- 权衡：暴力搜索精度和召回率更高，但 RU 消耗和查询延迟显著增加，数据量越大差异越明显

### 结合元数据过滤

- 在 WHERE 子句中同时加入向量相似度条件和普通字段过滤条件（如 `dietaryTags` 数组包含 "vegetarian"），实现"语义检索 + 结构化过滤"的组合查询

### 单分区查询最佳实践

- 若已知目标分类（如只关心 smoothies），应在查询时显式传入 `partition_key='smoothies'`，避免不必要的跨分区扫描
- 单分区查询相比跨分区查询能显著降低 RU 消耗，提高执行速度（返回结果不再包含其他分类，如 sandwiches、salads）

## English Short Summary

Implemented semantic search using `VectorDistance` with `ORDER BY`, embedding the user query at runtime. Covered similarity-threshold filtering (`WHERE` distance > 0.7), brute-force exact search (setting the `VectorDistance` boolean parameter to true — higher recall, higher RU cost), combining vector search with metadata filters (e.g., dietary tags), and the best practice of scoping queries to a single partition key when the target category is known to cut RU consumption and latency.
