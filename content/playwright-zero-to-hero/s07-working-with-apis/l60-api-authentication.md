---
title: "API Authentication"
lectureId: 60
section: 7
sectionTitle: "Working with APIs"
date: "2026-04-29"
tags: [playwright, api, auth, token, process-env, extraHTTPHeaders, storage-state]
---

## 中文短总结

将 UI 登录替换为 API 登录：在 `auth.setup.ts` 中通过 POST 请求获取 token，用 `fs.writeFileSync` 更新 `user.json` 中的 token 值。将 token 存入 `process.env.ACCESS_TOKEN`，然后在 `playwright.config.ts` 的 `extraHTTPHeaders` 中全局配置 Authorization header。这样所有测试中的 API 调用自动携带 token，无需在每个测试中重复获取 token 和设置 header。

## English Notes

### API-Based Auth Setup

```typescript
// auth.setup.ts
import { request } from '@playwright/test';
import user from './.auth/user.json';
import fs from 'fs';

const authFile = '.auth/user.json';

setup('authenticate', async () => {
  const context = await request.newContext();
  const response = await context.post(
    'https://conduit-api.bondaracademy.com/api/users/login',
    { data: { user: { email: 'test@test.com', password: 'Welcome1' } } }
  );
  const responseBody = await response.json();
  const accessToken = responseBody.user.token;

  // Update user.json with new token
  user.origins[0].localStorage[0].value = accessToken;
  fs.writeFileSync(authFile, JSON.stringify(user));

  // Save token as environment variable for other tests
  process.env.ACCESS_TOKEN = accessToken;
});
```

### Global Authorization Header

```typescript
// playwright.config.ts
use: {
  extraHTTPHeaders: {
    Authorization: `Token ${process.env.ACCESS_TOKEN}`,
  },
}
```

### Before vs After

| Before | After |
|---|---|
| Each test calls login API for token | Token obtained once in setup |
| Each API call needs `headers: { Authorization: ... }` | Headers set globally in config |
| Duplicate token-fetching code | Clean, single-line API calls |

### Simplified Test Code

```typescript
// Before: needed token + headers in every test
const articleResponse = await request.post(url, {
  data: { ... },
  headers: { Authorization: `Token ${accessToken}` },
});

// After: just the API call
const articleResponse = await request.post(url, { data: { ... } });
```

### Key Concepts

| Concept | Detail |
|---|---|
| `process.env` | Node.js environment variables — share data across files |
| `fs.writeFileSync` | Write file synchronously (built-in Node.js) |
| `extraHTTPHeaders` | Global headers applied to all `request` calls |
| Convention | Environment variable names in ALL_CAPS |

## English Short Summary

Replace UI login with API login in setup. Save the token to `process.env.ACCESS_TOKEN` and configure `extraHTTPHeaders` globally in the config. This eliminates duplicate auth code from every test.
