---
title: "Introduction to Notion formulas"
lectureId: 24
section: 3
sectionTitle: "Advanced concepts"
date: "2026-10-13"
tags: [notion-formulas, database-properties, data-transformation]
---

## 中文短总结

Formula property 可读取其他 properties 并进行运算、比较和条件判断。常见组件包括 `prop`、算术/逻辑运算符、`if` 和日期/文本函数；先理解输入类型与返回类型，再组合公式。

## 中文长总结

- 公式通过 property 名称读取当前记录字段，可进行乘法、大小比较等操作；比较结果可作为 true/false 条件。
- `if` 根据条件返回不同值，例如比较两个数字后生成文字结果。公式函数可完成字符长度、当前日期或文本替换等操作。
- `now()` 可取得当前日期/时间，结合日期属性可计算距离截止日的时间。公式输出类型需与后续使用场景匹配。
- 复杂公式比普通属性更难调试；先从单一输入和简单运算开始，确认结果后再组合条件和函数。非所有数据库都需要公式。

## English Short Summary

Formula properties read other fields and apply arithmetic, comparisons, conditional logic, and functions such as date or text operations. Understand input and output types, start with simple expressions, and add complexity only when the workflow requires it.