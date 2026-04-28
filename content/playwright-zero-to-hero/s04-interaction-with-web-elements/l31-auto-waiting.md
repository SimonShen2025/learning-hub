---
title: "Auto-Waiting"
lectureId: 31
section: 4
sectionTitle: "Interaction with Web Elements"
date: "2026-04-29"
tags: [playwright, auto-waiting, promises, stability]
---

## 中文短总结

Playwright 的 `await` 方法会自动等待元素满足条件（attached、visible、stable、receives events、enabled、editable），默认超时 30 秒。不同方法等待的条件不同（如 `click()` 等所有条件，`textContent()` 只等 attached）。部分方法（如 `allTextContents()`）不支持自动等待，需使用替代等待：`waitForSelector()`、`waitForResponse()`、`waitForLoadState()` 等。

## English Notes

### Auto-Wait Conditions

| Condition | Description |
|---|---|
| Attached | Element exists in DOM |
| Visible | Element is visible (not hidden) |
| Stable | Element is not animating |
| Receives Events | Element is not obscured by other elements |
| Enabled | Element is not disabled |
| Editable | Element is editable (for input) |

Not all methods wait for all conditions — see Playwright docs for the matrix.

### Methods That Auto-Wait

- `click()` — attached, visible, stable, receives events, enabled
- `textContent()` — attached only
- `fill()`, `check()` — attached, visible, stable, enabled, editable

### Methods That Do NOT Auto-Wait

- `allTextContents()` — executes immediately
- `allInnerTexts()` — executes immediately

### Alternative Waits

```ts
// Wait for element state
await successButton.waitFor({ state: 'attached' })

// Wait for selector
await page.waitForSelector('.bg-success')

// Wait for API response
await page.waitForResponse('http://uitestingplayground.com/ajaxdata')

// Wait for network idle (not recommended — can hang)
await page.waitForLoadState('networkidle')

// Hard wait (not recommended)
await page.waitForTimeout(5000)
```

### Override Expect Timeout

```ts
await expect(element).toHaveText('Success', { timeout: 20000 })
```

## Key Takeaways

- Playwright auto-waits for action methods (click, fill, etc.) up to test timeout
- Not all methods support auto-waiting — check the docs
- Use `waitFor()`, `waitForResponse()`, etc. for methods without auto-wait
- Avoid `waitForTimeout()` (hard waits) — prefer dynamic waits
- Locator assertions have their own timeout (default 5s, configurable)
