---
title: "Beanstalk Overview"
lectureId: 126
section: 11
sectionTitle: "Classic Solutions Architecture Discussions"
date: "2026-03-05"
tags: ["Elastic Beanstalk", "PaaS", "Deployment", "Web Server", "Worker"]
---

## 中文短总结

本讲介绍 Elastic Beanstalk——以开发者为中心的 AWS 应用部署服务。它复用 EC2、ASG、ELB、RDS 等组件，自动处理容量配置、负载均衡、扩展和健康监控，开发者只需关注**代码本身**。核心概念：Application（应用）→ Version（版本）→ Environment（环境，dev/test/prod）。两种架构 Tier：**Web Server Environment**（ELB + ASG 对外服务）和 **Worker Environment**（从 SQS 队列拉取消息处理）。两种部署模式：Single Instance（开发用）和 High Availability（生产用，含 LB + Multi-AZ）。Beanstalk **本身免费**，只需为底层资源付费。

## 中文长总结

### Elastic Beanstalk 核心概念
- **开发者视角**的应用部署服务
- 复用 EC2、ASG、ELB、RDS 等服务
- **自动管理**：容量配置、负载均衡、扩展、健康监控、实例配置
- 开发者只负责**代码**
- **服务本身免费**，只为底层资源付费
- 仍有完全配置控制权

### 组件层级
- **Application**：Beanstalk 组件的集合
- **Version**：应用代码的版本迭代（v1、v2、v3...）
- **Environment**：运行特定版本的资源集合
  - 同一时间一个环境只能运行**一个版本**
  - 可创建多个环境：dev、test、prod

### 两种 Environment Tier

| Tier | 架构 | 用途 |
|------|------|------|
| **Web Server** | ELB → ASG → EC2 | 处理 HTTP 请求 |
| **Worker** | SQS Queue → ASG → EC2 | 异步消息处理 |

- Web 和 Worker 可组合：Web 推送消息到 Worker 的 SQS 队列
- Worker 根据 **SQS 消息数量**自动扩展

### 两种部署模式
| 模式 | 适用 | 架构 |
|------|------|------|
| **Single Instance** | 开发 | 1 EC2 + Elastic IP（+ 可选 RDS） |
| **High Availability** | 生产 | ELB + ASG Multi-AZ + RDS Multi-AZ |

### 支持的语言/平台
Go、Java SE、Java Tomcat、.NET Core (Linux)、.NET (Windows)、Node.js、PHP、Python、Ruby、Docker（Single/Multi/Pre-configured）、Packer Builder

## 考试要点

- Beanstalk 本身**免费**，只为底层资源付费
- Web Server Tier vs Worker Tier
- Worker Tier 根据 **SQS 消息数量**自动扩展
- Single Instance = 开发，High Availability = 生产
- 开发者只需关注代码，Beanstalk 管理基础设施

## English Short Summary

Elastic Beanstalk is a developer-centric service for deploying applications on AWS. It reuses EC2, ASG, ELB, RDS etc., automatically handling capacity provisioning, load balancing, scaling, and health monitoring — developers focus only on code. Key concepts: Application → Version → Environment (dev/test/prod). Two tiers: Web Server (ELB + ASG for HTTP) and Worker (SQS queue-driven). Two deployment modes: Single Instance (dev) and High Availability (prod, with LB + Multi-AZ). Beanstalk itself is free; you pay only for underlying resources. Supports many languages including Node.js, Python, Java, .NET, Docker, etc.
