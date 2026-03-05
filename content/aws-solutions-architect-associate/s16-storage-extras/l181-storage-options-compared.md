---
title: "All AWS Storage Options Compared"
lectureId: 181
section: 16
sectionTitle: "AWS Storage Extras"
date: "2026-03-05"
tags: ["Storage", "Comparison", "S3", "EBS", "EFS", "FSx"]
---

## 中文短总结

本讲总结所有 AWS 存储选项。**对象存储**：S3（通用）+ S3 Glacier（归档）。**块存储**：EBS（单 EC2 挂载，io1/io2 支持 Multi-Attach）、EC2 Instance Store（物理高 IOPS）。**文件系统**：EFS（Linux NFS 跨 AZ）、FSx for Windows（SMB + AD）、FSx for Lustre（HPC/ML + S3 集成）、FSx for NetApp ONTAP（NFS/SMB/iSCSI + 去重 + 克隆）、FSx for OpenZFS（NFS + 高 IOPS + 克隆）。**混合云**：Storage Gateway（S3 File/Volume/Tape）、Transfer Family（FTP → S3/EFS）、DataSync（计划同步保留 Metadata）、Snow Family（物理迁移，Snowcone 内置 DataSync Agent）。

## 中文长总结

### 存储类型对照表

| 类别 | 服务 | 关键特性 |
|------|------|----------|
| **对象** | S3 | 通用对象存储 |
| **对象归档** | S3 Glacier | 低成本归档 |
| **块存储** | EBS | 单 EC2（io1/io2 Multi-Attach） |
| **物理块** | EC2 Instance Store | 最高 IOPS |
| **Linux NFS** | EFS | 跨 AZ POSIX |
| **Windows** | FSx Windows | SMB + AD |
| **HPC/ML** | FSx Lustre | S3 集成 |
| **全兼容** | FSx NetApp ONTAP | NFS/SMB/iSCSI + 去重 + 克隆 |
| **ZFS** | FSx OpenZFS | NFS + 高 IOPS + 克隆 |
| **混合文件** | Storage Gateway (S3 File) | NFS/SMB → S3 |
| **混合卷** | Storage Gateway (Volume) | iSCSI → S3 + EBS Snapshot |
| **混合磁带** | Storage Gateway (Tape) | iSCSI VTL → S3/Glacier |
| **FTP 接口** | Transfer Family | FTP/FTPS/SFTP → S3/EFS |
| **计划同步** | DataSync | 保留 Metadata |
| **物理迁移** | Snow Family | Snowcone 含 DataSync Agent |

## 考试要点

- 理解每种存储选项的**核心用例**和**协议**
- 根据场景选择正确的存储方案
- Solutions Architect 必备知识

## English Short Summary

Complete AWS storage comparison: **Object**: S3 + Glacier. **Block**: EBS (single EC2, io1/io2 Multi-Attach), EC2 Instance Store (physical high IOPS). **File Systems**: EFS (Linux NFS cross-AZ), FSx Windows (SMB+AD), FSx Lustre (HPC/ML+S3), FSx NetApp ONTAP (NFS/SMB/iSCSI+dedup+clone), FSx OpenZFS (NFS+high IOPS+clone). **Hybrid**: Storage Gateway (S3 File/Volume/Tape), Transfer Family (FTP→S3/EFS), DataSync (scheduled sync preserving metadata), Snow Family (physical migration, Snowcone has built-in DataSync Agent).
