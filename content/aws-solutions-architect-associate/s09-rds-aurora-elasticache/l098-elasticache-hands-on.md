---
title: "ElastiCache Hands On"
lectureId: 98
section: 9
sectionTitle: "AWS Fundamentals: RDS + Aurora + ElastiCache"
date: "2026-03-05"
tags: ["ElastiCache", "Redis", "Hands-On"]
---

## 中文短总结

本讲演示了在 AWS 控制台创建 ElastiCache Redis 集群的流程。包括选择引擎（Valkey/Redis/Memcached）、部署选项（Serverless vs Node-based）、Cluster Mode（Disabled 单分片 vs Enabled 多分片）、节点类型（选择 Free Tier 的 t2/t3 micro）、Multi AZ 和 Auto Failover 配置、Subnet Group 设置、加密选项（静态加密 + 传输加密 + Redis AUTH / ACL）、Security Groups、备份和维护窗口等。创建后可查看 Primary Endpoint 和 Reader Endpoint 用于应用连接。也可选择 AWS Outpost 进行本地部署。

## English Short Summary

This hands-on demonstrates creating an ElastiCache Redis cluster, covering engine selection (Valkey/Redis/Memcached), deployment options (Serverless vs Node-based), Cluster Mode (disabled for single shard vs enabled for multiple shards), node type (Free Tier t2/t3 micro), Multi AZ, Auto Failover, Subnet Group, encryption options (at-rest, in-transit with Redis AUTH or ACL), Security Groups, backup, and maintenance windows. After creation, Primary and Reader Endpoints are available for application connections.
