---
title: "Lambda Hands-On"
lectureId: 214
section: "19"
sectionTitle: "Serverless Overviews from a Solution Architect Perspective"
date: "2026-03-05"
tags: ["lambda", "hands-on", "cloudwatch-logs", "iam-role", "triggers"]
---

## 中文短总结

Lambda 控制台实操 — 使用蓝图创建 Python HelloWorld 函数，演示多种事件源可触发 Lambda 并自动扩展。测试函数执行并查看 CloudWatch Logs 调试输出。配置包括内存大小、超时时间、临时存储和执行角色（IAM 角色控制 CloudWatch Logs 写入权限）。可添加触发器（如 S3 事件），Lambda 按调用量收费，低量使用在免费层内。

## English Short Summary

Lambda console hands-on: created a Python HelloWorld function from a blueprint. Demonstrated Lambda auto-scaling with multiple event sources, tested execution, and viewed results in CloudWatch Logs for debugging. Configured memory, timeout, ephemeral storage, and execution role (IAM role granting CloudWatch Logs write permissions). Showed how to add triggers (e.g., S3 events). Lambda scales automatically and bills per invocation with a generous free tier.
