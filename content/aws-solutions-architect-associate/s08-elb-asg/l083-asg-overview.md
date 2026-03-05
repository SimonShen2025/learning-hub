---
title: "Auto Scaling Groups (ASG) Overview"
lectureId: 83
section: 8
sectionTitle: "High Availability and Scalability: ELB & ASG"
date: "2026-03-05"
tags: ["asg", "auto-scaling", "launch-template", "cloudwatch", "scaling-policy"]
---

## 中文短总结

Auto Scaling Group (ASG) 根据负载自动 Scale Out（添加实例）或 Scale In（移除实例），维护最小/最大/期望实例数量。ASG 与 ELB 配合自动注册新实例到 Target Group，并根据 Health Check 替换不健康实例。ASG 通过 Launch Template 定义实例配置（AMI、实例类型、安全组、User Data 等），结合 CloudWatch Alarms 实现基于指标自动扩缩容。ASG 本身免费，仅为创建的资源付费。

## 中文长总结

**ASG 核心功能：**
- **Scale Out**：增加实例以应对负载增长
- **Scale In**：减少实例以应对负载下降
- 维护三个参数：最小容量、期望容量、最大容量

**与 ELB 集成：**
- 新实例自动注册到 ELB 的 Target Group
- ELB 健康检查可传递给 ASG → 自动替换不健康实例
- Scale Out 时 ELB 自动向新实例分发流量

**Launch Template（启动模板）：**
- 定义实例配置：AMI、实例类型
- EC2 User Data、EBS 卷
- 安全组、SSH Key Pair
- IAM Roles、网络/子网信息
- 负载均衡器信息
- （替代已弃用的 Launch Configuration）

**CloudWatch 集成：**
- 基于 CloudWatch Alarm 触发扩缩容
- 指标示例：平均 CPU 利用率、自定义指标
- 指标超过阈值 → 触发 Alarm → Scale Out/In

**费用：** ASG 本身免费，仅为底层资源（EC2 实例等）付费

## 考试要点

- ASG 维护 Min/Max/Desired 实例数
- ASG 与 ELB 集成：自动注册 Target Group，自动替换不健康实例
- Launch Template 定义实例启动配置
- 基于 CloudWatch Alarm 实现自动扩缩容
- ASG 本身免费

## English Short Summary

ASG automatically scales out (add instances) or in (remove instances) to maintain desired capacity within min/max bounds. Integrates with ELB to auto-register new instances to target groups and replace unhealthy ones. Launch Templates define instance configurations (AMI, type, User Data, security groups, etc.). CloudWatch Alarms trigger scaling based on metrics like CPU utilization. ASG itself is free; you only pay for created resources.
