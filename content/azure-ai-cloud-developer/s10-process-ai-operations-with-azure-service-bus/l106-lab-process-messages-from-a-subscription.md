---
title: "Lab: Process Messages from a Subscription (Hands-On Lab)"
lectureId: 106
section: 10
sectionTitle: "Process AI Operations with Azure Service Bus"
date: "2026-09-22"
tags: ["service-bus", "subscriptions", "peek-lock", "hands-on-lab"]
---

## 中文短总结

分别为 Microsoft Learn Subscription 和 ESG Subscription 编写订阅消费者：使用 `get_subscription_receiver`（指定主题名、订阅名、Peek-Lock 模式）读取各自订阅队列中的消息，配合各自专属的 system prompt（Microsoft 产品助手 / ESG 助手）调用大语言模型生成回答，处理成功后调用 `complete_message` 标记完成。验证两个订阅队列最终均清空。

## 中文长总结

### Microsoft 订阅消费者

- 创建 Service Bus 客户端和 `process_user_message` 辅助函数，其中 system prompt 设置为 "you are a helpful Microsoft agent, answer all questions related to Microsoft products in a simple and clear to understand manner, just like you would expect to find answers on Microsoft Learn"
- 使用 `get_subscription_receiver` 函数，指定主题名、订阅名（Microsoft Learn Subscription）、`receive_mode=PEEK_LOCK`，开启 for 循环处理待处理消息
- 依次提取用户提示词和模型名，调用辅助函数生成回答并打印，成功后调用消费者对象的 `complete_message` 标记完成
- 成功处理 3 条 Microsoft 相关问题（关于 Azure Service Bus、主题订阅、Copilot Studio）

### ESG 订阅消费者

- 代码结构与 Microsoft 消费者基本一致，唯一区别是 system prompt 改为 "you are a helpful ESG assistant, answer user queries on ESG related topics and frameworks like ESRS, BRSR, TCFT, GRI, and UN SDGs"
- 同样使用 Peek-Lock 模式接收并处理消息，成功处理 2 条 ESG 相关问题（关于 ESG 报告、GRI 和 ESRS 框架）

### 验证

- 刷新 Azure 门户，确认 Microsoft Learn Subscription 和 ESG Subscription 中均无待处理消息，说明两个订阅的消费者都已成功完成各自消息的处理

## English Short Summary

Implemented separate subscription consumers for the Microsoft Learn Subscription and ESG Subscription using `get_subscription_receiver` in Peek-Lock mode, each paired with a distinct system prompt (Microsoft product assistant vs. ESG assistant) to answer the routed queries via Azure OpenAI, calling `complete_message` after each success. Verified both subscription queues ended up empty after processing.
