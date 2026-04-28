---
title: "Test Retries"
lectureId: 63
section: 8
sectionTitle: "Advanced"
date: "2026-04-29"
tags: [playwright, retries, worker, flaky, config, testInfo]
---

## 中文短总结

Playwright 的 retry 机制：测试失败时自动重试。每次重试在新 worker（全新浏览器实例）中执行，确保隔离性。在 `playwright.config.ts` 中设置 `retries: N`。可在 `test.describe.configure({ retries: N })` 中覆盖全局设置。使用 `testInfo.retry` 可在测试内部检测当前是否为重试运行，用于执行重试前的清理操作。

## English Notes

### Worker Behavior

**Without retry:**
```
Worker 1: Test1 ✅ → Test2 ❌ → Worker 2: Test3 ✅
```

**With retry:**
```
Worker 1: Test1 ✅ → Test2 ❌ → Worker 2: Test2 (retry) ✅ → Test3 ✅
```

- Failed test always retries in a **new worker** (clean browser session)

### Configuration

```typescript
// playwright.config.ts — global setting
retries: process.env.CI ? 2 : 1,

// Override per describe block
test.describe.configure({ retries: 2 });
```

### Retry-Aware Test Logic

```typescript
test('example', async ({ page }, testInfo) => {
  if (testInfo.retry) {
    // Clean up database before retry
    await cleanupTestData();
  }
  // ... test steps
});
```

### Key Points

| Concept | Detail |
|---|---|
| New worker per retry | Ensures clean browser isolation |
| Global config | `retries` in playwright.config.ts |
| Per-describe override | `test.describe.configure({ retries: N })` |
| `testInfo.retry` | Number of current retry (0 = first run) |
| CI vs local | Common to set more retries in CI |

## English Short Summary

Configure `retries` in playwright.config.ts to auto-retry failed tests. Each retry runs in a new worker for isolation. Override per-describe and use `testInfo.retry` for conditional cleanup logic.
