---
title: "EC2 Placement Groups"
lectureId: 49
section: 6
sectionTitle: "EC2 - Solutions Architect Associate Level"
date: "2026-03-05"
tags: ["ec2", "placement-groups", "cluster", "spread", "partition", "high-availability"]
---

## 中文短总结

本讲介绍 EC2 Placement Groups 的三种策略：Cluster（集群）将实例放在同一 AZ 的同一硬件上，实现 10Gbps 低延迟高吞吐但风险集中；Spread（分散）将实例分布在不同硬件上，每 AZ 每组最多 7 个实例，适合关键应用；Partition（分区）类似 Spread 但按分区（机架）分隔，每 AZ 最多 7 个分区，支持数百实例，适合 Hadoop/Cassandra/Kafka 等大数据应用。

## 中文长总结

### Placement Groups 概述
- 用于控制 EC2 实例在 AWS 基础设施中的放置策略
- 不直接操作硬件，而是告诉 AWS 希望实例如何分布

### 三种策略

#### 1. Cluster（集群放置组）
- 所有实例在**同一 AZ 的同一硬件**上
- **优势**：约 10Gbps 带宽，增强网络，极低延迟、高吞吐
- **劣势**：AZ 故障时所有实例同时失败
- **用例**：大数据作业（需快速完成）、需要极低延迟和高吞吐的应用

#### 2. Spread（分散放置组）
- 每个实例在**不同的物理硬件**上
- 可跨多个 AZ
- **限制**：每 AZ 每放置组最多 **7 个实例**
- **优势**：降低同时故障风险，硬件隔离
- **用例**：关键应用，需要最大化高可用性，实例故障需互相隔离

#### 3. Partition（分区放置组）
- 实例分布在不同**分区（partition）**中，每个分区对应不同的硬件机架
- 每 AZ 最多 **7 个分区**
- 可跨多个 AZ，支持**数百个** EC2 实例
- 分区之间故障隔离（一个分区故障不影响其他分区）
- 可通过 EC2 metadata 获取实例所在分区信息
- **用例**：分区感知的大数据应用（HDFS、HBase、Cassandra、Kafka）

## 考试要点

- **Cluster**：同 AZ 同硬件，高性能低延迟，风险集中 → 大数据计算
- **Spread**：不同硬件，每 AZ 最多 **7 个实例** → 关键应用，最大化可用性
- **Partition**：不同机架分区，每 AZ 最多 7 个分区，支持数百实例 → Hadoop/Cassandra/Kafka
- Spread 与 Partition 的区别：Spread 限制 7 个实例/AZ，Partition 支持数百实例但隔离粒度是分区级别
- 考试常考：根据场景选择正确的放置组策略

## English Short Summary

This lecture covers three EC2 Placement Group strategies: **Cluster** places instances on same hardware in one AZ for 10Gbps low-latency networking (risk: single AZ failure); **Spread** distributes instances across different hardware (max 7 per AZ per group) for critical apps needing failure isolation; **Partition** separates instances across rack partitions (up to 7 partitions/AZ, hundreds of instances) for partition-aware big data apps like Hadoop, Cassandra, and Kafka.
