---
title: "EMR"
lectureId: 247
section: "s22"
sectionTitle: "Data & Analytics"
date: "2026-03-05"
tags: [emr, hadoop, spark, big-data, ec2, spot-instances]
---

## 中文短总结

Amazon EMR（Elastic MapReduce）是托管 Hadoop 集群服务，用于大数据处理，捆绑 Spark/HBase/Presto/Flink 等工具。三种节点类型：Master Node（协调管理，长期运行）、Core Node（运行任务+存储数据，长期运行）、Task Node（仅运行任务，可选，适合 Spot）。购买策略：Master/Core 用 On-Demand 或 Reserved，Task Node 用 Spot。部署方式：长期运行集群（配合 Reserved）或临时集群（用完即销毁）。看到 Hadoop/Spark/大数据集群 → 选 EMR。

## 中文长总结

Amazon EMR（Elastic MapReduce）是一项托管大数据集群服务，帮助在 AWS 上创建和管理 Hadoop 集群。

**核心特性：**
- 处理和分析海量数据
- 集群由数百个 EC2 实例组成
- 捆绑大数据工具：Apache Spark、HBase、Presto、Apache Flink
- 自动处理所有工具的配置和预置
- 支持集群自动扩展
- 集成 Spot Instances 降低成本

**三种节点类型：**
| 节点类型 | 职责 | 运行时长 | 推荐实例类型 |
|---------|------|---------|------------|
| **Master Node** | 管理集群、协调、健康监控 | 必须长期运行 | On-Demand 或 Reserved |
| **Core Node** | 运行任务 + 存储数据 | 必须长期运行 | On-Demand 或 Reserved |
| **Task Node** | 仅运行任务（可选） | 可临时 | Spot Instances |

**购买策略：**
- **On-Demand**：可靠、可预测，不会被终止
- **Reserved**（≥1 年）：适合 Master 和 Core Node，EMR 自动使用
- **Spot**：便宜但不可靠，适合 Task Node

**部署方式：**
- **长期运行集群**：持续运行，配合 Reserved Instances
- **临时集群（Transient）**：分析完成即销毁

**用例：** 数据处理、机器学习、Web 索引、大数据分析（均使用 Hadoop/Spark/HBase/Presto/Flink 等技术）

## 考试要点

- 看到 Hadoop/Spark/HBase/Presto/Flink/大数据集群 → 选 EMR
- Master 和 Core Node 必须长期运行 → On-Demand 或 Reserved
- Task Node 仅运行任务、可选 → 适合 Spot Instances
- 临时集群 vs 长期运行集群两种部署模式
- EMR 自动预置和配置大数据工具

## English Short Summary

Amazon EMR (Elastic MapReduce) is a managed Hadoop cluster service for big data processing, bundling Spark/HBase/Presto/Flink. Three node types: Master Node (coordination, must be long-running), Core Node (tasks + data storage, must be long-running), Task Node (tasks only, optional, ideal for Spot). Purchase strategy: Master/Core use On-Demand or Reserved, Task Nodes use Spot. Deployment: long-running clusters (with Reserved) or transient clusters (tear down after analysis). See Hadoop/Spark/big data cluster → think EMR.
