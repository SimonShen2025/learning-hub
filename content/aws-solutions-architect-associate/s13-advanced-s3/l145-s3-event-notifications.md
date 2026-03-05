---
title: "S3 Event Notifications"
lectureId: 145
section: 13
sectionTitle: "Advanced Amazon S3"
date: "2026-03-05"
tags: ["S3", "Event Notifications", "SNS", "SQS", "Lambda", "EventBridge"]
---

## 中文短总结

本讲介绍 S3 Event Notifications。事件类型包括对象创建、删除、恢复、复制等，可按后缀过滤（如 `.jpg`）。三种传统目标：**SNS Topic、SQS Queue、Lambda Function**，需要在目标上配置 **Resource Access Policy**（不是 IAM Role）允许 S3 发送消息。第四种目标：**Amazon EventBridge**——所有事件自动进入 EventBridge，可设置 Rules 发送到 **18+ AWS 服务**，支持高级过滤（metadata、object size、name）、多目标、事件归档和重放。事件通常**秒级**送达，偶尔超过一分钟。

## 中文长总结

### 事件类型
- Object Created（创建）
- Object Removed（删除）
- Object Restored（恢复）
- Replication（复制）
- 可按后缀过滤（如 `.jpg`）

### 四种事件目标

#### 传统三种目标
| 目标 | 权限配置 |
|------|----------|
| **SNS Topic** | SNS Resource Access Policy |
| **SQS Queue** | SQS Resource Access Policy |
| **Lambda Function** | Lambda Resource Policy |

- 使用 **Resource Access Policy**（非 IAM Role）
- 类比 S3 Bucket Policy 的工作方式

#### EventBridge（第四种目标）
- **所有事件**自动进入 EventBridge
- 可通过 Rules 发送到 **18+ AWS 服务**
- 高级过滤：metadata、object size、name
- 支持多目标
- 事件归档和重放
- 更可靠的投递

### 使用场景
- 自动生成上传图片的缩略图
- 对象上传后触发处理流程

## 考试要点

- 三种传统目标：**SNS、SQS、Lambda**
- 需要 **Resource Access Policy**（非 IAM Role）
- **EventBridge** 可发送到 18+ 服务
- EventBridge 支持高级过滤和多目标
- 事件通常秒级送达

## English Short Summary

S3 Event Notifications trigger on object creation, deletion, restoration, or replication, filterable by suffix (e.g., `.jpg`). Three traditional targets: SNS Topic, SQS Queue, Lambda Function — each requiring a Resource Access Policy (not IAM Role) to allow S3 to send messages. Fourth target: Amazon EventBridge — all events automatically flow to EventBridge, which can route to 18+ AWS services with advanced filtering (metadata, object size, name), multiple destinations, event archiving, and replay. Events typically deliver within seconds.
