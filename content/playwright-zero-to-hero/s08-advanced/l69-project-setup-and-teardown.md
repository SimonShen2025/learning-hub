---
title: "Project Setup and Teardown"
lectureId: 69
section: 8
sectionTitle: "Advanced"
date: "2026-04-29"
tags: [playwright, project, setup, teardown, dependencies, process-env]
---

## 中文短总结

通过项目级别的 setup/teardown 管理测试前置和后置操作。创建独立的 `.setup.ts` 文件（如创建文章），在 `playwright.config.ts` 中定义为独立 project，目标测试 project 通过 `dependencies` 依赖 setup project。Teardown 通过 `teardown` 属性指向清理 project。数据在 project 间通过 `process.env` 传递（如 slug ID）。支持多层依赖链：auth setup → article setup → test → article cleanup。

## English Notes

### Project Dependency Chain

```
setup (auth token)
  → articleSetup (create article, save slugId)
    → likesCounter test (use article)
      → articleCleanup (teardown: delete article)
```

### Setup File Example

```typescript
// new-article.setup.ts
import { test as setup, expect, request } from '@playwright/test';

setup('create new article', async () => {
  const context = await request.newContext();
  const articleResponse = await context.post(
    'https://conduit-api.bondaracademy.com/api/articles/',
    {
      data: { article: { title: 'Likes test article', ... } },
      headers: { Authorization: `Token ${process.env.ACCESS_TOKEN}` },
    }
  );
  expect(articleResponse.status()).toEqual(201);

  const response = await articleResponse.json();
  process.env.SLUGID = response.article.slug;  // Share via env var
});
```

### Config with Dependencies & Teardown

```typescript
projects: [
  { name: 'setup', testMatch: 'auth.setup.ts' },
  {
    name: 'articleSetup',
    testMatch: 'new-article.setup.ts',
    dependencies: ['setup'],
    teardown: 'articleCleanup',
  },
  {
    name: 'articleCleanup',
    testMatch: 'article-cleanup.setup.ts',
  },
  {
    name: 'likesCounter',
    testMatch: 'likes-counter.spec.ts',
    dependencies: ['articleSetup'],
  },
]
```

### Key Concepts

| Concept | Detail |
|---|---|
| `dependencies` | Array of project names that must run first |
| `teardown` | Project name to run after this project completes |
| `process.env` | Share data (slugId, tokens) between setup/test/teardown |
| `testMatch` | Scope project to specific spec files |

## English Short Summary

Create project-level setup/teardown by defining separate `.setup.ts` files as projects with `dependencies` and `teardown` in the config. Use `process.env` to share data like IDs between projects.
