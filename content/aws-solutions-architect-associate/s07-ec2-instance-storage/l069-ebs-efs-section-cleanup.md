---
title: "EBS & EFS - Section Cleanup"
lectureId: 69
section: 7
sectionTitle: "EC2 Instance Storage"
date: "2026-03-05"
tags: ["cleanup", "ebs", "efs"]
---

## 中文短总结

本讲是 Section 清理步骤：删除 EFS 文件系统（需输入文件系统 ID 确认），终止所有运行中的 EC2 实例，删除可用状态的 EBS 卷，删除所有 Snapshot，删除多余的安全组（保留 default 安全组，等实例完全终止后再删除关联的安全组）。

## English Short Summary

Section cleanup: delete EFS file system (confirm with file system ID), terminate all running EC2 instances, delete available EBS volumes, delete all snapshots, and remove extra security groups (keep default; wait for instances to fully terminate before deleting associated security groups).
