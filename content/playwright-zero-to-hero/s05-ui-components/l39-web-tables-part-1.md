---
title: "Web Tables (Part 1)"
lectureId: 39
section: 5
sectionTitle: "UI Components"
date: "2026-04-29"
tags: [playwright, table, getByRole-row, filter, locator, edit, column-index]
---

## 中文短总结

Web 表格自动化的难点在于精准定位行和单元格。可通过 `getByRole('row', { name })` 以唯一文本定位行；但编辑模式下文本变为 input 的 value 属性，原定位器失效，需改用 `getByPlaceholder()`。当文本不唯一时，用 `filter({ has: page.locator('td').nth(index) })` 按特定列筛选行。通过列索引 `locator('td').nth(n)` 可导航到特定单元格做断言。

## English Notes

### Table DOM Structure

```
table > thead / tbody > tr (rows) > td (columns/cells)
```

### Locating a Row by Unique Text

```typescript
const targetRow = page.getByRole('row', { name: 'mdo@gmail.com' });
await targetRow.locator('.nb-edit').click(); // click edit icon
```

### Editing Fields in a Row

- When a row enters **edit mode**, text becomes an input `value` (not HTML text)
- `getByRole('row', { name })` will NOT work in edit mode
- Use `getByPlaceholder()` instead:

```typescript
await page.locator('input-editor').getByPlaceholder('Age').clear();
await page.locator('input-editor').getByPlaceholder('Age').fill('35');
await page.locator('.nb-checkmark').click(); // confirm
```

### Locating Row by Specific Column (filter)

When text appears in multiple rows (e.g., ID 11 = Age 11):

```typescript
const targetRowById = page.getByRole('row', { name: '11' }).filter({
  has: page.locator('td').nth(1).getByText('11')
});
```

- `nth(1)` — second column (0-indexed), the ID column
- Filter ensures only the row with "11" in the **ID column** is selected

### Asserting a Specific Cell

```typescript
await expect(targetRowById.locator('td').nth(5)).toHaveText('test@test.com');
```

### Key Takeaways

- Use `getByRole('row', { name })` for rows with unique text
- In edit mode, text becomes input `value` — use `getByPlaceholder()` instead
- Use `filter({ has: locator('td').nth(index) })` to select rows by specific column
- Access cells by column index with `locator('td').nth(n)`

## English Short Summary

Locate table rows with `getByRole('row')` and unique text. Use `filter()` with column index when text is not unique. Switch to `getByPlaceholder()` in edit mode since text becomes input value.
