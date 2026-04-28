---
title: "Lists and Dropdowns"
lectureId: 36
section: 5
sectionTitle: "UI Components"
date: "2026-04-29"
tags: [playwright, list, dropdown, filter, toHaveText, for-in-loop, css-assertion]
---

## 中文短总结

本节讲解如何操作列表/下拉菜单。列表的展开按钮和选项列表在 DOM 中可能位于完全不同的位置。推荐用 `getByRole('list')` / `getByRole('listitem')` 定位（需 `<ul>` / `<li>` 标签）。验证列表内容用 `toHaveText()` 传入数组；选择特定项用 `filter({ hasText })` + `click()`。通过 `for...in` 循环可遍历对象，逐一选择并验证每个选项对应的 CSS 属性变化。

## English Notes

### DOM Structure Warning

- The dropdown button and the actual list items are often in **completely different** DOM locations
- Visually they appear together, but locators must be separate

### Locating Lists

```typescript
// If <ul> and <li> tags are used
page.getByRole('list');      // parent list container
page.getByRole('listitem');  // individual items

// Custom tags — use regular locator
const optionList = page.locator('nb-option-list nb-option');
```

### Asserting List Content (Array)

```typescript
await expect(optionList).toHaveText(['Light', 'Dark', 'Cosmic', 'Corporate']);
```

### Selecting an Item with filter()

```typescript
await optionList.filter({ hasText: 'Cosmic' }).click();
```

### Asserting CSS Properties

```typescript
const header = page.locator('nb-layout-header');
await expect(header).toHaveCSS('background-color', 'rgb(50, 50, 89)');
```

### Looping Through All Options (for...in)

```typescript
const colors = {
  'Light':     'rgb(255, 255, 255)',
  'Dark':      'rgb(34, 43, 69)',
  'Cosmic':    'rgb(50, 50, 89)',
  'Corporate': 'rgb(255, 255, 255)',
};

for (const color in colors) {
  await dropdownMenu.click();
  await optionList.filter({ hasText: color }).click();
  await expect(header).toHaveCSS('background-color', colors[color]);
  if (color !== 'Corporate') {
    await dropdownMenu.click(); // reopen for next iteration
  }
}
```

### Key Differences

| Loop | Use Case |
|---|---|
| `for...of` | Iterate over array values |
| `for...in` | Iterate over object keys |

## English Short Summary

Locate lists with `getByRole('list'/'listitem')` or custom locators. Assert full list content with `toHaveText([array])`, select items via `filter({ hasText })`, and validate CSS changes with `toHaveCSS()`.
