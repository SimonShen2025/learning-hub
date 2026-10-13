---
title: "Build an Efficient Data Storage System"
lectureId: 53
section: 9
sectionTitle: "Use Notion + Zapier to Create Powerful Automations"
date: "2026-10-14"
tags: [google-forms, notion-integrations, slack]
---

## 中文短总结

Google Forms 提交后，Zapier 将姓名、邮箱、产品类型和反馈映射到 Notion；随后 Gmail 自动确认收件，并向 Slack 发送团队通知。Select 字段需使用匹配的自定义值。

## 中文长总结

- Trigger 选择 Google Forms 的 New Form Response，并先提交测试响应，确保 Zapier 能读取完整样例字段。
- Action 在 Notion 创建数据库记录，映射姓名、姓氏、邮箱、产品类型和反馈。Select 等选项属性需映射到合法选项或使用 custom value。
- 后续 Gmail action 向提交者发送确认邮件，并插入姓名等变量；Slack action 将关键信息通知团队。
- 测试每一步并检查最终记录、邮件收件人/内容和 Slack 消息。字段类型、变量映射或权限错误可能导致流程部分失败。

## English Short Summary

On a Google Forms response, map submitted fields into Notion, send a Gmail acknowledgment, and post a Slack notification. Test sample data, ensure select values match, and verify each action's recipient and output.