---
title: "User-Facing Locators"
lectureId: 25
section: 4
sectionTitle: "Interaction with Web Elements"
date: "2026-04-29"
tags: [playwright, locators, best-practices, get-by-role, accessibility]
---

## 中文短总结

Playwright 推荐使用 **用户可见定位器**（User-Facing Locators），模拟用户实际看到和操作的方式。核心方法：`getByRole()`（按角色+名称）、`getByLabel()`（按 label）、`getByPlaceholder()`（按占位符）、`getByText()`（按文本）、`getByTitle()`（按 title 属性）、`getByTestId()`（按 data-testid 属性）。这些方法比 CSS/XPath 更贴近用户行为，是 Playwright 最佳实践。

## English Notes

### Testing Philosophy

> Automated tests should verify that the application code works for **end users** and avoid relying on implementation details (function names, CSS classes, etc.)

### User-Facing Locator Methods

| Method | Description | Example |
|---|---|---|
| `getByRole()` | Role type + accessible name | `page.getByRole('textbox', { name: 'Email' })` |
| `getByLabel()` | Associated label text | `page.getByLabel('Email')` |
| `getByPlaceholder()` | Placeholder attribute value | `page.getByPlaceholder('Jane Doe')` |
| `getByText()` | Visible text on the page | `page.getByText('Using the Grid')` |
| `getByTitle()` | Title attribute | `page.getByTitle('IoT Dashboard')` |
| `getByTestId()` | `data-testid` attribute | `page.getByTestId('signIn')` |

### getByRole Roles

- 67+ roles available: `textbox`, `button`, `radio`, `checkbox`, `heading`, `link`, `list`, `listitem`, etc.
- Role is **not** necessarily the `role` attribute — based on ARIA role semantics
- `name` option matches the accessible name (label text, button text, etc.)

### data-testid

- Add custom `data-testid="name"` attribute in source code
- Reserved keyword in Playwright — can be overridden in config
- Makes locators resilient but not purely user-facing

## Key Takeaways

- **Always try `getByRole()` first** — most recommended by Playwright
- User-facing locators mimic real user interaction
- `getByTestId()` is resilient but not truly user-visible
- Prefer these over raw CSS selectors or XPath
