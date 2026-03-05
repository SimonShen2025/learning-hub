---
title: "MicroServices Architecture"
lectureId: 231
section: "20"
sectionTitle: "Serverless Solution Architecture Discussions"
date: "2026-03-05"
tags: ["microservices", "architecture", "api-gateway", "ecs", "lambda", "rest-api"]
---

## 中文短总结

微服务架构讨论：多个服务通过 REST API 交互，每个服务可自由选择架构（ELB+ECS+DynamoDB、API Gateway+Lambda+ElastiCache、ELB+EC2 ASG+RDS 等）。通信模式分**同步**（API Gateway/ELB 的 HTTPS 调用）和**异步**（SQS/Kinesis/SNS/Lambda Triggers/S3）。每个服务通过 Route 53 DNS 解析。Serverless 模式解决部分微服务挑战：自动扩展、按使用付费、API 克隆、Swagger SDK 生成。

## 中文长总结

### 微服务架构原则
- 多个服务通过 **REST API** 相互交互
- 每个服务**独立设计**、独立扩展、独立代码库
- 目的：精简开发生命周期、独立扩展

### 架构示例

| 微服务 | 架构选择 |
|--------|----------|
| Service 1 | ELB → ECS (Docker) → DynamoDB |
| Service 2 | API Gateway → Lambda → ElastiCache |
| Service 3 | ELB → EC2 ASG → RDS |

- 每个服务有自己的 **DNS 名称**（如 service1.example.com），通过 **Route 53** 解析

### 通信模式

| 模式 | 方式 | 特点 |
|------|------|------|
| **同步** | API Gateway / ELB (HTTPS) | 显式调用，等待响应 |
| **异步** | SQS / Kinesis / SNS / Lambda Triggers / S3 | 发送消息不等待响应 |

### 微服务挑战

- 创建新微服务的开销
- 服务器密度/利用率优化
- 同时运行多版本的复杂性
- 客户端集成代码激增

### Serverless 解决方案

- **API Gateway + Lambda**：自动扩展、按用量付费，无需关注服务器利用率
- API Gateway 支持**克隆 API** 和**复制环境**
- 通过 **Swagger 集成**自动生成客户端 SDK

## 考试要点

- 微服务每个服务**可自由选择架构**（ECS、Lambda、EC2 等）
- 同步通信：API Gateway / ELB；异步通信：SQS / SNS / Kinesis
- Serverless 模式（API Gateway + Lambda）解决服务器利用率和扩展问题
- 每个微服务通过 **Route 53 DNS** 暴露
- 微服务间可互相调用（Lambda 调 ELB、EC2 调 API Gateway 等）

## English Short Summary

Microservices architecture: multiple services interact via REST APIs, each freely choosing its own architecture (ELB+ECS+DynamoDB, API Gateway+Lambda+ElastiCache, ELB+EC2 ASG+RDS, etc.). Communication patterns: synchronous (HTTPS via API Gateway/ELB) or asynchronous (SQS/Kinesis/SNS/Lambda Triggers/S3). Each service exposed via Route 53 DNS. Serverless patterns (API Gateway + Lambda) solve common microservice challenges: auto-scaling, pay-per-use, API cloning, and Swagger SDK generation.
