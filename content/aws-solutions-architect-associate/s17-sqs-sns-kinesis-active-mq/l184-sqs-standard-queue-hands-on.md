---
title: "SQS - Standard Queue Hands On"
lectureId: 184
section: "s17"
sectionTitle: "Decoupling applications: SQS, SNS, Kinesis, Active MQ"
date: "2026-03-05"
tags: [sqs, standard-queue, hands-on, aws]
---

## 中文短总结

本实操演示了在 SQS 控制台创建标准队列（Standard Queue）的完整流程：配置消息保留期（4 天）、最大消息大小（256KB）、加密方式（SSE-SQS 或 KMS）、访问策略（类似 S3 Bucket Policy 的资源策略）。演示了发送消息、轮询接收消息、查看消息详情（消息体、接收次数等），以及删除已处理消息和清空队列（Purge）的操作。

## English Short Summary

This hands-on demonstrates creating an SQS Standard Queue via the console — configuring retention (4 days), max message size (256KB), encryption (SSE-SQS or KMS), and access policies (resource-based, similar to S3 bucket policies). It walks through sending messages, polling/receiving messages (viewing body, metadata, receive count), deleting processed messages, and purging the queue. The demo also shows monitoring metrics like approximate age of oldest message and queue depth.
