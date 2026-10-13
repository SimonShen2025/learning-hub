---
title: "Extra Automation - Onboarding System"
lectureId: 60
section: 9
sectionTitle: "Use Notion + Zapier to Create Powerful Automations"
date: "2026-10-14"
tags: [employee-onboarding, zapier, workflow-automation]
---

## 中文短总结

Google Sheets 新员工记录触发 role-based Paths：按岗位选择任务/资料，AI 或模板生成任务清单，经 Formatter/Loop 拆分后建入 Asana，并发送欢迎邮件、Slack 通知和日历邀请；周末日期走人工处理兜底。

## 中文长总结

- Trigger 监听 Google Sheets 新员工行，读取姓名、邮箱、岗位和入职日期等字段。
- Paths 按岗位选择对应 onboarding 内容；从 Google Drive 获取岗位资料，或用 AI/模板生成任务清单。Formatter 与 Looping 将多项任务拆分并批量写入 Asana。
- 工作流还可发送个性化欢迎邮件、通知 Slack，并创建日历事件。日期处理需要考虑时区、工作日和周末安排。
- Fallback 处理不符合常规路径的日期（例如周末入职），通知团队人工协调。复杂 Zap 应逐条测试每条 Path、字段映射、循环任务数量和权限，再发布。

## English Short Summary

Trigger on a new Google Sheets employee row, branch by role, retrieve or generate role-specific tasks, loop them into Asana, and send a welcome email, Slack alert, and calendar invite. Handle weekend dates with a fallback and test every path before rollout.