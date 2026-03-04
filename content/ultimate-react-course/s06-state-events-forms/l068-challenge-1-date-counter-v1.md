---
title: "CHALLENGE #1: Date Counter (v1)"
lectureId: 68
section: 6
sectionTitle: "State, Events, and Forms: Interactive Components"
date: "2026-03-04"
tags: [react, challenge, useState, date]
---

## 中文短总结

编程挑战：构建日期计数器。两个按钮（+/-）控制 `count` state，显示当前日期 +/- count 天后的日期。使用 `useState` 管理计数、用 JS Date API 计算日期。实践 state 更新和事件处理。

## 中文长总结

### 挑战内容
- 显示当前日期
- +/- 按钮改变 count（天数偏移）
- 动态计算 "X days from today is [date]" 或 "X days ago was [date]"
- 使用 `new Date()` + `setDate()` 计算目标日期

### 技术要点
- `useState(0)` 管理 count
- 事件处理：`onClick={() => setCount(c => c + 1)}`
- 日期计算：`date.setDate(date.getDate() + count)`
- 条件文本：count > 0 → "from today"，count < 0 → "ago"

## English Short Summary

Challenge: build a Date Counter with +/- buttons controlling a count state. Display calculated date (today ± count days) using JS Date API. Practice useState, event handling, and dynamic text rendering based on state value.
