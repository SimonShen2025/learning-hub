---
title: "Recurring tasks in Notion"
lectureId: 36
section: 6
sectionTitle: "Bonus: Automate your Notion workspace"
date: "2026-10-13"
tags: [zapier, recurring-tasks, notion-databases]
---

## 中文短总结

Zapier 可用 Schedule trigger 定期创建 Notion 数据库记录，弥补课程录制时 Notion 缺少原生周期任务的限制。配置频率、目标数据库和字段默认值后测试，并确保 Zapier 对数据库有编辑权限。

## 中文长总结

- 示例数据库包含任务名称、日期和完成状态；在 Zapier 创建 Schedule trigger，选择每周/每月等频率、执行日期和时间。
- 添加 Notion action 创建数据库项目，选择目标数据库并映射任务标题、日期和完成状态等属性。
- 需授权 Zapier 访问 Notion，并将目标数据库分享给集成。否则即使 Zap 配置正确，也可能无法写入。
- 测试 trigger 和 action，确认记录创建位置、日期、默认未完成状态及重复运行行为。考虑时区和重复任务策略，避免生成重复或错误日期的条目。

## English Short Summary

Use a Zapier Schedule trigger to create recurring Notion database items. Configure the interval, target database, and property values, authorize and share the database with the integration, then test timing, time zone, and duplicate behavior.