---
title: "Setup New Project"
lectureId: 54
section: 7
sectionTitle: "Working with APIs"
date: "2026-04-29"
tags: [playwright, project-setup, conduit, api, networking-tab, postman]
---

## 中文短总结

为 API 相关练习搭建新的 Playwright 项目。测试应用为 Conduit（conduit.bondaracademy.com），一个具有后端 API 的文章发布平台。通过 Chrome DevTools Networking 标签可查看浏览器实际发出的 API 请求和 JSON 响应。项目初始化用 `npm init playwright@latest`，创建基础 spec 文件和 `beforeEach` hook。推荐安装 Postman 用于手动验证 API 调用。

## English Notes

### Test Application

- **URL**: `conduit.bondaracademy.com`
- **API**: `conduit-api.bondaracademy.com`
- Features: view/create/delete articles, user auth
- Has a backend API — useful for API testing practice

### Observing API Calls

- Open Chrome DevTools → **Network** tab → filter by **XHR and Fetch**
- Refresh page to see API calls (e.g., `/api/tags`, `/api/articles`)
- Response tab shows JSON data matching what's displayed in the UI

### Project Setup

```bash
npm init playwright@latest
```

- Select TypeScript
- Delete `test-examples` folder
- Clean up default spec, rename to `working-with-api.spec.ts`
- Add `beforeEach` hook to navigate to home page

```typescript
test.beforeEach(async ({ page }) => {
  await page.goto('https://conduit.bondaracademy.com/');
});
```

### Tools

- **Postman** — download from postman.com for manual API verification

## English Short Summary

Set up a new Playwright project for API testing using the Conduit app. Use Chrome DevTools Network tab to inspect API requests/responses. Install Postman for manual API verification.
