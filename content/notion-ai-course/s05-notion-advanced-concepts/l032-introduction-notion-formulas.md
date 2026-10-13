---
title: "Introduction & Notion Formulas"
lectureId: 32
section: 5
sectionTitle: "Notion Advanced: Dive Into More Advanced Concepts Inside Notion"
date: "2026-10-14"
tags: [notion-formulas, database-properties, calculations]
---

## 中文短总结

Formula property 可引用数据库其他 properties，执行算术、比较、条件判断和日期计算。用 `if` 返回不同结果，结合日期函数计算距离截止日的时间；字段类型与公式结果必须匹配。

## 中文长总结

- 公式是数据库 property，可读取其他字段并进行计算、逻辑判断或文本/日期处理。
- 通过 property 引用获取列值，再使用加减乘除等运算符；比较操作返回布尔结果，可作为 checkbox 或条件判断。
- `if` 根据条件返回不同值，例如按收入是否高于支出输出对应字段或文字。注意条件、真值和假值的返回类型保持兼容。
- 日期函数可对日期加减或计算两个日期间隔，用于提前复查截止任务等场景。修改源 property 后，公式结果会自动更新。
- 先从简单公式开始，逐步加入条件和日期逻辑；出现错误时检查属性名、数据类型和函数参数。

## English Short Summary

Formula properties reference other database fields for arithmetic, comparisons, conditionals, and date calculations. Use `if` for branching and date functions for intervals, while keeping property types and formula outputs compatible.