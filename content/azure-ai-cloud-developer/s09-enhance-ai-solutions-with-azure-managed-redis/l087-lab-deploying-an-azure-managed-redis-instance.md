---
title: "Lab: Deploying an Azure Managed Redis Instance (Hands-On Lab)"
lectureId: 87
section: 9
sectionTitle: "Enhance AI Solutions with Azure Managed Redis"
date: "2026-09-22"
tags: ["redis", "azure-portal", "hands-on-lab"]
---

## 中文短总结

通过 Azure 门户部署 Azure Managed Redis（区别于旧版 Azure Cache for Redis）：选择内存型数据层（0.5GB、2 vCPU、P0 SKU）、启用公网访问、集群策略选择 Enterprise（提供高可用分片副本及向量/语义搜索能力），并在 Modules 标签页启用 Redis JSON 和 Redis Search 模块以支持后续的向量存储与检索实验，最后启用访问密钥认证方式。

## 中文长总结

### 创建资源

- 在 Azure 门户搜索 "Redis"，选择 **Azure Managed Redis**（区别于已进入维护模式的旧版 Azure Cache for Redis）
- 数据层选择内存型（in-memory），这是高性能缓存的推荐选项
- 缓存大小 0.5GB，性能规格 2 vCPU，SKU 为 P0

### 网络配置

- 网络访问设置为启用（允许来自所有网络的公网访问）
- 地理复制（Active Geo-Replication）用于生产环境的高可用与低停机复制，演示中未启用

### 高级配置（集群策略）

- 集群策略选择 **Enterprise**：
  1. 以高可用集群方式创建实例（每个主数据库和分片至少配备一个副本）
  2. 启用语义搜索和向量搜索功能，支持后续存储向量嵌入并执行向量相似度检索

### 模块启用

- 在 Modules 标签页启用 Redis Time Series（时间序列数据）、**Redis JSON**（JSON 数据存储）、**Redis Search**（向量存储与检索）
- 本课程主要依赖 Redis JSON 和 Redis Search 模块

### 部署与验证

- 预估月度费用约 25.3 美元
- 部署完成后，实例监听端口 10000
- Authentication 标签页可选择 Microsoft Entra 身份验证或访问密钥（Access Keys）方式；本课程启用访问密钥，获取主键/辅助键用于代码方式连接

## English Short Summary

Deployed an Azure Managed Redis instance (distinct from the legacy Azure Cache for Redis) via the portal: in-memory data tier (0.5GB, 2 vCPUs, P0 SKU), public network access enabled, Enterprise clustering policy (for HA shard replicas plus vector/semantic search capability), and Redis JSON + Redis Search modules enabled for later vector-storage labs, finishing with access-key authentication enabled.
