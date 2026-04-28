---
title: "Child Elements"
lectureId: 26
section: 4
sectionTitle: "Interaction with Web Elements"
date: "2026-04-29"
tags: [playwright, locators, child-elements, chaining]
---

## 中文短总结

查找子元素的方法：(1) 在 `locator()` 字符串中用空格分隔父子选择器；(2) 链式调用 `.locator()` 逐级查找；(3) 混合使用 `locator()` 和 `getByRole()` 等用户定位器。可用 `.nth(index)`、`.first()`、`.last()` 按索引选取，但应尽量避免依赖索引。

## English Notes

### Finding Child Elements

**Approach 1 — Space-separated selectors in locator string:**
```ts
page.locator('nb-card nb-radio :text("Option 1")').click()
```
Each selector separated by space = child element search

**Approach 2 — Chained locators:**
```ts
page.locator('nb-card').locator('nb-radio').locator(':text("Option 2")').click()
```

**Approach 3 — Mix locator() and getByRole():**
```ts
page.locator('nb-card').getByRole('button', { name: 'Sign in' }).first().click()
```

### Selecting by Index

| Method | Description |
|---|---|
| `.first()` | First matching element |
| `.last()` | Last matching element |
| `.nth(index)` | Element at specific index (0-based) |

⚠️ **Avoid using index** — element order can change; prefer unique locators

## Key Takeaways

- Space in `locator()` string = child relationship
- Chain `.locator()` calls for step-by-step narrowing
- Mix CSS locators with user-facing locators (getByRole, etc.)
- Avoid `.nth()` / `.first()` / `.last()` when possible — find unique selectors instead
