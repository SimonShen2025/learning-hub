---
title: "Application Migration Service (MGN)"
lectureId: 361
section: "s28"
sectionTitle: "Disaster Recovery & Migrations"
date: "2026-03-05"
tags: [mgn, application-migration, lift-and-shift, rehosting, cloudendure]
---

## 中文短总结

AWS Application Migration Service（MGN，原 CloudEndure Migration）：Lift-and-shift（Rehosting）方案，将物理/虚拟/其他云服务器原样迁移到 AWS。**流程**：①安装 Replication Agent②持续复制磁盘到 AWS Staging（低成本 EC2 + EBS）③准备好时执行 **Cutover**：Staging → Production（目标规格 EC2 + EBS）。迁移前用 **Application Discovery Service** 扫描服务器（Agentless Connector 或 Application Discovery Agent）获取利用率和依赖映射。所有结果在 **Migration Hub** 中查看。MGN 支持广泛平台/OS/数据库。

## 中文长总结

迁移到 AWS 的完整流程：

**1. 规划阶段 — Application Discovery Service：**

| 方式 | 信息 |
|------|------|
| **Agentless (Connector)** | VM 配置、CPU/内存/磁盘性能 |
| **Agent-based** | 系统配置、进程、**网络连接依赖映射** |

**2. 迁移阶段 — MGN：**
```
企业数据中心 → Replication Agent → AWS Staging（低成本）
                                      ↓ Cutover
                               AWS Production（目标规格）
```

**3. 跟踪 — Migration Hub**

**MGN 优势：**
- 最小停机时间
- 降低成本（自动化，无需复杂工程）
- 广泛平台支持

## 考试要点

- MGN = lift-and-shift / rehosting
- 原 CloudEndure Migration
- Application Discovery Service = 迁移规划
- Agent-based 比 Agentless 多提供网络依赖信息
- Migration Hub = 统一跟踪

## English Short Summary

AWS Application Migration Service (MGN, formerly CloudEndure Migration): **lift-and-shift (rehosting)** solution. Install Replication Agent → continuous disk replication to AWS Staging (low-cost EC2+EBS) → **Cutover** to production when ready. Pre-migration: **Application Discovery Service** (Agentless Connector for VM config, or Agent for detailed dependency mapping). Track in **Migration Hub**. Minimal downtime, wide platform/OS/database support.
