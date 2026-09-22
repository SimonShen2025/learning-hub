---
title: "Design Considerations for Vector Storage with Azure Managed Redis"
lectureId: 92
section: 9
sectionTitle: "Enhance AI Solutions with Azure Managed Redis"
date: "2026-09-22"
tags: ["redis", "vector-search", "hnsw"]
---

## 中文短总结

Redis 支持两种向量索引：Flat 索引（暴力精确搜索，召回率接近 100% 但延迟高）和 HNSW 索引（图结构近似最近邻搜索，召回率约 95-99% 且延迟可控，生产环境推荐）。创建向量索引需定义 schema（字段类型、向量维度、距离度量，推荐余弦相似度）；`EF_RUNTIME` 参数可在查询时调整搜索广度以平衡精度和延迟。向量嵌入需先转换为二进制格式（通过 NumPy 的 `tobytes()`），并推荐存储在 Redis 原生的 Hash 数据结构（而非 JSON 文档）中以获得更好性能。

## 中文长总结

### 向量索引类型

- **Flat 索引**：暴力搜索（brute force），将用户查询向量与数据集中每个向量逐一比较，召回率接近 100%（精确搜索），但延迟较高
- **HNSW 索引**（Hierarchical Navigable Small Worlds）：基于图结构的近似最近邻搜索，在准确率（约 95%-99%）和延迟之间取得较好平衡，是生产环境推荐的选择

### 创建向量索引（Schema 定义）

- 需要定义 schema，声明各字段类型：如 title、content 为文本字段，embedding 为向量字段
- 向量字段配置：索引类型（HNSW）、数据类型（float32，推荐以获得最高精度）、维度（取决于嵌入引擎输出，如 1536）、距离度量（cosine、dot product 或 Euclidean L2，RAG 场景推荐余弦相似度）

### EF_RUNTIME 参数

- 查询时可配置的参数，控制搜索期间 Redis 检查的图节点数量
- 数值越大，搜索越彻底、精度越高，但查询延迟也越高；不设置时使用基于数据的默认值

### 数据上传方式

- 两种方式：将向量嵌入存入 **Redis Hash**（原生数据结构，性能更优，推荐）或存入 **JSON 文档**（非原生结构，性能稍逊，但适合已有 JSON 格式且元数据复杂的数据集）
- 向量嵌入在 Redis 中以**二进制格式**存储：需先用 NumPy 将嵌入转为数组，再用 `tobytes()` 转换为二进制格式，存入 Hash 的 embedding 字段；若存为 JSON 文档，则使用 `tolist()` 转为列表格式而非二进制

## English Short Summary

Redis supports two vector index types: Flat (brute-force exact search, ~100% recall, high latency) and HNSW (graph-based approximate search, ~95-99% recall, balanced latency, recommended for production). Creating an index needs a schema with field types, vector dimensions, and distance metric (cosine for RAG); `EF_RUNTIME` trades search breadth for latency. Embeddings must be binary-encoded via NumPy's `tobytes()`, best stored in a native Hash (vs. JSON).
