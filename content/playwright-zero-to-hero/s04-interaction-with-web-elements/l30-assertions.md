---
title: "Assertions"
lectureId: 30
section: 4
sectionTitle: "Interaction with Web Elements"
date: "2026-04-29"
tags: [playwright, assertions, expect, soft-assertions]
---

## 中文短总结

Playwright 有两类断言：**通用断言**（Generic）——比较值，无等待，无需 `await`；**定位器断言**（Locator）——与元素交互，自动等待最多 5 秒，需要 `await`。常用定位器断言：`toHaveText()`、`toHaveValue()`、`toBeChecked()` 等。软断言（`expect.soft()`）失败后测试继续执行。

## English Notes

### Two Types of Assertions

| Type | Waits? | Needs `await`? | Argument |
|---|---|---|---|
| **Generic** | No | No | Plain value (string, number, etc.) |
| **Locator** | Yes (up to 5s) | Yes | Locator object |

### Generic Assertions

```ts
const value = 5
expect(value).toEqual(5)

const text = await button.textContent()
expect(text).toEqual('Submit')
```

Methods: `toEqual()`, `toContain()`, `toBeTruthy()`, `toBeFalsy()`, `toBeNull()`, `toHaveLength()`, etc.

### Locator Assertions

```ts
await expect(basicFormButton).toHaveText('Submit')     // waits up to 5s
await expect(emailField).toHaveValue('test@test.com')
await expect(radioButton).toBeChecked()
```

Methods: `toHaveText()`, `toHaveValue()`, `toBeVisible()`, `toBeChecked()`, `toBeEnabled()`, `toContainText()`, etc.

### Soft Assertions

```ts
await expect.soft(button).toHaveText('Submit5')  // fails but test continues
await button.click()  // still executes
```

- Test continues after failure — collects multiple failures
- Considered **not a best practice** but useful for analysis

## Key Takeaways

- Generic assertions: simple value comparison, no waiting
- Locator assertions: interact with DOM, auto-wait up to 5 seconds
- Always use `await` with locator assertions
- `expect.soft()` for non-blocking assertions (use sparingly)
