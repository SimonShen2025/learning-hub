---
title: "Create a Deadline Reminder System"
lectureId: 54
section: 9
sectionTitle: "Use Notion + Zapier to Create Powerful Automations"
date: "2026-10-14"
tags: [zapier, deadline-reminders, date-time]
---

## 中文短总结

Notion 新任务触发 Zap 后，用 Formatter 统一时区并计算截止前 24 小时，Delay until 等到提醒时间；再过滤未完成任务，通过 Gmail 和 Slack 通知负责人。

## 中文长总结

- Trigger 选择 Notion 新数据库记录，并读取任务截止日期、状态和负责人等字段。
- Formatter 统一日期/时区，再计算截止前 24 小时；Delay until 将后续流程暂停到目标时间。
- 延迟结束后用 Filter 检查任务仍未完成，再通过 Gmail 和 Slack 发送提醒，避免已完成任务仍收到通知。
- 日期边界和时区容易导致提前/延后触发；用未来日期测试完整路径，并确认 Delay 与 Filter 的顺序和条件。

## English Short Summary

When a Notion task is created, normalize its deadline and time zone, subtract 24 hours, and delay until that time. Filter out completed tasks, then notify the assignee via Gmail and Slack. Test date boundaries and time zones.