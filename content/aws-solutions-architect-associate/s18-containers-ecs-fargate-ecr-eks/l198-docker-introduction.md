---
title: "Docker Introduction"
lectureId: 198
section: "s18"
sectionTitle: "Containers on AWS: ECS, Fargate, ECR & EKS"
date: "2026-03-05"
tags: [docker, containers, ecs, eks, fargate, ecr, aws]
---

## 中文短总结

Docker 是一种容器化技术，将应用打包到标准化容器中，可在任何操作系统上一致运行。Docker 镜像存储在 Docker Hub（公共）或 Amazon ECR（私有/公共）。AWS 提供四种容器管理服务：Amazon ECS（AWS 原生容器平台）、Amazon EKS（托管 Kubernetes）、AWS Fargate（Serverless 容器运行）、Amazon ECR（镜像仓库）。

## 中文长总结

### Docker 基础

Docker 是软件开发平台，通过**容器化**（Containerization）部署应用：
- 应用被打包到**标准化容器**中
- 容器可在**任何操作系统**上运行，行为一致、无兼容性问题
- 支持任何语言、任何 OS、任何技术

### 使用场景
- **微服务架构**（Microservice Architecture）— 考试关键词
- 从本地迁移到云端（Lift and Shift）
- 需要运行容器的任何场景

### Docker vs 虚拟机

| | 虚拟机 (VM) | Docker 容器 |
|---|-----------|-------------|
| 架构 | Infrastructure → Host OS → Hypervisor → Guest OS → App | Infrastructure → Host OS → Docker Daemon → Containers |
| 隔离性 | 完全隔离 | 共享主机资源 |
| 重量级 | 重（每个 VM 有独立 OS） | 轻量级 |
| 密度 | 较低 | 在一台服务器上可运行更多容器 |

### Docker 镜像存储

- **Docker Hub**：公共仓库（Ubuntu、MySQL 等基础镜像）
- **Amazon ECR**：私有仓库 + 公共画廊（Amazon ECR Public Gallery）

### Docker 工作流程

```
Dockerfile → docker build → Docker Image → push → Docker Repository
                                          → pull → docker run → Docker Container
```

### AWS 容器管理服务

| 服务 | 说明 |
|------|------|
| **Amazon ECS** | AWS 原生容器管理平台 |
| **Amazon EKS** | 托管 Kubernetes 服务（开源） |
| **AWS Fargate** | Serverless 容器运行（同时支持 ECS 和 EKS） |
| **Amazon ECR** | Docker 镜像仓库 |

## 考试要点

- **Docker** = 容器化技术，标准化部署
- 看到 **微服务架构** → 想到 Docker/容器
- Docker 镜像存储：**Docker Hub**（公共）或 **Amazon ECR**（私有/公共）
- AWS 容器服务：**ECS**（AWS 原生）、**EKS**（Kubernetes）、**Fargate**（Serverless）、**ECR**（镜像仓库）
- Fargate 同时支持 ECS 和 EKS

## English Short Summary

**Docker** is a container technology that packages applications into standardized containers that run consistently on any OS. Docker images are stored in **Docker Hub** (public) or **Amazon ECR** (private/public). AWS provides four container management services: **Amazon ECS** (AWS-native container platform), **Amazon EKS** (managed Kubernetes), **AWS Fargate** (serverless container compute for both ECS and EKS), and **Amazon ECR** (container image registry). Key exam keyword: **microservice architecture** → Docker/containers.
