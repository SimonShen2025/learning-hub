---
title: "EBS Snapshots - Hands On"
lectureId: 59
section: 7
sectionTitle: "EC2 Instance Storage"
date: "2026-03-05"
tags: ["ebs", "snapshots", "hands-on", "recycle-bin"]
---

## 中文短总结

本实操演示了 EBS Snapshot 的完整工作流：从 2GB 卷创建快照，复制快照到其他 Region 用于灾备，从快照在不同 AZ 创建新卷实现跨 AZ 迁移。还演示了 Snapshot Archive（移至归档层降低成本）、Recycle Bin（创建保留规则后删除的快照可恢复）功能。

## English Short Summary

Hands-on demo of EBS Snapshots workflow: creating a snapshot from a 2GB volume, copying to other regions for DR, creating volumes from snapshots in different AZs for cross-AZ migration. Also demonstrated Snapshot Archive (move to cheaper tier) and Recycle Bin (create retention rule, recover deleted snapshots).
