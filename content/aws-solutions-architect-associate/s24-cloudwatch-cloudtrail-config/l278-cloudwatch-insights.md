---
title: "CloudWatch Insights and Operational Visibility"
lectureId: 278
section: "s24"
sectionTitle: "AWS Monitoring & Audit: CloudWatch, CloudTrail & Config"
date: "2026-03-05"
tags: [cloudwatch, container-insights, lambda-insights, contributor-insights, application-insights]
---

## 中文短总结

CloudWatch 四种 Insights 服务：①**Container Insights**——收集 ECS/EKS/Kubernetes/Fargate 容器的指标和日志（Kubernetes 需容器化 CW Agent）②**Lambda Insights**——监控 Lambda 函数的 CPU/内存/磁盘/网络/冷启动等（以 Lambda Layer 运行）③**Contributor Insights**——分析日志找 Top-N 贡献者（如 VPC 流量 Top 10 IP、DNS 最多错误 URL）④**Application Insights**——为 EC2 应用自动创建问题诊断仪表板（使用 SageMaker ML），关联 EBS/RDS/ELB/ASG/Lambda/SQS/DynamoDB 等服务，告警发送到 EventBridge/SSM OpsCenter。

## 中文长总结

CloudWatch 提供四种 Insights 服务，各有专门用途：

**1. CloudWatch Container Insights：**
- 收集、聚合和汇总容器的指标和日志
- 支持平台：ECS、EKS、Kubernetes on EC2、Fargate（ECS 和 EKS）
- 提供细粒度的容器 Dashboard
- **Kubernetes（EKS/EC2）需要容器化版本的 CloudWatch Agent**

**2. CloudWatch Lambda Insights：**
- 监控 Lambda 函数的详细指标
- 指标：CPU 时间、内存、磁盘、网络、冷启动、Lambda Worker 关闭
- 以 **Lambda Layer** 形式运行
- 创建专用 Lambda Insights Dashboard

**3. CloudWatch Contributor Insights：**
- 分析日志，创建 Top-N 贡献者时间序列
- 用例：找 VPC 流量 Top 10 IP 地址、DNS 中产生最多错误的 URL
- 支持 AWS 生成的任何日志（VPC Logs、DNS Logs 等）
- 可从头构建规则或使用 AWS 预建规则
- **考试关键词：看到 "top N contributors" → Contributor Insights**

**4. CloudWatch Application Insights：**
- 为监控的应用自动创建诊断 Dashboard
- 支持：EC2 上的 Java/.NET/IIS 等特定技术
- 关联 AWS 资源：EBS、RDS、ELB、ASG、Lambda、SQS、DynamoDB、S3、ECS、EKS、SNS、API Gateway
- 内部使用 **SageMaker ML** 自动检测潜在问题
- 告警和发现发送到 **EventBridge** 和 **SSM OpsCenter**
- 自动定位问题来源服务，缩短排障时间

## 考试要点

- Container Insights = 容器指标和日志（ECS/EKS/Fargate），Kubernetes 需 CW Agent
- Lambda Insights = Lambda 详细监控（以 Lambda Layer 运行）
- Contributor Insights = Top-N 贡献者分析（日志中的 Top IP/URL 等）
- Application Insights = 自动诊断 Dashboard（SageMaker ML 驱动）
- 各自独立，按需使用

## English Short Summary

Four CloudWatch Insights services: (1) **Container Insights** — metrics/logs from ECS/EKS/Kubernetes/Fargate containers (Kubernetes requires containerized CW Agent); (2) **Lambda Insights** — detailed Lambda monitoring (CPU/memory/disk/cold starts) running as Lambda Layer; (3) **Contributor Insights** — analyzes logs to find top-N contributors (e.g., top 10 IPs in VPC traffic, most error-generating URLs); (4) **Application Insights** — auto-creates diagnostic dashboards for EC2 applications using SageMaker ML, correlating related AWS services, with alerts to EventBridge/SSM OpsCenter.
