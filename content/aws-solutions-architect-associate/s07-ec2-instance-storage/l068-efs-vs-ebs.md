---
title: "EFS vs EBS"
lectureId: 68
section: 7
sectionTitle: "EC2 Instance Storage"
date: "2026-03-05"
tags: ["efs", "ebs", "instance-store", "comparison", "storage"]
---

## 中文短总结

本讲对比 EBS、EFS 和 Instance Store 三种存储类型。EBS 绑定单 AZ 单实例（io1/io2 Multi-Attach 除外），通过 Snapshot 跨 AZ 迁移，gp2 的 IO 随磁盘增大而增加。Root EBS 默认随实例终止而删除。EFS 是跨多 AZ 的共享网络文件系统，可挂载数百个 Linux 实例，价格更高但支持存储分层节省成本。Instance Store 物理附加到 EC2，实例丢失则存储丢失。

## 考试要点

- **EBS**：单 AZ 单实例（Multi-Attach 除外），通过 Snapshot 跨 AZ，Root 默认随实例删除
- **EFS**：跨多 AZ 多实例共享，仅 Linux，价格高但有存储分层
- **Instance Store**：物理附加，实例丢失则数据丢失，最高性能
- gp2 IO 随磁盘大小增长；gp3/io1 IO 独立设置
- EBS 备份（Snapshot）会消耗 IO，不建议在高流量时执行

## English Short Summary

Comparison of three EC2 storage types: **EBS** — single AZ, single instance (except io1/io2 Multi-Attach), migrate via snapshots, root volume deleted on termination by default. **EFS** — shared NFS across multiple AZs and hundreds of Linux instances, higher price but storage tiers save costs. **Instance Store** — physically attached, highest performance, data lost if instance is lost. EBS backups consume IO; avoid during high traffic.
