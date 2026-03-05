---
title: "EBS Overview"
lectureId: 56
section: 7
sectionTitle: "EC2 Instance Storage"
date: "2026-03-05"
tags: ["ebs", "storage", "ec2", "network-drive", "availability-zone"]
---

## 中文短总结

本讲介绍 EBS（Elastic Block Store）卷的基本概念。EBS 是可挂载到 EC2 实例的网络驱动器，数据在实例终止后仍可保留。CCP 级别一个 EBS 只能挂载一个实例，且绑定到特定 AZ。可将 EBS 想象为"网络 USB 盘"——通过网络连接，可快速分离并挂载到另一实例。需预配容量（大小和 IOPS），可随时增加。注意 Delete on Termination 属性：Root EBS 默认随实例删除，其他 EBS 默认不删除。

## 中文长总结

### EBS 基本概念
- **EBS = Elastic Block Store**：网络驱动器，非物理驱动器
- 通过网络连接实例，可能有少量延迟
- 可在实例终止后**持久化数据**
- 类比"网络 USB 盘"：可在实例间移动

### 关键特性
- **AZ 绑定**：EBS 卷绑定到创建时的 AZ，不可跨 AZ 直接挂载（需通过 Snapshot）
- **CCP 级别**：一个 EBS 同时只能挂载一个实例
- 一个实例可挂载**多个 EBS**
- EBS 可以**不挂载任何实例**（独立存在）
- 需**预配容量**（GB 大小和 IOPS），按预配容量计费
- 容量可随时扩展

### Delete on Termination 属性
- **Root EBS 卷**：默认启用（实例终止时一起删除）
- **其他 EBS 卷**：默认禁用（实例终止时保留）
- 可在创建时或之后修改此设置
- 考试场景：如需在实例终止后保留 Root 卷，禁用此属性即可

## 考试要点

- EBS 是**网络驱动器**，绑定到特定 AZ
- 跨 AZ 迁移 EBS 需要通过 **Snapshot**
- **Delete on Termination**：Root 默认删除，其他默认保留
- 一个实例可挂载多个 EBS，EBS 可独立存在不挂载
- 需要预配容量（大小 + IOPS），按预配计费

## English Short Summary

EBS (Elastic Block Store) volumes are network drives attachable to EC2 instances that persist data after termination. They're bound to a specific AZ (use snapshots to move across AZs), require provisioned capacity (size + IOPS), and can be detached/reattached quickly. Key concept: Delete on Termination is enabled by default for root volumes but not for additional volumes — disable it to preserve root volume data after instance termination.
