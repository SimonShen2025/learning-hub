---
title: "Lab: Publish Messages to a Topic (Hands-On Lab)"
lectureId: 105
section: 10
sectionTitle: "Process AI Operations with Azure Service Bus"
date: "2026-09-22"
tags: ["service-bus", "topics", "python-sdk", "hands-on-lab"]
---

## 中文短总结

使用 `get_topic_sender` 创建主题发送者对象，为 Microsoft 相关问题和 ESG 相关问题分别构造带有 `category` 应用属性（Microsoft 或 ESG）的 Service Bus 消息，通过 `send_messages` 批量发布至 `chat-completions-topic` 主题；验证消息根据 category 属性被正确路由至 Microsoft Learn Subscription（3 条）和 ESG Subscription（2 条）两个订阅队列。

## 中文长总结

### 环境准备

- 配置连接字符串、主题名称（chat-completions-topic）、两个订阅名称（ESG Subscription、Microsoft Learn Subscription）以及 Azure OpenAI 相关配置（endpoint、API key、GPT-4.1 模型名）

### 发布者实现

- 构造 5 条请求载荷：3 条与 Microsoft 产品相关（如 Azure Service Bus、Copilot Studio 问题），2 条与 ESG 相关
- 使用 `get_topic_sender` 创建主题发送者对象，指定主题名称
- 为每条消息构造 Service Bus Message：body（用户提示词+模型名）、content_type（application/json）、message_id（随机字母数字组合）、correlation_id，以及关键的 **application_properties**（`category` 字段设为 Microsoft 或 ESG，供订阅过滤器匹配使用）
- 使用发送者对象的 `send_messages` 批量发送所有消息至主题

### 验证

- 在 Azure 门户查看主题（大小约 1.8KB），确认 Microsoft Learn Subscription 收到 3 条待处理消息，ESG Subscription 收到 2 条待处理消息
- 使用 Service Bus Explorer 以 Peek 模式查看 Microsoft Learn Subscription 中第一条消息，确认其内容为 "tell me something about Azure Service Bus"，且消息属性中 category 字段确实为 Microsoft

## English Short Summary

Used `get_topic_sender` to publish Service Bus messages to `chat-completions-topic`, tagging each with a `category` application property (Microsoft or ESG) so subscription-level SQL filters route them correctly. Verified in the portal that the Microsoft Learn Subscription received 3 pending messages and the ESG Subscription received 2, each carrying the expected category metadata.
