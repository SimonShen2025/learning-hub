---
title: "Creating ECS Cluster - Hands On"
lectureId: 200
section: "s18"
sectionTitle: "Containers on AWS: ECS, Fargate, ECR & EKS"
date: "2026-03-05"
tags: [ecs, cluster, hands-on, fargate, ec2, capacity-provider, aws]
---

## 中文短总结

本实操演示了创建 ECS Cluster 的流程：选择基础设施模式（纯 Fargate / Fargate + Managed Instances / Fargate + Self-managed Instances），配置 EC2 实例角色和基础设施角色。Cluster 创建后包含三种 Capacity Provider：FARGATE、FARGATE_SPOT 和 ASG Provider。通过调整 ASG 的期望容量可以添加 EC2 实例作为容器实例，查看其可用 CPU/内存资源。

## English Short Summary

This hands-on creates an ECS Cluster with three infrastructure options: Fargate only (serverless), Fargate + Managed Instances (AWS manages EC2), or Fargate + Self-managed instances (you manage ASG with custom instance types like t3.micro). The created cluster has three capacity providers: **FARGATE**, **FARGATE_SPOT**, and **ASG Provider**. Adjusting the ASG desired capacity to 1 registers an EC2 instance as a container instance showing available CPU (1024) and memory (982). This enables launching ECS tasks on either Fargate or EC2 container instances.
