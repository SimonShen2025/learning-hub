---
title: "Amazon EFS"
lectureId: 66
section: 7
sectionTitle: "EC2 Instance Storage"
date: "2026-03-05"
tags: ["efs", "nfs", "storage", "multi-az", "linux", "file-system"]
---

## 中文短总结

本讲介绍 Amazon EFS（Elastic File System），一种托管 NFS 网络文件系统。EFS 可同时挂载到**多个 AZ 的多个 EC2 实例**，高可用、自动扩展、按用量付费（约 GP2 的 3 倍价格）。仅支持 Linux（POSIX），通过安全组控制访问。三种吞吐模式：Bursting、Elastic（推荐，自动扩缩）、Provisioned。存储层级有 Standard、Infrequent Access（IA）、Archive，通过生命周期策略自动迁移，可节省高达 90% 成本。支持 Multi-AZ（生产）和 One Zone（开发）部署。

## 中文长总结

### EFS 基本概念
- **Managed NFS**（网络文件系统）
- 可同时挂载到**多个 AZ 的多个 EC2 实例**
- 高可用、高度可扩展
- 价格约 **GP2 EBS 的 3 倍**，但按用量付费（无需预配容量）
- 仅支持 **Linux AMI**（POSIX 文件系统），不支持 Windows
- 支持 KMS 静态加密

### 性能与吞吐

#### 规模
- 数千并发 NFS 客户端
- 10GB+ 吞吐能力
- 自动扩展到 PB 级

#### 性能模式（创建时设置）
- **General Purpose**（默认）：低延迟，适合 Web 服务器、CMS
- **Max I/O**：高延迟但更高吞吐，高并行，适合大数据、媒体处理

#### 吞吐模式
- **Bursting**：吞吐随存储量增长（1TB ≈ 50MB/s + burst 100MB/s）
- **Elastic**（推荐）：根据工作负载自动扩缩（最高读 3GB/s，写 1GB/s），无需预配
- **Provisioned**：固定吞吐，与存储大小解耦

### 存储层级与生命周期
- **Standard**：频繁访问
- **Infrequent Access（IA）**：不常访问，存储便宜但访问有成本
- **Archive**：极少访问（每年几次），最便宜
- **Lifecycle Policy**：按天数自动迁移文件到不同层级
- 使用正确的存储层级可**节省高达 90% 成本**

### 可用性与持久性
- **Multi-AZ（Standard）**：跨多 AZ，适合生产环境
- **One Zone**：单 AZ，更便宜，适合开发环境，兼容 IA 存储层

## 考试要点

- EFS 可跨多 AZ 挂载多个 EC2 → 共享文件存储
- **仅支持 Linux**（POSIX），不支持 Windows
- 按用量付费，无需预配容量，约 GP2 的 3 倍价格
- 三种吞吐模式：Bursting / **Elastic**（推荐）/ Provisioned
- 存储层级 + Lifecycle Policy → **最高节省 90%**
- 生产用 Multi-AZ，开发用 One Zone
- vs EBS：EFS 跨 AZ 共享，EBS 绑定单 AZ 单实例

## English Short Summary

Amazon EFS is a managed NFS (network file system) mountable across **multiple EC2 instances in multiple AZs** simultaneously. Linux-only (POSIX), pay-per-use (~3x GP2 price), auto-scaling to petabyte scale. Three throughput modes: Bursting, Elastic (recommended, auto-scales), Provisioned. Storage tiers (Standard, IA, Archive) with lifecycle policies can save up to 90%. Multi-AZ for production, One Zone for development. Key difference from EBS: EFS is shared across AZs; EBS is locked to one AZ.
