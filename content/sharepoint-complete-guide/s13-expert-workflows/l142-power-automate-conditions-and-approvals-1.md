---
title: "Power Automate - conditions and approvals 1"
lectureId: 142
section: 13
sectionTitle: "Expert - Workflows"
date: "2026-11-17"
tags: ["power-automate", "approvals", "conditions", "sharepoint"]
---

## 中文短总结

课程建立 Repair Shops List 流程：新增 Item 时触发，并准备 Approval 字段记录审批结果。先以简单 Teams 消息测试 Trigger，再逐步加入条件和审批动作。

## 中文长总结

### 准备审批流程

- 在 Repair Shops List 中准备 Approval Choice 字段，用于记录后续决策结果。
- 创建 Automated cloud flow，选择 **When an item is created** 作为 SharePoint Trigger，并指定站点和 List。
- 在正式添加复杂逻辑前，先加入简单的测试动作，例如向 Teams Channel 发布消息。

### 分步验证

保存流程并创建测试 Item，确认 Trigger 能检测到正确的 List 事件。分阶段验证可帮助区分触发器配置问题与后续动作问题。

## English Short Summary

Prepare a Repair Shops List and an Approval field, then create an automated flow triggered by a new item. Test the SharePoint trigger with a simple action before adding conditions and approval steps.
