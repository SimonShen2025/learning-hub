---
title: "Introduction to Azure Managed Redis"
lectureId: 86
section: 9
sectionTitle: "Enhance AI Solutions with Azure Managed Redis"
date: "2026-09-22"
tags: ["redis", "caching", "pubsub", "cluster-architecture"]
---

## 中文短总结

Redis 是开源的内存数据存储，常作为缓存层（命中则直接从 Redis 返回，未命中则回源数据库并写入缓存）以及发布订阅（Pub/Sub）模式下的消息代理。Azure Managed Redis 是 Azure 托管版本，免去基础设施运维负担。核心数据结构包括 Redis String（简单键值对）和 Redis Hash（存储多个内部字段映射）。Redis Enterprise 集群架构通过分片（shard）实现数据分布式存储，并为每个分片配置副本以实现高可用。

## 中文长总结

### Redis 作为缓存层

- Redis 是开源的内存数据存储，专为超快数据访问设计
- 典型架构：客户端请求先经过 Web API，API 先查询 Redis 缓存；命中（cache hit）则直接从 Redis 返回（更快、更省成本、网络层更少）；未命中（cache miss）则从后端服务器取数据，写入 Redis 缓存后再返回给客户端

### Redis 作为消息代理（Pub/Sub 模型）

- 在发布订阅（PubSub）模型中，发布者（Publisher）发布 JSON 消息载荷，消息被路由到不同主题（Topic/Channel），不同主题拥有不同订阅者（Subscriber）
- Redis 的角色：负责将消息路由到正确的主题，并将主题中的消息转发给对应订阅者，从而实现发布者和订阅者之间的解耦

### Azure Managed Redis

- 是 Azure 托管版的开源 Redis：开发者只需关注业务逻辑（如何在缓存层和发布订阅模型中使用 Redis），无需操心底层基础设施、安全补丁、容错、高可用等运维工作

### 核心数据结构

- **Redis String**：最基础、二进制安全的数据结构，键值对形式（如 `user:1001:name` → `Alice Smith`），使用 `SET`/`GET` 操作
- **Redis Hash（Set）**：可在单个键下存储多个内部字段映射（如 `user:1001` → `{name: ..., email: ..., age: ...}`），使用 `HSET` 操作

### Redis Enterprise 集群架构

- 简单场景下只有一个主数据库（primary）实例；为实现高可用会配置副本（replica）
- 随着数据集增长，需要将数据分布到多个主数据库版本上，这些版本称为**分片（shard）**
- 每个分片同样配置副本，形成"分片 + 副本"的高可用、可扩展集群架构

## English Short Summary

Redis is an open-source in-memory store used as a caching layer (serving hits directly, populating on misses) and as a message broker in Pub/Sub models. Azure Managed Redis is Azure's fully managed offering. Core data structures are Redis Strings (key-value) and Redis Hashes (multiple field mappings per key). The Redis Enterprise cluster architecture distributes data across shards, each with a replica for high availability.
