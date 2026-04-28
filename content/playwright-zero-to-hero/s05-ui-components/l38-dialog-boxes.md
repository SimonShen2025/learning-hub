---
title: "Dialog Boxes"
lectureId: 38
section: 5
sectionTitle: "UI Components"
date: "2026-04-29"
tags: [playwright, dialog, page-on, accept, browser-dialog, listener]
---

## 中文短总结

Dialog Box 分两种：Web 对话框（属于 DOM，正常定位即可）和浏览器对话框（不属于 DOM，无法 Inspect）。Playwright 默认自动**取消**浏览器对话框。要接受它，需在触发操作前注册 `page.on('dialog')` 监听器，在回调中调用 `dialog.accept()`，还可通过 `dialog.message()` 断言对话框内容。

## English Notes

### Two Types of Dialog Boxes

| Type | Belongs to | Automation |
|---|---|---|
| **Web dialog** | DOM (page) | Standard — inspect, locate, interact |
| **Browser dialog** | Browser (not in DOM) | Requires `page.on('dialog')` listener |

### Playwright Default Behavior

- Playwright automatically **cancels/dismisses** browser dialogs
- Must explicitly call `dialog.accept()` to accept them

### Handling Browser Dialogs

```typescript
// Register listener BEFORE triggering the dialog
page.on('dialog', dialog => {
  expect(dialog.message()).toEqual('Are you sure you want to delete?');
  dialog.accept();
});

// Trigger the dialog (e.g., clicking delete icon)
await page.getByRole('table').locator('tr', { hasText: 'mdo@gmail.com' })
  .locator('.nb-trash').click();
```

### Asserting After Dialog

```typescript
// Verify row was deleted
await expect(page.locator('table tr').first()).not.toHaveText('mdo@gmail.com');
```

### Key Points

- `page.on('dialog')` must be set up **before** the action that triggers the dialog
- `dialog.accept()` — accept the dialog
- `dialog.dismiss()` — dismiss/cancel (default behavior)
- `dialog.message()` — get the dialog message text for assertion

## English Short Summary

Playwright auto-cancels browser dialogs. Use `page.on('dialog', cb)` before the triggering action, call `dialog.accept()` inside the callback, and `dialog.message()` to assert dialog text.
