---
title: "Storage Gateway Hands On"
lectureId: 178
section: 16
sectionTitle: "AWS Storage Extras"
date: "2026-03-05"
tags: ["Storage Gateway", "Hands-On"]
---

## 中文短总结

本讲演示 Storage Gateway 创建选项。三种类型：S3 File Gateway（NFS/SMB + 本地缓存访问 S3）、Tape Gateway（iSCSI VTL 磁带归档到 S3/Glacier）、Volume Gateway（iSCSI 块存储备份到 S3，Cached = 主数据在 S3 本地缓存热数据 vs Stored = 全部本地数据异步同步到 S3）。部署平台选项：VMware、Hyper-V、Linux KVM（本地部署）或 Amazon EC2（云上部署）。

## English Short Summary

Hands-on Storage Gateway creation options. Three types: S3 File Gateway (NFS/SMB + local cache to S3), Tape Gateway (iSCSI VTL tape archive to S3/Glacier), Volume Gateway (iSCSI block storage to S3; Cached = primary data in S3 with local hot cache vs Stored = all data local, async sync to S3). Hosting platforms: VMware, Hyper-V, Linux KVM (on-premises) or Amazon EC2 (cloud).
