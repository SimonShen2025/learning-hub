---
title: "Amazon ECS"
lectureId: 199
section: "s18"
sectionTitle: "Containers on AWS: ECS, Fargate, ECR & EKS"
date: "2026-03-05"
tags: [ecs, ec2-launch-type, fargate, task-role, alb, efs, aws]
---

## 中文短总结

Amazon ECS（Elastic Container Service）有两种启动类型：EC2 Launch Type（需自行管理 EC2 实例，每个实例运行 ECS Agent）和 Fargate Launch Type（Serverless，无需管理实例，按 CPU/RAM 运行 Task）。ECS Task 通过 Task Role 获取 AWS 服务访问权限，通过 ALB 暴露为 HTTP(S) 端点。数据持久化推荐使用 Amazon EFS（跨 AZ 共享存储），Fargate + EFS 是终极 Serverless 组合。

## 中文长总结

### 两种启动类型

#### EC2 Launch Type
- ECS Cluster 由**多个 EC2 实例**组成
- 每个实例必须运行 **ECS Agent**（自动注册到集群）
- **需要自行管理**基础设施（Provision & Maintain）
- AWS 负责在 EC2 实例上启动/停止容器

#### Fargate Launch Type（考试偏爱）
- **Serverless**：无需管理 EC2 实例
- 创建 **Task Definition**（定义 CPU/RAM 需求）
- AWS 自动运行 ECS Task
- 扩展只需增加 Task 数量

### IAM 角色

| 角色类型 | 适用范围 | 用途 |
|---------|---------|------|
| **EC2 Instance Profile** | 仅 EC2 Launch Type | ECS Agent 使用：调用 ECS API、发送日志到 CloudWatch、从 ECR 拉取镜像、访问 Secrets Manager/SSM |
| **ECS Task Role** | EC2 和 Fargate 均适用 | 每个 Task 独立的 IAM 角色，访问特定 AWS 服务（如 S3、DynamoDB） |

**重要**：Task Role 在 Task Definition 中定义，不同 Task 可以有不同角色。

### 负载均衡集成

| 负载均衡器 | 推荐度 | 说明 |
|-----------|--------|------|
| **ALB** | ✅ 推荐 | 支持大多数场景，支持 Fargate |
| **NLB** | 适合特定场景 | 高吞吐量/高性能，或 AWS Private Link |
| **CLB** | ❌ 不推荐 | 无高级功能，不支持 Fargate |

### 数据持久化（EFS）

- 使用 **Amazon EFS** 挂载到 ECS Task
- 兼容 EC2 和 Fargate 两种启动类型
- 跨 AZ 共享数据
- **终极组合**：Fargate（Serverless 计算）+ EFS（Serverless 存储）

## 考试要点

- **EC2 Launch Type** = 自行管理 EC2 实例 + 运行 ECS Agent
- **Fargate Launch Type** = Serverless，无需管理实例（考试偏爱）
- **EC2 Instance Profile** ≠ **ECS Task Role**（必须区分）
- Task Role 在 Task Definition 中定义
- ALB 是 ECS 的推荐负载均衡器
- **EFS + Fargate** = 终极 Serverless 持久化方案
- ECS Task = Docker 容器在 ECS 上运行的实体

## English Short Summary

**Amazon ECS** has two launch types: **EC2 Launch Type** (you manage EC2 instances running the ECS Agent) and **Fargate Launch Type** (serverless — no instance management, specify CPU/RAM per task, scale by increasing task count). Key IAM distinction: **EC2 Instance Profile** (used by ECS Agent for API calls, logs, ECR pulls) vs. **ECS Task Role** (per-task IAM role for accessing AWS services like S3/DynamoDB, defined in task definition). Use **ALB** for HTTP(S) exposure (supports Fargate). For persistent storage, mount **Amazon EFS** (cross-AZ shared storage, compatible with both launch types). The ultimate serverless combo is **Fargate + EFS**.
