---
title: "Project: Create a meeting notes database"
lectureId: 12
section: 2
sectionTitle: "Notion databases"
date: "2026-10-13"
tags: [meeting-notes, notion-databases, database-templates]
---

## 中文短总结

会议记录数据库可用 table 管理主题和类型、用 calendar 查看安排，并以 Created time 自动记录创建日期。为 1:1、季度会议和 stand-up 建立模板，让记录结构一致。

## 中文长总结

- 在工作区的 Meeting Notes 页面创建独立数据库，添加会议名称、类型和日期等属性；类型可用 Select 表示。
- 若需要记录条目创建时间而非手工输入会议日期，可用 Created time 属性自动填充；如果需要表示实际会议时间，则应另设 Date 属性。
- 建立 calendar view 展示会议记录，并为 1:1、季度回顾和 stand-up 会议分别创建模板，预置议题、目标、变化和结果等区块。
- 创建新会议时选择相应模板，自动获取属性默认值和页面结构；测试不同会议模板与日历视图是否符合团队流程。

## English Short Summary

Create a meeting database with a table and calendar view, using a Select property for meeting type. Created time can automatically record entry creation; add a separate Date property for the actual meeting time. Templates standardize 1:1, quarterly, and stand-up notes.