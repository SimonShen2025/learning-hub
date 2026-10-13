---
title: "Automatically Get Notified in Slack With ADVANCED Notion Integration"
lectureId: 39
section: 11
sectionTitle: "Notion Integrations"
date: "2026-10-13"
tags: [slack, notion-automations, notifications]
---

## 中文短总结

连接 Slack 与 Notion 后，可在数据库自动化中将状态变化或相关事件转成 Slack 通知，发送给指定成员或频道。先明确触发条件和目标，再测试通知内容及接收范围。

## 中文长总结

- 在 Notion Integrations 搜索 Slack，添加集成并授权 Slack workspace。确认 Notion 和 Slack 使用的是预期账号及工作区。
- 在数据库自动化中设置触发条件，例如任务状态变化或负责人相关更新，再添加发送 Slack 消息的动作。
- 选择通知对象：可以是特定成员，也可以是团队频道。为消息包含足够上下文，便于接收者定位对应记录。
- 先用测试记录验证触发时机、消息内容、频道/成员和重复通知行为，再用于真实团队流程。若映射或权限不正确，自动化可能无法发送或会通知错误对象。

## English Short Summary

Connect Slack to Notion, then use database automations to send notifications when selected events occur, such as a status change. Choose a person or channel, include useful context, and test trigger behavior and permissions before rollout.