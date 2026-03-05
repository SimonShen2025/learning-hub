---
title: "Serverless Introduction"
lectureId: 212
section: "19"
sectionTitle: "Serverless Overviews from a Solution Architect Perspective"
date: "2026-03-05"
tags: ["serverless", "lambda", "dynamodb", "api-gateway", "cognito", "s3", "architecture"]
---

## 中文短总结

介绍无服务器 (Serverless) 概念 — 开发者无需管理服务器，只需部署代码。Serverless 不意味着没有服务器，而是你不需要看到或配置它们。AWS 无服务器服务包括 Lambda、DynamoDB、Cognito、API Gateway、S3、SNS、SQS、Kinesis Data Firehose、Aurora Serverless、Step Functions 和 Fargate。

## 中文长总结

Serverless 最初指 **Function as a Service (FaaS)**，由 AWS Lambda 开创。现在概念已扩展，涵盖所有**无需配置服务器的托管服务**（数据库、消息、存储等）。

**典型无服务器参考架构**：
1. 用户从 **S3/CloudFront** 获取静态内容
2. 通过 **Cognito** 进行身份认证
3. 调用 **API Gateway** 的 REST API
4. API Gateway 触发 **Lambda 函数**
5. Lambda 从 **DynamoDB** 存取数据

**AWS 无服务器服务清单**：
- **Lambda** — 函数计算
- **DynamoDB** — NoSQL 数据库
- **Cognito** — 用户身份管理
- **API Gateway** — REST API 管理
- **Amazon S3** — 对象存储
- **SNS / SQS** — 消息服务（自动扩展，无需管理服务器）
- **Kinesis Data Firehose** — 按吞吐量付费，无需配置服务器
- **Aurora Serverless** — 按需扩展的数据库
- **Step Functions** — 工作流编排
- **Fargate** — 无需管理基础设施的容器运行环境

考试会**重点考查无服务器知识**。

## 考试要点

- **Serverless ≠ 没有服务器**，而是不需要管理和配置服务器
- AWS 无服务器服务：Lambda、DynamoDB、Cognito、API Gateway、S3、SNS、SQS、Kinesis Data Firehose、Aurora Serverless、Step Functions、Fargate
- 典型无服务器参考架构：**S3/CloudFront → Cognito → API Gateway → Lambda → DynamoDB**
- 之前学过的 SQS、SNS 也属于 Serverless（自动扩展、按用量付费、无需配置服务器）

## English Short Summary

Serverless means developers don't manage servers — they just deploy code. Originally FaaS (pioneered by AWS Lambda), now includes any managed service where you don't provision servers. Key AWS serverless services: Lambda, DynamoDB, Cognito, API Gateway, S3, SNS, SQS, Kinesis Data Firehose, Aurora Serverless, Step Functions, and Fargate. Reference architecture: S3/CloudFront (static content) → Cognito (auth) → API Gateway (REST API) → Lambda (compute) → DynamoDB (data store).
