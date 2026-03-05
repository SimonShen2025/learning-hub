---
title: "Disaster Recovery in AWS"
lectureId: 353
section: "s28"
sectionTitle: "Disaster Recovery & Migrations"
date: "2026-03-05"
tags: [disaster-recovery, rpo, rto, backup-restore, pilot-light, warm-standby, multi-site]
---

## 中文短总结

AWS 灾难恢复核心概念。**RPO（恢复点目标）**= 可接受的数据丢失时间（备份频率）；**RTO（恢复时间目标）**= 可接受的停机时间。四种策略（从低到高成本/从高到低 RTO）：①**Backup & Restore**：高 RPO/RTO、成本最低，用 S3/Glacier/Snowball 备份，灾难时重建②**Pilot Light**：核心系统（如 RDS）持续运行，其他灾难时启动③**Warm Standby**：全系统最小规模运行，灾难时扩展到生产负载④**Multi-Site / Hot Site**：两套生产环境同时运行（active-active），RTO 秒级、成本最高。

## 中文长总结

灾难恢复（DR）是解决方案架构师的核心知识。

**RPO vs RTO：**
```
← RPO（数据丢失）→ | 灾难 | ← RTO（停机时间）→
```
- **RPO**：上次备份到灾难之间 = 数据丢失量
- **RTO**：灾难到恢复之间 = 业务停机时间
- RPO/RTO 越小 → 成本越高

**四种策略对比：**

| 策略 | RPO | RTO | 成本 | 特点 |
|------|-----|-----|------|------|
| **Backup & Restore** | 高 | 高 | $ | S3/Glacier 备份，灾难时重建 |
| **Pilot Light** | 中 | 中 | $$ | 核心数据库持续运行（如 RDS） |
| **Warm Standby** | 低 | 低 | $$$ | 全系统最小规模+ELB+ASG |
| **Multi-Site** | 极低 | 秒级 | $$$$ | Active-Active 双生产环境 |

**各策略详解：**

**Backup & Restore**：Snowball/Storage Gateway 定期备份 → S3/Glacier → 灾难时用 AMI/Snapshot 重建。

**Pilot Light**：核心 = 数据库持续复制到 RDS。EC2 不运行 → 灾难时创建 + Route 53 failover。

**Warm Standby**：全系统运行（最小规模）→ 灾难时 Route 53 failover + ASG 扩展。

**Multi-Site**：AWS + On-premises 双生产环境，Route 53 active-active → failover 秒级。

**DR 工具建议：**
- 备份：EBS/RDS Snapshot → S3 + Cross-Region Replication
- 高可用：Route 53 DNS failover、RDS Multi-AZ、EFS/S3
- 网络备份：Direct Connect 主 + Site-to-Site VPN 备
- 自动化：CloudFormation/Beanstalk 快速重建、CloudWatch 告警
- 混沌测试：Netflix Simian Army 模式

## 考试要点

- RPO = 数据丢失量，RTO = 停机时间
- Backup & Restore 最便宜但 RPO/RTO 最高
- Pilot Light = 核心数据库运行，其他按需
- Warm Standby = 全系统最小规模
- Multi-Site = active-active 双生产，秒级 RTO
- Snowball 适合一次性大数据传输（RPO ~1 周）

## English Short Summary

AWS Disaster Recovery. **RPO** = acceptable data loss (backup frequency); **RTO** = acceptable downtime. Four strategies (cost/RTO tradeoff): (1) **Backup & Restore**: cheapest, high RPO/RTO, rebuild from S3/Glacier/snapshots; (2) **Pilot Light**: core DB (RDS) always running, others on-demand; (3) **Warm Standby**: full system at minimum size, scale up on disaster; (4) **Multi-Site/Hot Site**: active-active dual production, seconds RTO, most expensive. DR tips: Route 53 failover, Cross-Region Replication, CloudFormation automation, chaos testing.
