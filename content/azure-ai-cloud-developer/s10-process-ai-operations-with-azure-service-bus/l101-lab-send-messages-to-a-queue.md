---
title: "Lab: Send Messages to a Queue (Hands-On Lab)"
lectureId: 101
section: 10
sectionTitle: "Process AI Operations with Azure Service Bus"
date: "2026-09-22"
tags: ["service-bus", "azure-sdk", "python-sdk", "hands-on-lab"]
---

## 中文短总结

创建 Azure Service Bus 队列（最大 1GB，最大投递次数 10，消息存活 14 天，锁定时长 1 分钟），使用 Azure Service Bus Python SDK（7.14.3）的生产者代码，为每条用户查询构造包含 body（用户提示词+模型部署名）、Content Type、Message ID（UUID）、Correlation ID、Application Properties 的 Service Bus 消息并批量发送至队列；其中部分消息故意指定不存在的模型（如 Claude、DeepSeek），用于后续演示死信队列机制。

## 中文长总结

### 创建队列

- 在 Service Bus 资源的 Queues 区域创建新队列（如 `ai200q`）
- 关键参数：最大队列大小 1GB；最大投递次数（Max Delivery Count）设为 10（消息投递失败达到该次数后转入死信队列）；消息存活时间（Message Time to Live）14 天（超时未处理则被丢弃）；锁定时长（Lock Duration）1 分钟（Peek-Lock 模式下，若消费者处理超过该时长，锁会被释放并可转发给其他消费者）

### 生产者实现

- 使用 Azure Service Bus SDK（版本 7.14.3）通过 `from_connection_string` 创建 Service Bus 客户端
- 构造多条用户查询消息，其中大部分指定 GPT-4.1 作为处理模型，另有部分故意指定不存在的模型（Claude、DeepSeek），用于模拟"故障载荷"场景
- 使用 `get_queue_sender` 创建发送者对象，为每条消息创建 Service Bus Message：
  - body：包含用户提示词和模型部署名
  - content_type：`application/json`
  - message_id：用 `uuid` 库生成的唯一标识
  - correlation_id：命名规范如 `prompt-request-{i}`，随循环计数递增
  - application_properties：附加元数据（如 request_type、workload_type）
- 使用发送者对象的 `send_messages` 函数批量发送消息（本例发送 5 条）

### 验证

- 在 Azure 门户的 Service Bus Explorer 中以 Peek 模式查看队列中待处理消息，确认消息体和消息属性（Content Type、Message ID、Correlation ID、入队时间）均正确设置
- 其中指定 Claude 模型的消息将在后续课程中被订阅者处理失败并转入死信队列

## English Short Summary

Created a Service Bus queue (1GB max size, max delivery count 10, 14-day TTL, 1-minute lock duration), then used the Azure Service Bus Python SDK (7.14.3) to build a producer that constructs Service Bus messages (body, content type, UUID message ID, correlation ID, application properties) and batch-sends user queries to the queue — deliberately including some messages referencing nonexistent models (Claude, DeepSeek) to later demonstrate dead-lettering.
