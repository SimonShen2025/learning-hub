---
title: "Creating ECS Service - Hands On"
lectureId: 201
section: "s18"
sectionTitle: "Containers on AWS: ECS, Fargate, ECR & EKS"
date: "2026-03-05"
tags: [ecs, service, task-definition, fargate, alb, hands-on, aws]
---

## 中文短总结

本实操演示了 ECS 服务的完整生命周期：（1）创建 Task Definition — 指定 Docker 镜像（nginxdemos/hello）、选择 Fargate、配置 vCPU/内存、设置 Task Role 和端口映射；（2）创建 Service — 选择 Fargate 容量策略、配置安全组（允许 HTTP 80 端口）、创建 ALB 和 Target Group；（3）验证服务运行并通过 ALB DNS 访问 nginx；（4）扩展 — 将 desired tasks 从 1 增加到 3，ALB 自动负载均衡；（5）缩减 — 将 tasks 设为 0 节省成本。

## English Short Summary

This hands-on demonstrates the full ECS Service lifecycle: (1) **Create Task Definition** — specify Docker image (nginxdemos/hello from Docker Hub), choose Fargate, configure 0.5 vCPU/1GB memory, set port mappings (80:80); (2) **Create Service** — select Fargate capacity provider, configure security group (allow HTTP:80), create ALB (DemoALBForECS) and target group; (3) **Verify** — access nginx via ALB DNS name, view task details and logs; (4) **Scale up** — increase desired tasks to 3, ALB distributes traffic across containers (IP changes on refresh); (5) **Scale down** — set desired tasks to 0 to save costs. Also set ASG desired capacity to 0 to stop EC2 instances.
