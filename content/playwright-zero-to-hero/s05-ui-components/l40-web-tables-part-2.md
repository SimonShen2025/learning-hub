---
title: "Web Tables (Part 2)"
lectureId: 40
section: 5
sectionTitle: "UI Components"
date: "2026-04-29"
tags: [playwright, table, loop, all, last, waitForTimeout, filter-validation]
---

## 中文短总结

本节演示如何循环遍历表格行并验证搜索过滤结果。使用 `locator('tbody tr')` 获取所有行，`.all()` 转为数组后用 `for...of` 遍历，对每行取最后一列 `.last()` 的 `textContent()` 做断言。注意搜索过滤有动画延迟，需用 `waitForTimeout()` 等待约 500ms 才能获取正确结果。当无数据时（如搜索 200 岁），需添加条件判断验证 "No data found" 文本。

## English Notes

### Scenario: Validate Search Filter Results

Filter the table by age values `[20, 30, 40, 200]` and validate each result.

### Typing into Search Filter

```typescript
const ages = ['20', '30', '40', '200'];

for (const age of ages) {
  await page.locator('input-filter').getByPlaceholder('Age').fill(age);
  await page.waitForTimeout(500); // wait for filter animation
  // ...validate rows
}
```

### Looping Through Table Rows

```typescript
const ageRows = page.locator('tbody tr');

for (const row of await ageRows.all()) {
  const cellValue = await row.locator('td').last().textContent();
  expect(cellValue).toEqual(age);
}
```

### Handling "No Data Found"

```typescript
if (age === '200') {
  await expect(page.getByRole('table')).toHaveText(/No data found/);
} else {
  // normal row validation loop
}
```

### Key Methods

| Method | Purpose |
|---|---|
| `.all()` | Convert Locator list to array for looping |
| `.last()` | Select the last element in a Locator list |
| `.first()` | Select the first element |
| `waitForTimeout(ms)` | Hard wait for animations/transitions |
| `textContent()` | Extract text from an element |

### Important Notes

- `waitForTimeout()` is sometimes necessary for search/filter animations
- `.all()` returns a Promise — must `await`
- Always handle edge cases (empty results, "No data found")

## English Short Summary

Loop through table rows using `locator().all()` with `for...of`. Use `waitForTimeout()` for filter animations. Handle empty states with conditional assertions for "No data found" scenarios.
