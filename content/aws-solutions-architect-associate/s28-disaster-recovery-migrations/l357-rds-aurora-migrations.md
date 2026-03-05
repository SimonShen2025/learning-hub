---
title: "RDS & Aurora Migrations"
lectureId: 357
section: "s28"
sectionTitle: "Disaster Recovery & Migrations"
date: "2026-03-05"
tags: [rds, aurora, migration, snapshot, read-replica, percona]
---

## 中文短总结

迁移到 Aurora 的方法汇总。**从 RDS MySQL → Aurora MySQL**：①DB Snapshot + Restore（有停机）②创建 Aurora Read Replica → lag=0 时 Promote（耗时+网络费但无需停机）。**从外部 MySQL → Aurora**：③Percona XtraBackup → S3 → import Aurora④mysqldump → pipe 到 Aurora（慢，不经 S3）⑤DMS 持续复制。**从 RDS/外部 PostgreSQL → Aurora PostgreSQL**：同样支持 Snapshot/Read Replica、S3 backup import（aws_s3 扩展）、DMS。考试可能考一题。

## 中文长总结

迁移到 Aurora MySQL/PostgreSQL 的全部选项：

**RDS MySQL → Aurora MySQL：**

| 方式 | 特点 |
|------|------|
| **DB Snapshot → Restore** | 有停机，快速 |
| **Aurora Read Replica** | 等 lag=0 → Promote，无需停机但有网络费 |

**外部 MySQL → Aurora MySQL：**

| 方式 | 特点 |
|------|------|
| **Percona XtraBackup → S3 → Aurora** | 仅支持 Percona，经 S3 |
| **mysqldump → 管道输入 Aurora** | 慢，不经 S3 |
| **DMS** | 两端都在运行时持续复制 |

**RDS/外部 PostgreSQL → Aurora PostgreSQL：**

| 方式 | 特点 |
|------|------|
| **DB Snapshot → Restore** | 有停机 |
| **Aurora Read Replica → Promote** | lag=0 后提升 |
| **备份 → S3 → aws_s3 扩展导入** | 新建 Aurora |
| **DMS** | 持续复制 |

## 考试要点

- RDS 同引擎迁移到 Aurora：Snapshot 或 Read Replica 两种方式
- 外部 MySQL 用 Percona XtraBackup → S3 → Aurora
- 同引擎不需要 SCT
- DMS 适合持续复制场景

## English Short Summary

Aurora migration options. **RDS MySQL → Aurora MySQL**: (1) DB Snapshot + Restore (downtime); (2) Create Aurora Read Replica → Promote when lag=0 (no downtime, network cost). **External MySQL → Aurora**: Percona XtraBackup → S3 → Aurora import, or mysqldump pipe, or DMS. **PostgreSQL → Aurora PostgreSQL**: similar — Snapshot/Read Replica, S3 backup import (aws_s3 extension), or DMS. Same-engine = no SCT needed.
