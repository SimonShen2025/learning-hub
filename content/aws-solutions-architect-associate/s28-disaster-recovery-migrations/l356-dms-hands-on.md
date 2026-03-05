---
title: "Database Migration Service (DMS) - Hands On"
lectureId: 356
section: "s28"
sectionTitle: "Disaster Recovery & Migrations"
date: "2026-03-05"
tags: [dms, hands-on, endpoints, replication-instance, serverless]
---

## 中文短总结

实操 DMS 控制台演示：①**Endpoints**：创建源和目标端点，选择引擎（Aurora/DynamoDB 等），配置连接信息，测试连接②**Replication Instance**：选择服务器大小（Provisioned）或使用 **Serverless**（自动调整计算资源）③**Task**：选择源端点 + 目标端点 + 实例类型 → 任务模式：Migrate Data（一次性）、Migrate & Replicate（Full Load + CDC）、Replicate Only（仅变更）④中间还有 Schema Conversion（异构）和 Homogeneous Data Migration（同构）选项。Serverless 更简单不需选实例大小。

## English Short Summary

DMS hands-on console: (1) **Endpoints**: create source/target, select engine, configure connection, test; (2) **Replication Instance**: choose size (Provisioned) or **Serverless** (auto-adjusts compute); (3) **Task**: select endpoints + mode: Migrate Data (one-time), Migrate & Replicate (Full Load + CDC), or Replicate Only (changes). Also available: Schema Conversion (heterogeneous) and Homogeneous Data Migration (same engine). Serverless is simpler — no instance sizing needed.
