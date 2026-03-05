---
title: "AWS Backup - Hands On"
lectureId: 360
section: "s28"
sectionTitle: "Disaster Recovery & Migrations"
date: "2026-03-05"
tags: [aws-backup, hands-on, backup-plan, tags]
---

## 中文短总结

实操 AWS Backup：①创建 Backup Plan：从模板（如 Daily-Monthly-1yr-Retention）或自定义②Backup Rules：每日备份（保留 5 周）+ 每月备份（1 月后转冷存储，保留 1 年）③可选跨区域复制（DR）④分配资源（Assign Resources）：选择特定资源类型或用标签过滤（如 environment=production 的所有资源自动备份）⑤IAM 角色自动创建⑥创建带正确标签的 EBS 卷验证自动备份⑦完成后删除：Assignment → Backup Rules → Backup Plan + EBS Volume。

## English Short Summary

AWS Backup hands-on: (1) Create Backup Plan from template (Daily-Monthly-1yr-Retention) or custom; (2) Backup Rules: daily (retain 5 weeks) + monthly (cold storage after 1 month, retain 1 year); (3) Optional cross-region copy; (4) Assign Resources: specific types or tag-based (e.g., environment=production auto-backs up matching resources); (5) Auto-created IAM role; (6) Create tagged EBS volume to verify. Clean up: delete assignment → rules → plan + volumes.
