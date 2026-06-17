---
title: "Implement Azure Managed Redis data operations"
lectureId: 19
section: 6
sectionTitle: "Integrate Azure Managed Redis in AI solutions"
date: "2026-06-17"
tags: ["redis", "caching", "llm-cache", "ai-200"]
---

## 中文短总结

选 **Azure Managed Redis**（Redis Enterprise 基础），非旧版 **Azure Cache for Redis**。AI 场景需启用 **RedisSearch**（向量搜索）和 **JSON** module。Tier：In-memory（B0 最小）或 Memory+Flash（大数据集）。Demo：用 **MD5(prompt)** 作 cache key，TTL 3600s 缓存 LLM 响应——cache miss 调 GPT，hit 直接返回。Access key 认证；注意实际端口（如 10000）。No eviction + 无 persistence = 重启丢数据。

## 中文长总结

Azure 有两个 Redis 产品——考试必须区分：

| 产品 | 定位 |
|---|---|
| **Azure Cache for Redis** | 传统缓存（Basic/Standard/Premium），无现代 vector/JSON 结构 |
| **Azure Managed Redis** | Redis Enterprise，**AI 向量搜索必须选此** |

**创建 Azure Managed Redis**：
- Performance tier：**In-memory**（常规）或 **Memory + Flash SSD**（超大数据集）
- Plan 命名：B0（0.5 GB）、B3（3 GB）等
- **Modules**：启用 **RedisSearch**（vector similarity）+ **JSON**（可选，存 embedding）
- Clustering：**Enterprise cluster** policy（RedisSearch 不支持 OSS clustering）
- Persistence：demo 选 none（内存-only，restart 丢数据）
- 认证：Access keys 或 Entra ID

**LLM Response Caching 模式**：
1. `cache_key = MD5(question/prompt)`
2. `GET cache_key` → hit 则直接返回 cached answer
3. Miss → call Azure OpenAI chat completions → `SET cache_key, response, EX=3600`
4. 相同 prompt 第二次 = cache hit，节省 cost + latency

**适用**：重复 Q&A、weather/static content；**不适用**：实时数据（stock prices）。

**连接**：`redis` Python package；host + access key + port（Managed Redis 可能非默认 6379，如 10000）。

## 考试要点

- AI vector features require **Azure Managed Redis**, not legacy Azure Cache for Redis
- Enable **RedisSearch** module for vector similarity
- **JSON module** optional for structured embedding storage
- LLM caching pattern：hash prompt → GET/SET with TTL
- Enterprise cluster policy required when RedisSearch enabled
- In-memory = fast; no persistence = data lost on restart
- B0 smallest tier lacks geo-replication, private endpoints

## English Short Summary

Use **Azure Managed Redis** (Redis Enterprise), not legacy Cache for Redis, for AI. Enable **RedisSearch** (+ JSON optional). Cache LLM responses with hashed keys and TTL—miss calls OpenAI, hit saves cost/latency. Connect via redis client with access key and service-specific port. In-memory, no persistence by default.
