---
title: "Date Picker (Part 1)"
lectureId: 41
section: 5
sectionTitle: "UI Components"
date: "2026-04-29"
tags: [playwright, datepicker, calendar, day-cell, exact-match, toHaveValue]
---

## 中文短总结

日期选择器自动化的关键是：用独特的 CSS class 区分当前月和相邻月的日期单元格（如 `day-cell` vs `bounding-month`），避免误选。用 `getByText('1', { exact: true })` 进行精确匹配，防止 "1" 匹配到 "10"、"11" 等。选择后用 `toHaveValue()` 断言输入框中的日期字符串。注意此方式是硬编码日期，动态选择将在下一节讲解。

## English Notes

### Locating Date Cells

- Calendar cells for the **current month** and **adjacent months** have different CSS classes
- Current month: `day-cell in-star-inserted`
- Adjacent month: `bounding-month day-cell in-star-inserted`

```typescript
// Select only current month's cells
await page.locator('.day-cell.in-star-inserted').getByText('14').click();
```

### Exact Text Matching

Selecting day "1" may match "10", "11", "12", etc. Use `exact: true`:

```typescript
await page.locator('.day-cell.in-star-inserted')
  .getByText('1', { exact: true }).click();
```

### Asserting the Selected Date

```typescript
const calendarInput = page.getByPlaceholder('Form Picker');
await calendarInput.click(); // open calendar

// Select date
await page.locator('.day-cell.in-star-inserted')
  .getByText('1', { exact: true }).click();

// Assert
await expect(calendarInput).toHaveValue('Jun 1, 2023');
```

### Key Points

- Differentiate current month cells from adjacent months by CSS class
- Always use `exact: true` for single-digit dates to avoid partial matches
- Use `toHaveValue()` for input field assertions (not `toHaveText()`)
- Hardcoded dates are not ideal — next lesson covers dynamic date selection

## English Short Summary

Select dates by targeting current-month cells via CSS class, use `exact: true` for precise day matching, and assert with `toHaveValue()`. Avoid adjacent month cells by filtering on class names.
