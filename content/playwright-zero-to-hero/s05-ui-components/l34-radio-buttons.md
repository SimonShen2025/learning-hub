---
title: "Radio Buttons"
lectureId: 34
section: 5
sectionTitle: "UI Components"
date: "2026-04-29"
tags: [playwright, radio-button, check, getByRole, force, isChecked]
---

## 中文短总结

本节讲解 Playwright 中操作 Radio Button 的方法。推荐使用 `getByRole('radio', { name })` 定位，用 `check({ force: true })` 选中（当元素被标记为 visually-hidden 时需要 force）。验证状态可使用通用断言 `isChecked()` 返回布尔值，或定位器断言 `toBeChecked()`。选中一个后可验证其他 radio 变为 falsy。

## English Notes

### Selecting Radio Buttons

```typescript
// By label
await usingTheGridForm.getByLabel('Option 1').check({ force: true });

// By role (recommended)
await usingTheGridForm.getByRole('radio', { name: 'Option 1' }).check({ force: true });
```

- Use `check()` instead of `click()` to select radio buttons
- `force: true` is needed when the input element is marked as `visually-hidden`

### Assertions

**Generic assertion** — get boolean status:

```typescript
const radioStatus = await radioButton.isChecked();
expect(radioStatus).toBeTruthy();
```

**Locator assertion:**

```typescript
await expect(radioButton).toBeChecked();
```

### Validating Mutual Exclusion

After selecting Option 2, verify Option 1 is deselected:

```typescript
await optionTwo.check({ force: true });
expect(await optionOne.isChecked()).toBeFalsy();
expect(await optionTwo.isChecked()).toBeTruthy();
```

### Shortcut — Inline isChecked in expect

```typescript
expect(await usingTheGridForm.getByRole('radio', { name: 'Option 1' }).isChecked()).toBeFalsy();
```

## English Short Summary

Select radio buttons with `getByRole('radio')` and `check({ force: true })`. Validate selection state using `isChecked()` (generic) or `toBeChecked()` (locator assertion).
