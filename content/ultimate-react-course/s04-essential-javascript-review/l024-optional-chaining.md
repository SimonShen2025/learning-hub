---
title: "Optional Chaining"
lectureId: 24
section: 4
sectionTitle: "[Optional] Review of Essential JavaScript for React"
date: "2026-03-04"
tags: [javascript, optional-chaining]
---

## 中文短总结

可选链（`?.`）在访问可能不存在的嵌套属性时，如果中间值为 `null`/`undefined` 则立即返回 `undefined`，避免 `TypeError`。可用于属性访问（`obj?.prop`）、方法调用（`obj?.method()`）和数组索引（`arr?.[0]`）。React 中处理 API 数据时非常常用（数据可能缺失）。

## 中文长总结

### 问题场景
```javascript
// 如果 book.reviews.librarything 不存在 → TypeError!
const count = book.reviews.librarything.reviewsCount;
```

### 可选链解决方案
```javascript
const count = book.reviews?.librarything?.reviewsCount ?? 0;
```
- 任何环节为 `null`/`undefined` → 整个表达式返回 `undefined`
- 通常配合 `??` 提供默认值

### 语法形式
| 形式 | 示例 |
|------|------|
| 属性访问 | `obj?.prop` |
| 嵌套属性 | `obj?.a?.b?.c` |
| 方法调用 | `obj?.method()` |
| 数组索引 | `arr?.[0]` |

### React 中的应用
- API 数据可能部分缺失：`user?.profile?.avatar`
- 防止访问空列表的元素：`items?.[0]?.name`
- 条件方法调用：`onSubmit?.(data)`

## English Short Summary

Optional chaining (`?.`) short-circuits to `undefined` when accessing properties on `null`/`undefined`, preventing `TypeError`. Works on properties, methods, and array indices. Commonly paired with `??` for defaults. Essential in React when handling API data with potentially missing nested fields.
