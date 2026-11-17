---
title: "Power Automate - announcement in Teams 3"
lectureId: 141
section: 13
sectionTitle: "Expert - Workflows"
date: "2026-11-17"
tags: ["power-automate", "microsoft-teams", "flow-testing", "sharepoint"]
---

## 中文短总结

课程新增测试客户记录，验证流程同时发送邮件并向 Teams Channel 发布公告。Power Automate 的 Run history 可确认运行和各动作是否成功；测试消息范围应与正式通知范围一致。

## 中文长总结

### 验证多服务流程

- 在 SharePoint List 新建测试记录，确保 Sales Associate 字段和其他动态数据已填写。
- 检查 Power Automate Run history，确认 SharePoint Trigger、邮件动作和 Teams 消息动作均成功。
- 在指定 Teams Channel 检查负责人、客户和其他字段是否正确呈现。

### 上线前检查

测试应使用适当的数据和受众。发布通知前确认频道成员有权查看相关信息，并避免把不必要的客户数据广播给整个组织。

## English Short Summary

Test the flow with a new SharePoint item, then inspect run history and confirm both the email and Teams post succeeded with correct dynamic values. Verify the channel audience is authorized for the information.
