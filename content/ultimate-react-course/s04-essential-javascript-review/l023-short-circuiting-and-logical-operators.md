---
title: "Short-Circuiting And Logical Operators: &&, ||, ??"
lectureId: 23
section: 4
sectionTitle: "[Optional] Review of Essential JavaScript for React"
date: "2026-03-04"
tags: [javascript, short-circuiting, logical-operators, nullish-coalescing]
---

## 中文短总结

**短路求值**：`&&` 第一个 falsy 值短路返回，否则返回最后一个值；`||` 第一个 truthy 值短路返回。**`??`（空值合并）**：仅在 `null`/`undefined` 时返回右侧值（`0` 和 `""` 被视为有效值，与 `||` 不同）。React 中 `&&` 用于条件渲染，`??` 用于安全的默认值。

## 中文长总结

### && 运算符
```javascript
true && "Hello"  // → "Hello"（返回最后一个值）
false && "Hello" // → false（短路，返回第一个 falsy 值）
```
- React 中条件渲染：`{hasReviews && <ReviewList />}`
- **注意**：`{0 && <Component />}` 会渲染 `0`，不是期望行为

### || 运算符
```javascript
book.translations || "NOT TRANSLATED"  // 第一个 truthy 值
```
- 用于提供默认值
- **问题**：`0`、`""` 都是 falsy → 被跳过，可能不符合预期

### ?? 空值合并运算符
```javascript
book.reviews ?? "no data"  // 仅 null/undefined 时返回右侧
0 ?? "no data"             // → 0（保留 0 作为有效值）
```
- 比 `||` 更安全：只有 `null`/`undefined` 才触发默认值
- React 中推荐用 `??` 代替 `||` 做默认值设置

## English Short Summary

`&&` returns first falsy value or last value (used for conditional rendering in React). `||` returns first truthy value (default values). `??` (nullish coalescing) returns right side only for `null`/`undefined` — safer than `||` because it preserves `0` and `""` as valid values.
