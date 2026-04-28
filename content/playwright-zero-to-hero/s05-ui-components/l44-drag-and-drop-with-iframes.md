---
title: "Drag & Drop with iFrames"
lectureId: 44
section: 5
sectionTitle: "UI Components"
date: "2026-04-29"
tags: [playwright, drag-and-drop, iframe, frameLocator, dragTo, mouse-control]
---

## 中文短总结

当 Locator 在 iframe 中时，Playwright 无法直接找到，需先用 `page.frameLocator()` 切换到 iframe 内部。拖放操作有两种方式：`dragTo()` 方法简洁直接，适合大多数场景；需要精确控制时，可用 `hover()` → `mouse.down()` → `hover()` 目标 → `mouse.up()` 手动模拟。断言拖放结果可用 `toHaveText([array])` 验证目标区域包含预期元素。

## English Notes

### iFrames in Playwright

- iFrame = embedded HTML document inside another HTML document
- Locators inside iFrames are **invisible** to the main page context
- Sign: seeing a second `<html>` and `<body>` in the DOM

```typescript
const frame = page.frameLocator('[title="Photo Manager"] iframe');
```

### Accessing Elements Inside iFrame

```typescript
// Use frame instead of page for locators
await frame.locator('li', { hasText: 'High Tatras 2' }).click();
```

### Drag & Drop — Method 1: dragTo()

```typescript
await frame.locator('li', { hasText: 'High Tatras 2' })
  .dragTo(frame.locator('#trash'));
```

### Drag & Drop — Method 2: Precise Mouse Control

```typescript
await frame.locator('li', { hasText: 'High Tatras 4' }).hover();
await page.mouse.down();
await frame.locator('#trash').hover();
await page.mouse.up();
```

### Asserting Drag & Drop Results

```typescript
await expect(frame.locator('#trash li h5'))
  .toHaveText(['High Tatras 2', 'High Tatras 4']);
```

### Key Points

- Always check for iFrames when locators mysteriously fail
- `frameLocator()` returns a frame context — use it instead of `page` for element access
- `dragTo(target)` is the simplest drag & drop method
- For precise control: `hover()` → `mouse.down()` → `hover()` target → `mouse.up()`
- `mouse.down/up` are called on `page`, not on the frame

## English Short Summary

Use `frameLocator()` to access elements inside iFrames. Perform drag & drop with `dragTo()` for simplicity or manual `hover()/mouse` control for precision. Assert results with `toHaveText([array])`.
