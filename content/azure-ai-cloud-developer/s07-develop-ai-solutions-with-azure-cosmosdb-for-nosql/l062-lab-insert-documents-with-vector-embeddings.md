---
title: "Lab: Insert Documents with Vector Embeddings (Hands-On Lab)"
lectureId: 62
section: 7
sectionTitle: "Develop AI Solutions with Azure CosmosDB for NoSQL"
date: "2026-09-22"
tags: ["cosmosdb", "vector-embeddings", "azure-openai", "hands-on-lab"]
---

## 中文短总结

由于向量嵌入策略在容器创建时即不可变更，需新建容器 `FoodContainerVector` 并同时定义向量嵌入策略（路径 `/vector`、float32、余弦相似度、1536 维）与包含 DiskANN 向量索引的索引策略；需要先在 Cosmos DB 账户的 Features 中启用 "Vector Search for NoSQL API" 功能。随后使用 Azure OpenAI 的 text-embedding-ada-002 模型为每条记录的 `content` 字段生成向量嵌入，写入 `/vector` 路径并批量上传到新容器。

## 中文长总结

### 准备嵌入引擎

- 在 Microsoft Foundry 中部署 `text-embedding-ada-002` 模型（从模型目录 Discover → Models 搜索并部署）
- 在 `.env` 中配置 Azure OpenAI 终结点、API Key、嵌入模型部署名称

### 创建带向量策略的新容器

- 因为向量嵌入策略在容器创建后**不可修改**，所以必须新建容器（命名为原容器名 + `vector` 后缀，如 `FoodContainerVector`）
- 向量嵌入策略定义：路径 `/vector`，数据类型 float32，距离函数 cosine，维度 1536（对应嵌入引擎输出维度）
- 索引策略中排除 `/vector` 路径不纳入默认自动索引，转而定义专门的向量索引（类型 DiskANN，路径 `/vector`）
- **必须先启用功能**：在 Cosmos DB 账户 Features 区域开启 "Vector Search for NoSQL API"（生效可能需要等待最多 15 分钟），否则创建容器时会报错"capability has not been enabled"

### 生成并上传向量嵌入

- 创建 Azure OpenAI 客户端，编写 `generate_embeddings` 辅助函数调用 `embeddings.create` 接口
- 遍历 JSON 数据集，为每条记录的 `content`（食品描述）字段生成向量嵌入，写入新增的 `vector` 字段
- 使用容器客户端的 upsert 操作将带向量嵌入的记录批量写入新容器（约 150 条记录，耗时约 2 分钟）
- 在 Data Explorer 中验证：每条 Item 包含 1536 维的 `vector` 数组字段

## English Short Summary

Since a container's vector embedding policy is immutable after creation, created a new container (`FoodContainerVector`) with a vector embedding policy (path `/vector`, float32, cosine similarity, 1536 dims) and a DiskANN index — after enabling "Vector Search for NoSQL API" on the account. Then generated embeddings for each record's `content` field via `text-embedding-ada-002` and upserted ~150 records with their `vector` field.
