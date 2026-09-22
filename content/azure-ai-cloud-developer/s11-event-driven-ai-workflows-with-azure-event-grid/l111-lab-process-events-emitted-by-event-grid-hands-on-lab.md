---
title: "Lab: Process Events emitted by Event Grid (Hands-On Lab)"
lectureId: 111
section: 11
sectionTitle: "Event-Driven AI Workflows with Azure Event Grid"
date: "2026-09-22"
tags: ["event-grid", "service-bus", "azure-openai", "python", "peek-lock"]
---

## 中文短总结

上传图片到 Storage 账户后，Event Grid 系统主题触发 Blob Created 事件，将 CloudEvents JSON 写入 Service Bus 队列（可在 Service Bus Explorer 的 Peek 模式查看，负载中的 data.url 指向图片）。Python 消费者以 Peek-Lock 模式循环读取队列消息，解析出 data.url 字段，调用支持视觉输入的 GPT-4.1 模型（Azure OpenAI Chat Completions，消息中包含 image_url 类型的内容）生成图片描述，处理成功后调用 complete_message 确认消费，处理完毕后队列消息清零。

## 中文长总结

### 触发并检查事件

- 向 Storage 账户的 images 容器上传两张图片，触发两次 Blob Created 事件
- 打开 Service Bus Explorer，以 **Peek 模式**（Peek from start）查看队列中的消息，避免消息被直接消费出队
- 消息体符合 CloudEvents Schema：包含 `id`、`source`（Storage 账户资源路径）、`specversion: 1`、`type`（Blob created 事件类型）、`subject`（被创建的 Blob 文件名），`data.url` 字段指向图片的公开访问 URL

### Python 消费者实现要点

- 使用 Service Bus 连接字符串创建 `ServiceBusClient`
- 定义辅助函数 `generate_image_description`，接收图片 URL 和模型部署名（GPT-4.1，支持视觉输入）
- 使用 Azure OpenAI 客户端调用 Chat Completions API：`messages` 中的 user 内容包含文本部分（"describe this image"）和 `image_url` 类型的视觉输入部分
- 通过 `get_queue_receiver` 以 **Peek-Lock 接收模式** 创建接收器，遍历队列中待处理消息
- 对每条消息：反序列化 JSON 负载，提取 `data.url`，调用生成描述函数并输出结果，处理成功后调用 `complete_message` 标记消息完成（从队列移除）

### 验证结果

- 两条消息依次被处理，分别得到关于 "Microsoft Foundry 与 MongoDB MCP Server 集成架构图" 和 "Microsoft Foundry Model Router 发布公告" 的准确描述
- 处理完毕后返回 Azure 门户确认 Service Bus 队列中不再有待处理消息，端到端事件驱动流水线验证通过

## English Short Summary

Uploading images fires Blob Created events via the Event Grid system topic, landing CloudEvents JSON (with a `data.url` field) in the Service Bus queue, viewable via peek mode. A Python consumer reads messages in peek-lock mode, extracts the image URL, calls a vision-capable GPT-4.1 model via Azure OpenAI to generate a description, then completes each message. Both test images were described successfully, and the queue was confirmed empty, validating the pipeline.
