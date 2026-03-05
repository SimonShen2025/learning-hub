---
title: "DocumentDB"
lectureId: 239
section: "21"
sectionTitle: "Databases in AWS"
date: "2026-03-05"
tags: ["documentdb", "mongodb", "nosql", "json", "aurora-like"]
---

## 中文短总结

Amazon DocumentDB 是 AWS 的 MongoDB 兼容数据库（类似 Aurora 之于 PostgreSQL/MySQL）。完全托管的 NoSQL 数据库，高可用（3 AZ 复制），存储自动增长（10GB 增量），可扩展到百万级请求/秒。存储/查询/索引 JSON 数据。考试关键：看到 **MongoDB** → 选 **DocumentDB**。

## 中文长总结

### DocumentDB 定位

```
Aurora : PostgreSQL/MySQL = DocumentDB : MongoDB
```

- **MongoDB 兼容** — 可使用 MongoDB API 和驱动
- AWS 云原生 NoSQL 数据库

### 核心特性

| 特性 | 说明 |
|------|------|
| 类型 | **NoSQL**（基于 MongoDB） |
| 数据格式 | **JSON** 数据的存储、查询和索引 |
| 高可用 | **3 AZ** 数据复制 |
| 存储 | 自动增长，**10GB 增量** |
| 扩展性 | **百万级请求/秒** |
| 管理 | 完全托管 |

### 部署概念
与 Aurora 类似的部署模型（存储自动管理、高可用、自动扩展）

## 考试要点

- **MongoDB** → **DocumentDB**（考试必记关联）
- DocumentDB = Aurora 版的 MongoDB
- **NoSQL + JSON 数据** → 考虑 DocumentDB 或 DynamoDB
- 3 AZ 复制，存储自动增长
- 百万级请求/秒

## English Short Summary

Amazon DocumentDB is AWS's Aurora-like implementation for MongoDB — a fully managed NoSQL database compatible with MongoDB for storing, querying, and indexing JSON data. Highly available with 3 AZ replication, storage auto-grows in 10GB increments, scales to millions of requests per second. Exam key: see **MongoDB** → think **DocumentDB**.
