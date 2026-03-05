---
title: "Amazon EventBridge - Hands On"
lectureId: 277
section: "s24"
sectionTitle: "AWS Monitoring & Audit: CloudWatch, CloudTrail & Config"
date: "2026-03-05"
tags: [eventbridge, hands-on, event-pattern, schedule]
---

## 中文短总结

实操演示 EventBridge 功能：①创建 Event Pattern 规则——监控 EC2 实例状态变化（shutting-down/terminated），目标为 SNS Topic 发送通知②EventBridge Schedule——创建定时规则（如每小时调用 Lambda），支持一次性/Cron/Rate 表达式③Event Bus——默认总线（AWS 事件）+ 自定义总线④事件归档（Archive）和重放（Replay）⑤Partner Event Sources（Auth0 等 SaaS 集成）⑥API Destinations（连接外部 HTTP 端点）⑦Schema Registry（查看所有 AWS 事件 Schema，也可创建自定义 Registry）。

## English Short Summary

Hands-on demo of EventBridge features: (1) Event Pattern rule monitoring EC2 state changes (shutting-down/terminated) with SNS notification target; (2) EventBridge Schedule for timed rules (hourly Lambda invocation, one-time/Cron/Rate); (3) Event Buses — default + custom; (4) Event Archive and Replay; (5) Partner Event Sources (Auth0, etc.); (6) API Destinations for external HTTP endpoints; (7) Schema Registry for viewing all AWS event schemas and creating custom registries.
