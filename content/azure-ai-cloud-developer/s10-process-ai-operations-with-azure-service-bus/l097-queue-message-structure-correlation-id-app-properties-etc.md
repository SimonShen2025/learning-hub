---
title: "Queue Message Structure - Correlation ID, App Properties etc."
lectureId: 97
section: 10
sectionTitle: "Process AI Operations with Azure Service Bus"
date: "2026-09-22"
tags: ["service-bus", "message-schema", "correlation-id"]
---

## 中文短总结

Azure Service Bus 消息对象包含几个关键组成部分：请求载荷（Request Payload，即业务数据本体，作为消息 Body）、Message ID（每条消息的唯一标识，常用 UUID 生成）、Content Type（通常设为 application/json）、Correlation ID（用于关联同一业务流程/工作流的多条消息，便于分布式追踪）以及 Application Properties（附加的自定义元数据，通常用于消费者过滤消息，而非参与业务逻辑本身）。

## 中文长总结

### 请求载荷（Request Payload）

- 是消费者将执行业务逻辑所依据的 JSON 数据本体，例如包含 prompt（用户查询）、model（大语言模型部署名称）、temperature、max_tokens、document_id 等字段
- 该载荷被放入 Service Bus Message 对象的 body 部分

### Message ID

- 每条 Service Bus 消息的唯一标识符，用于在消息系统中追踪、跟踪和识别消息
- 必须保证每条消息实例唯一，常见做法是用 Python 的 `uuid` 库生成随机字符串

### Content Type

- 通常设置为 `application/json`，告知订阅者应将消息体解析为 JSON 对象

### Correlation ID

- 用于关联属于同一业务流程或工作流的多条相关消息
- 在涉及多个微服务的分布式追踪场景中非常重要（如结合 OpenTelemetry 等开源库），可用于跟踪某个请求载荷贯穿整个工作流的执行情况及排查错误

### Application Properties（应用属性）

- 是附加在 Service Bus 消息上的自定义键值元数据，用于提供额外上下文，但**不放入消息体**
- 消费者通常不会将这些属性用于业务逻辑本身（如调用大语言模型的具体参数），而是用它们实现**过滤机制**：例如根据 model 属性值决定是否接收该消息（只处理 GPT-4.0 而非 GPT-4.1 的消息），或根据 priority 属性值优先处理高优先级消息

## English Short Summary

An Azure Service Bus message is composed of: the request payload (the actual JSON business data placed in the message body), a Message ID (unique per message, often a UUID), Content Type (typically application/json), a Correlation ID (linking related messages across a workflow for distributed tracing), and Application Properties (custom metadata used mainly for consumer-side filtering rather than business logic itself).
