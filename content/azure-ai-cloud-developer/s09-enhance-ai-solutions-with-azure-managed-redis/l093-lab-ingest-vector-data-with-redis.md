---
title: "Lab: Ingest Vector Data with Redis (Hands-On Lab)"
lectureId: 93
section: 9
sectionTitle: "Enhance AI Solutions with Azure Managed Redis"
date: "2026-09-22"
tags: ["redis", "vector-embeddings", "azure-openai", "hands-on-lab"]
---

## 中文短总结

先定义 schema 并使用 Redis 客户端的 `create_index` 创建 HNSW 类型的哈希向量索引（float32、1536 维、余弦距离），再为 JSON 数据集中每条记录的 `content` 字段调用 Azure OpenAI 嵌入模型生成向量、写入新增的 `embedding` 键，最后将向量转换为二进制格式（NumPy `tobytes()`），通过 Pipeline 事务批量执行 `hset` 将全部 37 条记录以 Redis Hash 形式上传至实例。

## 中文长总结

### 创建向量索引

- 定义 schema：id、title、content 为文本字段，category、difficulty、service、author、published_year 为数值/文本字段，embedding 为向量字段
- 向量字段配置：HNSW 索引类型，数据类型 float32，维度 1536（对应 text-embedding-ada-002 输出），距离度量为余弦距离
- 使用 Redis 客户端的 `create_index` 函数，指定索引类型为 hash 向量索引（意味着数据集最终以 Hash 形式上传）

### 生成向量嵌入

- 创建 Azure OpenAI 客户端和 `generate_embeddings` 辅助函数
- 遍历 `data.json` 数据集中的每条记录，为 `content` 字段生成向量嵌入，写入新增的 `embedding` 键，并将结果保存为新文件 `data_with_embeddings.json`

### 转换为二进制并批量上传

- 使用 NumPy 将每条记录的 embedding 字段转为数组，再用 `tobytes()` 转换为二进制格式（Redis 存储向量的原生格式）
- 使用 Redis 客户端的 Pipeline 事务，将每条记录以 `doc:{id}` 为键，映射 id、title、content、category、difficulty、service、author、published_year 及二进制格式的 embedding，执行 `hset` 批量写入
- Pipeline 批处理相比逐条调用可大幅减少网络往返次数，成功批量加载 37 条文档

### 验证

- 使用 `hget` 分别获取 document 001 的 id、title、category 字段，确认数据已正确上传

## English Short Summary

Defined a schema and created an HNSW hash vector index (float32, 1536 dimensions, cosine distance) via Redis's `create_index`, generated embeddings for each record's `content` field using Azure OpenAI, converted the vectors to binary via NumPy's `tobytes()`, and used a Redis pipeline to batch-upload all 37 records as hash sets (keyed `doc:{id}`) — verified afterward with `hget`.
