---
title: "Amazon ECS - Auto Scaling"
lectureId: 202
section: "s18"
sectionTitle: "Containers on AWS: ECS, Fargate, ECR & EKS"
date: "2026-03-05"
tags: [ecs, auto-scaling, capacity-provider, fargate, cloudwatch, aws]
---

## 中文短总结

ECS Service Auto Scaling 使用 AWS Application Auto Scaling 基于三个指标自动调整 Task 数量：CPU 利用率、内存利用率、ALB 每目标请求数。支持 Target Tracking、Step Scaling 和 Scheduled Scaling。Task 级别扩缩 ≠ EC2 实例扩缩。EC2 Launch Type 推荐使用 ECS Cluster Capacity Provider（自动扩缩 ASG）而非直接管理 ASG。Fargate 使 Auto Scaling 设置最简单。

## 中文长总结

### ECS Service Auto Scaling

通过 **AWS Application Auto Scaling** 自动增减 ECS Task 数量。

#### 可用指标（3 个）
1. **CPU Utilization** — ECS Service 的 CPU 使用率
2. **Memory Utilization** — ECS Service 的内存使用率
3. **ALB Request Count Per Target** — ALB 每目标的请求数

#### 扩缩策略类型
- **Target Tracking**：追踪目标值（如 CPU 保持在 70%）
- **Step Scaling**：阶梯式扩缩
- **Scheduled Scaling**：预定时间扩缩（适合可预测的流量变化）

### Task 扩缩 ≠ EC2 实例扩缩

ECS Service 层面的 Task 数量增加不等于 EC2 实例的增加（EC2 Launch Type 才涉及）。

#### EC2 Launch Type 的实例扩缩方式

| 方式 | 说明 | 推荐度 |
|------|------|--------|
| **ASG Scaling** | 基于 CPU 利用率扩缩 ASG | 一般 |
| **ECS Cluster Capacity Provider** | 当缺少容量时自动扩缩 ASG | ✅ 推荐 |

**Capacity Provider** 更智能：当新 Task 缺少 CPU/RAM 时，自动创建 EC2 实例。

### 架构流程

```
ECS Service (多个 Tasks)
    → CloudWatch Metric (CPU Usage)
        → CloudWatch Alarm
            → Application Auto Scaling (增加 Task)
                → [可选] Capacity Provider (增加 EC2 实例)
```

## 考试要点

- ECS Auto Scaling 指标：**CPU**、**Memory**、**ALB Request Count Per Target**
- 扩缩策略：Target Tracking / Step / Scheduled
- Task 扩缩 ≠ EC2 实例扩缩
- EC2 Launch Type → 推荐 **ECS Cluster Capacity Provider**
- **Fargate** 让 Auto Scaling 最简单（无需管理 EC2 实例）
- 考试偏爱 Fargate

## English Short Summary

**ECS Service Auto Scaling** uses AWS Application Auto Scaling with three metrics: **CPU Utilization**, **Memory Utilization**, and **ALB Request Count Per Target**. Supports Target Tracking, Step Scaling, and Scheduled Scaling strategies. Important: scaling ECS tasks ≠ scaling EC2 instances. For EC2 Launch Type, prefer **ECS Cluster Capacity Provider** (automatically scales ASG when tasks need more CPU/RAM) over manual ASG scaling. **Fargate** makes auto scaling simplest since there are no EC2 instances to manage — the exam favors Fargate.
