---
title: "Input Fields"
lectureId: 33
section: 5
sectionTitle: "UI Components"
date: "2026-04-29"
tags: [playwright, input, fill, clear, pressSequentially, assertions]
---

## 中文短总结

本节讲解如何在 Playwright 中与 input 输入框交互。使用 `fill()` 方法输入文本，`clear()` 清空，`pressSequentially()` 模拟逐键输入并可配置延迟。对于断言，通用断言需先用 `inputValue()` 提取值再比较；定位器断言使用 `toHaveValue()`（注意不是 `toHaveText()`）。

## English Notes

### Typing into Input Fields

| Method | Purpose |
|---|---|
| `fill('text')` | Type text into input field (replaces existing) |
| `clear()` | Clear the input field content |
| `pressSequentially('text')` | Simulate individual keystrokes |
| `pressSequentially('text', { delay: 500 })` | Simulate keystrokes with delay between keys |

### Locator Example

```typescript
const emailInput = page.locator('nb-card', { hasText: 'Using the Grid' })
  .getByRole('textbox', { name: 'Email' });

await emailInput.fill('test@test.com');
await emailInput.clear();
await emailInput.pressSequentially('test2@test.com', { delay: 500 });
```

### Important Notes

- `clear()` cannot be chained after `fill()` — must call locator again
- `pressSequentially()` simulates real keyboard input with optional delay

### Assertions for Input Fields

**Generic assertion** — extract value first:

```typescript
const inputValue = await emailInput.inputValue();
expect(inputValue).toEqual('test2@test.com');
```

**Locator assertion** — use `toHaveValue()`:

```typescript
await expect(emailInput).toHaveValue('test2@test.com');
```

> `toHaveText()` does NOT work for input fields — use `toHaveValue()`.

## English Short Summary

Use `fill()` to type into inputs, `clear()` to reset, and `pressSequentially()` for keystroke simulation. Assert input values with `inputValue()` (generic) or `toHaveValue()` (locator assertion).
