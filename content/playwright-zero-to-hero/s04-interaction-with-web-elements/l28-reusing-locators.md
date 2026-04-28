---
title: "Reusing Locators"
lectureId: 28
section: 4
sectionTitle: "Interaction with Web Elements"
date: "2026-04-29"
tags: [playwright, locators, reuse, constants, assertions]
---

## 中文短总结

将重复使用的定位器提取为常量（`const`），减少代码重复。常量可以进一步嵌套抽象。首次使用断言（assertion）：`expect(locator).toHaveValue()` 验证输入框值。`expect` 从 `@playwright/test` 导入。

## English Notes

### Extracting Locators to Constants

```ts
// Before — repeated locator
await page.locator('nb-card', { hasText: 'Basic form' }).getByRole('textbox', { name: 'Email' }).fill('test@test.com')
await page.locator('nb-card', { hasText: 'Basic form' }).getByRole('textbox', { name: 'Password' }).fill('Welcome1')
await page.locator('nb-card', { hasText: 'Basic form' }).getByRole('button').click()

// After — constant reuse
const basicForm = page.locator('nb-card', { hasText: 'Basic form' })
await basicForm.getByRole('textbox', { name: 'Email' }).fill('test@test.com')
await basicForm.getByRole('textbox', { name: 'Password' }).fill('Welcome1')
await basicForm.getByRole('button').click()
```

### Nested Constants

```ts
const emailField = basicForm.getByRole('textbox', { name: 'Email' })
await emailField.fill('test@test.com')
```

### First Assertion

```ts
import { test, expect } from '@playwright/test'

await expect(emailField).toHaveValue('test@test.com')
```

## Key Takeaways

- Assign parent locators to `const` to avoid duplication
- Build further constants from existing ones for deeper nesting
- `expect` must be imported from `@playwright/test`
- `toHaveValue()` is the locator assertion for input field values
