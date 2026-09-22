---
title: "Understand Messaging with Azure Service Bus"
lectureId: 95
section: 10
sectionTitle: "Process AI Operations with Azure Service Bus"
date: "2026-09-22"
tags: ["service-bus", "messaging", "amqp", "pubsub"]
---

## 中文短总结

Azure Service Bus 通过两种实体类型提供消息传递：基于队列（Queue）的消息系统和基于主题+订阅（Topic + Subscription）的发布订阅系统，底层基于 AMQP（高级消息队列协议）。与 Event Grid/Event Hub（事件驱动）不同，Service Bus 不绑定任何事件触发，只作为消息代理。队列采用先进先出、竞争消费者模式；主题+订阅则允许不同订阅者按需过滤只监听特定主题的消息。典型场景包括 AI 推理队列、文档处理、RAG 数据摄取等。

## 中文长总结

### Service Bus 在消息生态中的定位

- Azure 消息生态大致分两类：事件驱动型（Event Grid、Event Hub，依附于某资源事件触发，如 Blob 创建）和消息代理型（Storage Queue、Service Bus）
- Service Bus 不依附任何事件，纯粹作为消息代理，提供两种实体：**基于队列的消息系统**和**基于主题订阅的发布订阅系统**

### 队列（Queue）消息系统

- 典型场景：前端聊天应用产生用户查询，发布者将 JSON 载荷（用户 ID + 查询）发送到队列；队列采用先进先出（FIFO）机制；多个后端实例作为"竞争消费者"争抢处理同一条消息，可独立于发布者进行扩缩容
- 底层基于 **AMQP**（Advanced Message Queuing Protocol，高级消息队列协议）架构，Service Bus 队列本身充当 AMQP Broker，负责将发布者消息可靠投递给竞争消费者
- 应用场景：AI 推理队列（跨多个 worker 分发请求）、文档处理、图像分析、Agentic AI 任务、RAG 数据摄取（新文档上传后触发消息，消费者提取文本、生成向量嵌入并更新数据库）

### 队列关键特性

- 先进先出，消息按到达顺序排队并加盖时间戳
- **不是"发后即忘"**：Service Bus 会与消费者保持联系，等待消费者对消息进行"结算"（settle），根据结算结果标记消息为成功完成或放回队列重试
- 消息以**拉模式（pull mode）**投递：只有消费者主动请求时才会收到消息，不存在广播机制

### 主题与订阅（Topic & Subscription）

- 当需要让不同类型的消费者只关注特定类型消息时，使用主题+订阅模型
- 每个主题内部维护类似队列的机制；订阅是消费者与特定主题的绑定，只接收该主题发布的消息；一个主题可以有多个独立订阅
- 典型场景：根据消息中的分类字段（如"financial reporting"或"Microsoft documentation"）将消息路由到不同主题，各主题对应配置不同 system prompt 的大语言模型进行处理

## English Short Summary

Azure Service Bus delivers messaging via two entity types — queues (FIFO, competing consumers) and topics with subscriptions (pub/sub with per-subscription filtering) — built on AMQP, and unlike Event Grid/Event Hub it isn't tied to any resource event; it's purely a message broker. Queues guarantee ordered, durable delivery in pull mode with settlement tracking, while topics let consumer groups filter relevant messages. Common use cases: AI inference queues, document processing, RAG ingestion.
