---
title: "Timeouts"
lectureId: 32
section: 4
sectionTitle: "Interaction with Web Elements"
date: "2026-04-29"
tags: [playwright, timeouts, configuration]
---

## 中文短总结

Playwright 超时分三层：**Global timeout**（整个测试运行，默认无限制）> **Test timeout**（单个测试，默认 30s）> **Action/Navigation/Expect timeout**（嵌套在 test timeout 内）。Action 和 Navigation 默认无限制（受 test timeout 约束），Expect 默认 5s。可在 `playwright.config.ts` 全局配置，也可在单个测试或命令中覆盖。`test.slow()` 将超时乘以 3。

## English Notes

### Timeout Hierarchy

```
Global Timeout (default: none)
  └── Test Timeout (default: 30s)
        ├── Action Timeout (default: none → limited by test timeout)
        ├── Navigation Timeout (default: none → limited by test timeout)
        └── Expect Timeout (default: 5s)
```

Inner timeouts **cannot exceed** their parent timeout.

### Configuration in playwright.config.ts

```ts
export default defineConfig({
  globalTimeout: 60_000,        // 1 minute for entire run
  timeout: 30_000,              // 30s per test
  expect: { timeout: 5_000 },   // 5s for expect assertions
  use: {
    actionTimeout: 5_000,       // 5s per action
    navigationTimeout: 5_000,   // 5s per navigation
  },
})
```

### Override in Test

```ts
// Override test timeout
test.setTimeout(10_000)

// Override action timeout per command
await button.click({ timeout: 16_000 })

// Override expect timeout per assertion
await expect(element).toHaveText('text', { timeout: 20_000 })

// Triple default timeout for slow tests
test.slow()
```

### Override in beforeEach

```ts
test.beforeEach(async ({ page }, testInfo) => {
  testInfo.setTimeout(testInfo.timeout + 2000)
})
```

## Key Takeaways

- Outer timeout always overrides inner timeout
- Default test timeout = 30s; default expect timeout = 5s
- Configure globally in `playwright.config.ts`, override per test or per command
- `test.slow()` multiplies timeout by 3 — useful for known slow tests
