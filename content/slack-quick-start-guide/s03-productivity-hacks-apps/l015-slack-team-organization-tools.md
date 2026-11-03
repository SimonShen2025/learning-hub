---
title: "Slack Team Organization Tools"
lectureId: 15
section: 3
sectionTitle: "Productivity hacks - Apps"
date: "2026-11-03"
tags: ["slack", "polls", "email-to-slack", "task-lists", "keyword-alerts"]
---

## 中文短总结

三个团队组织技巧：1）**简易投票**：问题下方用 Shift+Enter 换行，加 block quote，每行一个 emoji 选项（👍 yes、👎 no），成员用 reaction 投票并自动计数；复杂调查可以装 survey app。2）**Email to Slack**：channel 设置 → Integrations → Send emails to this channel，生成专属邮箱，转发的邮件会贴进 channel，可自定义显示名称。3）**Task list**：channel 内的 list tab，加 due date、owner、description、complete checkbox 等字段；消息可用 Add to list 直接变成任务，支持 Kanban 视图。Pro tip：设置 keyword alerts。

## 中文长总结

### 1. 简易投票（Polls）

- 不是原生功能，用消息格式实现：适合快速收集意见或签批（如“Do you sign off on this project?”）
- 写法：输入问题 → **Shift+Enter** 换行 → **block quote** → 每行一个 emoji 加选项（👍 Yes、👎 No，可以更多）
- 成员用对应 emoji reaction 投票，消息下方自动显示计数
- 需要更专业的调查和分析：App Marketplace 搜 survey apps

### 2. Email to Slack

- 用途：多渠道客户支持（邮件、电话、Slack），外部顾问或供应商的项目更新等
- 邮件在 channel 中显示发件人、收件人、主题和正文
- 设置：channel 管理面板 → **Integrations** → **Send emails to this channel** → 生成该 channel 专属的邮箱地址
- 转发到这个地址的邮件会自动贴进 channel
- 可删除地址以停止接收；**Customize email appearance**：修改图标和显示名称（如“Customer request”）
- 可以和 workflow 结合，例如把邮件自动变成 task list 上的 action item

### 3. Task list

- Channel 内 + → List → Create new list（如“Task List”），添加 task 1、2、3
- Channel 代表团队时，用来集中管理团队 action items、周会议程；1:1 channel 中可当作共享任务清单
- 打开 item → **Add field**：
  - **Due by**（date）
  - **Owner**（people）
  - **Description**（text，支持列表和链接）
  - **Complete?**（checkbox）
- 任意消息（包括转进来的邮件）→ **Add to list**：选 list、命名（如“New customer request”）、设 due date 和 owner、加备注，邮件会附在 task 上
- 拖拽调整列顺序；**Kanban board** 视图，按完成状态分组

### Pro tip：keyword alerts

- Preferences → Notifications → My keywords，添加 deadline、problem、urgent 等词
- 即使没被 @，在所在 channel 出现这些词时也会收到通知，不用逐条读消息也能跟上团队讨论

## English Short Summary

Three team organization hacks: quick polls (question + block-quoted emoji options, people vote with reactions; use survey apps for more), email-to-Slack (a channel-specific email address via Integrations, with customizable sender name), and task lists (a list tab with due date, owner, description and completion fields, Add to list from any message, Kanban view). Tip: set notification keyword alerts.
