---
title: "AWS App Runner"
lectureId: 208
section: "s18"
sectionTitle: "Containers on AWS: ECS, Fargate, ECR & EKS"
date: "2026-03-05"
tags: [app-runner, serverless, containers, deployment, aws]
---

## 中文短总结

AWS App Runner 是全托管的 Web 应用和 API 部署服务，只需提供源代码或 Docker 镜像，配置基本设置（vCPU、内存、Auto Scaling、健康检查），即可自动构建、部署并获得可访问的 URL。无需了解任何底层基础设施。内置自动扩缩、高可用、负载均衡和加密，支持 VPC 连接（数据库、缓存、消息队列）。适用于快速部署 Web App、API 和微服务。

## 中文长总结

### App Runner 核心概念

App Runner 是最简化的容器部署方式：

```
源代码 / Docker 镜像
    → 配置基本设置（vCPU、内存、Auto Scaling、Health Check）
        → App Runner 自动构建和部署
            → 获得可访问的 URL
```

### 核心特性

| 特性 | 说明 |
|------|------|
| 部署源 | **源代码** 或 **Docker 容器镜像** |
| 管理 | 完全托管，无需了解基础设施 |
| 自动扩缩 | ✅ 内置 |
| 高可用 | ✅ 内置 |
| 负载均衡 | ✅ 内置 |
| 加密 | ✅ 内置 |
| VPC 连接 | ✅ 可连接数据库、缓存、消息队列 |

### 适用场景
- 快速部署 **Web 应用**
- 快速部署 **API**
- 快速部署 **微服务**
- 生产环境快速部署（最佳实践自动应用）

### 与其他服务对比

| 服务 | 复杂度 | 控制力 |
|------|--------|--------|
| **App Runner** | 最低 | 最低 |
| **ECS Fargate** | 中等 | 中等 |
| **ECS EC2** | 较高 | 较高 |
| **EKS** | 最高 | 最高 |

## 考试要点

- **App Runner** = 最简化的容器/代码部署方式
- 无需了解基础设施 → 自动构建、部署、扩缩
- 支持**源代码**和 **Docker 镜像**两种部署源
- 内置 Auto Scaling、负载均衡、高可用、加密
- 可连接 **VPC** 中的资源（数据库、缓存等）
- 适用于快速部署 Web App / API / 微服务

## English Short Summary

**AWS App Runner** is a fully managed service for deploying web applications and APIs without any infrastructure knowledge. Provide **source code** or a **Docker container image**, configure basic settings (vCPU, memory, auto-scaling, health checks), and App Runner automatically builds, deploys, and provides an accessible URL. Includes built-in auto-scaling, high availability, load balancing, encryption, and VPC connectivity (databases, caches, message queues). Ideal for rapidly deploying web apps, APIs, and microservices in production with best practices automatically applied.
