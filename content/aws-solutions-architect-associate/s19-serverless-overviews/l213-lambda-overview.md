---
title: "Lambda Overview"
lectureId: 213
section: "19"
sectionTitle: "Serverless Overviews from a Solution Architect Perspective"
date: "2026-03-05"
tags: ["lambda", "serverless", "faas", "pricing", "integrations", "ec2-comparison"]
---

## 中文短总结

AWS Lambda 是虚拟函数服务，无需管理服务器，按需运行（最长 15 分钟），自动扩展。定价基于调用次数和计算时间，免费层包含每月 100 万次请求和 40 万 GB-秒计算时间。支持多种语言（Node.js、Python、Java 等），与众多 AWS 服务深度集成。每个函数最多 10GB RAM，增加 RAM 同时提升 CPU 和网络性能。

## 中文长总结

### Lambda vs EC2

| 特性 | EC2 | Lambda |
|------|------|--------|
| 服务器管理 | 需要配置和管理 | 无需管理 |
| 运行模式 | 持续运行 | 按需运行 |
| 扩展方式 | ASG 需手动配置 | 自动扩展 |
| 执行时间 | 无限制 | 最长 15 分钟 |
| 计费 | 持续计费 | 仅运行时计费 |

### 支持语言
- **主流语言**：Node.js (JavaScript)、Python、Java、C# (.NET Core/PowerShell)、Ruby
- **Custom Runtime API**：支持 Rust、Golang 等
- **容器镜像**：支持但需实现 Lambda Runtime API（考试中 Docker 容器**优先推荐 ECS/Fargate**）

### 主要集成服务
API Gateway、Kinesis、DynamoDB、S3、CloudFront (Lambda@Edge)、CloudWatch Events/EventBridge、CloudWatch Logs、SNS、SQS、Cognito

### 典型用例
1. **无服务器缩略图生成**：S3 上传图片 → S3 事件通知触发 Lambda → 生成缩略图存入 S3 + 元数据存入 DynamoDB
2. **无服务器 CRON**：CloudWatch Events/EventBridge 定时规则 → 每小时触发 Lambda 执行任务

### 定价
- **按调用次数**：前 100 万次免费，之后每 100 万次 $0.20
- **按执行时长**：以 1ms 为单位计费，前 40 万 GB-秒/月免费
  - 1GB RAM → 40 万秒免费
  - 128MB RAM → 320 万秒免费
- 之后每 60 万 GB-秒 $1.00

### 资源配置
- 每个函数最多 **10GB RAM**
- 增加 RAM → **CPU 和网络性能同步提升**

## 考试要点

- Lambda 最大执行时间 **15 分钟 (900 秒)**
- Lambda 内存最大 **10GB**，增加 RAM 自动提升 CPU 和网络性能
- 免费层：**100 万请求/月 + 40 万 GB-秒/月**
- **Docker 容器优先选 ECS/Fargate**，不选 Lambda（考试重点）
- Lambda 支持主要语言：Node.js、Python、Java、C#、Ruby
- S3 事件触发 Lambda → 生成缩略图 + DynamoDB 存元数据（典型架构）
- 无服务器 CRON：CloudWatch Events/EventBridge 定时触发 Lambda
- Lambda 自动扩展，无需配置 Auto Scaling

## English Short Summary

AWS Lambda provides serverless virtual functions — no server management, runs on demand (max 15 min), and auto-scales. Pricing: pay per invocation (first 1M free, then $0.20/1M) and compute time (first 400K GB-seconds free). Supports Node.js, Python, Java, C#, Ruby, and custom runtimes. Up to 10GB RAM per function (more RAM = better CPU/network). Deeply integrates with API Gateway, S3, DynamoDB, Kinesis, CloudFront, EventBridge, SNS, SQS, Cognito. Key exam point: prefer ECS/Fargate over Lambda for Docker containers. Common patterns: S3 event → Lambda thumbnail generation; EventBridge → Lambda serverless CRON job.
