---
title: "Parent Elements"
lectureId: 27
section: 4
sectionTitle: "Interaction with Web Elements"
date: "2026-04-29"
tags: [playwright, locators, parent-elements, filter]
---

## 中文短总结

通过父元素定位子元素是创建唯一选择器的强大技术。方法：(1) `locator()` 的 `hasText` / `has` 选项过滤特定父元素；(2) `.filter()` 方法支持按文本或定位器过滤，可链式调用多次；(3) XPath `..` 可向上导航一级（Playwright 中 XPath 的唯一推荐用法）。

## English Notes

### Locating via Parent Elements

**Approach 1 — locator options (`hasText` / `has`):**
```ts
// Filter by text
page.locator('nb-card', { hasText: 'Using the Grid' })
  .getByRole('textbox', { name: 'Email' }).click()

// Filter by locator
page.locator('nb-card', { has: page.locator('#inputEmail1') })
  .getByRole('textbox', { name: 'Email' }).click()
```

**Approach 2 — `.filter()` method:**
```ts
// Filter by text
page.locator('nb-card').filter({ hasText: 'Basic form' })
  .getByRole('textbox', { name: 'Email' }).click()

// Filter by locator
page.locator('nb-card').filter({ has: page.locator('.status-danger') })
  .getByRole('textbox', { name: 'Password' }).click()
```

**Approach 3 — Multiple chained filters:**
```ts
page.locator('nb-card')
  .filter({ has: page.locator('nb-checkbox') })
  .filter({ hasText: 'Sign in' })
  .getByRole('textbox', { name: 'Email' }).click()
```

**Approach 4 — XPath `..` to go one level up:**
```ts
page.locator(':text-is("Using the Grid")')
  .locator('..') // go to parent
  .getByRole('textbox', { name: 'Email' }).click()
```

### filter() vs locator options

| Feature | `locator()` options | `.filter()` method |
|---|---|---|
| Syntax | Second arg to locator | Chained method |
| Multiple filters | No | Yes — chain `.filter().filter()` |
| Works with getByRole | No (locator only) | Yes |

## Key Takeaways

- Use `hasText` or `has` to narrow parent elements to unique matches
- `.filter()` is more flexible — supports chaining multiple filters
- Combine filters: first by component type, then by text → unique element
- XPath `..` for going one level up — only recommended XPath usage in Playwright
