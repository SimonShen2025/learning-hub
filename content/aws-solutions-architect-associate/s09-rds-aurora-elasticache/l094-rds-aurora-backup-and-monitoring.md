---
title: "RDS & Aurora - Backup and Monitoring"
lectureId: 94
section: 9
sectionTitle: "AWS Fundamentals: RDS + Aurora + ElastiCache"
date: "2026-03-05"
tags: ["RDS", "Aurora", "Backup", "Snapshot", "Database Cloning", "Restore"]
---

## 中文短总结

本讲讲解了 RDS 和 Aurora 的备份、恢复与克隆机制。RDS 自动备份每天全量+每 5 分钟事务日志备份（保留 1-35 天，可设为 0 禁用），手动快照可永久保留。Aurora 的自动备份保留 1-35 天（不可禁用）。恢复操作总是创建新数据库。还介绍了从 S3 恢复 MySQL 到 RDS 或 Aurora（Aurora 需使用 Percona XtraBackup）。Aurora Database Cloning 使用 copy-on-write 协议，比快照恢复更快，适合从生产环境创建 Staging 环境。省钱技巧：不常用的数据库可以快照后删除原库，需要时再恢复。

## 中文长总结

### RDS 备份
- **自动备份**：
  - 每天全量备份（在备份窗口期间）
  - 每 5 分钟备份事务日志
  - 可恢复到最近 5 分钟前的任意时间点
  - 保留期：1-35 天，设为 0 可禁用
- **手动 DB Snapshot**：
  - 用户手动触发
  - 可**永久保留**（不会过期）

### Aurora 备份
- **自动备份**：保留 1-35 天，**不可禁用**（与 RDS 不同）
- **手动 DB Snapshot**：与 RDS 相同，可永久保留
- 支持 Point-in-Time Recovery

### 恢复选项
- 恢复 RDS/Aurora 备份或快照 → **始终创建新数据库**
- **从 S3 恢复 MySQL 到 RDS**：将本地备份文件放入 S3 → 恢复到新 RDS MySQL 实例
- **从 S3 恢复 MySQL 到 Aurora**：需使用 **Percona XtraBackup** 创建备份 → 放入 S3 → 恢复到新 Aurora MySQL 集群

### Aurora Database Cloning
- 从现有 Aurora 集群创建新集群（如生产 → Staging）
- 比 Snapshot + Restore **更快**
- 使用 **copy-on-write 协议**：
  - 初始时新旧集群共享同一存储卷（零拷贝，极快）
  - 有更新时才分配新存储并分离数据
- **快速且低成本**，不影响生产数据库

### 省钱技巧
- 数据库每月仅使用 2 小时 → 使用完后拍摄快照 → 删除原库
- 快照存储成本远低于运行中的 RDS 存储
- 需要时从快照恢复

## 考试要点

- RDS 自动备份可禁用（设为 0），Aurora 自动备份**不可禁用**
- 恢复快照/备份 → **始终创建新数据库**
- Aurora Cloning 使用 **copy-on-write**，比快照恢复更快
- 从 S3 恢复到 Aurora MySQL 需要 **Percona XtraBackup**
- RDS 事务日志每 5 分钟备份，可恢复到 5 分钟前

## English Short Summary

This lecture covers RDS and Aurora backup, restore, and cloning. RDS automated backups run daily with transaction logs every 5 minutes (1-35 days retention, can be disabled with 0). Aurora automated backups cannot be disabled. Manual snapshots are retained indefinitely. Restoring always creates a new database. MySQL can be restored from S3 to RDS directly, but Aurora MySQL requires Percona XtraBackup. Aurora Database Cloning uses copy-on-write protocol for fast, cost-effective cloning (e.g., production → staging) without impacting the source. Cost trick: snapshot infrequently-used databases, delete the original, and restore when needed.
