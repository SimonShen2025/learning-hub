---
title: "Date Picker (Part 2)"
lectureId: 42
section: 5
sectionTitle: "UI Components"
date: "2026-04-29"
tags: [playwright, datepicker, javascript-date, dynamic-date, while-loop, month-navigation]
---

## 中文短总结

本节使用 JavaScript `Date` 对象动态计算未来日期，替换硬编码值。通过 `date.setDate(date.getDate() + N)` 计算未来 N 天的日期，再用 `getDate()`、`toLocalString()`、`getFullYear()` 提取日、月、年。当目标日期跨月时，用 `while` 循环检查日历显示的月份是否匹配预期，不匹配则点击右箭头翻月，循环直至找到正确月份后再选日。此方法可处理任意未来日期。

## English Notes

### JavaScript Date Object

```typescript
const date = new Date();
date.setDate(date.getDate() + 7); // 7 days from today

const expectedDate = date.getDate().toString();
const expectedMonthShort = date.toLocaleDateString('en-US', { month: 'short' }); // "Jul"
const expectedMonthLong = date.toLocaleDateString('en-US', { month: 'long' });   // "July"
const expectedYear = date.getFullYear(); // 2023
```

### Building Assertion Strings

```typescript
const dateToAssert = `${expectedMonthShort} ${expectedDate}, ${expectedYear}`;
// e.g., "Jul 4, 2023"

const expectedMonthAndYear = `${expectedMonthLong} ${expectedYear}`;
// e.g., "July 2023"
```

### Month Navigation with while Loop

```typescript
let calendarMonthAndYear = await page.locator('nb-calendar-view-mode').textContent();

while (!calendarMonthAndYear.includes(expectedMonthAndYear)) {
  await page.locator('nb-calendar-paginator').locator('[data-name="chevron-right"]').click();
  calendarMonthAndYear = await page.locator('nb-calendar-view-mode').textContent();
}
```

### Complete Flow

1. Compute target date with `Date` object
2. Open calendar by clicking input field
3. Check displayed month — if not target month, click right chevron
4. Repeat until correct month is displayed
5. Select the day with `exact: true`
6. Assert input value matches expected format

### Key Points

- `Date` object methods: `getDate()`, `getFullYear()`, `toLocaleDateString()`
- `setDate()` auto-handles month/year rollover
- `while` loop for forward month navigation
- Works for any future date (tested with 200+ days ahead)

## English Short Summary

Use JavaScript `Date` object for dynamic date calculation. Navigate months with a `while` loop comparing displayed vs expected month, then select the day. Handles arbitrary future dates automatically.
