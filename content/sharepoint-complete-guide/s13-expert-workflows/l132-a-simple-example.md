---
title: "A simple example"
lectureId: 132
section: 13
sectionTitle: "Expert - Workflows"
date: "2026-11-17"
tags: ["sharepoint", "automate-rules", "notifications", "list-items"]
---

## 中文短总结

课程使用 SharePoint 的 Automate/Rule 功能创建简单规则：客户 List 新增 Item 时向指定用户发送邮件。创建后可在规则管理处确认启用状态，并通过新增测试记录验证通知。

## 中文长总结

### 创建规则

- 从 List 的 Automate 菜单创建规则，选择 **When a new item is created** 作为触发条件。
- 选择通知对象并保存；课程示例把通知发送给当前用户。
- 在规则管理页面确认规则已启用。

### 测试

新增测试 Item 后检查通知是否收到，并核对触发条件和接收者。SharePoint 内置规则适合简单场景；若需要复杂逻辑或更多操作，可使用 Power Automate。

## English Short Summary

Create a simple SharePoint rule that emails a selected recipient when a new List item is created. Confirm the rule is enabled, add a test item, and verify the notification.
