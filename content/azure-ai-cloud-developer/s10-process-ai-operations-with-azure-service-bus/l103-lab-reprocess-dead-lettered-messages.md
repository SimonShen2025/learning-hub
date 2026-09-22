---
title: "Lab: Reprocess Dead-Lettered Messages (Hands-On Lab)"
lectureId: 103
section: 10
sectionTitle: "Process AI Operations with Azure Service Bus"
date: "2026-09-22"
tags: ["service-bus", "dead-letter-queue", "hands-on-lab"]
---

## 中文短总结

通过 `get_queue_receiver` 指定 `sub_queue` 参数为死信队列，创建死信队列接收器，遍历死信队列中的消息，改用正确的模型部署名（GPT-4.1，替代此前错误的 Claude/DeepSeek）重新调用大语言模型处理用户查询，成功后调用 `complete_message` 标记完成，最终主队列和死信队列均恢复为零待处理消息。

## 中文长总结

### 死信队列接收器

- 使用 Service Bus 客户端的 `get_queue_receiver` 函数，`queue_name` 参数填入主队列名，`sub_queue` 参数指定为死信队列引用，因为死信队列本质是主队列下的一个子队列（sub-queue）

### 重新处理逻辑

- 开启 for 循环遍历死信队列接收器中的消息，提取 JSON 载荷中的用户提示词部分
- 与之前不同的是，这次**不再使用**消息中原本指定的（不存在的）模型名称（如 Claude、DeepSeek），而是统一改用环境变量中配置的正确聊天补全模型（GPT-4.1）调用辅助函数处理
- 显示助手响应后，同样需要调用 `complete_message` 标记消息为已完成处理，否则锁定释放后消息会重新变为待处理状态

### 验证

- 依次处理死信队列中的两条消息（"What is Gen AI?" 和 "What are vector embeddings?"），均成功获取到助手响应
- 刷新 Azure 门户后确认：主队列 0 条消息，死信队列也变为 0 条消息，说明所有故障消息已被人工修正并重新处理完毕

## English Short Summary

Created a dead letter queue receiver via `get_queue_receiver` with the `sub_queue` parameter, iterated over the dead-lettered messages, and reprocessed them using the correct GPT-4.1 model (instead of the originally referenced nonexistent Claude/DeepSeek models), calling `complete_message` after each successful response — leaving both the main queue and dead letter queue empty.
