---
title: "Introduction to Azure CosmosDB for NoSQL"
lectureId: 54
section: 7
sectionTitle: "Develop AI Solutions with Azure CosmosDB for NoSQL"
date: "2026-09-22"
tags: ["cosmosdb", "nosql", "partition-key", "request-units"]
---

## 中文短总结

Azure Cosmos DB 是一个全球分布式、大规模可扩展的多模型数据库服务，解决了处理非结构化 JSON 数据以及为全球用户提供低延迟访问的问题。资源层级为账户 → 数据库 → 容器（存储 JSON 文档并按分区键做物理分区）。所有读写以请求单元（RU）计费，提供预配吞吐量和无服务器两种模式；分区键应选择基数较低的字段（如日期），以获得更好的性能并降低 RU 消耗。

## 中文长总结

### 解决的问题

- **处理和分析大规模复杂数据**：现代应用（如电商）的数据常为非结构化 JSON 格式，不符合固定 schema，需要 NoSQL 数据库
- **为全球用户提供低延迟**：Cosmos DB 是实时全球分布式数据库，用户可从最近的区域完成读写，而非统一访问某一地区的服务器

### 资源层级结构

- 顶层是 Cosmos DB **账户**（endpoint 形如 `账户名.documents.azure.com:443`）
- 账户下可有多个**数据库**
- 数据库下可有多个**容器**，容器中存储 JSON 文档，并通过分区键对数据做物理分区
- NoSQL API 常用于 AI、IoT、游戏、Web 规模应用；也可与向量嵌入结合，构建基于 RAG 架构的聊天机器人

### 请求单元（Request Unit, RU）

- 所有读写、查询、存储过程操作都通过 RU 计量并计费
- 经验法则：1 RU 大约可读取 1 KB 的 JSON 文档一次
- 两种消费模式：
  - **预配吞吐量（Provisioned Throughput）**：预先配置 RU 容量，无论使用与否都需付费，性能可预期，适合生产环境
  - **无服务器（Serverless）**：按实际消耗的 RU 付费，无需预配，适合开发/测试场景

### 分区键（Partition Key）设计

- 分区键决定数据如何在物理分片间分布，实现水平扩展并保持高性能
- 查询时如果按分区键过滤，Cosmos DB 引擎只需路由到对应分区，速度更快、消耗更少 RU
- 设计原则：选择**基数较低**（取值种类少）的字段作为分区键，如日期、月份；避免使用高基数字段（如产品 ID），否则会导致过多物理分区，反而降低性能、增加 RU 消耗

## English Short Summary

Azure Cosmos DB is a globally distributed, massively scalable multi-model database that handles unstructured JSON data and offers low latency to users worldwide. Its resource hierarchy is Account → Database → Container (physically partitioned by a partition key), billed via Request Units (RUs) under either provisioned throughput or serverless plans. Choose low-cardinality fields (e.g., date) as partition keys for better performance and lower RU consumption.
