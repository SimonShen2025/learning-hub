---
title: "MSK - Managed Streaming for Apache Kafka"
lectureId: 253
section: "s22"
sectionTitle: "Data & Analytics"
date: "2026-03-05"
tags: [msk, kafka, kinesis, streaming, real-time, analytics]
---

## 中文短总结

Amazon MSK 是 Apache Kafka 的完全托管服务，作为 Kinesis 的替代方案用于流数据。部署在 VPC 中，跨多 AZ（最多 3 个），数据存储在 EBS 卷上（可保留任意时长）。也提供 MSK Serverless 模式。与 Kinesis 对比：消息大小默认 1MB 但 MSK 可配置到 10MB、Shard vs Kafka Partitions、Kinesis 用 Split/Merge 扩缩容而 MSK 只能增加 Partition 不能减少。消费端：Flink（实时处理）、Glue Streaming ETL（Spark Streaming）、Lambda（事件源映射）、自定义 Kafka Consumer（EC2/ECS/EKS）。

## 中文长总结

Amazon MSK（Managed Streaming for Apache Kafka）是 AWS 上完全托管的 Apache Kafka 服务，是 Kinesis 的替代方案。

**核心特性：**
- 一键部署 Kafka 集群，管理 Broker 和 Zookeeper 节点
- 部署在 VPC 中，跨多 AZ（最多 3 个）实现高可用
- 自动恢复常见 Kafka 故障
- 数据存储在 EBS 卷上，**可保留任意时长**（只要支付 EBS 费用）
- **MSK Serverless**：无需预置服务器，自动扩展计算和存储

**Kafka 架构：**
- Kafka 集群由多个 Broker 组成
- **Producers** 从各来源（Kinesis/IoT/RDS 等）摄入数据 → 写入 Kafka Topic
- Topic 在 Broker 间完全复制
- **Consumers** 从 Topic 拉取数据 → 处理或发送到目标（EMR/S3/SageMaker/Kinesis/RDS）

**Kinesis Data Streams vs Amazon MSK：**

| 特性 | Kinesis Data Streams | Amazon MSK |
|------|---------------------|------------|
| 消息大小 | 1 MB（固定） | 默认 1 MB，可配置至 10 MB |
| 分片概念 | Shards | Kafka Topics + Partitions |
| 扩容 | Shard Splitting | 增加 Partitions |
| 缩容 | Shard Merging | **不能**移除 Partitions |
| 传输加密 | 必须加密 | 明文或 TLS |
| 静态加密 | 支持 | 支持 |
| 数据保留 | 默认 1-365 天 | **任意时长**（EBS 存储） |

**消费端选项：**
1. **Apache Flink**（Managed Service）：实时流处理
2. **AWS Glue**：Streaming ETL（基于 Spark Streaming）
3. **Lambda**：MSK 作为事件源
4. **自定义 Kafka Consumer**：运行在 EC2/ECS/EKS 上

## 考试要点

- MSK = 托管 Kafka，是 Kinesis 的替代方案
- MSK 消息可配置到 10MB（Kinesis 固定 1MB）
- MSK Partitions 只能增加不能减少
- MSK 数据可保留任意时长（依赖 EBS）
- MSK Serverless 模式：自动扩展，无需管理
- 消费端：Flink / Glue Streaming / Lambda / 自定义 Consumer
- 部署在 VPC 中，跨 3 AZ

## English Short Summary

Amazon MSK is fully managed Apache Kafka on AWS, an alternative to Kinesis for data streaming. Deployed in VPC across up to 3 AZs with data on EBS volumes (retained indefinitely). Also available as MSK Serverless. Key differences from Kinesis: configurable message size up to 10MB (vs fixed 1MB), Kafka Partitions can only be added not removed (vs Shard split/merge), plaintext or TLS encryption (vs mandatory), and unlimited data retention. Consumers: Apache Flink (real-time), Glue Streaming ETL (Spark Streaming), Lambda (event source), or custom Kafka consumers on EC2/ECS/EKS.
