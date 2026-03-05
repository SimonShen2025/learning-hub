---
title: "EBS Multi-Attach"
lectureId: 64
section: 7
sectionTitle: "EC2 Instance Storage"
date: "2026-03-05"
tags: ["ebs", "multi-attach", "io1", "io2", "high-availability"]
---

## 中文短总结

本讲介绍 EBS Multi-Attach 功能，允许同一 io1/io2 EBS 卷同时挂载到同一 AZ 内的**多个 EC2 实例**（最多 16 个）。每个实例对卷具有完整的读写权限。适用于集群化 Linux 应用（如 Teradata）或需要并发写操作的场景。必须使用**集群感知文件系统**（非 XFS/EX4）。仅限同一 AZ 内使用。

## 考试要点

- 仅 **io1/io2** 支持 Multi-Attach
- 最多 **16 个 EC2 实例**同时挂载
- 仅限**同一 AZ**
- 需要**集群感知文件系统**（非标准 XFS/EX4）
- 用例：提高集群化应用的可用性、并发写操作

## English Short Summary

EBS Multi-Attach allows the same io1/io2 volume to be attached to **multiple EC2 instances** (up to 16) in the same AZ simultaneously, with full read/write permissions. Requires a cluster-aware file system (not XFS/EX4). Use cases: clustered Linux applications (e.g., Teradata) and concurrent write operations. Only available within a single AZ.
