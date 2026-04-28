---
title: "Perform API Request"
lectureId: 57
section: 7
sectionTitle: "Working with APIs"
date: "2026-04-29"
tags: [playwright, api, request-fixture, post, authorization, token, data]
---

## 中文短总结

使用 Playwright 的 `request` fixture 直接发起 API 调用。场景：通过 API 创建文章（快速准备数据），再通过 UI 删除文章（测试删除功能）。流程：①POST 登录端点获取 access token，②携带 Authorization header POST 创建文章，③UI 登录 → 导航到文章 → 点击删除 → 验证已删除。注意：`request.post()` 的请求体参数叫 `data`（非 body），需 import 并声明 `request` fixture。

## English Notes

### Using the `request` Fixture

```typescript
import { test, expect, request } from '@playwright/test';

test('delete article', async ({ page, request }) => {
  // Step 1: Get auth token
  const response = await request.post(
    'https://conduit-api.bondaracademy.com/api/users/login',
    {
      data: {
        user: { email: 'test@test.com', password: 'Welcome1' },
      },
    }
  );
  const responseBody = await response.json();
  const accessToken = responseBody.user.token;

  // Step 2: Create article via API
  const articleResponse = await request.post(
    'https://conduit-api.bondaracademy.com/api/articles/',
    {
      data: {
        article: {
          title: 'This is a test article',
          description: 'Test description',
          body: 'Test body',
          tagList: [],
        },
      },
      headers: {
        Authorization: `Token ${accessToken}`,
      },
    }
  );
  expect(articleResponse.status()).toEqual(201);

  // Step 3: Delete via UI
  await page.getByText('Global Feed').click();
  await page.getByText('This is a test article').click();
  await page.getByRole('button', { name: 'Delete Article' }).first().click();

  // Step 4: Verify deletion
  await page.getByText('Global Feed').click();
  await expect(page.locator('.article-preview').first())
    .not.toContainText('This is a test article');
});
```

### Key Points

| Concept | Detail |
|---|---|
| `request` fixture | Must be imported and declared in test params |
| `data` property | Request body (Playwright uses `data` not `body`) |
| Authorization header | `{ Authorization: 'Token <value>' }` |
| `response.json()` | Parse response as JSON |
| `response.status()` | Get HTTP status code |
| Two API calls | First: login for token. Second: create article with token |

### Pattern: API Setup + UI Test

1. **API**: Create test data quickly (no UI interaction needed)
2. **UI**: Test the actual functionality (e.g., delete)
3. **Assertion**: Verify the result in the UI

## English Short Summary

Use the `request` fixture to make direct API calls for test setup. Get an auth token via POST login, then create resources with the token in the Authorization header. Combine API setup with UI testing for efficient tests.
