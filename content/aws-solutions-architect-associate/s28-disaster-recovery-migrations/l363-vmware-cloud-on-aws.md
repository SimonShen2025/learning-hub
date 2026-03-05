---
title: "VMware Cloud on AWS"
lectureId: 363
section: "s28"
sectionTitle: "Disaster Recovery & Migrations"
date: "2026-03-05"
tags: [vmware, hybrid-cloud, vsphere, migration]
---

## 中文短总结

VMware Cloud on AWS：将 VMware 管理的 on-premises 数据中心扩展到 AWS 云。在 AWS 上运行 vSphere/vSAN/NSX 等 VMware 技术栈，使用相同的 VMware Cloud 软件统一管理。用途：①扩展计算/存储容量②迁移 VMware 工作负载到 AWS③跨私有/公有/混合云运行生产负载④灾难恢复（快速切换到云）。可同时使用 AWS 原生服务（EC2/FSx/S3/RDS/Direct Connect/Redshift 等）。高级概念，知道名字即可。

## 中文长总结

VMware Cloud on AWS 适用于已使用 VMware 的企业。

**核心价值：**
```
On-premises VMware 数据中心 ←→ AWS 上的 VMware 环境
            ↕                        ↕
    VMware Cloud 统一管理             可访问 AWS 原生服务
```

**用途：**
- 扩展容量（计算/存储）
- VMware 工作负载迁移到 AWS
- 混合云生产环境
- 灾难恢复

## 考试要点

- VMware Cloud on AWS = 在 AWS 上运行 VMware 技术栈
- 统一管理 on-premises 和云端
- 高级概念，知道名字和用途即可

## English Short Summary

VMware Cloud on AWS: extend on-premises VMware-managed data center (vSphere/vSAN/NSX) to AWS. Use same VMware Cloud software to manage both environments. Use cases: extend compute/storage capacity, migrate VMware workloads to AWS, hybrid cloud production, disaster recovery. Can access native AWS services (EC2/FSx/S3/RDS/Direct Connect/Redshift). High-level concept — know the name and purpose.
