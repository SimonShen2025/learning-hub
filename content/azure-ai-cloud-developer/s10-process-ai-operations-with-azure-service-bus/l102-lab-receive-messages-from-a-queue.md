---
title: "Lab: Receive Messages from a Queue (Hands-On Lab)"
lectureId: 102
section: 10
sectionTitle: "Process AI Operations with Azure Service Bus"
date: "2026-09-22"
tags: ["service-bus", "peek-lock", "dead-letter-queue", "hands-on-lab"]
---

## 中文短总结

编写订阅者（消费者）代码：创建 Peek-Lock 模式的接收器（`get_queue_receiver`，最长等待 60 秒），遍历队列中的消息，提取用户提示词和模型名后调用辅助函数请求 Azure OpenAI；若成功则调用 `complete_message` 标记完成，若因模型部署不存在而出错则调用 `dead_letter_message` 将消息移入死信队列并附加错误原因。验证结果：GPT-4.1 消息被成功处理并从队列移除，Claude/DeepSeek 消息被转入死信队列。

## 中文长总结

### 订阅者实现

- 创建 Service Bus 客户端及 `process_user_message` 辅助函数：接收用户查询和模型部署名，创建 Azure OpenAI 客户端并调用聊天补全 API（system prompt 为"you are a helpful assistant"，temperature 0.7），返回助手响应

### Peek-Lock 模式接收消息

- 使用 `get_queue_receiver` 创建接收器对象：指定队列名、`receive_mode=PEEK_LOCK`、最大等待时间 60 秒
- 开启 for 循环持续处理队列中待处理的消息：提取 JSON 载荷中的 prompt 和模型部署名，调用辅助函数处理

### 消息结算

- 成功执行后调用接收器对象的 `complete_message` 函数标记消息完成，从队列中移除；若不结算，锁定时长（60 秒）到期后消息会重新变为可用状态
- 若因模型部署不存在（如引用 Claude 模型）而调用大语言模型出错，则调用 `dead_letter_message` 函数，附带死信原因（"model deployment does not exist"）和错误描述，将消息移入死信队列

### 验证结果

- 5 条消息中，3 条引用 GPT-4.1 的消息被成功处理并显示助手响应；2 条引用 Claude/DeepSeek 的消息被移入死信队列
- 在 Azure 门户中确认主队列剩余 0 条消息，死信队列有 2 条消息，且死信队列中消息属性显示了对应的死信原因和错误描述

## English Short Summary

Implemented a subscriber using Peek-Lock mode (`get_queue_receiver`, 60s max wait): for each message, extracted the prompt and model name, called Azure OpenAI, then either `complete_message` on success or `dead_letter_message` (with a reason/description) when the referenced model deployment didn't exist. Verified that GPT-4.1 messages processed successfully while Claude/DeepSeek messages ended up in the dead letter queue, leaving the main queue empty.
