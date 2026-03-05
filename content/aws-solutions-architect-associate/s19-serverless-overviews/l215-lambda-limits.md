---
title: "Lambda Limits"
lectureId: 215
section: "19"
sectionTitle: "Serverless Overviews from a Solution Architect Perspective"
date: "2026-03-05"
tags: ["lambda", "limits", "memory", "timeout", "deployment", "tmp"]
---

## 中文短总结

Lambda 限制（**每区域**）：执行限制 — 内存 128MB~10GB（64MB 增量）、最大执行时间 900 秒 (15 分钟)、环境变量 4KB、/tmp 空间最大 10GB、默认 1000 并发执行。部署限制 — 压缩包最大 50MB、解压后最大 250MB。考试中若需 30GB RAM、30 分钟执行或 3GB 文件，则 Lambda 不适用。

## 中文长总结

### 执行限制 (Execution Limits)

| 限制项 | 数值 |
|--------|------|
| 内存 | 128 MB ~ 10 GB（64 MB 增量） |
| 最大执行时间 | 900 秒 = 15 分钟 |
| 环境变量 | 最大 4 KB |
| /tmp 临时空间 | 最大 10 GB |
| 并发执行数 | 默认 1000（可申请增加） |

### 部署限制 (Deployment Limits)

| 限制项 | 数值 |
|--------|------|
| 压缩部署包 (.zip) | 最大 50 MB |
| 解压后代码 | 最大 250 MB |
| 环境变量 | 最大 4 KB |

### 重要注意事项
- 增加内存 → CPU 性能（vCPU）和网络性能同步提升
- 大文件处理应使用 **/tmp 目录**（最大 10GB）
- 并发限制可通过提交支持工单请求增加
- 建议使用 **Reserved Concurrency**（保留并发）防止函数被过度调用

## 考试要点

- 内存：**128MB - 10GB**（64MB 步进）
- 最大执行时间：**900 秒 = 15 分钟**
- /tmp 临时空间：**最大 10GB**（用于大文件处理）
- 环境变量：**最大 4KB**
- 部署包：**压缩 50MB，解压 250MB**
- 默认并发：**1000**（可申请增加）
- ⚠️ **考试陷阱**：需要 30GB RAM / 30 分钟执行时间 / 3GB 部署包 → **Lambda 不适合**，应选择其他计算服务
- 所有限制都是**每区域 (per region)** 的

## English Short Summary

Lambda limits are per region. Execution: memory 128MB–10GB (64MB increments), max timeout 900 seconds (15 min), environment variables 4KB, /tmp space up to 10GB, default 1000 concurrent executions (can request increase). Deployment: compressed zip max 50MB, uncompressed max 250MB. Exam trap: if a workload needs 30GB RAM, 30-minute execution, or a 3GB deployment file, Lambda is not suitable.
