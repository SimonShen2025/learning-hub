---
title: "Amazon RDS Overview"
lectureId: 87
section: 9
sectionTitle: "AWS Fundamentals: RDS + Aurora + ElastiCache"
date: "2026-03-05"
tags: ["RDS", "Relational Database", "Managed Service", "Storage Auto Scaling"]
---

## 中文短总结

本讲介绍了 Amazon RDS（Relational Database Service）的核心概念。RDS 是 AWS 提供的托管关系型数据库服务，支持 PostgreSQL、MySQL、MariaDB、Oracle、Microsoft SQL Server、IBM DB2 和 Aurora 七种引擎。作为托管服务，RDS 提供自动化配置、操作系统补丁、持续备份（支持 Point in Time Restore）、监控仪表盘、Read Replicas、Multi AZ 灾备、维护窗口以及垂直/水平扩展等能力。用户无法 SSH 访问 RDS 实例。此外还介绍了 RDS Storage Auto Scaling 功能，当可用存储低于 10% 且持续超过 5 分钟、距上次修改超过 6 小时时自动扩容，需要设置最大存储阈值。

## 中文长总结

### RDS 基础概念
- RDS = Relational Database Service，使用 SQL 作为查询语言
- AWS 托管的云数据库服务，提供多种数据库引擎选择
- 支持的引擎：PostgreSQL、MySQL、MariaDB、Oracle、Microsoft SQL Server、IBM DB2、Aurora

### 托管服务的优势（RDS vs 自建数据库）
- **自动化配置**：数据库和底层 OS 的配置全自动化
- **持续备份**：支持 Point in Time Restore（时间点恢复）
- **监控**：提供性能监控仪表盘
- **Read Replicas**：通过只读副本提升读性能
- **Multi AZ**：跨可用区部署实现灾备
- **维护窗口**：自动化升级维护
- **扩展能力**：垂直扩展（增大实例类型）+ 水平扩展（添加 Read Replicas）
- **存储**：底层使用 EBS 存储
- **限制**：无法 SSH 登录 RDS 实例

### RDS Storage Auto Scaling
- 解决存储空间不足时需要手动扩容的问题
- 自动检测存储使用情况并按需扩容
- **触发条件**（三个条件同时满足）：
  - 可用存储低于已分配量的 10%
  - 低存储状态持续超过 5 分钟
  - 距上次存储修改已超过 6 小时
- 需要设置 Maximum Storage Threshold（最大存储阈值）防止无限增长
- 适用于工作负载不可预测的应用
- 支持所有 RDS 数据库引擎

## 考试要点

- RDS 支持 7 种数据库引擎，需要记住每一种
- RDS 是 **托管服务**，用户无法 SSH 访问实例
- Storage Auto Scaling 的三个触发条件是考点
- RDS 提供 Point in Time Restore 功能
- 底层存储使用 EBS

## English Short Summary

This lecture introduces Amazon RDS (Relational Database Service), a managed database service supporting PostgreSQL, MySQL, MariaDB, Oracle, Microsoft SQL Server, IBM DB2, and Aurora. As a managed service, RDS provides automated provisioning, OS patching, continuous backups with Point in Time Restore, monitoring dashboards, Read Replicas, Multi AZ disaster recovery, maintenance windows, and both vertical/horizontal scaling. Users cannot SSH into RDS instances. The lecture also covers RDS Storage Auto Scaling, which automatically increases storage when free space drops below 10% of allocated storage for more than 5 minutes and 6 hours have passed since the last modification, requiring a maximum storage threshold to be set.
