---
title: "AWS Backup"
lectureId: 359
section: "s28"
sectionTitle: "Disaster Recovery & Migrations"
date: "2026-03-05"
tags: [aws-backup, backup-plan, vault-lock, worm, cross-region]
---

## 中文短总结

AWS Backup：集中管理和自动化所有 AWS 服务备份。支持服务广泛：EC2/EBS/S3/RDS/Aurora/DynamoDB/DocumentDB/Neptune/EFS/FSx/Storage Gateway 等。功能：①**跨区域备份**（DR）②**跨账号备份**③支持时间点恢复（PITR）④按需/计划备份⑤基于标签的备份策略（如只备份 production 标签的资源）⑥**Backup Plan**：频率 + 备份窗口 + 冷存储转换 + 保留期限。⑦**Vault Lock（WORM）**：Write Once Read Many — 备份不可删除，即使根用户也无法删除，防勒索/恶意删除。

## 中文长总结

AWS Backup 是统一备份管理服务。

**核心功能：**

| 功能 | 说明 |
|------|------|
| **Cross-Region** | 备份到其他区域（DR） |
| **Cross-Account** | 多账号备份管理 |
| **PITR** | 支持时间点恢复（Aurora 等） |
| **Tag-based Policy** | 如 tag: environment=production |
| **Backup Plan** | 频率/窗口/冷存储/保留期 |

**Backup Plan 配置项：**
- 频率：12h / 每周 / 每月 / cron 表达式
- 备份窗口：开始时间 + 完成时限
- 冷存储转换：N 天/周/月后
- 保留期限：N 天/周/月/年 / 永久

**Vault Lock（WORM）：**
```
备份 → Backup Vault → Vault Lock Policy
                       ↓
              不可删除（含 root 用户）
              不可更改保留期
```
- 防止恶意/误操作删除
- 防止缩短保留期
- **即使 root 用户也无法删除**

## 考试要点

- AWS Backup = 集中管理所有服务备份
- Vault Lock WORM = root 也不能删
- 支持跨区域/跨账号
- Tag-based 策略按标签选择备份资源
- 支持 EC2/EBS/S3/RDS/Aurora/DynamoDB/EFS/FSx 等

## English Short Summary

AWS Backup: centralized backup management across all AWS services (EC2/EBS/S3/RDS/Aurora/DynamoDB/EFS/FSx/Storage Gateway). Features: cross-region/cross-account backups, PITR, on-demand/scheduled, tag-based policies. **Backup Plans**: frequency + window + cold storage transition + retention. **Vault Lock (WORM)**: backups cannot be deleted — even by root user — preventing malicious/accidental deletion and retention period modifications.
