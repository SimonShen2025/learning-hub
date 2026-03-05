---
title: "Serverless Website: MyBlog.com"
lectureId: 230
section: "20"
sectionTitle: "Serverless Solution Architecture Discussions"
date: "2026-03-05"
tags: ["serverless", "architecture", "cloudfront", "s3", "dynamodb", "ses", "lambda", "global-tables"]
---

## 中文短总结

无服务器博客网站架构：静态内容通过 **CloudFront + S3 + OAC** 全球分发。动态 REST API 使用 API Gateway → Lambda → DynamoDB (+ DAX 缓存)，全球扩展可用 DynamoDB Global Tables。用户注册欢迎邮件：DynamoDB Streams → Lambda → Amazon SES。图片缩略图生成：S3 上传事件 → Lambda → S3（可通过 CloudFront S3 Transfer Acceleration 上传）。S3 还可触发 SQS 和 SNS。

## 中文长总结

### 需求分析
- 全球可扩展、以读为主的博客网站
- 大部分内容为静态文件，少量动态 REST API
- 实现缓存优化成本和延迟
- 新用户注册发送欢迎邮件（无服务器）
- 上传图片自动生成缩略图（无服务器）

### 架构组件

#### 1. 静态内容全球分发
```
Client → CloudFront (Edge Locations) → S3 Bucket
           ↕ OAC + Bucket Policy（安全限制仅 CloudFront 可访问 S3）
```

#### 2. 动态 REST API
```
Client → API Gateway (HTTPS) → Lambda → DynamoDB (+ DAX)
```
- 全球扩展：**DynamoDB Global Tables**（多区域低延迟）
- 替代方案：Aurora Global Database（但非 Serverless）

#### 3. 用户欢迎邮件流
```
用户注册 → DynamoDB 数据变更 → DynamoDB Stream
→ Lambda (IAM Role) → Amazon SES → 发送欢迎邮件
```
- **Amazon SES** (Simple Email Service) — 无服务器邮件发送服务

#### 4. 图片缩略图生成
```
Client → CloudFront (S3 Transfer Acceleration) 或直接 → S3
→ S3 Event → Lambda → 生成缩略图 → S3 (另一个 Bucket)
```
- S3 事件可触发：**Lambda、SQS、SNS**

### 关键设计决策

| 需求 | 方案 |
|------|------|
| 静态内容全球分发 | CloudFront + S3 + OAC |
| 公共 REST API | API Gateway + Lambda + DynamoDB（无需 Cognito） |
| 全球数据访问 | DynamoDB Global Tables |
| 新用户通知 | DynamoDB Streams → Lambda → SES |
| 图片处理 | S3 事件 → Lambda |

## 考试要点

- **静态网站**：CloudFront + S3 + OAC（安全限制直接 S3 访问）
- **公共 REST API 不需要 Cognito**（与私有 API 区分）
- **DynamoDB Global Tables** 实现全球低延迟数据访问
- **DynamoDB Streams → Lambda → SES** — 事件驱动的欢迎邮件流
- **S3 事件触发**：可触发 Lambda、SQS、SNS
- **S3 Transfer Acceleration** 通过 CloudFront 加速上传
- Amazon SES = **Simple Email Service**，无服务器邮件发送

## English Short Summary

Serverless blog architecture: static content via CloudFront + S3 (secured with OAC + bucket policy). Dynamic REST API: API Gateway → Lambda → DynamoDB with DAX caching, globally with DynamoDB Global Tables. User welcome email: DynamoDB Streams → Lambda → Amazon SES. Thumbnail generation: S3 upload event → Lambda → S3 (with optional CloudFront S3 Transfer Acceleration for uploads). S3 can trigger Lambda, SQS, or SNS. No Cognito needed for public REST API. Entirely serverless, globally scalable.
