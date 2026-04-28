---
title: "Extracting Values"
lectureId: 29
section: 4
sectionTitle: "Interaction with Web Elements"
date: "2026-04-29"
tags: [playwright, text-content, input-value, get-attribute]
---

## 中文短总结

从 DOM 提取值的方法：`textContent()` 获取单个元素的文本；`allTextContents()` 获取所有匹配元素的文本数组；`inputValue()` 获取输入框的值（因输入值是 property 而非 text）；`getAttribute('name')` 获取属性值。注意区分 HTML 文本与属性值（property）。

## English Notes

### Extracting Methods

| Method | Returns | Use Case |
|---|---|---|
| `textContent()` | `string \| null` | Get text from a single element (Promise — needs `await`) |
| `allTextContents()` | `string[]` | Get text from all matching elements as array |
| `inputValue()` | `string` | Get value from input field (not text!) |
| `getAttribute('name')` | `string \| null` | Get any attribute value |

### Text vs Property

- Text between HTML tags → use `textContent()`
- Input field value → use `inputValue()` (visible text in input is a **property**, not HTML text)
- Attribute value → use `getAttribute()`

### Examples

```ts
// Single text
const buttonText = await basicForm.locator('button').textContent()
expect(buttonText).toEqual('Submit')

// All texts → array
const allLabels = await page.locator('nb-radio').allTextContents()
expect(allLabels).toContain('Option 1')

// Input value
const emailValue = await emailField.inputValue()
expect(emailValue).toEqual('test@test.com')

// Attribute
const placeholderValue = await emailField.getAttribute('placeholder')
expect(placeholderValue).toEqual('Email')
```

## Key Takeaways

- `textContent()` for visible HTML text — needs `await`
- `allTextContents()` for array of texts from multiple elements
- `inputValue()` for input/textarea field values (not text!)
- `getAttribute()` for any HTML attribute value
- Always distinguish text from property when asserting
