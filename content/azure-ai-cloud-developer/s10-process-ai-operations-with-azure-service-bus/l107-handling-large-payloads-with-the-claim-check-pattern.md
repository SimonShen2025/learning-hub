---
title: "Handling Large Payloads with the claim-check Pattern"
lectureId: 107
section: 10
sectionTitle: "Process AI Operations with Azure Service Bus"
date: "2026-09-22"
tags: ["service-bus", "claim-check-pattern", "azure-storage"]
---

## 中文短总结

由于 Azure Service Bus 消息体大小有限制（无法直接承载图片等大体积二进制数据），claim-check 模式的做法是：将大文件（如图片）上传至 Azure 存储账户后，只把文件的 URL（即"凭据/claim"）放入 JSON 消息载荷发送到队列；消费者接收到消息后，凭该 URL 去下载文件（即"核验/check"）并进行后续处理（如调用视觉大语言模型生成图片描述）。

## 中文长总结

### 问题背景

- 场景：图片被上传至 Azure 存储账户作为 Blob，目标是让大语言模型基于图片内容（视觉输入）生成描述或说明，并将结果存回存储账户或数据库
- 问题：Azure Service Bus 队列消息体大小存在限制（以 KB 计），无法直接将图片这类大体积二进制数据作为 JSON 载荷放入消息中

### Claim-Check 模式的实现

1. **Claim（凭据）**：图片上传到 Azure 存储账户后，获取该图片的 URL，并将该 URL（而非图片本身）放入 JSON 消息载荷中发送至 Service Bus 队列
2. **Check（核验）**：消费者接收到消息后，从 JSON 载荷中提取图片 URL，检查该图片是否存在；若存在则下载图片，并用其调用大语言模型完成业务逻辑（如生成图片描述）

### 价值

- 该模式巧妙地绕开了消息队列系统对消息体大小的限制，是处理大体积数据（图片、文档等）与消息队列系统结合使用的标准做法

## English Short Summary

Because Azure Service Bus message bodies have a size limit (too small for images or other large binary data), the claim-check pattern uploads the large file to Azure Storage first, then sends only its URL (the "claim") in the JSON message payload; the consumer receives the message, retrieves the URL, downloads the file (the "check"), and proceeds with processing (e.g., calling a vision LLM to generate an image caption).
