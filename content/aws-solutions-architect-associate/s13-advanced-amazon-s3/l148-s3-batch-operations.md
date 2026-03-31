---
title: "S3 Batch Operations"
lectureId: 148
section: 13
sectionTitle: "Advanced Amazon S3"
date: "2026-03-05"
tags: ["S3", "Batch Operations", "S3 Inventory", "Athena"]
---

## 中文短总结

本讲介绍 S3 Batch Operations——用单个请求对大量 S3 对象执行批量操作。用例包括：批量修改 Metadata/Properties、跨 Bucket 复制、**加密所有未加密对象**（常见考题）、修改 ACL/Tags、从 Glacier 批量恢复、调用 Lambda 执行自定义操作。优势：自动重试、进度跟踪、完成通知、生成报告。对象列表生成方式：**S3 Inventory** 获取 Bucket 中的对象列表 → **Athena** 查询过滤 → 传递给 S3 Batch Operations 执行。

## 中文长总结

### S3 Batch Operations
- 用**单个请求**对大量 S3 对象执行批量操作

### 用例
- 批量修改对象 Metadata 和 Properties
- 跨 S3 Bucket 复制对象
- **加密所有未加密对象**（考试常考）
- 修改 ACL 或 Tags
- 从 S3 Glacier 批量恢复
- 调用 Lambda 函数执行自定义操作

### Job 组成
- **对象列表**
- **操作**（要执行的动作）
- **可选参数**

### 优势（vs 自行脚本）
- 自动**重试**管理
- **进度跟踪**
- **完成通知**
- **生成报告**

### 对象列表生成流程
1. **S3 Inventory** → 获取 Bucket 中的对象列表
2. **Athena** → 查询和过滤对象列表
3. 传递过滤后的列表给 **S3 Batch Operations**

## 考试要点

- 批量加密未加密对象 → **S3 Batch Operations**
- 对象列表来源：**S3 Inventory + Athena**
- 自动重试 + 进度跟踪 + 报告
- 可调用 Lambda 执行自定义操作

## English Short Summary

S3 Batch Operations performs bulk operations on existing S3 objects with a single request. Use cases: modify metadata, copy between buckets, encrypt all unencrypted objects (common exam topic), modify ACLs/tags, restore from Glacier, invoke Lambda for custom actions. Benefits over scripting: managed retries, progress tracking, completion notifications, reports. Object list generation: S3 Inventory → Athena query to filter → pass to S3 Batch Operations.
