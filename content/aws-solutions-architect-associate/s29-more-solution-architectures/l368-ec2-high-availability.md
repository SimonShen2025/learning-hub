---
title: "EC2 Instance High Availability"
lectureId: 368
section: "s29"
sectionTitle: "More Solution Architectures"
date: "2026-03-05"
tags: [ec2, high-availability, elastic-ip, auto-scaling-group, ebs, lifecycle-hooks]
---

## 中文短总结

EC2 实例高可用架构方案。**方案 1：CloudWatch + Lambda**：监控 EC2（CloudWatch Event/Alarm）→ Lambda 启动备用实例 + 迁移 Elastic IP → Failover。**方案 2：ASG 1/1/1**：设置 min=1, max=1, desired=1，跨 2 AZ → 实例挂了 ASG 自动在另一 AZ 创建新实例 → 通过 EC2 User Data 自动附加 Elastic IP（需 IAM 角色）→ 无需 CloudWatch 告警。**方案 3：ASG + EBS**：在方案 2 基础上增加有状态数据 → ASG Lifecycle Hook（终止时：EBS Snapshot → 启动时：从 Snapshot 恢复 EBS → 附加到新实例 + Elastic IP）。

## 中文长总结

三种 EC2 高可用架构对比：

**方案 1：CloudWatch + Lambda Failover：**
```
用户 → Elastic IP → EC2 主实例
CloudWatch Alarm/Event → Lambda → 启动备用 EC2 + 迁移 EIP
```

**方案 2：ASG 1/1/1 模式（推荐）：**
```
ASG（min=1, max=1, desired=1, 2 AZ）
  ↓ 实例终止
自动创建新实例（另一 AZ）
  ↓ EC2 User Data
自动附加 Elastic IP（需 EC2 Instance Role）
```
- 无需 CloudWatch / Lambda
- ASG 自动检测 + 重建
- User Data 脚本通过标签查找并附加 EIP

**方案 3：ASG + EBS 有状态 Failover：**
```
EC2 + EBS Volume（数据库场景）
  ↓ ASG Lifecycle Hook（Terminate）
EBS Snapshot（标记标签）
  ↓ ASG Lifecycle Hook（Launch）
从 Snapshot 创建 EBS Volume（新 AZ）→ 附加到新 EC2
  ↓ EC2 User Data
附加 Elastic IP
```
- Lifecycle Hook: terminate → snapshot; launch → restore
- EBS Volume 跨 AZ 通过 Snapshot 中转

## 考试要点

- ASG 1/1/1 + 2 AZ = 最简单的 EC2 HA 方案
- User Data + Instance Role 自动附加 EIP
- EBS 跨 AZ 迁移 = Snapshot → Restore to new AZ
- Lifecycle Hooks = ASG 启动/终止时执行自定义逻辑
- EIP 同时只能附加到一个实例

## English Short Summary

EC2 HA architectures: (1) **CloudWatch + Lambda**: alarm/event triggers Lambda to start standby EC2 + move Elastic IP; (2) **ASG 1/1/1** (min=1, max=1, desired=1, 2 AZs): ASG auto-replaces failed instance in another AZ, User Data script attaches EIP (needs Instance Role) — simplest approach; (3) **ASG + EBS stateful**: ASG Lifecycle Hooks — on terminate: create EBS Snapshot; on launch: restore EBS from Snapshot in new AZ + attach EIP. EBS cross-AZ via Snapshot.
