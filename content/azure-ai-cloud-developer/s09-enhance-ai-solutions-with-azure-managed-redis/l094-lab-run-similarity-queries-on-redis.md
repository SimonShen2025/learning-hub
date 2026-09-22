---
title: "Lab: Run Similarity Queries on Redis (Hands-On Lab)"
lectureId: 94
section: 9
sectionTitle: "Enhance AI Solutions with Azure Managed Redis"
date: "2026-09-22"
tags: ["redis", "vector-search", "semantic-search", "hands-on-lab"]
---

## 中文短总结

对已上传向量数据的 Redis 实例执行 KNN 近似最近邻搜索：将用户查询生成向量嵌入并转换为二进制格式后，通过 Redis 客户端的 `search` 函数结合 HNSW 向量索引检索 top-5 相似文档，按余弦距离得分升序返回；演示了调高 `EF_RUNTIME` 参数（如设为 100）以提升搜索精度，以及结合分类元数据过滤（如仅返回 category=RAG 的文档）实现混合搜索。

## 中文长总结

### 基础 KNN 搜索

- 用户查询（如 "how do I build a RAG application using Azure AI Search"）先通过嵌入生成辅助函数转为向量，再用 NumPy 转为二进制格式
- 构造 KNN 查询：`KNN 5 @embedding $query_vector AS score`，返回 id、title、category、content、score 字段，按 score 升序排序（score 越小表示越相似）
- 使用 Redis 客户端的 `search` 函数并引用创建好的向量索引执行查询，传入用户查询向量作为参数
- 结果显示各文档的 score 值依次递增，score 最小的文档与用户查询最相似

### 调整 EF_RUNTIME 参数提升精度

- 在 KNN 查询声明中额外设置 `EF_RUNTIME` 参数（如设为 100），增大搜索空间以提升召回精度，代价是查询延迟略有增加
- 其余查询结构保持不变，执行后同样返回 top-5 文档

### 混合搜索（向量 + 元数据过滤）

- 在 KNN 向量搜索查询基础上附加元数据过滤条件（如 `@category:{rag}`），只返回分类为 "rag" 的文档
- 结果显示所有返回文档的 category 字段均为 "rag"，验证了向量搜索与结构化过滤的结合效果

## English Short Summary

Ran approximate nearest-neighbor (KNN) vector searches against the Redis-hosted vector dataset: embedded and binary-encoded the user query, then used Redis's `search` function against the HNSW index to retrieve the top-5 most similar documents ranked by cosine distance score. Demonstrated tuning the `EF_RUNTIME` parameter (e.g., to 100) for higher recall at the cost of latency, and combining vector search with metadata filtering (e.g., category="rag") for hybrid search.
