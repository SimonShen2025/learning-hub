---
title: "Understand Triggers and Input and Output Bindings"
lectureId: 117
section: 12
sectionTitle: "Build Event Driven Backends with Function Apps"
date: "2026-09-22"
tags: ["azure-functions", "triggers", "bindings", "service-bus", "blob-storage"]
---

## 中文短总结

触发器（Trigger）决定函数何时执行并驱动扩缩容规则，类型包括定时器（类似 cron）、HTTP 请求、Blob 上传、Event Grid 事件、Service Bus 消息等。输入/输出绑定（Input/Output Binding）是预定义组件，可让函数无需手写 SDK 连接与认证代码即可对接外部服务：输入绑定自动从外部服务（如 Service Bus 队列）获取数据并注入函数，输出绑定则将函数结果发送到外部服务（如 Storage、Cosmos DB、Event Hub、Service Bus），大幅降低样板代码量。

## 中文长总结

### 触发器（Triggers）

- 触发器决定 Azure Function 何时执行，通过监听特定事件类型触发，例如：
  - 定时触发（类似 cron 任务，按计划周期执行后台任务）
  - HTTP POST 请求
  - Blob Storage 新建 Blob
  - Azure Event Grid 事件
  - Service Bus 队列消息
- 触发器同时决定扩缩容规则：例如 Service Bus 队列中堆积大量待处理消息时，Function App 可依据预设扩缩容规则自动扩展到最大实例数

### 输入/输出绑定（Input/Output Bindings）

- 场景：图片上传到 Storage 账户后，Event Grid 将包含图片 URL 的事件写入 Service Bus 队列；Function 消费者需要监听该队列消息，处理后再将生成的图片描述写入 Cosmos DB 等目标存储
- 若采用纯代码方式（code-first），需要分别引入 Service Bus SDK 和 Cosmos DB SDK，编写认证与连接逻辑，代码量较大
- **输入绑定（Input Binding）**：预定义组件，自动从外部服务（如 Service Bus 队列）获取数据并直接提供给函数代码使用，无需手写连接逻辑
- **输出绑定（Output Binding）**：让函数以极少代码将数据发送到 Storage 账户、Cosmos DB、Event Hub、Service Bus 等 Azure 服务
- 核心价值：绑定屏蔽了 SDK 级别的认证与连接复杂度，让开发者只需声明式地指定绑定目标（如队列名、路径），即可完成输入/输出对接

## English Short Summary

Triggers determine when an Azure Function executes and drive its scaling rules; types include timers (cron-like schedules), HTTP requests, Blob uploads, Event Grid events, and Service Bus messages. Input and output bindings are predefined components that let a function connect to external services (e.g., a Service Bus queue for input, or Storage/Cosmos DB/Event Hub/Service Bus for output) without hand-writing SDK-based authentication and connection code, significantly reducing boilerplate.
