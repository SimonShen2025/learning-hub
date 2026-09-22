---
title: "Redis Pub/Sub Model - \"Broadcast\" and \"Streams\""
lectureId: 89
section: 9
sectionTitle: "Enhance AI Solutions with Azure Managed Redis"
date: "2026-09-22"
tags: ["redis", "pubsub", "redis-streams", "microservices"]
---

## 中文短总结

Redis 发布订阅有两种模式：广播模式（Broadcast）中同一频道的消息会被所有订阅者接收，但无消息持久化、无投递保证、无背压处理，适合通知类场景；队列模式（Redis Streams / Queue）中消息被"竞争消费者"分摊处理（一条消息只交给一个消费者），支持消息持久化、自动重试和任务分发，适合任务队列、AI 推理任务等需要可靠性保证的场景。

## 中文长总结

### 问题背景

- 微服务架构需要应用间解耦（如前后端分离部署、独立扩缩容），发布订阅模型正是实现这种解耦的基础

### 广播模式（Broadcast Pattern）

- 发布者向频道/主题发布消息，多个订阅者可独立订阅不同频道；同一频道的所有订阅者都会收到相同消息（广播特性）
- 特点：至多投递一次（at-most-once delivery）；**无消息持久化**（Redis 转发消息后立即遗忘）；"发后不理"（fire-and-forget），发布者无法确认订阅者是否收到消息
- 典型用例：通知（如新模型版本训练完成，通知多个下游系统更新配置/数据库）、缓存失效、配置更新
- 局限性：无消息持久性和投递保证；纯内存操作，消息不落盘；出错无重试机制；无背压处理（订阅者处理不过来时消息仍会持续发送，可能导致内存问题或消息丢失）

### 队列模式（Queue Pattern / Redis Streams）

- 也称为 Redis Streams，解决了广播模式的上述局限性
- 消息进入 Redis 队列（先进先出），由"竞争消费者"（competing consumers）处理，即一条消息只会被其中一个消费者处理，而非全部广播
- 特点：任务可在服务崩溃后存活（未处理任务仍保留在流中）；自动重试机制（消费者处理失败时消息可转给其他消费者）；内置工作分发机制，Redis 自动管理消息如何分配给动态加入的消费者
- 典型用例：任务队列、AI 推理任务、文档处理等需要可靠性和持久化保证的场景

### 选型对比

| 维度 | 广播模式 | 队列模式（Streams） |
|---|---|---|
| 投递对象 | 所有订阅者 | 单一竞争消费者 |
| 持久化 | 无 | 消息在被确认前一直保留 |
| 适用场景 | 通知、缓存失效、配置更新 | 任务队列、AI 推理任务、文档处理 |

## English Short Summary

Redis Pub/Sub offers two patterns: Broadcast, where all subscribers to a channel receive the same message (at-most-once delivery, no persistence, no retry, no backpressure — good for notifications/cache invalidation), and Queue/Streams, where competing consumers each pick up individual messages with persistence, automatic retry, and built-in work distribution — better suited for task queues and AI inference jobs requiring reliability guarantees.
