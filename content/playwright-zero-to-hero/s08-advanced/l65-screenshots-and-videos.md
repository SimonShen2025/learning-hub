---
title: "Screenshots and Videos"
lectureId: 65
section: 8
sectionTitle: "Advanced"
date: "2026-04-29"
tags: [playwright, screenshot, video, buffer, debug, config]
---

## 中文短总结

截图：`await page.screenshot({ path: 'screenshots/name.png' })` 截取整页；也可对特定元素截图 `locator.screenshot()`；截图可保存为 buffer（二进制）用于发送到其他系统。视频：在 `playwright.config.ts` 的 `use` 中设置 `video: 'on'`（或 `'on-first-retry'`、`'retain-on-failure'`）。需通过 CLI 运行才会录制（VS Code 插件不录制）。可自定义分辨率 `video: { mode: 'on', size: { width: 1920, height: 1080 } }`。视频自动附加到 HTML 报告中。

## English Notes

### Screenshots

```typescript
// Full page screenshot
await page.screenshot({ path: 'screenshots/formLayouts.png' });

// Element screenshot
await page.locator('nb-card', { hasText: 'Inline form' })
  .screenshot({ path: 'screenshots/inlineForm.png' });

// Save as buffer (binary)
const buffer = await page.screenshot();
console.log(buffer.toString('base64'));
```

### Video Recording

```typescript
// playwright.config.ts
use: {
  video: 'on',  // Record all tests
  // Or with custom resolution:
  video: { mode: 'on', size: { width: 1920, height: 1080 } },
}
```

### Video Options

| Option | Behavior |
|---|---|
| `'off'` | No recording (default) |
| `'on'` | Record all tests |
| `'on-first-retry'` | Record only on first retry |
| `'retain-on-failure'` | Record all, keep only failed |

### Important Notes

- Videos must be run via **CLI** (`npx playwright test`) — VS Code plugin won't record
- Videos are auto-attached to HTML report
- Default resolution: 800×800
- Traces (from previous lessons) are generally better for debugging than videos
- Videos useful for animations that traces can't capture well

## English Short Summary

Use `page.screenshot()` for full-page or element screenshots. Configure `video` in playwright.config.ts for recording. Run via CLI for video capture. Videos auto-attach to HTML reports.
