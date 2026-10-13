---
title: "Let's Create Your First Automation To Save Time!"
lectureId: 52
section: 9
sectionTitle: "Use Notion + Zapier to Create Powerful Automations"
date: "2026-10-14"
tags: [zapier, gmail, notion-databases]
---

## 中文短总结

示例用 Gmail 的 New Attachment 作为 trigger，在 Notion 创建数据库记录保存邮件信息和附件。连接 Gmail/Notion、选择目标库、映射字段、测试记录，再发布 Zap。

## 中文长总结

- 创建 Zap 并选择 Gmail 的 New Attachment 事件；配置 Inbox 等来源后测试 trigger，确保有可用样例数据。
- 添加 Notion Create Database Item action，选择目标数据库，将邮件标题、正文、附件和日期映射到相应属性。
- 确认目标数据库已授权给 Zapier；测试 action 后检查 Notion 中记录位置、文件链接及字段值。
- 测试成功后发布 Zap。后续新邮件附件会触发相同流程；注意筛选范围，避免无关附件大量进入数据库。

## English Short Summary

Trigger a Zap on a new Gmail attachment, then create a Notion database item with mapped email and file data. Test the trigger and action, verify the destination and fields, and publish only after confirming access and scope.