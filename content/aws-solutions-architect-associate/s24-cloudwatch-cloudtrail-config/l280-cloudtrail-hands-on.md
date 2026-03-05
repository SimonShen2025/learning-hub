---
title: "CloudTrail Hands On"
lectureId: 280
section: "s24"
sectionTitle: "AWS Monitoring & Audit: CloudWatch, CloudTrail & Config"
date: "2026-03-05"
tags: [cloudtrail, hands-on, audit]
---

## 中文短总结

实操演示 CloudTrail：查看 Event History（最近 90 天的管理事件），可看到所有 API 调用记录。演示终止一个 EC2 实例后，约 5 分钟后在 CloudTrail 中出现 TerminateInstances API 调用记录，包含事件来源（EC2）、访问密钥、区域等信息，以及完整的事件 JSON 详情。

## English Short Summary

Hands-on demo of CloudTrail: viewing Event History (last 90 days of management events) showing all API call records. After terminating an EC2 instance, the TerminateInstances API call appeared in CloudTrail within ~5 minutes, showing event source (EC2), access key, region, and full event JSON details.
