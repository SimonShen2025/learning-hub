---
title: "Power Automate - announcement in Teams 2"
lectureId: 140
section: 13
sectionTitle: "Expert - Workflows"
date: "2026-11-17"
tags: ["power-automate", "microsoft-teams", "dynamic-content", "sharepoint"]
---

## 中文短总结

在 SharePoint 流程中增加 Teams Connector 的发布消息动作，可将负责人姓名和客户姓名等动态字段写入指定频道。配置后应保存并测试消息格式、频道范围及数据适用性。

## 中文长总结

### 增加 Teams 动作

- 在现有流程中添加 Microsoft Teams 动作，选择向 Chat 或 Channel 发布消息。
- 选择发布身份、目标 Team 和 Channel；课程示例由 Flow bot 发布到 Announcements。
- 在消息中组合静态文字与动态内容，例如销售负责人的显示名称和客户姓名。

### 测试与隐私

保存后以测试记录触发流程，确认消息发布到正确频道且字段值准确。只发送受众有权查看的最少信息；如要包含客户敏感数据，需先确认组织策略及频道成员范围。

## English Short Summary

Add a Microsoft Teams posting action to the flow, choose the posting identity and destination channel, and insert dynamic fields such as the associate and customer names. Test the output and limit details to what the channel audience is authorized to see.
