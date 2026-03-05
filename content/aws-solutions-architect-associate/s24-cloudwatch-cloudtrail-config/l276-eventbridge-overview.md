---
title: "EventBridge Overview (formerly CloudWatch Events)"
lectureId: 276
section: "s24"
sectionTitle: "AWS Monitoring & Audit: CloudWatch, CloudTrail & Config"
date: "2026-03-05"
tags: [eventbridge, cloudwatch-events, event-bus, cron, schema-registry, cross-account]
---

## 中文短总结

Amazon EventBridge（原 CloudWatch Events）是事件驱动架构核心。两种触发方式：①定时规则（Cron/Schedule）→如每小时触发 Lambda②事件模式（Event Pattern）→如 EC2 实例状态变化、IAM Root 登录。目标：Lambda/SNS/SQS/Kinesis/Step Functions/CodePipeline/SSM 等。三种事件总线：Default（AWS 服务）、Partner（Zendesk/Auth0/Datadog 等 SaaS）、Custom（自定义应用）。事件归档+重放（Archive & Replay）：可重放历史事件用于调试。Schema Registry：自动推断事件结构并生成代码。Resource-Based Policy：跨账号发送事件到中央事件总线。

## 中文长总结

Amazon EventBridge（原 CloudWatch Events）是 AWS 的事件总线服务，实现事件驱动架构。

**两种触发方式：**
1. **Schedule（定时规则）**：Cron 表达式（如每小时/每周一 8:00/每月第一个周一）
2. **Event Pattern（事件模式）**：响应服务事件（EC2 启动/停止/终止、CodeBuild 失败、S3 上传、CloudTrail API 调用等）

**丰富的目标（Targets）：**
- Lambda、AWS Batch、ECS Task
- SQS、SNS、Kinesis Data Stream
- Step Functions、CodePipeline、CodeBuild
- SSM Automation、EC2 动作（启动/停止/重启）

**三种事件总线（Event Bus）：**

| 类型 | 来源 | 说明 |
|------|------|------|
| **Default** | AWS 服务 | EC2/S3/CloudTrail 等 |
| **Partner** | SaaS 合作伙伴 | Zendesk/Datadog/Auth0 等 |
| **Custom** | 自定义应用 | 自己的应用发送自定义事件 |

**事件归档与重放（Archive & Replay）：**
- 归档所有或部分事件（可过滤，设置保留期）
- 重放已归档的事件 → 用于调试/修复生产问题

**Schema Registry：**
- 自动分析事件总线上的事件，推断 Schema
- 可下载生成的代码，直接用于应用开发
- Schema 支持版本管理

**Resource-Based Policy：**
- 管理特定事件总线的权限（允许/拒绝来自其他区域/账号的事件）
- 用例：**中央事件总线**——多账号通过 PutEvents 将事件聚合到一个中央事件总线

**EventBridge + CloudTrail：** 拦截任何 AWS API 调用 → 实现任意操作的监控和自动化响应

## 考试要点

- EventBridge = 原 CloudWatch Events
- Schedule（Cron） + Event Pattern 两种触发方式
- 三种事件总线：Default / Partner / Custom
- Archive & Replay：归档+重放事件，用于调试
- Schema Registry：自动推断事件结构
- Resource-Based Policy：跨账号事件聚合
- EventBridge + CloudTrail = 拦截任意 API 调用

## English Short Summary

Amazon EventBridge (formerly CloudWatch Events) is the event-driven architecture hub. Two trigger types: Schedule (Cron) and Event Pattern (e.g., EC2 state changes, IAM root login, any CloudTrail API call). Targets: Lambda/SNS/SQS/Kinesis/Step Functions/CodePipeline/SSM, etc. Three event buses: Default (AWS services), Partner (Zendesk/Auth0/Datadog SaaS), Custom (own apps). Archive & Replay for debugging. Schema Registry auto-infers event structure and generates code. Resource-Based Policies enable cross-account event aggregation to a central event bus.
