---
title: "Typeform to Notion automation"
lectureId: 35
section: 6
sectionTitle: "Bonus: Automate your Notion workspace"
date: "2026-10-13"
tags: [typeform, notion-integrations, data-mapping]
---

## 中文短总结

Typeform 提交可通过原生集成写入 Notion 客户反馈数据库。先建立匹配的问题和字段，再授权连接并逐项映射；测试提交以验证字段类型和值正确落库。

## 中文长总结

- 准备接收反馈的 Notion 数据库，例如 Name、Like the call、Rating、URL 和 Feedback。
- 在 Typeform 创建对应问题，再连接 Notion 并授权目标 workspace/database。
- 将每个 Typeform 问题映射到相应 Notion 属性，确保字段类型兼容：文本映射文本、评分映射数字、是否喜欢映射 checkbox、网站地址映射 URL。
- 保存映射后提交测试表单，检查 Notion 新记录的字段是否正确。字段名称相似不代表含义相同，映射错误时应回到集成配置修正。
- 集成启用后，后续表单响应可自动新增数据库记录，再使用 Notion 视图进行筛选和分析。

## English Short Summary

Connect Typeform to a Notion feedback database, authorize the target workspace, and map each question to a compatible property type. Submit a test response and verify every field before relying on the integration.