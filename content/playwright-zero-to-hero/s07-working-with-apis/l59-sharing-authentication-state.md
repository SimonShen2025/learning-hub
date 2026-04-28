---
title: "Sharing Authentication State"
lectureId: 59
section: 7
sectionTitle: "Working with APIs"
date: "2026-04-29"
tags: [playwright, auth, setup, storageState, dependencies, project, session]
---

## 中文短总结

避免每个测试都重复登录：创建 `auth.setup.ts` 文件执行一次登录，使用 `page.context().storageState({ path })` 将认证状态保存到 `.auth/user.json`。在 `playwright.config.ts` 中创建 `setup` project，其他 project 通过 `dependencies: ['setup']` 依赖它，并用 `storageState` 读取保存的认证文件。这样登录只执行一次，所有测试共享已登录状态。

## English Notes

### Setup File: `auth.setup.ts`

```typescript
import { test as setup } from '@playwright/test';

const authFile = '.auth/user.json';

setup('authenticate', async ({ page }) => {
  await page.goto('https://conduit.bondaracademy.com/');
  await page.getByText('Sign in').click();
  await page.getByRole('textbox', { name: 'Email' }).fill('test@test.com');
  await page.getByRole('textbox', { name: 'Password' }).fill('Welcome1');
  await page.getByRole('button').click();

  // Wait for app to fully load
  await page.waitForResponse('**/api/tags');

  // Save authenticated state
  await page.context().storageState({ path: authFile });
});
```

### Config Changes

```typescript
// playwright.config.ts
projects: [
  { name: 'setup', testMatch: 'auth.setup.ts' },
  {
    name: 'chromium',
    use: { storageState: '.auth/user.json' },
    dependencies: ['setup'],
  },
]
```

### How It Works

```
setup project (auth.setup.ts)
  → Logs in via UI
  → Saves state to .auth/user.json
  ↓
chromium project (depends on setup)
  → Reads .auth/user.json
  → All tests start already authenticated
```

### Key Points

| Concept | Detail |
|---|---|
| `import { test as setup }` | Rename `test` to `setup` for clarity |
| `.auth/` folder | Add to `.gitignore` — contains session data |
| `storageState` | Saves/loads cookies and localStorage |
| `dependencies` | Ensures setup runs before test project |
| `waitForResponse` | Ensures app is fully loaded before saving state |

## English Short Summary

Create an `auth.setup.ts` that logs in once and saves the session via `storageState`. Configure projects with `dependencies` so all tests share the authenticated state without repeated logins.
