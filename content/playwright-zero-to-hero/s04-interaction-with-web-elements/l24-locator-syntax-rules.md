---
title: "Locator Syntax Rules"
lectureId: 24
section: 4
sectionTitle: "Interaction with Web Elements"
date: "2026-04-29"
tags: [playwright, locators, css-selectors, xpath]
---

## 中文短总结

`page.locator()` 是 Playwright 中查找元素的通用方法。支持多种语法：按 tag name、ID（`#`）、class（`.`）、属性（`[]`）、完整 class 值、组合选择器、XPath（不推荐）、文本匹配（部分/精确）。Locator 本身不触发操作，只有调用 action 方法（如 `click()`）时才与页面交互。Locator 必须唯一才能执行操作。

## English Notes

### Locator Syntax

| Selector Type | Syntax | Example |
|---|---|---|
| Tag name | `'tagName'` | `page.locator('input')` |
| ID | `'#idValue'` | `page.locator('#inputEmail1')` |
| Class value | `'.classValue'` | `page.locator('.shape-rectangle')` |
| Attribute | `'[attr="value"]'` | `page.locator('[placeholder="Email"]')` |
| Full class | `'[class="full class string"]'` | `page.locator('[class="input-full-width size-medium ..."]')` |
| Combined | selectors together (no space) | `page.locator('input[placeholder="Email"]')` |
| XPath | `'xpath=...'` | `page.locator('//*[@id="inputEmail1"]')` — **NOT recommended** |
| Partial text | `':text("partial")'` | `page.locator(':text("Using")')` |
| Exact text | `':text-is("exact")'` | `page.locator(':text-is("Using the Grid")')` |

### Key Rules

- **No space** between combined selectors (space = child element)
- `#` = ID, `.` = class, `[]` = attribute
- XPath is **not recommended** by Playwright — prefer user-facing locators
- `locator()` returns **all matching elements**; if not unique, Playwright throws an error on action
- Locator itself is **not a promise** — no `await` needed until an action method is called
- Use `.first()`, `.last()`, `.nth(index)` to pick from multiple matches (but prefer unique locators)

## Key Takeaways

- `page.locator()` accepts CSS selectors, XPath, or text matchers
- Combine selectors (tag + attribute + class) for uniqueness
- Prefer user-facing locators (next lesson) over raw CSS/XPath
- Locator only interacts with page when an action (click, fill, etc.) is triggered
