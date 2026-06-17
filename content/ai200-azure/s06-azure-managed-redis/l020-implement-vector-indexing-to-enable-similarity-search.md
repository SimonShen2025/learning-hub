---
title: "Implement vector indexing to enable similarity search"
lectureId: 20
section: 6
sectionTitle: "Integrate Azure Managed Redis in AI solutions"
date: "2026-06-17"
tags: ["redis", "vector-search", "redissearch", "ai-200"]
---

## 中文短总结

Redis 向量搜索比 Cosmos/PG **更复杂**，依赖 **RedisSearch** module。流程：创建 **HASH index**（fields: text, response, embedding vector 1536-dim）→ store hash entries → **`FT.SEARCH`** KNN 查询。命令：`FT.CREATE` 定义 schema → loop embed & HSET → `FT.SEARCH idx KNN @embedding $vec`。返回 distance score（越小越近）。需先 delete 旧 index 再 recreate。Cosmos/PG 更简洁，但 Redis 适合已有缓存层 + vector 合一。

## 中文长总结

在 Azure Managed Redis 实现 vector similarity search——第三种 vector store（继 Cosmos DB、PostgreSQL 之后）。

**前置条件**：创建 Redis 时已启用 **RedisSearch** module。

**Index 创建（RedisSearch schema）**：
- Index type：**HASH**（demo 未用 JSON index）
- Fields：prompt text、response text、**embedding** as VECTOR（FLOAT32, 1536 dimensions, COSINE）
- 命令：`FT.CREATE idx ON HASH SCHEMA ... embedding VECTOR ...`

**数据写入**：
1. Sample Q&A pairs（Azure services 相关文本）
2. OpenAI embed each prompt
3. `HSET` hash key with text + response + embedding bytes

**相似度搜索**：
- Raw command：`FT.SEARCH idx "*=>[KNN {K} @embedding $vec AS score]" PARAMS 2 vec {embedding_bytes} SORTBY score`
- Python：`redis_client.execute_command("FT.SEARCH", ...)`
- 比较 query embedding vs stored prompt embeddings
- 返回 top-K with **distance scores**（0.05、0.07 = 非常接近）

**Demo 结果**：Query "tell me about container apps on Azure" → top hit "What is Azure Container Apps?"，second "App Service for containers"。

**复杂度对比**：
- Cosmos DB：container vector policy + SDK query
- PostgreSQL：pgvector + SQL `<=>`
- Redis：FT.CREATE + FT.SEARCH KNN syntax，最 verbose

**适用场景**：已在用 Redis 做 LLM cache/session，希望 **同实例** 加 vector search，避免多 datastore。

## 考试要点

- Redis vector search requires **RedisSearch** module on **Azure Managed Redis**
- Index types：HASH or JSON；VECTOR field with dimensions + distance metric (COSINE)
- Search command：**FT.SEARCH** with **KNN** clause on `@embedding`
- Lower distance score = closer match
- More complex API than Cosmos DB or pgvector—but unified cache + vector store
- Must delete/recreate index when schema changes
- AI-200 tests knowledge of all three vector stores: Cosmos, PostgreSQL, Redis

## English Short Summary

Redis vector search via **RedisSearch**: create HASH index with VECTOR field (1536-dim, cosine), store embeddings with HSET, query with **FT.SEARCH KNN @embedding**. More verbose than Cosmos/pgvector but combines caching and similarity search. Requires Azure Managed Redis with RedisSearch enabled. Lower distance = closer match.
