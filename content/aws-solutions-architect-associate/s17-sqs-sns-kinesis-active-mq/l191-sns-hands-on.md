---
title: "SNS - Hands On"
lectureId: 191
section: "s17"
sectionTitle: "Decoupling applications: SQS, SNS, Kinesis, Active MQ"
date: "2026-03-05"
tags: [sns, hands-on, topic, subscription, aws]
---

## 中文短总结

本实操演示了 SNS 的完整使用流程：创建 Standard Topic（对比 FIFO Topic）、配置加密和访问策略、创建 Email 订阅并确认、发布消息并验证邮件接收。FIFO Topic 名称必须以 `.fifo` 结尾且只能由 SQS 队列订阅。订阅支持多种协议（Kinesis Data Firehose、SQS、Lambda、Email、HTTP(S)、SMS）并可设置 Filter Policy。演示了 Fan Out 实现方式及清理（删除订阅和 Topic）。

## English Short Summary

This hands-on walks through creating an SNS Standard Topic (vs. FIFO Topic), configuring encryption and access policies, creating an Email subscription with confirmation, and publishing a test message. Key observations: FIFO topics must end with `.fifo` and only support SQS queue subscribers; Standard topics support Email, SMS, HTTP(S), SQS, Lambda, and Kinesis Data Firehose. Subscription filter policies can be configured to route specific messages. The SQS fan-out pattern is achieved by subscribing multiple SQS queues to one SNS topic. Cleanup involves deleting subscriptions and the topic.
