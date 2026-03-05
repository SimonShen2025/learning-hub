---
title: "Amazon EKS - Overview"
lectureId: 206
section: "s18"
sectionTitle: "Containers on AWS: ECS, Fargate, ECR & EKS"
date: "2026-03-05"
tags: [eks, kubernetes, managed-node-groups, fargate, storage, aws]
---

## 中文短总结

Amazon EKS（Elastic Kubernetes Service）是 AWS 上的托管 Kubernetes 服务，支持 EC2 和 Fargate 两种启动模式。与 ECS 的区别在于 Kubernetes 是开源的、云平台无关的（Cloud-agnostic）。EKS 有三种节点类型：Managed Node Groups（AWS 管理）、Self-managed Nodes（自行管理）和 Fargate（无节点）。支持通过 CSI 驱动挂载 EBS、EFS、FSx 存储，其中只有 EFS 支持 Fargate。

## 中文长总结

### ECS vs EKS

| | ECS | EKS |
|---|-----|-----|
| 所有权 | AWS 专有 | 开源 (Kubernetes) |
| 可移植性 | 仅 AWS | 跨云（Azure、GCP 等） |
| 术语 | Task | **Pod** |
| 启动类型 | EC2 / Fargate | EC2 / Fargate |

### 使用 EKS 的场景
- 公司已在本地或其他云使用 Kubernetes
- 需要使用 Kubernetes API
- 需要跨云迁移容器

### 三种节点类型

| 类型 | 管理方式 | 实例类型 |
|------|---------|---------|
| **Managed Node Groups** | AWS 管理（ASG） | On-Demand / Spot |
| **Self-managed Nodes** | 自行管理（自建 ASG + 注册） | On-Demand / Spot |
| **Fargate** | 无节点（Serverless） | - |

### EKS 架构

```
VPC (3 AZ)
├── Public Subnets
│   └── [公共/私有 Load Balancer]
└── Private Subnets
    └── EKS Worker Nodes (EC2)
        └── EKS Pods (容器)
        └── Auto Scaling Group
```

### 数据卷（Storage）

通过 **Container Storage Interface (CSI)** 驱动挂载存储：

| 存储类型 | 支持 Fargate |
|---------|-------------|
| Amazon **EBS** | ❌ |
| Amazon **EFS** | ✅ 唯一支持 |
| Amazon FSx for Lustre | ❌ |
| Amazon FSx for NetApp ONTAP | ❌ |

## 考试要点

- **EKS** = 托管 Kubernetes = 开源 = 云平台无关
- EKS 的容器单位叫 **Pod**（不是 Task）
- 推荐 **Managed Node Groups** 或 **Fargate**
- 跨云迁移容器 → 选择 **EKS**（不是 ECS）
- EKS 数据卷通过 **CSI 驱动**挂载
- **EFS** 是唯一支持 Fargate 的存储类型
- 看到 "Kubernetes" → 想到 **EKS**

## English Short Summary

**Amazon EKS** (Elastic Kubernetes Service) is AWS's managed Kubernetes service, supporting both **EC2** and **Fargate** launch modes. Unlike ECS (AWS-proprietary), Kubernetes is **open-source** and **cloud-agnostic** — ideal for cross-cloud migration. EKS containers are called **Pods** (not Tasks). Three node types: **Managed Node Groups** (AWS manages ASG, supports On-Demand/Spot), **Self-managed Nodes** (you manage), and **Fargate** (serverless, no nodes). Data volumes use **CSI drivers** supporting EBS, EFS, FSx for Lustre, and FSx for NetApp ONTAP — but only **EFS works with Fargate**.
