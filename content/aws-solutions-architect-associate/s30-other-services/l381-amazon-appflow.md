---
title: "Amazon AppFlow"
lectureId: 381
section: "s30"
sectionTitle: "Other Services"
date: "2026-03-05"
tags: [appflow, saas-integration, data-transfer, salesforce, privatelink]
---

## 中文短总结

Amazon AppFlow：全托管 SaaS 到 AWS 数据集成服务。从 **Salesforce / SAP / Zendesk / Slack** 等源安全传输数据到 **S3 / Redshift** 等目标（或反向传到 **Snowflake / Salesforce**）。**三种触发**：按计划（Schedule）、事件驱动（Event）、按需（On-Demand）。支持数据变换（Transformation）、过滤（Filter）、验证（Validation）。数据加密传输，可选 **PrivateLink**（数据不经公网 → 更安全）。解决的问题：无需写自定义集成代码。

## 中文长总结

AppFlow 简化 SaaS ↔ AWS 的数据流。

**数据流方向：**
```
SaaS 源（Salesforce/SAP/Zendesk/Slack...）
    ↓ AppFlow（变换 + 过滤 + 验证）
AWS 目标（S3/Redshift）

也支持反向：
AWS → Salesforce/Snowflake
```

**三种触发模式：**
| 模式 | 说明 |
|------|------|
| Schedule | 定时触发 |
| Event | 事件触发 |
| On-Demand | 手动触发 |

**安全：**
- 传输加密
- PrivateLink 可选 → 数据不经公网

## 考试要点

- AppFlow = SaaS ↔ AWS 托管集成
- 无需自定义代码
- 支持 Salesforce/SAP/Zendesk/Slack 等
- 目标：S3/Redshift/Snowflake/Salesforce
- PrivateLink = 数据不经公网

## English Short Summary

Amazon AppFlow: fully managed SaaS-to-AWS data integration. Securely transfer data from **Salesforce/SAP/Zendesk/Slack** to **S3/Redshift** (or reverse to Snowflake/Salesforce). Three trigger modes: schedule/event/on-demand. Supports data transformation, filtering, and validation. Encrypted transfer with optional **PrivateLink** (data never traverses public internet). No custom integration code needed.
