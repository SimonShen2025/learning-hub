---
title: "RDS - Invoking Lambda & Event Notifications"
lectureId: 221
section: "19"
sectionTitle: "Serverless Overviews from a Solution Architect Perspective"
date: "2026-03-05"
tags: ["rds", "aurora", "lambda", "event-notifications", "eventbridge", "sns"]
---

## 中文短总结

RDS/Aurora 可从数据库内部直接调用 Lambda 函数处理数据事件（支持 RDS for PostgreSQL 和 Aurora MySQL），需在数据库内部而非 AWS 控制台配置，需确保网络连通性和 IAM 权限。**区别于 RDS Event Notifications** — 后者只通知实例级别事件（创建、启动等），不包含数据库内的数据变更，近实时（最多 5 分钟延迟），可发送到 SNS 或 EventBridge。

## 中文长总结

### 从 RDS/Aurora 调用 Lambda

**支持的引擎**：
- RDS for **PostgreSQL**
- **Aurora MySQL**

**配置方式**：
- 在**数据库内部**配置（连接到数据库后设置），不是在 AWS 控制台
- 数据库实例直接调用 Lambda 函数

**典型用例**：
```
用户插入数据到注册表 → RDS 触发 Lambda → Lambda 发送欢迎邮件
```

**必要条件**：
1. **网络连通** — Lambda 需可达（公网 → 直接调用；私网 → 需 NAT Gateway 或 VPC Endpoint）
2. **IAM 权限** — 数据库实例需有调用 Lambda 的 IAM 策略

### RDS Event Notifications（完全不同）

⚠️ **不是数据事件！只是实例级别事件**

| 特性 | 说明 |
|------|------|
| 通知内容 | 数据库**实例生命周期**（创建、启动、停止等） |
| 事件类型 | 实例、快照、参数组、安全组、代理、自定义引擎版本 |
| 延迟 | 近实时，最多 **5 分钟** |
| 目标 | **SNS** 或 **EventBridge** |
| SNS 下游 | → SQS Queue 或 Lambda |
| EventBridge 下游 | → Lambda 等多种目标 |

### 关键区分

| 需求 | 方案 |
|------|------|
| 对数据库中的**数据变更**做出反应 | 在数据库内配置 → **直接调用 Lambda** |
| 对数据库**实例状态变化**做出反应 | 使用 **RDS Event Notifications** → SNS/EventBridge |

## 考试要点

- **从 RDS/Aurora 直接调用 Lambda**：支持 PostgreSQL 和 Aurora MySQL，在数据库内配置
- 需要 **网络连通性** + **IAM 权限**
- **RDS Event Notifications ≠ 数据事件**（考试陷阱！）
- Event Notifications 只包含实例级别信息（创建、启动、快照等），不含表数据变更
- Event Notifications 可发送到 **SNS** 或 **EventBridge**
- 近实时延迟（最多 5 分钟）

## English Short Summary

RDS/Aurora can directly invoke Lambda functions from within the database to process data events (supported by RDS PostgreSQL and Aurora MySQL). This is configured inside the database, not the AWS console, and requires network connectivity and IAM permissions. Completely different from **RDS Event Notifications**, which only report instance-level events (created, started, stopped) — not data changes. Event Notifications are near-real-time (up to 5 min delay) and can be sent to SNS or EventBridge. Exam trap: don't confuse data-level Lambda invocation with instance-level event notifications.
