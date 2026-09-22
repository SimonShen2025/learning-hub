---
title: "Lab: Implement a Simple Broadcast Pub/Sub Model (Hands-On Lab)"
lectureId: 90
section: 9
sectionTitle: "Enhance AI Solutions with Azure Managed Redis"
date: "2026-09-22"
tags: ["redis", "pubsub", "python-sdk", "hands-on-lab"]
---

## 中文短总结

分别在发布者和订阅者两个 Python Notebook 中实现 Redis 广播模式：订阅者通过 `pubsub()` 对象订阅 `ai-models-updated` 频道并用 `listen()` 循环持续监听；发布者通过 `publish` 向同一频道发送包含模型名称和版本的 JSON 消息。验证：每次发布者发布新消息（如切换模型名称），订阅者都能实时打印出对应内容，证实广播机制按频道将消息转发给所有监听者。

## 中文长总结

### 场景设定

- 发布者模拟接收 AI 训练系统的通知（如某个模型完成训练/更新），并将消息发布到频道
- 订阅者作为下游服务监听该频道，接收到消息后执行打印等操作

### 发布者实现

- 创建 Redis 客户端（host、port=10000、password）
- 使用 `publish` 方法向频道 `ai-models-updated` 发布消息，消息内容为模型名称（如 GPT-5.2 chat）及版本号

### 订阅者实现

- 使用 Redis 客户端的 `pubsub()` 函数创建订阅对象，并 `subscribe` 到 `ai-models-updated` 频道
- 使用 `listen()` 函数开启 for 循环持续监听频道中的消息
- 每当收到消息时提取消息体（data 部分），打印 "The current model that was updated is ..."

### 验证

- 先启动订阅者监听循环，再运行发布者发布消息（如 GPT-5.2 chat），订阅者立即打印对应内容
- 修改发布者消息内容（改为 GPT-4.1）再次发布，订阅者同样实时收到并打印新内容
- 若有多个订阅者 Notebook 同时运行相同代码，每个订阅者都会收到完全相同的消息，验证了广播模式"一条消息发给所有订阅者"的特性

## English Short Summary

Implemented the Redis broadcast pattern across two notebooks: a subscriber that subscribes to the `ai-models-updated` channel via `pubsub()` and listens with `listen()`, and a publisher that sends JSON messages (model name/version) via `publish`. Verified that every published message is immediately printed by the subscriber, and that multiple subscribers would all receive the identical broadcasted message.
