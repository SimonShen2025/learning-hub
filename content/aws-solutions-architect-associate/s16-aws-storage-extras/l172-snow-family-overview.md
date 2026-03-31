---
title: "AWS Snow Family Overview"
lectureId: 172
section: 16
sectionTitle: "AWS Storage Extras"
date: "2026-03-05"
tags: ["Snow Family", "Snowball", "Data Migration", "Edge Computing"]
---

## 中文短总结

本讲介绍 AWS Snow Family。两种 Snowball Edge 设备：**Storage Optimized**（210TB）和 **Compute Optimized**（28TB）。**数据迁移用例**：当网络传输超过一周（如 100TB 通过 1Gbps 需 12 天），推荐用 Snowball 物理迁移——接收设备 → 加载数据 → 寄回 AWS → 导出到 S3。**边缘计算用例**：在无网络/有限网络的位置（卡车、船、矿场）处理数据，可运行 EC2 实例和 Lambda 函数，用于预处理、ML、媒体转码等。

## 中文长总结

### Snowball Edge 设备
| 类型 | 存储 | 用途 |
|------|------|------|
| **Storage Optimized** | 210 TB | 数据迁移 |
| **Compute Optimized** | 28 TB | 边缘计算 |

### 数据迁移用例
- 网络传输超过一周 → 推荐 Snowball
- 流程：接收设备 → 加载数据 → 寄回 → 导出到 S3
- 适合：连接慢、带宽有限、网络不稳定

### 边缘计算用例
- 在偏远位置处理数据（卡车、船、矿场）
- 可运行 **EC2 实例** 和 **Lambda 函数**
- 用途：预处理数据、ML、媒体转码

## 考试要点

- 网络传输 > 1 周 → Snowball
- Storage Optimized = 210TB（迁移），Compute Optimized = 28TB（计算）
- 支持边缘运行 EC2 和 Lambda

## English Short Summary

AWS Snow Family: two Snowball Edge devices — Storage Optimized (210TB) for data migration and Compute Optimized (28TB) for edge computing. Data migration: when network transfer exceeds ~1 week (e.g., 100TB over 1Gbps = 12 days), use Snowball physically — receive device, load data, ship back, export to S3. Edge computing: process data in remote locations (trucks, ships, mines) with no/limited internet, running EC2 instances and Lambda functions for preprocessing, ML, and media transcoding.
