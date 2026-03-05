---
title: "Elastic Disaster Recovery (DRS)"
lectureId: 354
section: "s28"
sectionTitle: "Disaster Recovery & Migrations"
date: "2026-03-05"
tags: [drs, elastic-disaster-recovery, cloudendure, replication, failover]
---

## 中文短总结

AWS Elastic Disaster Recovery（DRS，原 CloudEndure）：快速恢复物理/虚拟/云服务器到 AWS。在企业数据中心安装 **AWS Replication Agent**，持续块级复制磁盘（OS/App/DB）到 AWS **Staging**（低成本 EC2 + EBS）。灾难时 Failover：分钟级从 Staging 升级到 Production（更大 EC2 + EBS）。恢复后 **Failback** 回原数据中心。保护关键数据库（Oracle/MySQL/SQL Server）和企业应用（SAP），防勒索软件。

## 中文长总结

Elastic Disaster Recovery (DRS) 提供企业级灾难恢复方案。

**工作流程：**
```
企业数据中心（OS/App/DB）
    ↓ AWS Replication Agent（持续块级复制）
AWS Staging（低成本 EC2 + EBS）
    ↓ Failover（分钟级）
AWS Production（生产规格 EC2 + EBS）
    ↓ Failback（恢复后）
企业数据中心（正常运行）
```

**关键特点：**
- 持续块级复制（非文件级）
- Staging 环境成本低
- Failover 分钟级
- 支持 Failback（回切）

## 考试要点

- DRS = 原 CloudEndure Disaster Recovery
- 持续块级复制 → 低成本 Staging → 分钟级 Failover
- 支持物理/虚拟/云服务器
- 关键词：continuous replication、failover/failback

## English Short Summary

AWS Elastic Disaster Recovery (DRS, formerly CloudEndure): continuous block-level replication from on-premises (OS/apps/DBs) via **Replication Agent** to low-cost **Staging** (small EC2 + EBS) in AWS. On disaster: **failover in minutes** to production-size EC2. After recovery: **failback** to original data center. Protects critical databases (Oracle/MySQL/SQL Server) and enterprise apps (SAP).
