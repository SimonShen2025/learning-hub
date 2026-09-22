---
title: "Understand CosmosDB's Consistency Model"
lectureId: 67
section: 7
sectionTitle: "Develop AI Solutions with Azure CosmosDB for NoSQL"
date: "2026-09-22"
tags: ["cosmosdb", "consistency-models", "distributed-systems"]
---

## 中文短总结

Azure Cosmos DB 提供五种一致性模型，用于在全球分布式场景下权衡延迟与数据一致性：强一致性（Strong，读写完全同步但延迟高）、有界过期（Bounded Staleness，滞后不超过 k 个版本或 t 秒）、会话一致性（Session，同一会话内读己之写）、一致前缀（Consistent Prefix，读取顺序与写入顺序一致但可能滞后）、最终一致性（Eventual，无顺序保证但延迟最低、可用性最高）。一致性级别在创建 Cosmos DB 客户端时通过 `consistency_level` 参数设置。

## 中文长总结

### 问题背景

- 现代应用用户遍布全球，数据可能在一个区域写入、在另一个区域读取
- Cosmos DB 是全球分布式数据库，写入操作首先更新离用户最近的区域服务器，再异步向其他区域传播，期间存在网络延迟
- 需要在"延迟"与"数据可用性/一致性"之间找到平衡，这正是一致性模型要解决的问题

### 设置一致性级别

- 在创建 `CosmosClient` 时传入 `consistency_level` 参数（如 `session`、`strong` 等），该级别作用于该客户端后续所有数据库操作

### 五种一致性模型

1. **强一致性（Strong）**：任意区域的读取都会返回最新写入的值，不会读到旧数据；但由于需要等待跨区域同步完成，延迟最高
2. **有界过期（Bounded Staleness）**：读取结果最多落后写入 k 个版本或 t 秒（k、t 可配置），在延迟可预测性上优于强一致性，接近强一致性的保证
3. **会话一致性（Session）**：只要客户端在同一会话（session token）内，就能保证读到自己写入的最新数据（read-your-writes）；不同会话之间不保证。需要应用在每次读写操作中正确传递会话 ID
4. **一致前缀（Consistent Prefix）**：如果写入顺序为 A、B、C，读取结果虽然可能滞后（如只读到 A，或 A+B），但绝不会打乱顺序（不会读到 B 却读不到 A）
5. **最终一致性（Eventual）**：最弱的一致性保证，读取可能返回过期数据且无顺序保证；优点是延迟最低、可用性和吞吐量最高，因为读取无需协调多个副本

## English Short Summary

Azure Cosmos DB offers five consistency models balancing latency against consistency: Strong (always latest data, highest latency), Bounded Staleness (lag capped at k versions or t seconds), Session (read-your-writes within a session), Consistent Prefix (reads preserve write order but may lag), and Eventual (weakest guarantee, lowest latency, highest availability). Set via `CosmosClient`'s `consistency_level` parameter.
