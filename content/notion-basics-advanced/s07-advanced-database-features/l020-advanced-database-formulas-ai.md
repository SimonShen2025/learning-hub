---
title: "ADVANCED Database Formulas Using AI"
lectureId: 20
section: 7
sectionTitle: "Advanced Database Features"
date: "2026-10-13"
tags: [notion-formulas, database-automation, ai-assistance]
---

## 中文短总结

Notion 公式可引用数据库 properties 实现计算与条件判断。先明确属性名称、类型和预期逻辑，再让 ChatGPT 生成公式；遇到类型错误时提供 Notion 报错并迭代修正，最后验证边界数据。

## 中文长总结

- 公式 property 可基于同一记录中的其他属性计算，例如计算互动率，或依据状态生成进度百分比、逾期标记和通过/失败结果。
- 编写提示时准确提供现有 property 名称、类型、目标条件及预期输出；需要时附上数据库结构或错误信息，降低公式与实际字段不匹配的风险。
- 将 AI 生成的公式粘贴到 Notion 后检查错误提示，并把错误原文交回 AI 修复。不要只确认公式能保存，还要用高于、低于、空值等代表性记录核验结果。
- 简单公式可直接在 Notion 中编写；较复杂逻辑可借助 AI 起草，但生成结果需要人工验证。课程建议可用免费 ChatGPT 方案，无需为此默认订阅付费服务。

## English Short Summary

Notion formulas can reference database properties for calculations and conditional results. Give an AI assistant exact property names, types, and desired behavior; iterate using Notion's error messages, then test representative and boundary cases before relying on the formula.