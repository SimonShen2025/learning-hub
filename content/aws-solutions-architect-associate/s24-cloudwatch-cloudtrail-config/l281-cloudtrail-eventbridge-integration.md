---
title: "CloudTrail - EventBridge Integration"
lectureId: 281
section: "s24"
sectionTitle: "AWS Monitoring & Audit: CloudWatch, CloudTrail & Config"
date: "2026-03-05"
tags: [cloudtrail, eventbridge, integration, api-calls, alerts]
---

## 中文短总结

CloudTrail + EventBridge 的重要集成：任何 AWS API 调用都会被 CloudTrail 记录，且同时作为事件出现在 EventBridge 中，可创建规则自动响应。三个示例：①DynamoDB DeleteTable → CloudTrail → EventBridge → SNS 通知②IAM AssumeRole → CloudTrail → EventBridge → SNS 通知③EC2 AuthorizeSecurityGroupIngress（修改安全组入站规则）→ CloudTrail → EventBridge → SNS 通知。可拦截任意 API 调用并触发自动化。

## 中文长总结

CloudTrail 与 EventBridge 的集成是 AWS 监控和自动化的核心模式。

**工作原理：**
- 任何 AWS API 调用 → 被 CloudTrail 记录
- 同时在 EventBridge 中生成事件
- 创建 EventBridge 规则匹配特定 API 调用 → 触发目标动作

**三个典型示例：**

1. **DynamoDB DeleteTable**
   - 用户删除 DynamoDB 表 → CloudTrail 记录 → EventBridge 规则匹配 → SNS 通知

2. **IAM AssumeRole**
   - 用户假设角色 → CloudTrail 记录 → EventBridge 规则 → SNS 通知

3. **EC2 AuthorizeSecurityGroupIngress**
   - 修改安全组入站规则 → CloudTrail 记录 → EventBridge 规则 → SNS 通知

**核心价值：** 可以拦截**任意 API 调用**并触发自动化响应，实现安全监控和合规自动化。

## 考试要点

- 任何 API 调用 → CloudTrail → EventBridge → 可触发任意目标
- 常见监控场景：删表、假设角色、修改安全组
- CloudTrail + EventBridge = 安全监控和自动化响应的核心组合

## English Short Summary

Key CloudTrail + EventBridge integration: any AWS API call is logged by CloudTrail and appears as an event in EventBridge, enabling rule-based automation. Examples: DynamoDB DeleteTable→SNS alert, IAM AssumeRole→SNS alert, EC2 AuthorizeSecurityGroupIngress (security group change)→SNS alert. Enables intercepting any API call for security monitoring and compliance automation.
