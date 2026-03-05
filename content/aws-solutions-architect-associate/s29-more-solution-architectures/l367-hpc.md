---
title: "High Performance Computing (HPC) on AWS"
lectureId: 367
section: "s29"
sectionTitle: "More Solution Architectures"
date: "2026-03-05"
tags: [hpc, ena, efa, placement-group, batch, fsx-lustre, parallel-cluster]
---

## 中文短总结

AWS HPC 全面概述。**数据传输**：Direct Connect（Gbps 私有）/ Snowball（PB 级物理）/ DataSync（代理同步）。**计算+网络**：CPU/GPU 优化 EC2 + Spot + ASG；**Cluster Placement Group**（同机架低延迟 10Gbps）；**ENA**（Elastic Network Adapter，100Gbps）；**EFA**（Elastic Fabric Adapter，HPC 专用 Linux，绕过 OS，MPI 标准，更低延迟）。**存储**：EBS（io2 256K IOPS）/ Instance Store（百万 IOPS）/ S3（对象）/ EFS / **FSx for Lustre**（HPC 优化，百万 IOPS，S3 后端）。**编排**：AWS Batch（多节点并行作业）/ **ParallelCluster**（开源 HPC 集群管理，支持 EFA 参数）。

## 中文长总结

AWS HPC（高性能计算）完整服务栈：

**1. 数据传输：**

| 服务 | 特点 |
|------|------|
| **Direct Connect** | Gbps 私有连接 |
| **Snowball/Snowmobile** | PB 级物理传输 |
| **DataSync** | 代理式大数据同步 |

**2. 计算 + 网络：**

| 组件 | 特点 |
|------|------|
| **EC2** | CPU/GPU 优化实例 + Spot |
| **Cluster Placement Group** | 同机架、同 AZ、10Gbps |
| **ENA** | **100 Gbps**（增强网络） |
| **EFA** | HPC 专用（仅 Linux），**绕过 OS**，MPI 标准 |
| Intel 82599 VF | 旧版 10 Gbps（Legacy） |

**ENA vs EFA vs ENI：**
- **ENI** = 普通弹性网络接口
- **ENA** = 增强网络适配器（100 Gbps）
- **EFA** = 弹性 Fabric 适配器（绕过 OS，MPI，仅 Linux，HPC 专用）

**3. 存储：**

| 存储 | IOPS |
|------|------|
| EBS (io2 Block Express) | 256,000 |
| Instance Store | **百万级** |
| **FSx for Lustre** | **百万级**（HPC 优化） |

**4. 编排：**

| 服务 | 特点 |
|------|------|
| **AWS Batch** | 多节点并行作业调度 |
| **ParallelCluster** | 开源 HPC 集群，文本文件配置，**支持 EFA** |

## 考试要点

- ENA = 100 Gbps 增强网络
- EFA = HPC 专用（Linux only），绕过 OS，MPI
- 考试区分 ENI / ENA / EFA
- Cluster Placement Group = 同机架低延迟
- FSx for Lustre = HPC 存储首选
- ParallelCluster + EFA = HPC 最佳组合

## English Short Summary

AWS HPC overview. **Data transfer**: Direct Connect (Gbps) / Snowball (PB) / DataSync. **Compute+Network**: CPU/GPU EC2 + Spot + ASG; **Cluster Placement Group** (same rack, 10Gbps); **ENA** (100Gbps enhanced networking); **EFA** (HPC-specific, Linux only, bypasses OS, MPI standard, lower latency than ENA). **Storage**: EBS io2 (256K IOPS), Instance Store (millions), **FSx for Lustre** (HPC-optimized, millions IOPS). **Orchestration**: AWS Batch (multi-node parallel) / **ParallelCluster** (open-source, supports EFA parameter). Exam: distinguish ENI vs ENA vs EFA.
