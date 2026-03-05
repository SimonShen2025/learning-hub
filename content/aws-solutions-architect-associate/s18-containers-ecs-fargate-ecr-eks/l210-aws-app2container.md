---
title: "AWS App2Container"
lectureId: 210
section: "s18"
sectionTitle: "Containers on AWS: ECS, Fargate, ECR & EKS"
date: "2026-03-05"
tags: [app2container, a2c, migration, lift-and-shift, containers, aws]
---

## 中文短总结

AWS App2Container (A2C) 是一个 CLI 工具，用于将本地运行的 Java 和 .NET Web 应用迁移并容器化到 AWS（Lift-and-shift 迁移），无需修改任何代码。流程：发现和分析应用 → 提取并容器化 → 生成部署产物（CloudFormation 模板、ECS Task/EKS Pod 定义、CI/CD 管道） → Docker 镜像推送到 ECR → 部署到 ECS、EKS 或 App Runner。

## 中文长总结

### A2C 核心概念

AWS App2Container 是**命令行工具**，将现有的 Java/.NET Web 应用**自动容器化**并迁移到 AWS。

### 特点
- **不修改代码**（No code changes）
- 支持 **Java** 和 **.NET** Web 应用
- 从本地（Bare Metal / VM）迁移到 AWS
- **Lift-and-shift** 迁移方式

### 工作流程

```
1. Discover & Analyze → 发现可迁移的应用
2. Extract & Containerize → 提取代码并创建 Docker 容器
3. Generate Deployment Artifacts → 生成：
   - CloudFormation 模板（计算、网络等基础设施）
   - ECS Task Definition / EKS Pod Definition
   - CI/CD 管道（可选）
4. Deploy to AWS → Docker 镜像推送到 ECR
   → 部署到 ECS / EKS / App Runner
```

## 考试要点

- **AWS App2Container** = 将 Java/.NET Web 应用**容器化**迁移到 AWS
- **不修改代码** + **Lift-and-shift**
- 生成 **CloudFormation 模板** + Docker 镜像推送到 **ECR**
- 部署目标：**ECS / EKS / App Runner**
- 考试关键词：迁移 Java/.NET 应用到容器 → A2C

## English Short Summary

**AWS App2Container (A2C)** is a CLI tool for **lift-and-shift migration** of **Java** and **.NET** web applications from on-premises (bare metal/VMs) to AWS containers — **without any code changes**. Workflow: discover and analyze apps → extract and containerize → generate deployment artifacts (CloudFormation templates, ECS Task/EKS Pod definitions, optional CI/CD pipelines) → push Docker images to **Amazon ECR** → deploy to **ECS, EKS, or App Runner**. Exam keyword: migrate Java/.NET web apps to containers → **App2Container**.
