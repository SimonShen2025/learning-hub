---
title: "Tests Structure"
lectureId: 21
section: 3
sectionTitle: "Playwright Hands-On Overview"
date: "2026-04-29"
tags: [playwright, test-structure, async-await]
---

## 中文短总结

测试结构：`import { test } from '@playwright/test'` → `test('name', async ({ page }) => { ... })`。`page` 是 Playwright fixture，代表浏览器页面。`test.describe` 用于分组测试套件。关键规则：返回 Promise 的方法必须加 `await`，函数必须标记 `async`。

## 中文长总结

### 基本测试结构

```typescript
import { test } from '@playwright/test';

test('test name', async ({ page }) => {
  await page.goto('http://localhost:4200');
});
```

### 核心概念

- **`page` fixture** — Playwright 提供的页面对象，代表浏览器空白页，通过它访问所有 Playwright 方法
- **`test.describe`** — 将测试分组为测试套件，各套件上下文隔离，可设置不同的前置条件

### async/await 规则（极其重要）

- 返回 **Promise** 类型的 Playwright 方法（如 `page.goto()`、`page.click()`）**必须加 `await`**
- 使用 `await` 的函数**必须标记为 `async`**
- 不加 `await` 会导致 race condition，是初学者最常见的错误

### 判断方法

悬停方法查看返回类型：
- 返回 `Promise` → 需要 `await`
- 返回其他类型（如 `Locator`）→ 不需要 `await`

### 文件命名

测试文件命名规范：`*.spec.ts`

## English Short Summary

Test structure: import `test`, use `async ({ page }) => {}` with the `page` fixture. Group tests with `test.describe`. Critical rule: methods returning `Promise` must use `await`, and the containing function must be `async`. Missing `await` is the most common beginner mistake.
