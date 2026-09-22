---
title: "Lab: Perform Data Operations using the CosmosDB SDK (Hands-On Lab)"
lectureId: 56
section: 7
sectionTitle: "Develop AI Solutions with Azure CosmosDB for NoSQL"
date: "2026-09-22"
tags: ["cosmosdb", "python-sdk", "hands-on-lab"]
---

## 中文短总结

使用 `azure-cosmos` SDK（4.16.0）在 Jupyter Notebook 中通过端点和密钥创建 `CosmosClient`，逐级获取数据库客户端和容器客户端，然后遍历 `food-dataset.json` 中约 150 条 JSON 记录并调用 `create_item` 批量上传；每条记录都需要唯一的 `id` 字段。演示了通过 `read_item` 并同时传入 `id` 和分区键值来高效读取单条记录，避免跨分区查询。

## 中文长总结

### 环境准备

- 在 `.env` 文件中配置 Cosmos DB 终结点、密钥、数据库名（FoodDB）、容器名（FoodContainer）
- 安装 `azure-cosmos` SDK（版本 4.16.0）

### 创建客户端并导航资源层级

- 使用终结点和密钥创建 `CosmosClient` 对象
- 通过 `get_database_client` 获取数据库客户端，再通过 `get_container_client` 获取容器客户端，逐级导航资源层级

### 批量上传数据

- 读取 `food-dataset.json` 文件，遍历每个 JSON 条目
- 对每个条目调用容器客户端的 `create_item` 函数插入/更新（upsert）数据
- 每个 JSON 条目必须包含唯一的 `id` 字段作为标识符
- 执行后成功插入约 150 条记录，可在 Data Explorer 的 Items 视图中查看，按分区键（category）分组，包含 smoothies、breakfast、lunch、salad 等分类

### 读取单条记录

- 使用容器客户端的 `read_item` 函数，传入 `item` 的 id 和 `partition_key` 两个参数
- **最佳实践**：读取已知 id 的条目时应同时提供分区键，避免跨分区查询（cross-partition query），从而获得更好的性能和更低的 RU 消耗

## English Short Summary

Used the `azure-cosmos` Python SDK (v4.16.0) to create a `CosmosClient` from the endpoint/key, navigate down to the database and container clients, then bulk-upload ~150 JSON records from `food-dataset.json` via `create_item` (each requiring a unique `id`). Demonstrated reading a single item efficiently with `read_item` by supplying both the id and the partition key value to avoid a cross-partition query.
