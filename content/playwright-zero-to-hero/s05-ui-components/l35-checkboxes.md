---
title: "Checkboxes"
lectureId: 35
section: 5
sectionTitle: "UI Components"
date: "2026-04-29"
tags: [playwright, checkbox, check, uncheck, all, loop]
---

## 中文短总结

本节讲解 Playwright 中 Checkbox 的交互。推荐使用 `check()` / `uncheck()` 而非 `click()`——前者会检查当前状态，已选中时不会重复操作，避免误切换。遍历所有 checkbox 需用 `.all()` 将 Locator 转为数组，再通过 `for...of` 循环逐个操作。验证状态用 `isChecked()` + `toBeTruthy()` / `toBeFalsy()`。

## English Notes

### check() vs click()

| Method | Behavior |
|---|---|
| `check()` | Checks status first — will NOT re-select if already checked |
| `uncheck()` | Checks status first — will NOT uncheck if already unchecked |
| `click()` | Toggles blindly — may accidentally deselect |

```typescript
// Select a checkbox
await page.getByRole('checkbox', { name: 'Hide on click' }).check({ force: true });

// Unselect a checkbox
await page.getByRole('checkbox', { name: 'Hide on click' }).uncheck({ force: true });
```

### Looping Through All Checkboxes

Use `.all()` to convert Locator list into an array:

```typescript
const allBoxes = page.getByRole('checkbox');

for (const box of await allBoxes.all()) {
  await box.check({ force: true });
  expect(await box.isChecked()).toBeTruthy();
}

// Uncheck all
for (const box of await allBoxes.all()) {
  await box.uncheck({ force: true });
  expect(await box.isChecked()).toBeFalsy();
}
```

### Key Points

- `force: true` needed when checkbox input is `visually-hidden`
- `.all()` returns a `Promise` — must `await` it
- Each `box` in the loop is a regular Locator — can chain methods

## English Short Summary

Use `check()`/`uncheck()` over `click()` for checkboxes to avoid accidental toggling. Loop through all checkboxes with `.all()` and validate state via `isChecked()`.
