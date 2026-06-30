---
title: "Unit 16: Agent Memory – Short-Term and Long-Term State"
lectureId: 17
section: 1
sectionTitle: "Theory"
date: "2026-07-01"
tags: ["Agent Memory", "Redis", "Cosmos DB", "Short-Term Memory", "Long-Term Memory", "Session Context"]
---

## 中文短总结

本讲讲解 Agent **记忆**架构：**Short-term memory**（会话上下文，存 RAM/Redis，会话结束或 ~1 小时无活动后清除）与 **Long-term memory**（跨会话用户偏好，存 **Cosmos DB**）。LLM 本身无记忆，每次调用需重发完整 messages 数组。Token 超限策略：**sliding window**、token-based window、**summarization**。Redis 用 `setex` + `JSON.dumps` 序列化；Cosmos DB 用 `upsert_item`，**partition key = user ID**。认证优先 **Managed Identity**；监控用 Memory Read/Write spans。

## 中文长总结

### 核心概念

- **LLM 无内置记忆**：每次 prompt 必须重发完整 conversation history
- Agent 框架封装此逻辑，用户感知不到
- 无记忆 → Agent 每轮对话从零开始，无法自然交互

### Short-Term Memory（短期记忆）

- 存储当前会话信息（messages array：user prompts + LLM outputs）
- 存储位置：Agent runtime RAM 或 **Redis**（低延迟缓存）
- 过期：~1 小时无活动或用户显式结束会话
- **不要用 Cosmos DB 存短期记忆**

### Long-Term Memory（长期记忆）

- 跨会话持久化：用户偏好、历史、profile data
- 存储：**Cosmos DB**（NoSQL，直接存 JSON 文档）或 Redis（较少用于长期）
- 需要稳定 **user ID** 或 session cookie 关联数据
- 推荐设置 **TTL**（如 90 天无交互自动过期）

### 典型混合模式

1. 会话开始 → 从 Cosmos DB 加载 long-term preferences
2. 会话进行中 → Redis 维护 short-term conversation history

### Token 超限处理

| 策略 | 说明 |
|------|------|
| **Sliding window** | 只保留最近 N 条消息（如 20 条），丢弃最旧 |
| **Token-based window** | 按 token 数限制，移除最旧 tokens |
| **Summarization** | 用 LLM 压缩旧消息为摘要，替换原 messages（保留关键事实，丢失细节） |

### Redis 操作

```python
import redis, json
r = redis.Redis(host=endpoint, password=api_key)
r.setex(session_id, 3600, json.dumps(memory))  # 1 hour TTL
data = json.loads(r.get(session_id))
```

- **必须序列化**：`JSON.dumps` 写入，`JSON.loads` 读取
- 更新记忆：重新 `setex` 自动重置 TTL
- 文档大小建议 **< 1 MB**

### Cosmos DB 操作

```python
container.upsert_item({
    "id": conversation_id,
    "userId": user_id,
    "memory": {...},
    "ttl": 7776000  # 90 days
})
item = container.read_item(item=conversation_id, partition_key=user_id)
```

- **Partition key = user ID**（快速检索，考试高频）
- `upsert_item`：不存在则创建，存在则替换
- 文档大小建议 **< 2 MB**
- 无需 JSON 序列化（直接存 dict）

### 存储内容

- conversation ID、user ID、messages、preferences
- State：等待 order number、等待 approval、pending tool call
- last activity timestamp

### 安全与监控

- 认证：**Managed Identity** > connection string + Key Vault
- Cosmos DB 角色：`Cosmos DB Built-in Data Contributor`
- Spans：`Memory Read`（storage type, key, hit, duration）、`Memory Write`（size bytes, TTL, duration）
- 缺失字段处理：`memory.get("field", default_value)`

## 考试要点

- Short-term → **Redis**（速度 + TTL）；Long-term → **Cosmos DB**（持久 JSON）
- LLM **不能**存储记忆，Agent 负责 resend history
- Cosmos DB partition key = **user ID**
- Redis 需要 **JSON.dumps/loads** 序列化；Cosmos DB 不需要
- Redis API：`setex`；Cosmos DB API：`upsert_item` / `read_item`
- Token 超限策略：sliding window、token window、summarization（各有 trade-off）
- TTL 设置防止存储膨胀（Redis 1h，Cosmos 90d）
- 文档大小限制：Redis < 1MB，Cosmos < 2MB
- Managed Identity 优于 connection string
- 用 Foundry Trace spans 监控 memory read/write 性能

## English Short Summary

This lecture covers agent memory architecture. Short-term memory (session context) lives in RAM or Redis with ~1-hour TTL; long-term memory (user preferences across sessions) persists in Cosmos DB. LLMs have no native memory—agents resend full message history each call. Token limit strategies: sliding window, token-based window, and LLM summarization. Redis uses `setex` with JSON.dumps serialization; Cosmos DB uses `upsert_item` with user ID as partition key (no serialization needed). Hybrid pattern: load long-term at session start, maintain short-term during conversation. Security via Managed Identity; monitoring via Memory Read/Write spans with storage type, key, duration attributes.
