---
title: "DynamoDB"
lectureId: 237
section: "21"
sectionTitle: "Databases in AWS"
date: "2026-03-05"
tags: ["dynamodb", "nosql", "serverless", "dax", "streams", "global-tables", "ttl", "session"]
---

## 中文短总结

DynamoDB 数据库章节总结：AWS 原生无服务器 NoSQL，毫秒级延迟。Provisioned（渐进式负载）vs On-Demand（不可预测/突发负载）。可替代 ElastiCache 做 Key-Value 存储 + Session 数据(TTL)。DAX 提供微秒级读缓存。DynamoDB Streams/Kinesis Data Streams 实现事件处理和 Lambda 触发。Global Tables 提供 Active-Active 跨区域复制。备份：PITR 35 天 + On-Demand。可导出到 S3 (不消耗 RCU) / 从 S3 导入（不消耗 WCU）。Schema 快速演变 → DynamoDB。

## 中文长总结

### DynamoDB 全面总结

| 特性 | 说明 |
|------|------|
| 类型 | **无服务器 NoSQL**，AWS 原生 |
| 延迟 | **毫秒级** |
| 容量模式 | **Provisioned** (+ Auto Scaling) / **On-Demand** |
| 高可用 | 多 AZ，读写完全解耦 |
| 事务 | ✅ 支持 |
| 缓存 | **DAX** — 微秒级延迟 |
| 安全 | 全部通过 **IAM** |

### 容量模式选择

| 场景 | 推荐模式 |
|------|----------|
| 负载渐进增减 | **Provisioned** + Auto Scaling |
| 不可预测 / 陡峭突发 | **On-Demand** |

### 事件处理

| 方式 | 保留期 | 特点 |
|------|--------|------|
| **DynamoDB Streams** | 24 小时 | Lambda 触发器 |
| **Kinesis Data Streams** | 最长 1 年 | Firehose + 更多集成 |

### 关键功能

- **Global Tables**：Active-Active 跨区域复制
- **TTL**：自动过期删除（Session 数据经典用例）
- **PITR**：35 天自动备份
- **On-Demand 备份**：长期保留
- **导出到 S3**：不消耗 RCU（PITR 窗口内）
- **从 S3 导入**：不消耗 WCU，创建新表

### DynamoDB 可替代 ElastiCache

- 作为 **Key-Value 存储**
- **Session 数据** + **TTL** 自动过期

## 考试要点

- **Schema 快速演变** → DynamoDB（不是 RDS/Aurora）
- **可替代 ElastiCache**做 Key-Value / Session 存储
- **DAX** = 微秒级缓存（vs ElastiCache = 需改代码）
- **Provisioned** = 平稳负载；**On-Demand** = 突发/不可预测
- **DynamoDB Streams** → Lambda 触发器（24h）
- **Global Tables** → Active-Active 多区域
- 导出 S3 不消费 RCU，导入不消耗 WCU
- 最大项大小 **400KB**（小文档，数百 KB 以下）

## English Short Summary

DynamoDB database section summary: AWS-native serverless NoSQL with millisecond latency. Provisioned (smooth workloads) vs On-Demand (unpredictable/spiky). Can replace ElastiCache as key-value store + session data with TTL. DAX provides microsecond read latency cache. DynamoDB Streams (24h, Lambda triggers) or Kinesis Data Streams (1-year, more integrations) for event processing. Global Tables for Active-Active cross-region replication. Backups: PITR 35 days + on-demand. Export to S3 (no RCU) / import from S3 (no WCU). Rapidly evolving schema → DynamoDB. Max item size 400KB.
