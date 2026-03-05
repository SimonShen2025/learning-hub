---
title: "Amazon EFS - Hands On"
lectureId: 67
section: 7
sectionTitle: "EC2 Instance Storage"
date: "2026-03-05"
tags: ["efs", "hands-on", "multi-az", "security-groups"]
---

## 中文短总结

本实操演示了完整的 EFS 使用流程：创建 Regional EFS 文件系统（启用自动备份、生命周期管理、加密、Elastic 吞吐模式），为每个 AZ 配置安全组，然后在两个不同 AZ 启动 EC2 实例并在创建时直接挂载 EFS（控制台自动生成 User Data 脚本和安全组规则）。验证：在 Instance A 创建 hello.txt，在 Instance B 可读取同一文件，证明 EFS 跨 AZ 共享文件系统。

## English Short Summary

Full EFS hands-on: created a Regional EFS (with backups, lifecycle management, encryption, Elastic throughput), configured security groups per AZ, launched two EC2 instances in different AZs with EFS mounted at creation (console auto-generates User Data scripts and security group rules). Verified: created hello.txt from Instance A, readable from Instance B — proving EFS cross-AZ shared file system works.
