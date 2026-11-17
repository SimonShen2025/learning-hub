---
title: "Power Automate - upload files via email"
lectureId: 146
section: 13
sectionTitle: "Expert - Workflows"
date: "2026-11-17"
tags: ["power-automate", "email-trigger", "sharepoint", "document-libraries"]
---

## 中文短总结

Power Automate 可用收件箱中的新邮件作为 Trigger，将附件写入 SharePoint Document Library。课程示例筛选含附件的邮件，并以邮件主题生成文件名；多附件、重名、来源验证和文件安全需另行处理。

## 中文长总结

### 邮件到文档库

- 选择邮件到达时触发的流程，并设置只处理含附件的邮件。
- 添加 SharePoint **Create file** 动作，指定站点、目标文档库、文件名和附件内容。
- 课程示例使用邮件主题作为文件名，并将附件写入 Financial Reports 文档库。

### 生产使用注意

- 多个附件可能需要逐个处理，并使用不会冲突的文件名。
- 应验证发件人、文件类型和大小，防范未经授权或不安全的附件。
- 使用受管理的共享邮箱和最小必要访问；避免把个人邮箱或未经审批的文件直接导入业务库。
- 处理重复邮件、连接失败及文件创建错误，并在运行历史中监控。

## English Short Summary

A Power Automate email trigger can save attachments to a SharePoint document library. The course filters for emails with attachments and uses the subject for the filename; production flows should handle multiple files, collisions, sender validation, and unsafe content.
