---
title: "S3 Access Logs"
lectureId: 158
section: 14
sectionTitle: "Amazon S3 Security"
date: "2026-03-05"
tags: ["S3", "Access Logs", "Audit", "Athena"]
---

## 中文短总结

本讲介绍 S3 Access Logs。出于审计目的，可将所有 S3 Bucket 访问请求（包括授权和拒绝的请求）记录到**另一个 S3 Bucket**。日志数据可用 **Amazon Athena** 分析。目标日志 Bucket 必须在**同一 Region**。**警告**：绝不能将监控 Bucket 和日志 Bucket 设为同一个 Bucket，否则会产生 **Logging Loop**（日志触发新日志，指数级增长，产生巨额费用）。

## 中文长总结

### Access Logs 功能
- 记录所有对 S3 Bucket 的请求（授权 + 拒绝）
- 日志写入**另一个 S3 Bucket**
- 可用 **Amazon Athena** 分析日志

### 要求
- 日志 Bucket 必须在**同一 AWS Region**

### ⚠️ 避免 Logging Loop
- **绝不能**让日志 Bucket = 监控 Bucket
- 否则每次日志写入触发新的日志记录 → 无限循环
- Bucket **指数级增长** → 巨额费用

## 考试要点

- Access Logs 日志 Bucket 必须**同 Region**
- **不能**将日志 Bucket 设为被监控 Bucket（Logging Loop）
- 日志可用 Athena 分析

## English Short Summary

S3 Access Logs record all requests (authorized or denied) to an S3 bucket into a separate logging bucket for audit purposes. Data can be analyzed with Amazon Athena. The target logging bucket must be in the same AWS region. Critical warning: never set the logging bucket to be the same as the monitored bucket — this creates a logging loop where each log entry generates another log, causing exponential bucket growth and massive costs.
