---
title: "Amazon DynamoDB"
lectureId: 222
section: "19"
sectionTitle: "Serverless Overviews from a Solution Architect Perspective"
date: "2026-03-05"
tags: ["dynamodb", "nosql", "serverless", "partition-key", "provisioned", "on-demand", "rcu", "wcu"]
---

## 中文短总结

Amazon DynamoDB 是完全托管的 NoSQL 数据库，多 AZ 高可用，**单位数毫秒延迟**。支持百万级 RPS、数万亿行和数百 TB 存储。最大单项 400KB。两种容量模式：**Provisioned**（预配置 RCU/WCU + Auto Scaling，适合可预测负载）和 **On-Demand**（按使用付费，贵 2-3 倍，适合不可预测/突发负载）。Schema 可快速演变，比 RDS/Aurora 更灵活。

## 中文长总结

### DynamoDB 核心特性

- **完全托管**，无需维护或补丁，始终可用
- **NoSQL 数据库** — 非关系型，但支持事务
- 多 AZ 数据复制，高可用
- **单位数毫秒性能**，一致且可预测
- 安全与 **IAM 完全集成**
- 低成本，自动扩展能力

### 基本概念

| 概念 | 说明 |
|------|------|
| 表 (Table) | 直接创建表，无需先创建数据库（服务即数据库） |
| 主键 (Primary Key) | 创建时决定，不可更改 |
| 项 (Item) | 表中的行，**最大 400KB** |
| 属性 (Attribute) | 列，**可随时添加，可为 null** |
| 分区键 (Partition Key) | 必须 |
| 排序键 (Sort Key) | 可选，与分区键组成复合主键 |

### Schema 灵活性
- 不同 Item 可以有**不同的属性**
- 可随时添加新属性，无需预先定义
- **考试关键**：Schema 需快速演变 → 选 DynamoDB（优于 RDS/Aurora）

### 容量模式

| 模式 | Provisioned（默认） | On-Demand |
|------|---------------------|-----------|
| 计费 | 按预配置的 RCU/WCU | 按实际读写次数 |
| 扩展 | Auto Scaling 自动调整 RCU/WCU | 自动扩展，无需规划 |
| 成本 | 较低（可预测） | **贵 2-3 倍** |
| 适用场景 | **可预测**、平稳增长的负载 | **不可预测**、突发的负载 |
| 关键词 | 平稳增长、可预测 | 1000→100 万突发、极少事务 |

### 数据类型
- **Scalar**：String、Number、Binary、Boolean、Null
- **Document**：List、Map
- **Set**：String Set、Number Set、Binary Set

### 表类别
- **Standard** — 频繁访问的数据
- **Infrequent Access (IA)** — 不频繁访问的数据（成本更低）

## 考试要点

- DynamoDB = **NoSQL、完全托管、多 AZ、单位数毫秒延迟**
- **最大项大小 400KB**（不适合存储大对象）
- Schema 快速演变 → **DynamoDB**（不是 RDS/Aurora）
- **Provisioned 模式**：预配置 RCU/WCU，可用 Auto Scaling，适合可预测负载
- **On-Demand 模式**：按使用付费，贵 2-3 倍，适合不可预测/突发负载
- 1000 → 100 万事务突增 → **On-Demand**（Provisioned 扩展不够快）
- 每天仅 4-5 次事务 → **On-Demand**（只为实际使用付费）
- DynamoDB 无需创建数据库，直接创建表
- 安全全面集成 IAM

## English Short Summary

Amazon DynamoDB is a fully managed, highly available NoSQL database with multi-AZ replication and consistent single-digit millisecond performance. Scales to millions of RPS, trillions of rows, hundreds of TB. Max item size is 400KB. Schema can evolve rapidly (better than RDS/Aurora). Two capacity modes: **Provisioned** (default — plan RCU/WCU with optional Auto Scaling, cost-effective for predictable workloads) and **On-Demand** (auto-scales, no planning needed, 2-3x more expensive, ideal for unpredictable/spiky workloads). Standard and IA table classes available.
