---
title: "S3 Express One Zone"
lectureId: 141
section: 12
sectionTitle: "Amazon S3 Introduction"
date: "2026-03-05"
tags: ["S3", "Express One Zone", "Directory Bucket", "High Performance"]
---

## 中文短总结

本讲介绍 S3 Express One Zone——高性能单可用区存储类别。Object 存储在 **Directory Bucket**（特殊 S3 Bucket 类型）中，用户可选择特定 AZ。因为在单 AZ，可实现**每秒数十万请求**、**个位数毫秒延迟**，性能是 S3 Standard 的 **10 倍**，成本降低约 **50%**。核心理念：将存储和计算资源放在**同一 AZ** 以降低延迟和网络成本。适用场景：延迟敏感应用、数据密集型应用、AI/ML 训练、金融建模、媒体处理、HPC。与 SageMaker、Athena、EMR、Glue 等服务最佳集成。可用性较低（单 AZ 风险）。

## 中文长总结

### S3 Express One Zone 特性
- **单可用区**高性能存储
- 使用 **Directory Bucket**（非标准 Bucket）
- 可选择具体 AZ
- **每秒数十万请求**
- **个位数毫秒延迟**
- S3 Standard **10 倍性能**
- 成本**降低约 50%**

### 核心设计理念
- 存储 + 计算在**同一 AZ** → 最低延迟 + 最低网络成本

### 适用场景
- 延迟敏感应用
- 数据密集型应用
- AI/ML 训练
- 金融建模
- 媒体处理
- HPC（高性能计算）

### 最佳集成服务
- SageMaker Model Training
- Athena、EMR、Glue

### 风险
- 单 AZ → AZ 故障影响可用性

## 考试要点

- S3 Express One Zone 使用 **Directory Bucket**
- 单 AZ，性能 10 倍于 Standard，成本 -50%
- 用于延迟敏感和数据密集型应用
- 与 SageMaker、Athena、EMR、Glue 集成

## English Short Summary

S3 Express One Zone is a high-performance single-AZ storage class using Directory Buckets (a special S3 bucket type). Objects are stored in a chosen AZ, achieving hundreds of thousands of requests per second with single-digit millisecond latency — 10x S3 Standard performance at ~50% lower cost. The key concept is co-locating storage and compute in the same AZ. Use cases: latency-sensitive apps, AI/ML training, financial modeling, media processing, HPC. Best integrated with SageMaker, Athena, EMR, Glue. Lower availability due to single-AZ design.
