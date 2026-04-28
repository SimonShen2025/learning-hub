---
title: "Tooltips"
lectureId: 37
section: 5
sectionTitle: "UI Components"
date: "2026-04-29"
tags: [playwright, tooltip, hover, freeze-browser, F8, getByRole]
---

## 中文短总结

Tooltip 的难点在于鼠标移开后 DOM 元素立即消失，无法直接 Inspect。解决办法：在 Sources 面板按 F8（Windows）/ Cmd+\（Mac）冻结浏览器，然后回到 Elements 面板查找 Tooltip 的 DOM 结构。使用 `hover()` 方法触发 Tooltip 显示。如果 DOM 有 `role="tooltip"`，可用 `getByRole('tooltip')` 定位；否则使用普通 locator + `textContent()` 提取文本并断言。

## English Notes

### Challenge

- Tooltips disappear from the DOM when mouse moves away
- Cannot right-click → Inspect directly

### Trick: Freeze the Browser

1. Open **Sources** tab in DevTools
2. Hover over the element to trigger the tooltip
3. Press **F8** (Windows) or **Cmd+\\** (Mac) to freeze/pause the browser
4. Switch back to **Elements** tab to inspect the tooltip DOM

### Triggering Tooltip with Playwright

```typescript
const tooltipCard = page.locator('nb-card', { hasText: 'Tooltip Placements' });
await tooltipCard.getByRole('button', { name: 'Top' }).hover();
```

### Locating the Tooltip

**If `role="tooltip"` is available:**

```typescript
const tooltip = page.getByRole('tooltip');
```

**If not (common case):**

```typescript
const tooltip = await page.locator('nb-tooltip').textContent();
expect(tooltip).toEqual('This is a tooltip');
```

### Key Points

- `hover()` simulates mouse hovering to trigger tooltip display
- Not all tooltips have `role="tooltip"` — check the DOM first
- F8 freeze trick is essential for inspecting dynamic elements

## English Short Summary

Freeze the browser with F8 to inspect dynamic tooltips. Use `hover()` to trigger them, then locate via `getByRole('tooltip')` or a regular locator with `textContent()`.
