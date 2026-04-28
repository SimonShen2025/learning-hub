---
title: "Modify API Response"
lectureId: 56
section: 7
sectionTitle: "Working with APIs"
date: "2026-04-29"
tags: [playwright, api, intercept, route-fetch, modify-response, fulfill]
---

## 中文短总结

与 mock 不同，本节是拦截真实 API 响应并**修改**后再返回给浏览器。三步流程：①用 `page.route()` 拦截 URL，②用 `route.fetch()` 完成原始 API 调用并获取响应，③修改响应体后用 `route.fulfill()` 返回修改后的数据。通过 `response.json()` 获取 JSON 对象便于操作。注意：如果没有 assertion 或等待，Playwright 可能在 fulfill 完成前关闭浏览器导致测试失败。

## English Notes

### Three-Step Pattern

```typescript
await page.route('**/api/articles*', async (route) => {
  // Step 1: Complete the original API call
  const response = await route.fetch();

  // Step 2: Get and modify the response body
  const responseBody = await response.json();
  responseBody.articles[0].title = 'This is a MOCK test title';
  responseBody.articles[0].description = 'This is a MOCK description';

  // Step 3: Fulfill with modified response
  await route.fulfill({
    body: JSON.stringify(responseBody),
  });
});
```

### Response Object Methods

| Method | Returns |
|---|---|
| `response.json()` | Parsed JSON object (easier to manipulate) |
| `response.body()` | Raw string |
| `response.status()` | HTTP status code |
| `response.ok` | Boolean — was it 2xx? |
| `response.headers()` | Response headers |

### Mock vs Modify

| Approach | API call made? | Use case |
|---|---|---|
| **Mock** (L55) | No — fully replaced | Complete control, faster |
| **Modify** (this lesson) | Yes — then altered | Test with real data + controlled changes |

### Important Note

- If test has no assertions or waits after route setup, Playwright may close the browser before `fulfill` completes — causing test failure
- Add assertions or `page.waitForTimeout()` to give time for the route to complete

## English Short Summary

Intercept real API responses using `route.fetch()`, modify the JSON body, then `route.fulfill()` with the updated data. Unlike mocking, this approach lets the real API call complete before altering the response.
