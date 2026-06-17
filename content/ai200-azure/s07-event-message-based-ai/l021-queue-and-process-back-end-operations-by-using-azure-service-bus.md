---
title: "Queue and process back-end operations by using Azure Service Bus"
lectureId: 21
section: 7
sectionTitle: "Develop event- and message-based AI solutions"
date: "2026-06-17"
tags: ["Azure Service Bus", "Topics", "Subscriptions", "Dead Letter Queue", "Pub/Sub"]
---

## 中文短总结

本讲演示如何使用 **Azure Service Bus** 在应用之间异步传递消息。创建 Standard 层 Service Bus 命名空间后，建立 Topic `AI jobs` 及两个 Subscription（`transcription sub`、`summarization subscription`）。Publisher 向 Topic 发送消息，Consumer 通过 `get_subscription_receiver` 拉取并处理；演示中 30% 随机失败会触发 **Dead Letter Queue（死信队列）**，避免无法处理的消息阻塞主队列。Service Bus 适用于 AI 流水线中 transcription、summarization 等后端任务的解耦与一对多分发。

## 中文长总结

### Service Bus 核心概念

- **命名空间（Namespace）**：全局唯一，格式为 `*.servicebus.windows.net`
- **Queue**：单容器，消息被一名消费者取走后其他消费者不可见（竞争消费）
- **Topic + Subscription**：发布/订阅模型，一条消息会复制到每个 Subscription，各自独立处理（一对多）

### 演示流程

1. 在 Portal 创建 **Standard** 层 Service Bus，启用 SAS 密钥访问
2. 创建 Topic `AI jobs`，再创建两个 Subscription
3. 从 **Shared access policies → RootManageSharedAccessKey** 复制连接字符串
4. **Publisher**（`publisher.py`）：向 Topic 发送消息
5. **Consumer**（`consumer.py`）：订阅 `transcription sub`，循环接收消息，成功则 `complete`，失败则 dead-letter

### Dead Letter Queue

- 无法处理的消息移入死信队列，避免阻塞主队列
- 开发者可检查失败原因，修复后 programmatically 移回主队列
- 演示：5 条消息中 3 条成功、2 条进入 dead letter

### 与 AI 场景的关系

Service Bus 是 AI 应用之间的**连接器**，本身不具 AI 能力，但可承载 transcription、summarization 等异步 AI 作业的消息传递。

## 考试要点

- **Queue** vs **Topic/Subscription**：Queue 竞争消费；Topic 一对多，每个 Subscription 各得一份副本
- **Dead Letter Queue**：处理失败消息，防止队列堵塞
- 连接字符串来自 **Shared access policies**（如 RootManageSharedAccessKey）
- Service Bus 为 **pull-based**（消费者主动拉取），与 Event Grid 的 push 模型不同
- Standard 层按百万次操作计费；消息大小上限约 **64 KB**
- Python SDK：`azure-servicebus`，使用 `ServiceBusClient` 与 `get_subscription_receiver`

## English Short Summary

This lecture demonstrates Azure Service Bus for asynchronous messaging between applications. A Standard-tier namespace is created with a Topic (`AI jobs`) and two Subscriptions (`transcription sub`, `summarization subscription`). A publisher sends messages to the topic; a consumer pulls from a subscription using `get_subscription_receiver`, completing successful messages and dead-lettering failures (30% random failure in the demo). Dead Letter Queues isolate unprocessable messages to prevent queue blocking. Service Bus uses a pull-based model and supports both queue (competing consumers) and pub/sub (topic + subscriptions) patterns—ideal for decoupling AI pipeline tasks like transcription and summarization.
