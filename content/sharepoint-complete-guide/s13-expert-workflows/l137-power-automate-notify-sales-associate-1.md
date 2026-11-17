---
title: "Power Automate - notify sales associate 1"
lectureId: 137
section: 13
sectionTitle: "Expert - Workflows"
date: "2026-11-17"
tags: ["power-automate", "sharepoint", "email-notifications", "dynamic-content"]
---

## 中文短总结

课程使用 SharePoint Item-created Trigger 建立 Power Automate 流程，并以 Sales Associate 人员列中的邮箱作为收件人。邮件可插入新客户姓名、联系方式和 Item 链接等动态内容。

## 中文长总结

### 建立流程

- 从 SharePoint List 的 Automate/Integrate 入口选择 Power Automate 模板。
- 配置 SharePoint 站点和目标 List，并使用 **When an item is created** 触发器。
- 添加邮件动作，将收件人设置为 Sales Associate 列提供的邮箱。
- 在主题和正文中插入新 Item 的动态字段，例如姓名、电子邮件、电话及 Item 链接。

### 部署前检查

确认目标 List、人员列映射和邮件收件人正确，并仅包含业务所需信息。Power Automate 的访问和模板可能受许可证、连接器及租户设置影响。

## English Short Summary

Create a Power Automate flow triggered when a SharePoint item is created, and email the address in its Sales Associate person field. Use dynamic content for relevant customer details and an item link, then verify mappings and access before rollout.
