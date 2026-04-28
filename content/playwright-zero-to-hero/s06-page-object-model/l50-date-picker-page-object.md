---
title: "Date Picker Page Object"
lectureId: 50
section: 6
sectionTitle: "Page Object Model"
date: "2026-04-29"
tags: [playwright, page-object, datepicker, private-method, code-reuse, return-value]
---

## 中文短总结

创建 DatePickerPage 页面对象，将之前的日历选择代码封装。核心是提取一个 `private selectDateInTheCalendar()` 方法处理月份导航和日期选择逻辑，并 `return` 断言所需的日期字符串。公开方法 `selectCommonDatePickerDateFromToday()` 和 `selectDatePickerWithRangeFromToday()` 复用这个 private 方法，后者调用两次以选择起止日期。注意两种日历的 day-cell class 略有不同，选用共有的 `day-cell` + `in-star-inserted` 确保兼容。

## English Notes

### Private Reusable Method

```typescript
private async selectDateInTheCalendar(numberOfDaysFromToday: number) {
  const date = new Date();
  date.setDate(date.getDate() + numberOfDaysFromToday);

  const expectedDate = date.getDate().toString();
  const expectedMonthShort = date.toLocaleDateString('en-US', { month: 'short' });
  const expectedMonthLong = date.toLocaleDateString('en-US', { month: 'long' });
  const expectedYear = date.getFullYear();

  const dateToAssert = `${expectedMonthShort} ${expectedDate}, ${expectedYear}`;
  const expectedMonthAndYear = `${expectedMonthLong} ${expectedYear}`;

  // Navigate months with while loop
  let calendarMonthAndYear = await this.page.locator('nb-calendar-view-mode').textContent();
  while (!calendarMonthAndYear.includes(expectedMonthAndYear)) {
    await this.page.locator('nb-calendar-paginator [data-name="chevron-right"]').click();
    calendarMonthAndYear = await this.page.locator('nb-calendar-view-mode').textContent();
  }

  // Select the day
  await this.page.locator('.day-cell.in-star-inserted')
    .getByText(expectedDate, { exact: true }).click();

  return dateToAssert; // return for assertion in calling method
}
```

### Public Methods

```typescript
async selectCommonDatePickerDateFromToday(numberOfDaysFromToday: number) {
  const calendarInput = this.page.getByPlaceholder('Form Picker');
  await calendarInput.click();
  const dateToAssert = await this.selectDateInTheCalendar(numberOfDaysFromToday);
  await expect(calendarInput).toHaveValue(dateToAssert);
}

async selectDatePickerWithRangeFromToday(startDayFromToday: number, endDayFromToday: number) {
  const calendarInput = this.page.getByPlaceholder('Range Picker');
  await calendarInput.click();
  const dateToAssertStart = await this.selectDateInTheCalendar(startDayFromToday);
  const dateToAssertEnd = await this.selectDateInTheCalendar(endDayFromToday);
  const dateToAssert = `${dateToAssertStart} - ${dateToAssertEnd}`;
  await expect(calendarInput).toHaveValue(dateToAssert);
}
```

### Key Patterns

| Pattern | Purpose |
|---|---|
| `private` method | Reusable logic hidden from tests |
| `return` value | Pass computed data back to calling method |
| Shared CSS selector | Use `.day-cell.in-star-inserted` for both calendar types |
| Two public methods | Different entry points reusing the same core logic |

### Locator Compatibility

- Common date picker: `day-cell in-star-inserted`
- Range date picker: `range-cell day-cell in-star-inserted`
- Shared selector: `.day-cell.in-star-inserted` works for both

## English Short Summary

Extract calendar selection logic into a `private` method that returns the assertion string. Two public methods reuse it — one for single date, one for date range. Use shared CSS selectors for compatibility.
