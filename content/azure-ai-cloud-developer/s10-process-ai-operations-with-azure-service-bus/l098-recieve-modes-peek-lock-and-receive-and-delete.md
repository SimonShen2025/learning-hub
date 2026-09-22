---
title: "Recieve Modes - Peek-lock and Receive-and-delete"
lectureId: 98
section: 10
sectionTitle: "Process AI Operations with Azure Service Bus"
date: "2026-09-22"
tags: ["service-bus", "peek-lock", "receive-and-delete"]
---

## 中文短总结

Azure Service Bus 队列有两种消息接收模式：Receive-and-Delete（消息一经投递即从队列删除，吞吐量高、延迟低，但无重试机制，消费者处理失败会导致消息永久丢失）和 Peek-Lock（默认且推荐模式，消息被锁定一段可配置时长后投递给消费者但不立即删除，消费者需显式"结算"消息，若失败可解锁并转交给其他消费者重试，具备更好的容错性但吞吐量较低）。AI 工作负载推荐使用 Peek-Lock 模式。

## 中文长总结

### 背景

- Service Bus 并非"发后即忘"，会持续与消费者保持通信以确认消息处理状态，这正是接收模式（Receive Mode）存在的原因

### Receive-and-Delete 模式

- 消息投递给某个竞争消费者（如 Consumer A）的同时立即从队列中删除，不做持久化保留
- 优点：高吞吐量、低延迟
- 缺点：**没有重试机制**——如果 Consumer A 在处理消息过程中崩溃或出错，消息已经丢失，无法转交给 Consumer B 重新处理

### Peek-Lock 模式（默认，AI 工作负载推荐）

- Service Bus 将消息**锁定**一段可配置时长后投递给消费者，但消息仍保留在队列中（不删除）
- 消费者完成业务处理后必须显式"结算"消息（标记完成或未完成）
- 若消息未在锁定时长内被结算（如处理失败或超时），锁会被释放，消息重新变为可用状态，可被投递给其他消费者（如 Consumer B）重试
- 优点：具备容错性和数据持久性，重试机制健全
- 缺点：吞吐量不及 Receive-and-Delete 模式，延迟相对更高

### 选型建议

- 对于 AI 工作负载（涉及大语言模型调用等可能失败的操作），推荐使用 Peek-Lock 模式以获得可靠的重试保障

## English Short Summary

Azure Service Bus queues support two receive modes: Receive-and-Delete (message removed the instant it's delivered — high throughput/low latency, no retry on consumer failure) and Peek-Lock (default/recommended — message locked for a configurable duration and delivered without removal, requiring explicit settlement; if unsettled, the lock releases for retry by another consumer). Peek-Lock suits AI workloads for its durability and fault tolerance.
