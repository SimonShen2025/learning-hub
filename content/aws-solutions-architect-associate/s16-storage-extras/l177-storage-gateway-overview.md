---
title: "Storage Gateway Overview"
lectureId: 177
section: 16
sectionTitle: "AWS Storage Extras"
date: "2026-03-05"
tags: ["Storage Gateway", "Hybrid Cloud", "S3 File Gateway", "Volume Gateway", "Tape Gateway"]
---

## 中文短总结

本讲介绍 AWS Storage Gateway——本地数据与 AWS 云存储的桥梁。三种类型：**S3 File Gateway**（NFS/SMB 协议访问 S3，最近使用数据本地缓存，支持 Standard/IA/Intelligent-Tiering 但不含 Glacier 直接存储，可通过 Lifecycle 转 Glacier，SMB 支持 AD 认证）。**Volume Gateway**（iSCSI 协议，备份到 S3 作为 EBS Snapshot；Cached = 主数据在 S3 本地缓存热数据；Stored = 全部本地数据定期备份到 S3）。**Tape Gateway**（iSCSI VTL 协议，磁带备份到 S3/Glacier）。Gateway 部署在本地数据中心。

## 中文长总结

### Storage Gateway 概述
- **混合云**存储桥梁：本地 ↔ AWS 云
- 用例：灾难恢复、备份、云迁移、缓存

### 三种 Gateway 类型

#### 1. S3 File Gateway
| 特性 | 说明 |
|------|------|
| 协议 | **NFS / SMB** |
| 后端 | Amazon S3（Standard/IA/Intelligent-Tiering） |
| 缓存 | 最近使用数据**本地缓存** |
| Glacier | 不直接支持，需 **Lifecycle Policy** |
| 认证 | SMB 支持 **Active Directory** |
| IAM | 每个 Gateway 创建 IAM Role |

#### 2. Volume Gateway
| 特性 | 说明 |
|------|------|
| 协议 | **iSCSI** |
| 后端 | Amazon S3 → **EBS Snapshots** |
| Cached | 主数据在 S3，热数据本地缓存 |
| Stored | 全部数据本地，定期备份 S3 |
| 用途 | 备份/恢复本地服务器卷 |

#### 3. Tape Gateway
| 特性 | 说明 |
|------|------|
| 协议 | **iSCSI VTL** |
| 后端 | Amazon S3 + Glacier |
| 用途 | 替代物理磁带备份 |

### 部署
- Gateway 运行在本地数据中心（VMware/Hyper-V/KVM/EC2）

## 考试要点

- S3 File Gateway = NFS/SMB → S3（无直接 Glacier）
- Volume Gateway = iSCSI → S3 + EBS Snapshot
- Tape Gateway = iSCSI VTL → S3 + Glacier
- S3 File Gateway 支持本地缓存 + AD 认证

## English Short Summary

AWS Storage Gateway bridges on-premises data with AWS cloud. Three types: **S3 File Gateway** (NFS/SMB to S3, local cache for recent data, supports Standard/IA/Intelligent-Tiering but not Glacier directly — use Lifecycle Policy, SMB supports AD authentication). **Volume Gateway** (iSCSI to S3 + EBS Snapshots; Cached = primary data in S3 with local hot cache; Stored = all data local with scheduled S3 backup). **Tape Gateway** (iSCSI VTL to S3/Glacier, replaces physical tape backup). Gateway runs in on-premises data center.
