---
title: "Optimize query performance and RU consumption using Indexes"
lectureId: 10
section: 4
sectionTitle: "Develop AI solutions by using Azure Cosmos DB for NoSQL"
date: "2026-06-17"
tags: ["Cosmos-DB", "indexing-policy", "RU", "consistency-levels", "performance"]
---

## 中文短总结

**Indexing policy** 控制哪些 JSON path 被索引（默认 `/*` 全索引，`_etag` 排除）。Exclude 某字段（如 `/price/?`）→ 按 price 过滤走 **全表扫描**，RU 上升；insert 时少写索引可略降 RU（demo ~3%）。**Consistency levels** 五级：Strong → Bounded staleness → **Session（默认）** → Consistent prefix → Eventual。Session 保证同一 session 内读写顺序；Eventual 最弱、适合只追加场景。多 region 写入延迟与 consistency 直接相关。

## 中文长总结

### Indexing Policy
- 位置：Container → Settings → **Indexing policy**
- 默认：**consistent + automatic**，index all paths `/*`，exclude `_etag`
- 可 **exclude path**：如 `/price/?` → price 不参与索引

### Exclude 对 RU 的影响
| 操作 | 索引含 price | 排除 price |
|------|-------------|-----------|
| INSERT 500 items | ~6.86 RU/item | ~6.67 RU/item |
| WHERE price < 700 | 用索引，较低 | **全扫描，更高 RU** |

- 规则：**不查询的字段可 exclude 以节省写入 RU**；查询该字段会变贵
- 修改 policy 后影响 **后续** 操作

### Consistency Levels（多 region 场景）
| Level | 行为 | 适用 |
|-------|------|------|
| **Strong** | 全球所有 region 同步后才可读 | 强一致，延迟最高 |
| **Bounded staleness** | 强一致 + 最大 lag（如 5s 或 100 versions） | 可控延迟 |
| **Session** | **默认**；同一 session 内有序一致 | 大多数应用 |
| **Consistent prefix** | 跨 session 保序，不保证同时可见 | 有序即可 |
| **Eventual** | 最弱，可能乱序 | 只 append、不需更新 |

- **Session**：用户在自己的读写 session 内看到 red→blue→purple 顺序
- **Eventual**：不同 region 可能先收到第二条 write
- Account 级设置；**Serverless 模式选项可能受限**

### 优化策略（考试）
1. 查询字段保留 index；不查字段 consider exclude
2. 尽量带 **partition key** 避免 cross-partition
3. 用参数化查询 + 测 RU header
4. 选对 consistency：默认 Session，非强一致场景勿用 Strong

### 与 DynamoDB 对照
- Cosmos indexing policy ≈ GSIs + 自动二级索引，但更细粒度 path control
- Consistency levels 比 DynamoDB 显式五级（DynamoDB 最终一致/强一致较简单）

## 考试要点

- **Indexing policy**：`includedPaths` / `excludedPaths`；exclude = 该字段查询走 scan
- 写入 RU vs 查询 RU：**exclude 降写入、升查询**（trade-off）
- 五级 consistency：**Strong > Bounded staleness > Session > Consistent prefix > Eventual**
- **Session = 默认**，同 session 读写有序
- **Eventual**：只追加、可乱序到达
- Bounded staleness：最大延迟 **时间或版本数**（取较小约束）
- 优化 RU：partition key 过滤、合理 indexing、实测 request charge

## English Short Summary

Optimize Cosmos DB via indexing policy and consistency levels. Default indexes all paths (/*); excluding a path (e.g., /price/?) saves write RUs but forces table scans on that field in queries. Five consistency levels: Strong (global sync before read), Bounded staleness (max lag), Session (default, ordered within session), Consistent prefix (ordered cross-session), Eventual (weakest, append-only friendly). Tune indexing for your query patterns; always measure x-ms-request-charge. Exclude fields you never filter on; keep indexes on queried properties.
