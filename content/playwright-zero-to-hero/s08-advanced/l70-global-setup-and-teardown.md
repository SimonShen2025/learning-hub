---
title: "Global Setup and Teardown"
lectureId: 70
section: 8
sectionTitle: "Advanced"
date: "2026-04-29"
tags: [playwright, global-setup, global-teardown, config, request-newContext, export]
---

## 中文短总结

全局 setup/teardown 对整个框架所有项目生效（不像项目级只对特定 project 生效）。创建 `global-setup.ts` 和 `global-teardown.ts` 文件，导出一个 async 函数。在 `playwright.config.ts` 中用 `globalSetup: require.resolve('./global-setup')` 配置。由于全局函数独立于 Playwright 上下文，需用 `request.newContext()` 创建请求上下文，且手动添加 Authorization header（无法读取 config 中的 `extraHTTPHeaders`）。

## English Notes

### Global Setup File

```typescript
// global-setup.ts
import { request, expect } from '@playwright/test';
import user from './.auth/user.json';
import fs from 'fs';

async function globalSetup() {
  // Get auth token
  const context = await request.newContext();
  const response = await context.post(
    'https://conduit-api.bondaracademy.com/api/users/login',
    { data: { user: { email: 'test@test.com', password: 'Welcome1' } } }
  );
  const responseBody = await response.json();
  const accessToken = responseBody.user.token;

  // Save auth state
  user.origins[0].localStorage[0].value = accessToken;
  fs.writeFileSync('.auth/user.json', JSON.stringify(user));
  process.env.ACCESS_TOKEN = accessToken;

  // Create test article
  const articleResponse = await context.post(
    'https://conduit-api.bondaracademy.com/api/articles/',
    {
      data: { article: { title: 'Global likes test article', ... } },
      headers: { Authorization: `Token ${accessToken}` },
    }
  );
  expect(articleResponse.status()).toEqual(201);
  const body = await articleResponse.json();
  process.env.SLUGID = body.article.slug;
}

export default globalSetup;
```

### Global Teardown File

```typescript
// global-teardown.ts
import { request } from '@playwright/test';

async function globalTeardown() {
  const context = await request.newContext();
  await context.delete(
    `https://conduit-api.bondaracademy.com/api/articles/${process.env.SLUGID}`,
    { headers: { Authorization: `Token ${process.env.ACCESS_TOKEN}` } }
  );
}

export default globalTeardown;
```

### Config

```typescript
// playwright.config.ts
globalSetup: require.resolve('./global-setup'),
globalTeardown: require.resolve('./global-teardown'),
```

### Global vs Project Setup

| Aspect | Global Setup | Project Setup |
|---|---|---|
| Scope | All projects | Specific project |
| Config | `globalSetup` property | `dependencies` / `teardown` |
| File format | Plain function, `export default` | `test as setup` block |
| API access | `request.newContext()` required | Can use `request` fixture |
| Headers | Must be added manually | Can inherit from config |

## English Short Summary

Use `globalSetup` and `globalTeardown` in config for framework-wide setup/teardown. Export async functions that use `request.newContext()` for API calls. These run before/after all projects regardless of which project is selected.
