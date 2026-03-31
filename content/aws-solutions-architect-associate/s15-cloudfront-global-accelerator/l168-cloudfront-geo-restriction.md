---
title: "CloudFront - Geo Restriction"
lectureId: 168
section: 15
sectionTitle: "CloudFront & AWS Global Accelerator"
date: "2026-03-05"
tags: ["CloudFront", "Geo Restriction", "Security"]
---

## 中文短总结

本讲介绍 CloudFront Geo Restriction（地理限制）。可以基于用户所在国家限制 Distribution 访问。两种列表：**Allow List**（允许的国家）和 **Block List**（拒绝的国家）。国家判定使用**第三方 Geo-IP 数据库**匹配用户 IP。用例：版权法内容访问控制。在 CloudFront Security 设置中配置。

## 中文长总结

### Geo Restriction
- 基于用户所在**国家**限制访问

### 两种模式
| 模式 | 说明 |
|------|------|
| **Allow List** | 只允许特定国家访问 |
| **Block List** | 拒绝特定国家访问 |

### 国家判定
- 使用**第三方 Geo-IP 数据库**
- 匹配用户 IP → 国家

### 用例
- 版权法内容访问控制

## 考试要点

- Geo Restriction = 基于国家的访问控制
- Allow List 或 Block List
- 第三方 Geo-IP 数据库判定国家

## English Short Summary

CloudFront Geo Restriction limits distribution access based on user's country. Two modes: Allow List (approved countries only) or Block List (banned countries). Country is determined using a third-party Geo-IP database matching user IP to country. Use case: copyright law content access control. Configured in CloudFront Security settings.
