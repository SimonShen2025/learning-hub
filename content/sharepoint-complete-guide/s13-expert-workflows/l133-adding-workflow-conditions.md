---
title: "Adding workflow conditions"
lectureId: 133
section: 13
sectionTitle: "Expert - Workflows"
date: "2026-11-17"
tags: ["sharepoint", "automate-rules", "conditions", "notifications"]
---

## 中文短总结

SharePoint 简单规则可根据列值变化触发通知，例如 Sales Associate 改变后，将邮件发送给新的负责人。规则可从人员列选择通知对象，并通过修改记录测试条件和收件人。

## 中文长总结

### 配置条件通知

- 创建基于特定列变化的规则，例如 Sales Associate 字段改变。
- 选择该人员列作为通知收件人，使邮件发送给记录当前指定的负责人。
- 保存规则后，修改测试记录中的负责人字段并确认新负责人收到通知。

### 验证流程

测试时核对触发列、收件人和邮件内容，避免因字段映射错误而通知错误人员。更复杂的条件或跨服务动作可转用 Power Automate。

## English Short Summary

Build a rule that responds to a column change, such as a changed Sales Associate, and sends a notification to the person selected in that field. Test the rule by changing a sample item and verifying the recipient.
