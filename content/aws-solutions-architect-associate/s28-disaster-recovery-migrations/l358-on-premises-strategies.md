---
title: "On-Premises Strategies with AWS"
lectureId: 358
section: "s28"
sectionTitle: "Disaster Recovery & Migrations"
date: "2026-03-05"
tags: [on-premises, migration, vm-import-export, application-discovery, mgn]
---

## 中文短总结

AWS on-premises 策略汇总（记住服务名即可）：①**Amazon Linux 2 AMI as VM**：下载 ISO，可在 VMware/KVM/VirtualBox/Hyper-V 运行②**VM Import/Export**：将 on-premises VM 迁移到 EC2，也可导出回 on-premises（DR 备份）③**Application Discovery Service**：扫描 on-premises 服务器，收集利用率和依赖关系映射，规划迁移④**AWS Migration Hub**：跟踪所有迁移进度⑤**DMS**：数据库迁移（on-premises ↔ AWS）⑥**Application Migration Service（MGN）**：增量复制 on-premises 服务器到 AWS（lift-and-shift）。

## 中文长总结

AWS 提供的 on-premises 到云迁移服务一览：

| 服务 | 用途 |
|------|------|
| **Amazon Linux 2 AMI (ISO)** | 在 on-premises 虚拟化平台运行 Amazon Linux |
| **VM Import/Export** | EC2 ↔ on-premises VM 双向迁移 |
| **Application Discovery Service** | 服务器扫描 + 依赖映射 + 迁移规划 |
| **Migration Hub** | 迁移进度跟踪 |
| **DMS** | 数据库迁移（支持异构） |
| **MGN（Application Migration Service）** | Lift-and-shift 服务器迁移 |

## 考试要点

- 看到服务名就知道和 on-premises 迁移相关
- VM Import/Export = EC2 双向
- Application Discovery = 迁移规划（扫描+依赖）
- MGN = lift-and-shift 服务器迁移
- DMS = 数据库迁移

## English Short Summary

AWS on-premises strategies (know the service names): (1) **Amazon Linux 2 AMI as VM** (ISO for VMware/KVM/VirtualBox/Hyper-V); (2) **VM Import/Export** (bidirectional EC2 ↔ on-premises VMs); (3) **Application Discovery Service** (scan servers, dependency mapping, plan migration); (4) **Migration Hub** (track migration progress); (5) **DMS** (database migration); (6) **MGN / Application Migration Service** (incremental lift-and-shift server migration).
