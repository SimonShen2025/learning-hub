---
title: "DOM Terminology"
lectureId: 23
section: 4
sectionTitle: "Interaction with Web Elements"
date: "2026-04-29"
tags: [playwright, dom, html, terminology, locators]
---

## 中文短总结

在编写 Playwright 测试前，需理解 DOM 基本术语：HTML 标签（tag）、属性（attribute）、属性值（attribute value）。Class 和 ID 虽有特殊角色，但也是属性。Class 的多个值以空格分隔，每个值可独立用作 CSS 选择器。标签成对出现（开/闭），尖括号间的文本是 HTML 文本（非 property）。DOM 中元素存在 parent/child/sibling 关系。

## English Notes

### HTML DOM Structure

- **HTML tag**: starts and ends with angle braces, e.g. `<input>`, `<tr>`
- **HTML attribute name**: inside the tag, e.g. `placeholder`, `nbInput`, `id`, `class`
- **HTML attribute value**: assigned to attribute, e.g. `placeholder="Email"`
- Some attributes have no value (e.g. `nbInput` is just a flag)

### IDs & Classes

- `id` and `class` are HTML attributes with special roles
- Class can have **multiple values separated by spaces** — each value can be used independently as a CSS locator
- Example: `class="input-full-width size-medium status-basic"` → three independent selectors

### Tags & Text

- Tags come in **pairs**: opening `<tr>` and closing `</tr>` (with forward slash)
- Value between angle braces = **HTML text** (not a property)
- Not everything visible on page is text — sometimes it's a **property/value** hidden in attributes
- Three dots `...` in DevTools = collapsed nested content

### Element Relationships

| Relationship | Description |
|---|---|
| **Parent** | Elements above the anchor element in the DOM |
| **Child** | Elements nested inside (shifted right) the anchor element |
| **Sibling** | Elements at the same level, side by side (e.g. multiple `<td>` in a row) |

## Key Takeaways

- Understand tag, attribute, attribute value, text vs property
- Class values are space-separated and individually selectable
- Parent/child/sibling relationships are crucial for building locators
