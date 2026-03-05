---
title: "Keyspaces (for Apache Cassandra)"
lectureId: 241
section: "21"
sectionTitle: "Databases in AWS"
date: "2026-03-05"
tags: ["keyspaces", "cassandra", "nosql", "cql", "iot", "time-series"]
---

## 中文短总结

Amazon Keyspaces 是 AWS 托管的 Apache Cassandra 服务 — 无服务器、可扩展、高可用（3 AZ 复制），使用 **CQL (Cassandra Query Language)** 查询。单位数毫秒延迟，千级 RPS。两种容量模式（与 DynamoDB 相同）：On-Demand 和 Provisioned + Auto Scaling。支持加密和 PITR 35 天备份。用例：IoT 设备信息、时间序列数据。考试：**Apache Cassandra** → **Keyspaces**。

## 中文长总结

### Keyspaces 核心

| 特性 | 说明 |
|------|------|
| 基础 | **Apache Cassandra** 托管版 |
| 类型 | **NoSQL** 分布式数据库 |
| 模式 | **无服务器**，自动扩展 |
| 高可用 | **3 AZ** 数据复制 |
| 查询语言 | **CQL** (Cassandra Query Language) |
| 延迟 | **单位数毫秒** |
| 吞吐 | **千级请求/秒** |

### 容量模式（与 DynamoDB 相同）

| 模式 | 说明 |
|------|------|
| **On-Demand** | 按使用付费 |
| **Provisioned** | 预配容量 + Auto Scaling |

### 安全与备份
- 加密（静态 + 传输）
- **PITR** 最长 **35 天**

### 用例
- **IoT 设备信息**
- **时间序列数据**

## 考试要点

- **Apache Cassandra** → **Amazon Keyspaces**（考试必记）
- 无服务器 NoSQL，使用 CQL
- 3 AZ 复制，单位数毫秒延迟
- 容量模式与 DynamoDB 相同（On-Demand / Provisioned）
- 用例：IoT、时间序列

## English Short Summary

Amazon Keyspaces is AWS-managed Apache Cassandra — serverless, scalable, highly available (3 AZ replication). Uses CQL (Cassandra Query Language) with single-digit millisecond latency and thousands of RPS. Two capacity modes (same as DynamoDB): On-Demand and Provisioned with auto-scaling. Encryption and PITR backup up to 35 days. Use cases: IoT device info, time-series data. Exam: **Apache Cassandra** → **Keyspaces**.
