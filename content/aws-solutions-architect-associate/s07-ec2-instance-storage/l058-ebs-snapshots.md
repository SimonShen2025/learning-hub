---
title: "EBS Snapshots"
lectureId: 58
section: 7
sectionTitle: "EC2 Instance Storage"
date: "2026-03-05"
tags: ["ebs", "snapshots", "backup", "disaster-recovery"]
---

## 中文短总结

本讲介绍 EBS Snapshot（快照）功能。Snapshot 是 EBS 卷的时间点备份，可跨 AZ 和 Region 复制。建议（非必须）在拍快照前分离卷。三个重要特性：Snapshot Archive 可将快照移至归档层（便宜 75%，恢复需 24-72 小时）；Recycle Bin 防止意外删除（保留 1 天到 1 年）；Fast Snapshot Restore 强制全量初始化以消除首次使用延迟（费用高）。

## 中文长总结

### Snapshot 基本概念
- EBS 卷的**时间点备份**
- 不必分离卷即可拍快照，但**建议分离**
- 可跨 AZ 和 Region **复制**
- 通过快照可将 EBS 卷"跨 AZ 迁移"

### 三大特性

#### 1. EBS Snapshot Archive
- 将快照移至**归档存储层**
- 成本降低 **75%**
- 恢复时间：**24-72 小时**
- 适合不常访问的备份

#### 2. Recycle Bin（回收站）
- 删除的快照进入回收站而非永久删除
- 可从意外删除中**恢复**
- 保留期：**1 天到 1 年**

#### 3. Fast Snapshot Restore（FSR）
- 强制快照**全量初始化**
- 首次使用**无延迟**
- 适合大型快照需要快速创建 EBS 卷的场景
- **费用较高**

## 考试要点

- Snapshot 是跨 AZ/Region 迁移 EBS 卷的方法
- **Archive**：便宜 75%，恢复 24-72 小时
- **Recycle Bin**：防意外删除，保留 1 天-1 年
- **Fast Snapshot Restore**：消除首次使用延迟，费用高
- 拍快照时建议分离卷（非必须）

## English Short Summary

EBS Snapshots are point-in-time backups of EBS volumes that can be copied across AZs and Regions (recommended to detach volume first). Key features: Snapshot Archive (75% cheaper, 24-72hr restore), Recycle Bin (prevents accidental deletion, 1 day to 1 year retention), and Fast Snapshot Restore (eliminates first-use latency but expensive). Snapshots are the method to migrate EBS volumes across AZs.
