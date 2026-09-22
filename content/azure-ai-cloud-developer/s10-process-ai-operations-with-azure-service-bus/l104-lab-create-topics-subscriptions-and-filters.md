---
title: "Lab: Create Topics, Subscriptions and Filters (Hands-On Lab)"
lectureId: 104
section: 10
sectionTitle: "Process AI Operations with Azure Service Bus"
date: "2026-09-22"
tags: ["service-bus", "topics", "subscriptions", "sql-filter", "hands-on-lab"]
---

## 中文短总结

创建名为 `chat-completions-topic` 的主题（1GB 上限，14 天存活期），并创建两个订阅：Microsoft Learn Subscription（SQL 过滤条件 `category = 'Microsoft'`）和 ESG Subscription（SQL 过滤条件 `category = 'ESG'`），分别用于将消息路由到配置了不同 system prompt 的大语言模型（Microsoft 产品助手与 ESG 助手），实现基于消息分类的主题订阅过滤机制。

## 中文长总结

### 场景设计

- 发布者发布的问题分为两类：与 Microsoft 产品相关（如 "tell me something about Azure Service Bus"）和与 ESG 报告相关（如 "tell me something about ESG reporting"）
- 期望不同类别的问题路由到配置了不同 system prompt 的大语言模型：Microsoft 相关问题交给"Microsoft 产品助手"，ESG 相关问题交给"ESG 助手"

### 创建主题

- 在 Service Bus 资源的 Topics 区域创建主题：命名为 `chat-completions-topic`，最大主题大小 1GB，消息存活时间 14 天

### 创建订阅与过滤器

- **Microsoft Learn Subscription**：最大投递次数设为 10（供死信队列使用）；在 Filters 区域删除默认的"全部接收"过滤器，新增 SQL 过滤器（命名为 Microsoft filter），过滤条件为 `category = 'Microsoft'`（对应发布者消息 Application Properties 中的 category 字段值，注意大小写敏感）
- **ESG Subscription**：同样删除默认过滤器，新增 SQL 过滤器（ESG filter），过滤条件为 `category = 'ESG'`

### 效果

- 两个订阅分别只接收各自分类对应的消息，实现基于消息元数据的主题内容路由，为后续两个独立的消费者工作进程（分别调用不同 system prompt 的 LLM）打下基础

## English Short Summary

Created a `chat-completions-topic` (1GB, 14-day TTL) with two subscriptions — Microsoft Learn Subscription (SQL filter `category = 'Microsoft'`) and ESG Subscription (SQL filter `category = 'ESG'`) — each replacing the default catch-all filter, so messages are routed by their `category` application property to the appropriate downstream LLM consumer (a Microsoft product assistant vs. an ESG assistant).
