---
title: "Visual Testing"
lectureId: 74
section: 8
sectionTitle: "Advanced"
date: "2026-04-29"
tags: [playwright, visual-testing, screenshot, snapshot, toHaveScreenshot, baseline, comparison]
---

## 中文短总结

Playwright 内置视觉测试：使用 `await expect(locator).toHaveScreenshot()` 进行截图对比。首次运行创建基线（golden screenshot），后续运行对比差异。差异超阈值则测试失败，生成 actual/expected/diff 三张图。可设置 `maxDiffPixels` 容忍像素差异。HTML 报告中有滑块可视化对比。批量更新基线：`npx playwright test --update-snapshots`。每个 project 生成独立基线文件。

## English Notes

### Basic Usage

```typescript
// First run: creates baseline screenshot
// Subsequent runs: compare against baseline
await expect(page.locator('nb-card', { hasText: 'Using the Grid' }))
  .toHaveScreenshot();
```

### First Run vs Subsequent Runs

| Run | Behavior |
|---|---|
| **First** | Creates baseline (golden) screenshot — test "fails" |
| **Subsequent** | Compares current screenshot against baseline |
| **Mismatch** | Test fails, generates actual/expected/diff images |

### Output Files (on failure)

```
test-results/
  └── test-name/
      ├── actual.png      # Current screenshot
      ├── expected.png     # Baseline screenshot
      └── diff.png         # Highlighted differences
```

### Tolerance Settings

```typescript
// Per-assertion
await expect(locator).toHaveScreenshot({ maxDiffPixels: 250 });

// Global in config
expect: {
  toHaveScreenshot: { maxDiffPixels: 50 },
}
```

### Updating All Baselines

```bash
npx playwright test --update-snapshots
```

### File Naming

Screenshots are named per project:
```
spec-name/test-name-chromium.png
spec-name/test-name-firefox.png
```

Different browsers may render slightly different fonts/layouts.

### HTML Report

- Slider comparison: drag to reveal differences
- Shows baseline vs actual side by side
- Pixel difference count displayed

### Key Points

- Useful for catching unintended UI changes
- Each project/browser has its own baseline
- Use `maxDiffPixels` for tolerance with animations or unstable UI
- Traces are better for debugging logic; visual testing is for UI appearance

## English Short Summary

Use `toHaveScreenshot()` for visual regression testing. First run creates baselines; subsequent runs compare and fail on pixel differences. Set `maxDiffPixels` for tolerance. Update all baselines with `--update-snapshots`.
