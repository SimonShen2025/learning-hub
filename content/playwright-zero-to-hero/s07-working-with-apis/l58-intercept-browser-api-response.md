---
title: "Intercept Browser API Response"
lectureId: 58
section: 7
sectionTitle: "Working with APIs"
date: "2026-04-29"
tags: [playwright, api, intercept, waitForResponse, slug, cleanup, delete]
---

## 中文短总结

场景：通过 UI 创建文章，然后用 API 删除文章（清理测试数据）。关键技术：使用 `page.waitForResponse()` 拦截浏览器在点击"发布"后发出的 API 响应，从中提取文章的 `slug` ID。拿到 slug 后，使用 `request.delete()` 通过 API 删除文章，URL 中用 JS 模板字符串插入 slug。这样测试可反复运行不会产生重复数据。

## English Notes

### Intercept Browser Response to Get Data

```typescript
// Wait for API response when publishing article
const articleResponse = await page.waitForResponse(
  'https://conduit-api.bondaracademy.com/api/articles/'
);
const articleResponseBody = await articleResponse.json();
const slugId = articleResponseBody.article.slug;
```

### Delete via API Using Slug

```typescript
const deleteResponse = await request.delete(
  `https://conduit-api.bondaracademy.com/api/articles/${slugId}`,
  {
    headers: {
      Authorization: `Token ${accessToken}`,
    },
  }
);
expect(deleteResponse.status()).toEqual(204);
```

### Full Flow

1. **UI**: Create article (fill form, click publish)
2. **Intercept**: `page.waitForResponse()` captures the API response
3. **Extract**: Get `slug` from response body
4. **Assert**: Verify article appears in UI
5. **API cleanup**: `request.delete()` with slug in URL
6. **Result**: Article removed, test is repeatable

### Key Concepts

| Concept | Detail |
|---|---|
| `page.waitForResponse(url)` | Waits for a specific API response and returns it |
| `response.json()` | Parse intercepted response as JSON |
| `slug` | Unique article identifier from the API response |
| Template literal | `` `.../${slugId}` `` — insert variable into URL |
| Status 204 | Successful deletion (No Content) |

## English Short Summary

Use `page.waitForResponse()` to intercept browser API calls and extract data (like a slug ID) from responses. Then use `request.delete()` with the extracted ID for API-based test cleanup.
