---
title: "Mocking API"
lectureId: 55
section: 7
sectionTitle: "Working with APIs"
date: "2026-04-29"
tags: [playwright, api, mock, page-route, fulfill, json, wildcard]
---

## 中文短总结

使用 `page.route()` 拦截浏览器 API 请求并返回自定义 mock 响应。关键：mock 必须在浏览器发起请求**之前**配置（放在 `page.goto()` 之前）。使用 `route.fulfill({ body: JSON.stringify(mockData) })` 返回自定义 JSON。最佳实践：将 mock 数据放入独立 JSON 文件（如 `test-data/tags.json`），并用通配符简化 URL 匹配（`**/api/tags`）。

## English Notes

### Basic Mocking Pattern

```typescript
// Configure mock BEFORE navigating to the page
await page.route('**/api/tags', async (route) => {
  const tags = { tags: ['automation', 'playwright'] };
  await route.fulfill({
    body: JSON.stringify(tags),
  });
});

// Now navigate — browser will use mock response
await page.goto('https://conduit.bondaracademy.com/');
```

### Key Rules

| Rule | Detail |
|---|---|
| **Timing** | `page.route()` must be defined BEFORE the browser makes the API call |
| **URL matching** | Use wildcards: `**/api/tags` matches any base URL |
| **Fulfill** | `route.fulfill()` sends your custom response to the browser |
| **Body format** | Must be stringified: `JSON.stringify(object)` |

### Best Practice: External Mock Data

```typescript
// test-data/tags.json
{ "tags": ["automation", "playwright"] }

// spec file
import tags from '../test-data/tags.json';

await page.route('**/api/tags', async (route) => {
  await route.fulfill({ body: JSON.stringify(tags) });
});
```

- Import JSON without curly braces: `import tags from '...'`
- Keep mock objects outside test code for maintainability

### Result

- Mock response is instant (no server round-trip)
- Tags loaded in ~32ms instead of seconds
- Full control over displayed data

## English Short Summary

Use `page.route()` before navigation to intercept API calls and `route.fulfill()` to return mock JSON. Store mock data in separate JSON files and use URL wildcards for cleaner patterns.
