---
title: "Relational and Equality Operators"
lectureId: 10
section: 2
sectionTitle: "JavaScript Fundamentals"
date: "2026-04-29"
tags: [javascript, operators]
---

## 中文短总结

关系运算符：`>`、`<`、`>=`、`<=`，返回 boolean。相等运算符：`==`（宽松比较，只比值）和 `===`（严格比较，值 + 类型）。`1 == "1"` 为 true，`1 === "1"` 为 false。推荐使用 `===`。

## 中文长总结

### 关系/比较运算符

| 运算符 | 含义 | 示例 |
|--------|------|------|
| `>` | 大于 | `10 > 5` → true |
| `<` | 小于 | `4 < 5` → true |
| `>=` | 大于等于 | `5 >= 5` → true |
| `<=` | 小于等于 | `5 <= 5` → true |

返回值始终为 boolean（true/false）。

### 相等运算符

- **`==`（宽松比较）** — 只比较值，不比较类型。`1 == "1"` → true
- **`===`（严格比较）** — 同时比较值和类型。`1 === "1"` → false

## English Short Summary

Relational operators: `>`, `<`, `>=`, `<=` — return boolean. Equality: `==` (loose, value only) vs `===` (strict, value + type). `1 == "1"` is true, `1 === "1"` is false.
