---
title: "EBS Encryption"
lectureId: 65
section: 7
sectionTitle: "EC2 Instance Storage"
date: "2026-03-05"
tags: ["ebs", "encryption", "kms", "security", "snapshots"]
---

## 中文短总结

本讲介绍 EBS 加密。加密 EBS 卷后：静态数据加密、实例与卷间传输数据加密、所有 Snapshot 加密、从 Snapshot 创建的卷也加密。加密/解密由 EC2 和 EBS 透明处理，对延迟几乎无影响，使用 KMS（AES-256）密钥。如何加密未加密的卷：创建 Snapshot → 复制 Snapshot 时启用加密 → 从加密 Snapshot 创建新卷 → 挂载到实例。也可直接从未加密 Snapshot 创建卷时启用加密（快捷方式）。

## 考试要点

- 加密 EBS 卷 → 数据静态/传输/Snapshot/衍生卷全部加密
- 加密透明处理，对延迟**几乎无影响**
- 使用 **KMS AES-256** 密钥
- 加密未加密的 EBS 卷流程：Snapshot → Copy with encryption → Create volume
- 快捷方式：直接从未加密 Snapshot 创建卷时勾选加密

## English Short Summary

EBS encryption provides: data-at-rest encryption, in-flight encryption between instance and volume, encrypted snapshots, and encrypted volumes from snapshots — all handled transparently with minimal latency impact using KMS (AES-256). To encrypt an unencrypted volume: create snapshot → copy snapshot with encryption enabled → create new encrypted volume → attach. Shortcut: enable encryption directly when creating a volume from an unencrypted snapshot.
