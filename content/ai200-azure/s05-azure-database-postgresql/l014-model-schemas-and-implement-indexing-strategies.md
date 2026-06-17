---
title: "Model schemas and implement indexing strategies"
lectureId: 14
section: 5
sectionTitle: "Develop AI solutions by using Azure Database for PostgreSQL"
date: "2026-06-17"
tags: ["postgresql", "pgvector", "schema", "ai-200"]
---

## 中文短总结

启用 vector 两步：Server parameters 设 **`azure.extensions` = VECTOR**，再执行 **`CREATE EXTENSION IF NOT EXISTS vector`**。AI 文档表典型 schema：`UUID` PK（`gen_random_uuid()`）、`VARCHAR(255)`、`TEXT`、`vector(1536)` embedding、`INTEGER`、`TIMESTAMPTZ`。理解各类型用途——VARCHAR 变长、TEXT 大文本（需特殊函数）、vector 存 embedding 数组。

## 中文长总结

本讲聚焦 **schema 设计与 AI 数据类型**，为 indexing（下一讲）和 vector search 打基础。

**启用 pgvector（Azure 特有步骤）**：
1. Portal → Server parameters → `azure.extensions` → 勾选 **VECTOR** → Save
2. 数据库级：`CREATE EXTENSION IF NOT EXISTS vector;`

两步缺一不可：server 级授权 + database 级 extension。

**示例 `documents` 表 schema**：

| 列 | 类型 | 说明 |
|---|---|---|
| id | UUID PK | `DEFAULT gen_random_uuid()`，全局唯一 |
| title | VARCHAR(255) | 变长字符串，最大 255 |
| content | TEXT | 最大 ~1 GB，非普通字符串比较 |
| embedding | vector(1536) | AI embedding，1536 维浮点数组 |
| category | INTEGER | 整型分类 |
| created_at | TIMESTAMPTZ | 带时区时间戳，`DEFAULT now()` |

**数据类型要点**：
- **UUID**：2^122 空间，碰撞概率极低；适合分布式主键
- **VARCHAR vs TEXT**：VARCHAR 有长度上限且变长存储；TEXT 适合大段内容
- **vector(n)**：pgvector 类型，n = embedding 维度，须与模型一致

**与 Cosmos DB 对比**：Cosmos 用 JSON + vector policy；PostgreSQL 用强类型 relational schema + `vector` column type。

Indexing 策略（B-tree on category、HNSW on embedding）在下一讲详述，本讲 objective 侧重 **model schemas and data types**。

## 考试要点

- Azure PG vector 启用：**azure.extensions=VECTOR** + **CREATE EXTENSION vector**
- **vector(n)** 列存储 embedding；n 必须匹配模型维度（如 1536）
- UUID + `gen_random_uuid()` 是推荐 PK 模式
- VARCHAR(255) vs TEXT：前者有长度限制，后者适合大文本
- Schema 设计是 relational AI 方案的第一步，先于 index 创建
- Extension 在 server 参数和 database 两层分别配置

## English Short Summary

Enable vectors: set **azure.extensions=VECTOR** in server parameters, then run **CREATE EXTENSION vector**. Design schemas with UUID PK, VARCHAR/TEXT for content, and **vector(1536)** for embeddings. Understand type trade-offs (variable-length VARCHAR vs large TEXT). Prerequisite for HNSW/IVFFlat indexing and similarity search covered next.
