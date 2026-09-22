---
title: "Differences between Azure Service Bus and Redis"
lectureId: 96
section: 10
sectionTitle: "Process AI Operations with Azure Service Bus"
date: "2026-09-22"
tags: ["service-bus", "redis", "messaging", "architecture-comparison"]
---

## 中文短总结

Azure Service Bus 提供消息持久化存储和死信队列（Dead Letter Queue）机制，可靠性更高但延迟也更高，适合业务流程、订单、金融交易等需要可靠性保证的场景；Redis 消息系统采用"发后即忘"模式，无持久化和死信队列，但吞吐量最高、延迟最低，适合实时通知、AI 流水线、任务队列等对可靠性要求不高的场景。

## 中文长总结

### 消息持久性（Durability）

- Azure Service Bus 提供持久化、耐用的消息存储，不是"发后即忘"模式
- Redis 消息系统采用"发后即忘"（fire-and-forget）模式，不提供持久化存储

### 可靠性（Reliability）

- Azure Service Bus 具备**死信队列（Dead Letter Queue）**机制：当竞争消费者处理消息多次重试后仍失败，消息会被移入独立的死信队列，供后续人工检查、修正问题后再重新处理
- Redis 消息系统没有死信队列概念，失败消息会持续累积而无法妥善处理

### 性能（Performance）

- Redis 因兼具缓存层特性，提供最高吞吐量和超低延迟
- Azure Service Bus 延迟相对更高，吞吐量不及 Redis，但换来了持久化存储的可靠性保证

### 选型建议

| 场景 | 推荐方案 |
|---|---|
| 业务工作流、订单处理、金融交易（需要可靠性和死信重试机制） | Azure Service Bus |
| 实时通知、AI 流水线、任务队列（对可靠性要求相对宽松） | Redis 消息系统 |

## English Short Summary

Azure Service Bus offers durable message persistence and a Dead Letter Queue mechanism for reliability, at the cost of higher latency — ideal for business workflows, orders, and financial transactions. Redis messaging is fire-and-forget with no persistence or dead-lettering, but delivers the highest throughput and lowest latency, making it better suited for real-time notifications, AI pipelines, and task queues where strict reliability guarantees are less critical.
