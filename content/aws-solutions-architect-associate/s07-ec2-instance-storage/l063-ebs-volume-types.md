---
title: "EBS Volume Types"
lectureId: 63
section: 7
sectionTitle: "EC2 Instance Storage"
date: "2026-03-05"
tags: ["ebs", "volume-types", "gp2", "gp3", "io1", "io2", "st1", "sc1", "ssd", "hdd"]
---

## 中文短总结

本讲介绍 EBS 的六种卷类型。SSD 类：gp2/gp3（通用，平衡性价比）和 io1/io2 Block Express（高性能，关键业务低延迟高吞吐）。HDD 类：st1（吞吐优化，适合大数据/日志）和 sc1（冷数据，最低成本）。只有 gp2/gp3 和 io1/io2 可作为**启动卷**。关键区别：gp3 的 IOPS 和吞吐可独立设置，gp2 的 IOPS 与卷大小绑定。超过 32K IOPS 需要 EC2 Nitro + io1/io2。

## 中文长总结

### SSD 卷类型

#### gp2/gp3（General Purpose SSD）
- 平衡性价比，适合系统启动卷、虚拟桌面、开发测试
- 大小：1GB - 16TB
- **gp3**（新一代）：
  - 基准 3000 IOPS + 125MB/s 吞吐
  - 可**独立**增加 IOPS（最高 16,000）和吞吐（最高 1,000MB/s）
- **gp2**（旧版）：
  - 小卷可 burst 到 3,000 IOPS
  - IOPS 与卷大小**绑定**（3 IOPS/GB），5,334GB 达到 16,000 IOPS 上限

#### io1/io2 Block Express（Provisioned IOPS SSD）
- 关键业务应用，需持续高 IOPS 或超过 16,000 IOPS
- 考试场景：数据库工作负载，对存储性能和一致性敏感
- **io1**：4-16TB，最高 64,000 PIOPS（Nitro）/ 32,000（其他）
- **io2 Block Express**：最高 64TB，亚毫秒延迟，最高 256,000 IOPS（1000:1 IOPS/GB）
- IOPS 可独立于存储大小设置
- 支持 **EBS Multi-Attach**

### HDD 卷类型（不可作为启动卷）
- 最大 16TB

#### st1（Throughput Optimized HDD）
- 大数据、数据仓库、日志处理
- 最大吞吐 500MB/s，最大 IOPS 500

#### sc1（Cold HDD）
- 归档数据、不频繁访问
- 最低成本
- 最大吞吐 250MB/s，最大 IOPS 250

## 考试要点

- 只有 **gp2/gp3** 和 **io1/io2** 可作为启动卷
- **gp3** IOPS 与吞吐独立设置；**gp2** IOPS 绑定卷大小
- 数据库需要高 IOPS → **io1/io2**
- 超过 **32,000 IOPS** → 需要 EC2 Nitro + io1/io2
- io2 Block Express → 最高 256,000 IOPS，亚毫秒延迟
- **st1**：高吞吐 HDD，大数据/日志
- **sc1**：最低成本 HDD，冷数据/归档
- io1/io2 支持 **Multi-Attach**

## English Short Summary

EBS has 6 volume types: **gp2/gp3** (general purpose SSD, balanced price/performance), **io1/io2 Block Express** (high-performance SSD for critical low-latency workloads, up to 256K IOPS), **st1** (throughput-optimized HDD for big data/logs), and **sc1** (lowest-cost cold HDD). Only gp/io types can be boot volumes. Key: gp3 allows independent IOPS/throughput; gp2 links IOPS to volume size. Over 32K IOPS requires EC2 Nitro with io1/io2. io1/io2 support Multi-Attach.
