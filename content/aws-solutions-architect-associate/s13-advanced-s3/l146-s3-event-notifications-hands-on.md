---
title: "S3 Event Notifications - Hands On"
lectureId: 146
section: 13
sectionTitle: "Advanced Amazon S3"
date: "2026-03-05"
tags: ["S3", "Event Notifications", "SQS", "EventBridge", "Hands-On"]
---

## 中文短总结

本讲演示了 S3 Event Notifications 的配置流程。在 Properties 中创建 Event Notification，选择 All Object Create Events，目标选择 SQS Queue。需要先创建 SQS Queue 并修改其 Access Policy 允许任何人 SendMessage（否则 S3 无法发送消息会报错）。上传 coffee.jpg 后，SQS Queue 中收到事件消息，包含 `eventName: ObjectCreated:Put` 和 `key: coffee.jpg` 信息。还展示了 EventBridge 集成的启用方式（在 Properties 中一键开启）。

## English Short Summary

This hands-on configures S3 Event Notifications to SQS. Steps: create event notification for All Object Create Events, create an SQS queue, modify its access policy to allow SendMessage (required — otherwise S3 can't write and returns an error). After uploading coffee.jpg, the SQS queue receives an event message with `eventName: ObjectCreated:Put` and `key: coffee.jpg`. Also demonstrates enabling EventBridge integration with a single toggle in Properties.
