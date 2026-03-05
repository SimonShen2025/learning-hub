---
title: "Introduction to Messaging"
lectureId: 182
section: "s17"
sectionTitle: "Decoupling applications: SQS, SNS, Kinesis, Active MQ"
date: "2026-03-05"
tags: [sqs, sns, kinesis, messaging, decoupling, aws]
---

## 中文短总结

本节介绍了 AWS 中应用间通信的两种模式：同步通信（直接调用）和异步/事件驱动通信（通过中间件解耦）。当流量突增时，同步通信容易导致服务过载，因此推荐使用解耦层（SQS 队列模型、SNS 发布/订阅模型、Kinesis 实时流处理）来实现独立扩展。

## 中文长总结

当部署多个应用时，服务之间不可避免地需要通信。通信模式分为两大类：

**同步通信（Synchronous）**：应用直接连接另一个应用。例如购买服务（Buying Service）直接调用发货服务（Shipping Service），两者紧密耦合。

**异步通信（Asynchronous / Event-based）**：应用之间通过中间件（如队列）间接通信。购买服务将消息放入队列，发货服务从队列中拉取消息进行处理，两者互不直接依赖。

同步通信的问题在于：当流量突增时（如突发大量订单），下游服务可能被压垮导致中断。例如视频编码服务平时处理 10 个视频，突然需要处理 1000 个，就会出现故障。

解决方案是使用 **解耦层**，让中间件自动扩展：
- **SQS**：队列模型（Queue Model）
- **SNS**：发布/订阅模型（Pub/Sub Model）
- **Kinesis**：实时流处理，适用于大数据场景

使用这三种服务后，各服务可以独立于 SQS、SNS 和 Kinesis 进行扩展，同时这三种中间件本身也具有极强的可扩展性。

## 考试要点

- **同步 vs 异步通信**：直接调用 = 同步；通过 Queue/Topic = 异步（解耦）
- **解耦关键词**：考试中看到 "decouple"、"突发流量"、"独立扩展" → 想到 SQS/SNS/Kinesis
- **SQS** = 队列模型（Queue），**SNS** = 发布/订阅模型（Pub/Sub），**Kinesis** = 实时大数据流
- 使用中间件可以让生产者和消费者独立扩展

## English Short Summary

This lecture introduces two application communication patterns: **synchronous** (direct service-to-service calls) and **asynchronous/event-based** (decoupled via middleware). Synchronous communication can cause failures during traffic spikes, so AWS provides three decoupling services: **SQS** (queue model), **SNS** (pub/sub model), and **Kinesis** (real-time streaming for big data). These services enable independent scaling of application components and provide a robust, scalable architecture.
