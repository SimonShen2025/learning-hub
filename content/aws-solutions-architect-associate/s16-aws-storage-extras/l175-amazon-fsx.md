---
title: "Amazon FSx"
lectureId: 175
section: 16
sectionTitle: "AWS Storage Extras"
date: "2026-03-05"
tags: ["FSx", "Lustre", "Windows File Server", "NetApp ONTAP", "OpenZFS"]
---

## 中文短总结

本讲介绍 Amazon FSx 四种文件系统。**FSx for Windows File Server**：SMB + NTFS + Active Directory，支持 Linux 挂载，可与本地 Windows File Server 通过 DFS 组合，Multi-AZ 高可用，每日备份到 S3。**FSx for Lustre**：Linux + Cluster，用于 HPC/ML，与 S3 无缝集成（读 S3 为文件系统），Scratch（临时高性能无复制）vs Persistent（同 AZ 内复制）。**FSx for NetApp ONTAP**：NFS/SMB/iSCSI 兼容，支持所有 OS，自动扩缩容，支持去重/压缩/快速克隆。**FSx for OpenZFS**：NFS 协议，100 万 IOPS/<0.5ms 延迟，支持快照/压缩/快速克隆，无去重。

## 中文长总结

### 1. FSx for Windows File Server
| 特性 | 说明 |
|------|------|
| 协议 | **SMB** + NTFS |
| 集成 | **Active Directory** |
| 特殊 | Linux EC2 也可挂载 |
| DFS | 与本地 Windows File Server 组合 |
| 性能 | 数十 GB/s，百万 IOPS |
| 存储 | SSD（低延迟）/ HDD |
| 高可用 | **Multi-AZ** |
| 备份 | 每日 → S3 |

### 2. FSx for Lustre（HPC/ML 关键词）
| 特性 | 说明 |
|------|------|
| 来源 | **Linux + Cluster** |
| 用途 | HPC、ML、视频处理、金融建模 |
| 性能 | 数百 GB/s，百万 IOPS，亚毫秒延迟 |
| S3 集成 | 读 S3 为文件系统，输出写回 S3 |
| Scratch | 临时存储，无复制，6x 性能 |
| Persistent | 同 AZ 内复制，长期存储 |
| 限制 | 只在**单个 AZ** 内 |

### 3. FSx for NetApp ONTAP
| 特性 | 说明 |
|------|------|
| 协议 | **NFS + SMB + iSCSI** |
| 兼容性 | Linux/Windows/macOS/VMware |
| 特殊 | 自动扩缩容、去重、压缩 |
| 克隆 | **即时克隆**（Point-in-time） |

### 4. FSx for OpenZFS
| 特性 | 说明 |
|------|------|
| 协议 | **NFS** |
| 性能 | 100 万 IOPS，<0.5ms 延迟 |
| 特殊 | 快照、压缩、**无去重** |
| 克隆 | **即时克隆** |

## 考试要点

- HPC / ML / Lustre → **FSx for Lustre**
- Windows File Server / SMB / AD → **FSx for Windows**
- NFS + SMB + iSCSI + 去重 + 克隆 → **NetApp ONTAP**
- NFS + 高 IOPS + 克隆（无去重）→ **OpenZFS**
- Lustre 与 S3 无缝集成
- Lustre Scratch vs Persistent

## English Short Summary

Amazon FSx offers four managed file systems. **Windows File Server**: SMB/NTFS, Active Directory, mountable on Linux, DFS with on-prem, Multi-AZ, daily S3 backup. **Lustre** (Linux+Cluster): HPC/ML keyword, seamless S3 integration (read S3 as filesystem), Scratch (temp, no replication, 6x perf) vs Persistent (same-AZ replication), single AZ only. **NetApp ONTAP**: NFS/SMB/iSCSI, all OS compatible, auto-scaling, deduplication, compression, instant cloning. **OpenZFS**: NFS only, 1M IOPS/<0.5ms, snapshots/compression/instant cloning but no deduplication.
