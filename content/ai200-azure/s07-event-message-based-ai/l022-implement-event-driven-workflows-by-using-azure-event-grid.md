---
title: "Implement event-driven workflows by using Azure Event Grid"
lectureId: 22
section: 7
sectionTitle: "Develop event- and message-based AI solutions"
date: "2026-06-17"
tags: ["Azure Event Grid", "System Topics", "Event Subscriptions", "Push Model", "Blob Storage"]
---

## 中文短总结

本讲对比 **Message（消息）** 与 **Event（事件）** 的区别，并演示 **Azure Event Grid** 实现事件驱动工作流。消息可含完整任务内容（最大约 64 KB）；事件只是"某事发生了"的信号（如 Blob 上传），不含文件内容。演示创建 **System Topic** 监听 Storage Account 的 `BlobCreated` 事件，Subscription 将事件推送到 Service Bus Topic `AI jobs`，可配置 subject 过滤（如仅 `.mp4`）和重试/死信策略。Event Grid 为 **push-based**，无需消费者轮询。

## 中文长总结

### Message vs Event

| 特性 | Message（Service Bus） | Event（Event Grid） |
|------|------------------------|---------------------|
| 内容 | 可含完整任务描述（~64 KB） | 仅信号：发生了什么 + 来源 |
| 示例 | "请转录这段音频" | "Blob `file.mp4` 已上传" |
| 处理 | 消息本身即任务 | 需根据事件再去读取资源 |

### Event Grid 架构

- **中间层**：连接事件源与事件处理器
- **事件源**：Azure 系统事件（Storage、Service Bus、Key Vault、App Service 等）、Custom events、Partner events
- **处理器**：Azure Function、Service Bus、Webhook、另一个 Event Grid Topic 等

### 演示：Storage Blob → Service Bus

1. 创建 **Event Grid System Topic**，绑定已有 Storage Account
2. 创建 **Event Subscription**：
   - 事件类型：`Microsoft.Storage.BlobCreated`
   - Endpoint：Service Bus Topic `AI jobs`
3. **Filters**：可按 subject 过滤，如仅 `.mp4` 文件触发
4. **Additional features**：
   - Retry policy：默认最多 **30 次**投递尝试
   - Dead lettering：投递失败后存入 dead letter 容器

### Push vs Pull

- **Event Grid**：push-based，事件发生时主动推送到 endpoint
- **Service Bus**：pull-based，需程序主动从队列/订阅拉取消息

## 考试要点

- **Event** 是轻量信号（4–5 个字段），**Message** 可携带完整 payload
- **System Topic** 订阅 Azure 资源活动；**Custom Topic** 用于自定义事件
- Event Subscription 可投递到 Function、Service Bus、Webhook、Event Hub 等
- 支持 **subject filters** 过滤特定事件模式
- 默认 **30 次**重试；可启用 dead lettering
- Event Grid = **push**；Service Bus = **pull**
- 典型 AI 场景：Blob 上传 → Event Grid → 触发 transcription 流水线

## English Short Summary

This lecture contrasts messages (full task payloads, up to ~64 KB) with events (lightweight signals that something happened). Azure Event Grid is demonstrated as a push-based event routing service: a System Topic listens for `BlobCreated` events on a Storage Account, and an Event Subscription forwards matching events to a Service Bus topic (`AI jobs`). Filters can restrict events (e.g., only `.mp4` files), and retry/dead-letter policies handle delivery failures (default 30 attempts). Event Grid supports system events, custom events, and partner events, delivering to Functions, Service Bus, webhooks, and more—enabling event-driven AI workflows without polling.
