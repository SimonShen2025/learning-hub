---
title: AWS Cloud Overview - Regions & AZ
lectureId: 8
section: 3
sectionTitle: Getting started with AWS
date: '2026-03-05'
tags:
  - aws
  - regions
  - availability-zones
  - global-infrastructure
important: false
---

## 中文短总结

AWS 全球基础设施由 Region、Availability Zone (AZ) 和 Edge Location 组成。每个 Region 包含 3-6 个 AZ，AZ 间通过高带宽低延迟网络连接且相互隔离以容灾。选择 Region 需考虑：合规要求、延迟、服务可用性和定价。大部分 AWS 服务是 Region 级别的，少数（如 IAM、Route 53）是全局服务。

## 中文长总结

### AWS 发展历程
- 2002 年内部启动，2004 年发布 SQS，2006 年扩展至 SQS/S3/EC2
- 目前年收入 $90B（2023），市场份额约 31%（Q1 2024），连续 13 年市场领导者
- 100 万+ 活跃用户

### Region（区域）
- 全球分布的数据中心集群，每个有对应代码（如 us-east-1、eu-west-3）
- 大多数 AWS 服务与特定 Region 绑定，跨 Region 使用等于全新开始
- **选择 Region 四要素**：
  1. **合规（Compliance）**：数据主权要求，如法国数据必须留在法国
  2. **延迟（Latency）**：选择离用户近的 Region
  3. **服务可用性**：并非所有 Region 都支持所有服务
  4. **定价（Pricing）**：不同 Region 价格不同

### Availability Zone（可用区）
- 每个 Region 包含 3-6 个 AZ（通常 3 个）
- 每个 AZ = 一个或多个独立数据中心，有冗余电力、网络和连接
- AZ 之间物理隔离，灾害不会级联
- AZ 间通过高带宽、超低延迟网络互联

### Edge Location / Points of Presence
- 400+ 个节点，分布在 90 个城市、40 个国家
- 用于向终端用户提供最低延迟的内容分发

### 服务类型
- **全局服务**：IAM、Route 53、CloudFront、WAF
- **区域服务**：EC2、Elastic Beanstalk、Lambda、Rekognition 等大部分服务

## 考试要点

- Region 选择的四个考量因素（合规、延迟、服务可用性、定价）是常见考点
- AZ 的设计目标是故障隔离，AZ 之间互不影响
- 区分全局服务 vs 区域服务
- 知道每个 Region 通常有 3 个 AZ（最少 3，最多 6）

## English Short Summary

AWS global infrastructure: Regions (clusters of data centers with codes like us-east-1), each containing 3–6 Availability Zones (isolated data centers connected via high-bandwidth, low-latency links). Choose regions based on compliance, latency, service availability, and pricing. 400+ Edge Locations for content delivery. Most services are region-scoped; IAM, Route 53, CloudFront, WAF are global.
