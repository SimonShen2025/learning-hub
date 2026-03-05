---
title: "DataSync - Overview"
lectureId: 180
section: 16
sectionTitle: "AWS Storage Extras"
date: "2026-03-05"
tags: ["DataSync", "Data Migration", "NFS", "SMB"]
---

## 中文短总结

本讲介绍 AWS DataSync——跨位置数据同步服务。从本地/其他云迁移到 AWS（需安装 **DataSync Agent**，连接 NFS/SMB/HDFS 服务器）或 AWS 服务间同步（无需 Agent）。目标：S3（任何存储类别包括 Glacier）、EFS、FSx。**非连续**同步，按计划执行（小时/天/周）。**核心优势**：保留文件权限和 Metadata（NFS POSIX + SMB 权限）。单任务带宽最高 **10 Gbps**。无网络容量时可用 **Snowcone**（内置 DataSync Agent）。

## 中文长总结

### DataSync 概述
- 大量数据的**计划同步**服务
- 非连续：小时 / 天 / 周

### 两种场景
| 场景 | Agent |
|------|-------|
| 本地/其他云 → AWS | **需要** DataSync Agent |
| AWS 服务 → AWS 服务 | **不需要** Agent |

### 支持的目标
- Amazon S3（**所有**存储类别包括 Glacier）
- Amazon EFS
- Amazon FSx

### 核心优势
- **保留文件权限和 Metadata**（NFS POSIX + SMB）
- 考试中独特的选项
- 单任务最高 **10 Gbps** 带宽

### 架构
```
本地 NFS/SMB → DataSync Agent → (加密) → DataSync Service → S3/EFS/FSx
```

### 特殊场景
- 无网络容量 → **Snowcone**（内置 DataSync Agent）

## 考试要点

- DataSync = **计划同步**（非连续）
- **保留文件权限和 Metadata**
- 本地/其他云 → 需要 Agent
- AWS → AWS 不需要 Agent
- 无网络 → Snowcone + DataSync Agent

## English Short Summary

AWS DataSync synchronizes large amounts of data on a schedule (hourly/daily/weekly, not continuous). Two scenarios: on-premises/other cloud to AWS (requires DataSync Agent connecting via NFS/SMB/HDFS) or AWS-to-AWS (no agent). Targets: S3 (all classes including Glacier), EFS, FSx. Key advantage: **preserves file permissions and metadata** (NFS POSIX + SMB) — unique exam differentiator. Single task bandwidth up to 10 Gbps. No network capacity? Use Snowcone with built-in DataSync Agent.
