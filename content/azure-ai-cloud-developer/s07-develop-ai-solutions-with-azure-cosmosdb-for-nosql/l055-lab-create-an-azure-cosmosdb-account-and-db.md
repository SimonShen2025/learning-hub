---
title: "Lab: Create an Azure CosmosDB Account and DB (Hands-On Lab)"
lectureId: 55
section: 7
sectionTitle: "Develop AI Solutions with Azure CosmosDB for NoSQL"
date: "2026-09-22"
tags: ["cosmosdb", "azure-portal", "partition-key", "hands-on-lab"]
---

## 中文短总结

通过 Azure 门户创建 Azure Cosmos DB for NoSQL API 账户：工作负载类型选择开发/测试，容量模式选择无服务器（serverless），网络设为允许公网访问，并启用基于密钥的身份验证。随后在 Data Explorer 中创建数据库 `FoodDB` 和容器 `FoodContainer`，并根据数据集特征（分类字段基数低）将 `/category` 设为分区键。

## 中文长总结

### 创建 Cosmos DB 账户

- 在 Azure 门户搜索并创建 Azure Cosmos DB 资源，API 类型选择 **NoSQL**（其他可选 API 包括 Gremlin、Cassandra、Table、PostgreSQL，本课程聚焦 NoSQL API）
- 工作负载类型选择"开发/测试"
- 账户名需全局唯一
- Availability zones 保持禁用
- 容量模式选择 **Serverless**（无服务器），适合间歇性或不可预测的流量，无需为预配的 RU/s 支付前期费用
- 全局分布标签页：地理冗余和多区域写入功能在无服务器模式下不受支持，需要预配吞吐量模式才可用
- 网络连接方式设为允许来自任意来源的公网访问
- 备份策略可选周期性、连续 7 天或连续 30 天
- 安全标签页启用基于密钥的身份验证（用于后续 SDK 连接）

### 账户资源与连接信息

- 部署完成后，资源仪表盘展示 **URI**（即连接终结点）
- Keys 区域提供主键/辅助键，以及端点+密钥组合而成的连接字符串，供后续 SDK 客户端连接使用

### 创建数据库与容器

- 在 Data Explorer 中新建数据库，命名为 `FoodDB`
- 新建容器 `FoodContainer`，需要指定**分区键**
- 通过查看数据集（`food-dataset.json`，包含 category、name、description、price、id、restaurantId、dietaryTags 等字段）判断：`category` 字段取值种类少（基数低），适合作为分区键
- 设置分区键为 `/category`（注意分区键区分大小写，需与数据集中字段大小写一致）

## English Short Summary

Created an Azure Cosmos DB for NoSQL account via the Azure portal with a dev/test workload, serverless capacity mode, public network access, and key-based authentication enabled. Then created a `FoodDB` database and `FoodContainer` container in Data Explorer, choosing `/category` as the partition key based on its low cardinality in the sample food dataset.
