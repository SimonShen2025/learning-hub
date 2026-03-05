---
title: "Event Processing in AWS"
lectureId: 364
section: "s29"
sectionTitle: "More Solution Architectures"
date: "2026-03-05"
tags: [event-processing, sqs, lambda, sns, fan-out, s3-events, eventbridge]
---

## 中文短总结

AWS 事件处理架构。**SQS + Lambda**：Lambda 拉取 SQS → 失败重试 → 5 次后进 Dead Letter Queue（DLQ 在 SQS 侧）。**SQS FIFO + Lambda**：保序处理 → 一条消息失败会阻塞整个队列 → 需 DLQ。**SNS + Lambda**：异步投递 → Lambda 内部重试 3 次 → DLQ 在 Lambda 侧。**Fan Out 模式**：应用 → SNS Topic → 多个 SQS 订阅（比直接发多个 SQS 更可靠）。**S3 事件通知**：对象创建/删除/恢复等 → SNS/SQS/Lambda；或用 **EventBridge**（支持 18+ 目标、JSON 规则过滤、归档/重放）。**CloudTrail + EventBridge**：拦截任何 API 调用（如 DynamoDB DeleteTable → 告警）。

## 中文长总结

AWS 事件处理的多种架构模式：

**1. SQS + Lambda DLQ 模式：**
```
消息 → SQS → Lambda（拉取+重试）
              ↓ 失败 5 次
         Dead Letter Queue（SQS 侧设置）
```

**2. SQS FIFO + Lambda：**
- 保序处理 → 一条失败 → **阻塞后续所有消息**
- 必须设置 DLQ 避免死锁

**3. SNS + Lambda：**
```
消息 → SNS → Lambda（异步，内部重试 3 次）
                ↓ 失败
          DLQ（Lambda 侧设置）
```

**4. Fan Out 模式（重要）：**
```
❌ 应用 → SQS1 + SQS2 + SQS3（不可靠，应用崩溃可能导致部分队列丢失）
✅ 应用 → SNS Topic → SQS1 / SQS2 / SQS3（可靠，SNS 保证投递）
```

**5. S3 事件通知：**
- 触发器：对象创建/删除/恢复/复制
- 目标：SNS / SQS / Lambda
- **EventBridge 增强**：
  - 18+ AWS 服务目标
  - JSON 规则过滤（元数据/大小/名称）
  - 归档 + 重放事件
  - 可靠投递

**6. CloudTrail + EventBridge：**
- 任何 API 调用 → CloudTrail → EventBridge → SNS 告警

## 考试要点

- SQS DLQ 在 SQS 侧设置，SNS+Lambda DLQ 在 Lambda 侧设置
- FIFO 队列失败会阻塞 → 必须设 DLQ
- Fan Out = SNS + 多个 SQS 订阅（比直接多队列更可靠）
- S3 事件 → EventBridge 比直接 SNS/SQS 功能更多
- CloudTrail + EventBridge = 拦截任何 API 调用

## English Short Summary

AWS event processing architectures. **SQS + Lambda**: pull + retry → DLQ (set on SQS side). **SQS FIFO**: ordered processing, failure blocks queue → need DLQ. **SNS + Lambda**: async, 3 internal retries → DLQ (set on Lambda side). **Fan Out**: app → SNS Topic → multiple SQS subscribers (more reliable than direct multi-queue). **S3 Events**: notify SNS/SQS/Lambda, or use **EventBridge** (18+ targets, JSON filtering, archive/replay). **CloudTrail + EventBridge**: intercept any API call for alerting.
