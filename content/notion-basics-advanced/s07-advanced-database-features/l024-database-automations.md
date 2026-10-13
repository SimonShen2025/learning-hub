---
title: "ADVANCED: Database Automations"
lectureId: 24
section: 7
sectionTitle: "Advanced Database Features"
date: "2026-10-13"
tags: [notion-automations, databases, workflow]
---

## 中文短总结

Notion database automation 由触发条件和动作组成，可将重复更新自动化。示例是在 Status 变为 Done 时，把 Complete date 设为触发日期；启用后应实际触发测试并确认结果。

## 中文长总结

- 自动化适合已有稳定规则的项目或任务数据库。先选择触发事件，再定义需要执行的动作；例如记录状态更新为 Done 时自动填写完成日期。
- 配置时确认触发 property、目标 property 和动作值相匹配。避免创建会反复触发或覆盖手工数据的规则。
- 保存并启用后，用测试记录触发规则，检查是否只在预期条件下运行，以及目标字段是否正确更新。
- 本讲聚焦 Notion 原生数据库自动化。跨服务通知或 Slack 集成属于额外的集成场景，应单独配置并验证权限与触发条件。

## English Short Summary

Native database automations pair a trigger with an action. For example, when Status changes to Done, set Complete date to the trigger date. Enable the rule only after checking its properties, then test that it runs under the intended conditions.