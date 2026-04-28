---
title: "Conditional Statements"
lectureId: 12
section: 2
sectionTitle: "JavaScript Fundamentals"
date: "2026-04-29"
tags: [javascript, control-flow]
---

## 中文短总结

条件语句用 `if / else if / else` 根据条件分支执行不同代码。条件表达式求值为 boolean，`if` 块在 true 时执行，`else` 块在 false 时执行。可链接多个 `else if` 处理多种条件。

## 中文长总结

### 基本语法

```javascript
if (condition) {
  // condition 为 true 时执行
} else if (condition2) {
  // condition2 为 true 时执行
} else {
  // 以上条件都不满足时执行
}
```

- 括号内的条件必须求值为 boolean（true/false）
- 可与逻辑运算符组合：`if (age >= 18 && isUSCitizen)`
- 可链接多个 `else if` 处理多分支场景

## English Short Summary

`if / else if / else` executes different code blocks based on boolean conditions. Combine with logical operators for complex conditions. Chain multiple `else if` for multi-branch logic.
