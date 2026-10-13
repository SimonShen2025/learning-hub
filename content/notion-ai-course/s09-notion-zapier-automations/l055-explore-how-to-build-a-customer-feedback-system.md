---
title: "Explore How To Build a Customer Feedback System"
lectureId: 55
section: 9
sectionTitle: "Use Notion + Zapier to Create Powerful Automations"
date: "2026-10-14"
tags: [customer-feedback, zapier-paths, notion-integrations]
---

## 中文短总结

新反馈进入 Notion 后，Zapier 按 1–2、3、4–5 星分为负面、中性、正面路径。分支可复制记录、发送定制邮件/Slack 通知；负面反馈还创建 Asana 任务并设 48 小时处理期限。

## 中文长总结

- Trigger 监听 Notion 新反馈记录，字段包括客户、邮箱、产品、评分和反馈文本。
- 用 Paths 按评分分流：1–2 星为负面、3 星为中性、4–5 星为正面；每条路径执行不同的数据库记录和沟通动作。
- 负面路径会通知团队、向客户发送致歉/沟通邮件，并在 Asana 创建跟进任务，截止时间设为 48 小时；中性路径发送普通反馈信息，正面路径发送感谢和优惠码。
- 使用 Filter/Paths 时测试边界评分（2、3、4）确保条件互斥且无遗漏；核对客户信息、邮件文案和任务负责人，避免错误分流。

## English Short Summary

Route new Notion feedback by rating: 1–2 negative, 3 neutral, and 4–5 positive. Paths create tailored records and messages; negative feedback also creates an Asana task due within 48 hours. Test boundary ratings and mappings.