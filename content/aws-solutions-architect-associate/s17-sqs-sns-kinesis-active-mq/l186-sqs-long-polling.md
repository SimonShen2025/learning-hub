---
title: "SQS - Long Polling"
lectureId: 186
section: "s17"
sectionTitle: "Decoupling applications: SQS, SNS, Kinesis, Active MQ"
date: "2026-03-05"
tags: [sqs, long-polling, wait-time-seconds, aws]
---

## 中文短总结

SQS 长轮询（Long Polling）允许消费者在队列中没有消息时等待消息到达（1~20 秒），而不是立即返回空响应。长轮询减少了 API 调用次数、降低了延迟（消息到达后立即发送给消费者），推荐使用 20 秒的等待时间。可在队列级别或 API 级别（WaitTimeSeconds 参数）配置。

## 中文长总结

### 短轮询 vs 长轮询

- **短轮询（Short Polling）**：消费者发起请求，如果队列中没有消息，立即返回空响应。频繁的空请求浪费资源和 API 调用次数。
- **长轮询（Long Polling）**：消费者发起请求后，如果队列中暂时没有消息，SQS 会**等待消息到达**后再返回，等待时间为 1~20 秒。

### 长轮询的优势

1. **减少 API 调用次数**：每次调用的等待时间更长，减少了频繁的空请求
2. **降低延迟**：消息到达 SQS 后立即发送给正在等待的消费者，实现最低延迟

### 配置方式

- **队列级别**：在队列配置中设置默认等待时间
- **API 级别**：在 ReceiveMessage 调用中使用 **WaitTimeSeconds** 参数
- 推荐等待时间：**20 秒**（最高效）

## 考试要点

- **长轮询** = 消费者等待消息到达（1~20 秒），减少 API 调用
- **WaitTimeSeconds** 参数用于在 API 级别启用长轮询
- 长轮询优于短轮询：减少成本（API 调用次数少）、降低延迟
- 推荐等待时间 **20 秒**

## English Short Summary

**SQS Long Polling** allows consumers to wait for messages to arrive (1–20 seconds) instead of returning empty responses immediately. This reduces the number of API calls and lowers latency since messages are delivered as soon as they arrive. Long polling can be configured at the queue level or per API call using the **WaitTimeSeconds** parameter. A wait time of **20 seconds** is recommended for best efficiency. Long polling is always preferred over short polling.
