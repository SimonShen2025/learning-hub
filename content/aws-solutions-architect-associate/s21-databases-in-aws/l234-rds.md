---
title: "RDS"
lectureId: 234
section: "21"
sectionTitle: "Databases in AWS"
date: "2026-03-05"
tags: ["rds", "database", "sql", "oltp", "read-replica", "multi-az", "backup"]
---

## 中文短总结

RDS 总结：托管关系型数据库（PostgreSQL/MySQL/Oracle/SQL Server/DB2/MariaDB），需预配实例和 EBS 卷（存储支持 Auto Scaling）。Read Replicas 扩展读能力，Multi-AZ 实现高可用（灾备待机不可查询）。安全：IAM 认证 + 安全组 + KMS 加密 + SSL/TLS。备份：自动 35 天 PITR + 手动快照。RDS Custom 支持 Oracle/SQL Server 底层定制。用例：RDBMS/OLTP/SQL 查询和事务。

## 中文长总结

### RDS 核心特性

| 特性 | 说明 |
|------|------|
| 支持引擎 | PostgreSQL, MySQL, Oracle, SQL Server, DB2, MariaDB, **RDS Custom** |
| 需预配 | 实例大小 + EBS 卷类型和大小 |
| 存储扩展 | Auto Scaling（存储层） |
| 读扩展 | **Read Replicas**（可用于分析查询） |
| 高可用 | **Multi-AZ** standby（仅灾备，不可查询） |
| 维护 | 有计划维护停机 |

### 安全

| 层面 | 方式 |
|------|------|
| 认证 | 用户名/密码 或 **IAM 认证** |
| 网络 | 安全组 |
| 加密（静态） | **KMS** |
| 加密（传输） | **SSL/TLS** |
| IAM 强制 | 通过 **RDS Proxy** |
| 凭证管理 | **Secrets Manager** |

### 备份

| 方式 | 保留期 | 说明 |
|------|--------|------|
| 自动备份 | **35 天** | 支持 PITR（创建新数据库） |
| 手动快照 | 永久 | 长期保留 |

### RDS Custom
- 可访问底层实例进行定制
- 仅支持 **Oracle** 和 **SQL Server**

## 考试要点

- RDS = **托管 RDBMS**，需预配实例和 EBS
- **Read Replicas** 扩展读（可用于分析），**Multi-AZ** 灾备（不可查询）
- IAM 认证可通过 **RDS Proxy** 强制
- 凭证管理用 **Secrets Manager**
- **RDS Custom** — Oracle/SQL Server 底层定制
- 有**计划维护停机**（vs Aurora 更少停机）
- 用例：RDBMS、OLTP、SQL 查询、事务

## English Short Summary

RDS summary: managed relational database (PostgreSQL/MySQL/Oracle/SQL Server/DB2/MariaDB) requiring provisioned instance and EBS volume (storage auto-scaling). Read Replicas for read scaling (analytics), Multi-AZ for HA (standby, not queryable). Security: IAM auth + security groups + KMS + SSL/TLS, IAM enforcement via RDS Proxy, credentials in Secrets Manager. Backups: automated 35-day PITR + manual snapshots. RDS Custom for Oracle/SQL Server customization. Use cases: RDBMS, OLTP, SQL queries and transactions.
