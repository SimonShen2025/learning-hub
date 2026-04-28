---
title: "Logical Operators"
lectureId: 11
section: 2
sectionTitle: "JavaScript Fundamentals"
date: "2026-04-29"
tags: [javascript, operators]
---

## 中文短总结

三种逻辑运算符：**AND**（`&&`）— 所有值为 true 则为 true；**OR**（`||`）— 任一值为 true 则为 true；**NOT**（`!`）— 取反。用于组合条件表达式驱动程序逻辑流。

## 中文长总结

### 逻辑运算符

| 运算符 | 符号 | 规则 | 示例 |
|--------|------|------|------|
| AND | `&&` | 所有值都为 true → true | `true && false` → false |
| OR | `\|\|` | 任一值为 true → true | `true \|\| false` → true |
| NOT | `!` | 取反 | `!true` → false |

### 实际应用示例

驾照资格判断：
- AND — 必须年满 18 **且**是美国公民才有资格
- OR — 年满 18 **或**美国公民即有资格
- NOT — `!(6 === 10)` → true（6 不等于 10）

## English Short Summary

Logical AND (`&&`): all must be true. OR (`||`): any must be true. NOT (`!`): negation. Used to combine conditions for program flow control.
