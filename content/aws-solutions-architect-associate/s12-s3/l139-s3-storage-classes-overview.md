---
title: "S3 Storage Classes Overview"
lectureId: 139
section: 12
sectionTitle: "Amazon S3 Introduction"
date: "2026-03-05"
tags: ["S3", "Storage Classes", "Glacier", "Intelligent Tiering"]
---

## 中文短总结

本讲全面介绍 S3 的 7 种存储类别。**Durability** 所有类别相同（11 个 9），**Availability** 各不相同。S3 Standard（默认，99.99%可用）→ S3 Standard-IA（不频繁访问，99.9%，有检索费）→ S3 One Zone-IA（单 AZ，99.5%，AZ 毁坏数据丢失）→ Glacier Instant Retrieval（毫秒检索，最少存 90 天）→ Glacier Flexible Retrieval（1-5 min / 3-5h / 5-12h，最少 90 天）→ Glacier Deep Archive（12h / 48h，最少 180 天，最低成本）→ S3 Intelligent-Tiering（自动分层，有监控费，无检索费）。可手动修改类别或通过 **Lifecycle Rules** 自动迁移。

## 中文长总结

### 基础概念
- **Durability（持久性）**：所有类别相同 —— **11 个 9**（99.999999999%）
  - 1000 万对象平均 10,000 年丢失 1 个
- **Availability（可用性）**：各类别不同

### 7 种存储类别详解

| 类别 | 可用性 | 检索速度 | 最少存储 | 适用场景 |
|------|--------|----------|----------|----------|
| **S3 Standard** | 99.99% | 即时 | 无 | 频繁访问（默认） |
| **S3 Standard-IA** | 99.9% | 即时 | 30 天 | 灾难恢复、备份 |
| **S3 One Zone-IA** | 99.5% | 即时 | 30 天 | 可重建数据的次要备份 |
| **Glacier Instant** | 99.9% | 毫秒 | 90 天 | 季度访问的备份 |
| **Glacier Flexible** | 99.99% | 1-5min / 3-5h / 5-12h | 90 天 | 可等待的归档 |
| **Glacier Deep Archive** | 99.99% | 12h / 48h | 180 天 | 最低成本长期归档 |
| **Intelligent-Tiering** | 99.9% | 自动 | 无 | 未知访问模式 |

### Glacier Flexible 三种检索模式
- **Expedited**：1-5 分钟
- **Standard**：3-5 小时
- **Bulk**：5-12 小时（免费）

### S3 Intelligent-Tiering 分层
1. **Frequent Access**（默认）
2. **Infrequent Access**（30 天未访问）
3. **Archive Instant Access**（90 天未访问）
4. **Archive Access**（可选，90-700+ 天）
5. **Deep Archive Access**（可选，180-700+ 天）
- 有月度监控费，**无检索费**

### 存储类别迁移
- 手动修改
- **Lifecycle Rules** 自动迁移

## 考试要点

- 所有类别 Durability = **11 个 9**
- One Zone-IA = 单 AZ，AZ 毁坏数据丢失
- Glacier Instant = **毫秒检索**，Flexible = 分钟到小时，Deep Archive = 12-48 小时
- Intelligent-Tiering 有监控费但**无检索费**
- Lifecycle Rules 可自动迁移存储类别
- 最少存储期限：IA=30天，Glacier=90天，Deep Archive=180天

## English Short Summary

S3 has 7 storage classes, all sharing 11-nines durability but varying in availability. S3 Standard (99.99%, default) → Standard-IA (99.9%, retrieval cost) → One Zone-IA (99.5%, single AZ risk) → Glacier Instant Retrieval (milliseconds, 90-day min) → Glacier Flexible (1-5min/3-5h/5-12h, 90-day min) → Glacier Deep Archive (12h/48h, 180-day min, lowest cost) → Intelligent-Tiering (auto-tiering, monitoring fee, no retrieval charge). Classes can be changed manually or automated via Lifecycle Rules.
