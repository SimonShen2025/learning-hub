---
title: "Lab: Build an AI pipeline with Redis Streams (Hands-On Lab)"
lectureId: 91
section: 9
sectionTitle: "Enhance AI Solutions with Azure Managed Redis"
date: "2026-09-22"
tags: ["redis", "redis-streams", "azure-openai", "hands-on-lab"]
---

## 中文短总结

使用 Redis Streams 构建一个异步 AI 推理管道：发布者通过 `xadd` 向 `ai-inference-queue` 流发布包含用户提示词的消息；订阅者（后端 worker）通过 `xgroup_create` 创建消费者组，用 `xreadgroup` 竞争读取未处理消息，提取用户提示词后调用 Azure OpenAI（GPT-4.1）生成回答，并用 `xack` 确认消息已处理完成，避免消息被重复投递或触发重试。

## 中文长总结

### 场景设定

- 发布者发布的消息包含用户提示词（user prompt）和用户 ID，意图是让后端 worker 将该提示词转发给大语言模型并返回结果
- 与广播模式不同，Redis Streams 下多个订阅者（消费者）会**竞争**同一条消息，一条消息只会被其中一个消费者处理

### 发布者实现

- 使用 `xadd` 函数向流 `ai-inference-queue` 发布消息，消息体包含 `user_prompt`（如 "tell me something about Redis task streams in a PubSub model"）和 `user_id`

### 订阅者（Worker）实现

- 编写 `process_user_message` 辅助函数：创建 Azure OpenAI 客户端，使用 GPT-4.1 模型和固定 system prompt（"you are a helpful AI assistant"）处理用户查询并返回响应
- 使用 `xgroup_create` 创建消费者组 `workers`，监听 `ai-inference-queue` 流，并设置 `mkstream=True`
- 在 while 循环中，使用 `xreadgroup` 将该 worker（如 `worker001`）加入 `workers` 消费者组，读取尚未处理的消息（`>` 符号表示只读取未处理消息），并设置并发处理数量（如同时处理 5 条）
- 从读取到的消息中提取 task ID 和消息体，取出 `user_prompt`，调用 `process_user_message` 辅助函数获得大语言模型响应并打印
- 处理完成后调用 `xack` 确认该消息已完成处理，防止消息进入重试机制；若处理过程中出现异常，则不调用 `xack`，消息保持 pending 状态以便重试或转发给其他消费者

### 验证

- 启动 worker 循环后，从发布者发送第一条消息（关于 Redis task streams），订阅者几乎实时处理并显示 LLM 回复
- 更换用户查询（关于 OpenAI）再次发布，订阅者同样快速处理并返回对应回答

## English Short Summary

Built an asynchronous AI inference pipeline using Redis Streams: a publisher uses `xadd` to push messages (containing a user prompt) onto the `ai-inference-queue` stream; a subscriber worker creates a consumer group with `xgroup_create`, competes for unprocessed messages via `xreadgroup`, forwards the prompt to Azure OpenAI (GPT-4.1) for a response, and acknowledges completion with `xack` — leaving failed messages pending for retry instead of acking them.
