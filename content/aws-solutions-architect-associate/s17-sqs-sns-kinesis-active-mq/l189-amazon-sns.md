---
title: "Amazon Simple Notification Service (AWS SNS)"
lectureId: 189
section: "s17"
sectionTitle: "Decoupling applications: SQS, SNS, Kinesis, Active MQ"
date: "2026-03-05"
tags: [sns, pub-sub, notification, topic, aws]
---

## 中文短总结

Amazon SNS 是发布/订阅（Pub/Sub）服务：事件生产者将消息发送到 SNS Topic，所有订阅者自动接收该消息的副本。每个 Topic 支持高达 1250 万+订阅者，账户最多 10 万个 Topic。订阅者类型包括 Email、SMS、HTTP(S)、SQS、Lambda、Kinesis Data Firehose。安全方面支持传输加密、KMS 加密和 SNS 访问策略。

## 中文长总结

### Pub/Sub 模式

与 SQS 的"一对一"不同，SNS 实现"一对多"消息分发：
- **直接集成**（不推荐）：购买服务直接调用邮件通知、欺诈检测、发货服务等 → 每加一个接收方都要改代码
- **Pub/Sub 模式**（推荐）：购买服务发布到 SNS Topic → 所有订阅者自动收到消息

### SNS 核心概念

| 概念 | 说明 |
|------|------|
| Event Producer | 只需向**一个** SNS Topic 发送消息 |
| Subscribers | 订阅 Topic 后自动接收所有消息（可配置过滤） |
| 每个 Topic 订阅者上限 | **12,500,000+** |
| 每个账户 Topic 上限 | **100,000** |

### 订阅者类型

- **Email / SMS** — 直接通知
- **HTTP / HTTPS** — Webhook 端点
- **SQS** — 消息发送到队列
- **Lambda** — 触发函数执行代码
- **Kinesis Data Firehose** — 发送到 S3/Redshift 等

### 消息来源（自动发送到 SNS 的 AWS 服务）

CloudWatch Alarms、ASG 通知、CloudFormation 状态变更、Budgets、S3 事件、DMS、Lambda、DynamoDB、RDS Events 等。

### 发布方式

- **Topic Publish**：使用 SDK 创建 Topic → 创建订阅 → 发布消息（所有订阅者自动接收）
- **Direct Publish**（移动端）：创建 Platform Application → Platform Endpoint → 发布到端点（Google GCM、Apple APNS、Amazon ADM）

### 安全性

- **传输加密**：默认 HTTPS
- **静态加密**：KMS 密钥
- **客户端加密**：需客户端自行处理
- **访问控制**：IAM 策略 + **SNS 访问策略**（类似 S3 Bucket Policy）
  - 跨账户访问 SNS Topic
  - 允许 S3 事件写入 SNS Topic

## 考试要点

- **SNS** = Pub/Sub 模式 = 一对多消息分发
- 每个 Topic 最多 **1250 万+** 订阅者
- 订阅者类型：Email、SMS、HTTP(S)、SQS、Lambda、Kinesis Data Firehose
- **SNS 访问策略** = 类似 S3 Bucket Policy（跨账户访问、允许 AWS 服务写入）
- 许多 AWS 服务可以自动发送通知到 SNS（CloudWatch Alarms、S3 Events 等）
- 消息发送后**不持久存储**，未交付可能丢失

## English Short Summary

**Amazon SNS** is a Pub/Sub service where event producers publish messages to an **SNS Topic** and all subscribers automatically receive a copy. Each topic supports **12.5M+ subscribers**, with up to **100K topics** per account. Subscriber types include Email, SMS, HTTP(S), SQS, Lambda, and Kinesis Data Firehose. Many AWS services (CloudWatch Alarms, S3 Events, ASG, etc.) natively publish to SNS. Security includes HTTPS in-flight encryption, KMS at-rest encryption, and **SNS access policies** (similar to S3 bucket policies) for cross-account access and service-level permissions.
