---
title: "Unit 16: Agent Memory – Long-Term User Memory (Cosmos DB)"
lectureId: 37
section: 2
sectionTitle: "Code Walkthroughs"
date: "2026-07-01"
tags:
  - cosmos-db
  - agent-memory
  - redis
  - hybrid-memory
  - partition-key
  - lab
---

## 中文短总结

在 Redis 短期会话记忆基础上，用 **Azure Cosmos DB** 存储跨会话 **user preferences**（长期记忆）。Hybrid memory：Redis 存 conversation history，Cosmos 存 user profile；partition key = `/userId`，TTL 90 天。

## 中文长总结

### Bicep 资源

- Foundry + Project + Content Safety + Redis + **Cosmos DB**
- Cosmos 内创建 Database + Container
- Container 配置：
  - **Partition key**: `/userId`（错误 key 会导致 read/upsert 失败）
  - Composite index: userId + timestamp
  - **Default TTL**: 90 days（长期存储；活跃更新会重置 TTL）

### Outputs

- Cosmos endpoint、database name、container name、primary key（本单元用 key 认证，非 Managed Identity）

### CosmosMemory 类

| 方法 | SDK 调用 |
|------|----------|
| get_user_profile | `container.read_item(item=user_id, partition_key=user_id)` |
| save_user_profile | `container.upsert_item(profile)` |
| update_preferences | get → merge key-value → save |

Profile 结构：

```json
{
  "id": "luke.ginn1",
  "userId": "luke.ginn1",
  "preferences": {
    "temperature_unit": "Celsius",
    "language": "English",
    "past_orders": []
  },
  "lastUpdated": "...",
  "ttl": 7776000
}
```

### Hybrid Memory 流程

```
session_id → Redis (short-term conversation)
user_id    → Cosmos (long-term preferences)

process_message:
  1. Load Redis history + Cosmos profile
  2. First-time user → default preferences → upsert
  3. Append preferences to system instructions
  4. LLM call → save turn to Redis
  5. (Optional) SLM detect preference changes → upsert Cosmos
```

### System Instructions 扩展

```
User preferences:
- Temperature: Celsius
- Language: Spanish
- Past orders: ...
Use these to personalize responses.
```

### 关键 ID 语义

- **user_id**：跨会话不变（如 email/username）
- **session_id**：每会话唯一（conversation ID）

## 考试要点

- **Hybrid memory**：Redis（short-term sessions）+ Cosmos DB（long-term preferences）
- Cosmos partition key 决定数据分布；本例为 **userId**
- `read_item` / `upsert_item` 是核心 SDK 操作
- TTL 自动删除不活跃用户数据（90 天无活动）
- 首次用户需创建 default profile
- 可用额外 LLM 检测 preference 变化（成本权衡：每 N 条消息评估一次）
- Cosmos DB = globally distributed NoSQL，自动 indexing

## English Short Summary

Unit 16 adds Azure Cosmos DB for long-term user preferences alongside Redis short-term conversation memory (hybrid memory). Partition key /userId, 90-day TTL, upsert_item/read_item patterns. Preferences inject into system instructions at conversation start. user_id persists across sessions; session_id changes per conversation. Exam focus: hybrid memory architecture, partition keys, Cosmos SDK operations, TTL cost management, and first-time user defaults.
