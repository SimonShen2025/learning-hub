---
title: "Environment Variables"
lectureId: 66
section: 8
sectionTitle: "Advanced"
date: "2026-04-29"
tags: [playwright, env, baseURL, dotenv, process-env, test-options, projects]
---

## 中文短总结

多种管理环境变量的方式：①`baseURL` 在 config 的 `use` 中设置，测试中用 `/` 替代完整 URL；②在 `projects` 中为不同环境（dev/staging）设置不同 `baseURL`；③自定义环境变量需创建 `test-options.ts` 扩展 test fixture，在 config 中导入类型并声明变量值；④使用 `.env` 文件 + `dotenv` 库读取 `process.env` 变量；⑤命令行直接传递 `URL=xxx npx playwright test`；⑥三元运算符根据环境变量动态选择 URL。敏感信息放 `.env` 并加入 `.gitignore`。

## English Notes

### Option 1: `baseURL`

```typescript
// playwright.config.ts
use: { baseURL: 'http://localhost:4200' }

// In test — just use relative path
await page.goto('/');
```

### Option 2: Per-Project URLs

```typescript
projects: [
  { name: 'dev', use: { baseURL: 'http://localhost:4201' } },
  { name: 'staging', use: { baseURL: 'http://localhost:4202' } },
]
```

### Option 3: Custom Environment Variables via Test Options

```typescript
// test-options.ts
import { test as base } from '@playwright/test';

export type TestOptions = {
  globalsQaURL: string;
};

export const test = base.extend<TestOptions>({
  globalsQaURL: ['', { option: true }],
});
```

```typescript
// playwright.config.ts
import type { TestOptions } from './test-options';

export default defineConfig<TestOptions>({
  projects: [
    { name: 'chromium', use: { globalsQaURL: 'http://example.com' } },
  ],
});
```

```typescript
// In test
import { test } from './test-options';
test('example', async ({ page, globalsQaURL }) => {
  await page.goto(globalsQaURL);
});
```

### Option 4: `.env` File + dotenv

```bash
npm install dotenv --save-dev --force
```

```env
# .env (add to .gitignore!)
URL=http://example.com
USERNAME=test@test.com
PASSWORD=Welcome1
```

```typescript
// playwright.config.ts
require('dotenv').config();

// In test
await page.goto(process.env.URL);
```

### Option 5: CLI Override

```bash
URL=http://example.com npx playwright test
```

### Option 6: Ternary Operator

```typescript
baseURL: process.env.DEV === '1'
  ? 'http://localhost:4201'
  : process.env.STAGING === '1'
    ? 'http://localhost:4202'
    : 'http://localhost:4200',
```

### Key Points

- `.env` files should be in `.gitignore` for sensitive data
- `process.env` variables can be set via `.env` file, CLI, or NPM scripts
- Test options require extending the base `test` object

## English Short Summary

Manage environment variables via `baseURL`, per-project configs, custom test options (extended fixtures), `.env` files with dotenv, CLI overrides, or ternary expressions. Keep sensitive data in `.gitignore`-protected `.env` files.
