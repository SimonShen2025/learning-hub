---
title: "Amazon Pinpoint"
lectureId: 374
section: "s30"
sectionTitle: "Other Services"
date: "2026-03-05"
tags: [pinpoint, marketing, sms, push-notifications, campaigns]
---

## 中文短总结

Amazon Pinpoint：双向可扩展营销通信服务。支持 Email / SMS / Push 通知 / Voice / In-App 消息。主要用例是 SMS 营销。功能：分段 + 个性化消息、接收回复、数十亿消息/天。**与 SNS/SES 的区别**：SNS/SES 需要应用管理受众/内容/调度；Pinpoint 提供消息模板、投递调度、细分受众、完整营销活动管理。事件（投递成功/回复等）可发送到 SNS / Kinesis Data Firehose / CloudWatch Logs 做自动化。

## 中文长总结

Pinpoint 是 SNS/SES 的营销升级版。

**Pinpoint vs SNS/SES：**

| 特性 | SNS/SES | Pinpoint |
|------|---------|---------|
| 受众管理 | **应用负责** | **Pinpoint 管理** |
| 内容模板 | 应用自建 | 内置模板 |
| 投递调度 | 应用控制 | Pinpoint 调度 |
| 细分受众 | 无 | ✅ 分段+个性化 |
| 营销活动 | 无 | ✅ 完整 Campaign |

**事件回调：** text success / delivered / replies → SNS / Firehose / CloudWatch Logs

## 考试要点

- Pinpoint = 完整营销通信服务（超越 SNS/SES）
- 主要用于 SMS 营销
- 管理受众/模板/调度/Campaign
- 区别：SNS/SES 应用管理一切，Pinpoint 服务管理一切

## English Short Summary

Amazon Pinpoint: scalable two-way marketing communication service (email/SMS/push/voice/in-app). Main use case: SMS marketing. Features: segment + personalize messages, receive replies, billions/day. **Difference from SNS/SES**: SNS/SES = application manages audience/content/schedule; **Pinpoint = service manages** message templates, delivery schedules, segments, and full campaigns. Events (success/delivered/replies) → SNS/Firehose/CloudWatch Logs for automation.
