---
title: "Amazon ECR"
lectureId: 205
section: "s18"
sectionTitle: "Containers on AWS: ECS, Fargate, ECR & EKS"
date: "2026-03-05"
tags: [ecr, docker, container-registry, iam, aws]
---

## 中文短总结

Amazon ECR（Elastic Container Registry）是 AWS 上的 Docker 镜像仓库，支持私有仓库和公共仓库（ECR Public Gallery）。镜像底层存储在 S3 中。ECR 与 ECS 完全集成，所有访问通过 IAM 控制（权限错误 → 检查 IAM 策略）。额外功能包括镜像漏洞扫描、版本控制、标签管理和生命周期管理。

## 中文长总结

### ECR 核心概念

| 特性 | 说明 |
|------|------|
| 全称 | Elastic Container Registry |
| 用途 | 存储和管理 **Docker 镜像** |
| 仓库类型 | **私有**（Private）+ **公共**（ECR Public Gallery） |
| 底层存储 | Amazon **S3** |
| 集成 | 与 **Amazon ECS** 完全集成 |
| 访问控制 | **IAM** 策略（权限错误 → 检查 IAM） |

### 工作流程

```
Docker Image → push → Amazon ECR (Private/Public)
                        ↓ pull (需要 IAM 权限)
                    ECS Cluster (EC2 Instance / Fargate)
                        → EC2 实例通过 IAM Role 拉取镜像
                        → 启动 Docker 容器
```

### 额外功能
- **镜像漏洞扫描**（Image Vulnerability Scanning）
- **版本控制**（Versioning）
- **镜像标签**（Image Tags）
- **生命周期管理**（Image Lifecycle）

## 考试要点

- **存储 Docker 镜像** → 想到 **Amazon ECR**
- ECR = 私有仓库 + 公共仓库（ECR Public Gallery）
- ECR 镜像底层存储在 **S3**
- 所有 ECR 访问通过 **IAM** 控制
- 权限错误 → 检查 IAM 策略

## English Short Summary

**Amazon ECR** (Elastic Container Registry) stores and manages Docker images on AWS with both **private** and **public** (ECR Public Gallery) repository options. Images are stored on **Amazon S3** behind the scenes. ECR is fully integrated with **Amazon ECS** — EC2 instances use IAM roles to pull images. All access is controlled by **IAM** (permission errors → check IAM policies). Additional features include image vulnerability scanning, versioning, image tags, and image lifecycle management. Exam trigger: need to store Docker images → **ECR**.
