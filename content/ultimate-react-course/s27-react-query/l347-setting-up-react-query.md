---
title: "Setting Up React Query"
lectureId: 347
section: 27
sectionTitle: "React Query: Managing Remote State"
date: "2026-03-05"
tags: [react-query, setup, QueryClient, QueryClientProvider]
---

## 中文短总结

安装 `@tanstack/react-query`。创建 `QueryClient`（配置 staleTime）。用 `QueryClientProvider` 包裹应用。安装 DevTools（`@tanstack/react-query-devtools`）调试缓存。

## 中文长总结

### 安装
```bash
npm install @tanstack/react-query@4
npm install @tanstack/react-query-devtools@4
```

### 配置 QueryClient
```jsx
// App.jsx
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 0, // 数据立即变为 stale（默认行为）
      // staleTime: 60 * 1000, // 60秒内数据视为新鲜
    },
  },
});

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={false} />
      <GlobalStyles />
      <BrowserRouter>
        <Routes>{/* ... */}</Routes>
      </BrowserRouter>
    </QueryClientProvider>
  );
}
```

### staleTime 概念
- `staleTime: 0` — 数据立即过期，每次都重新获取
- `staleTime: 60000` — 60秒内使用缓存，不重新获取
- 过期后，下次组件挂载或窗口聚焦时后台重新获取

### DevTools
- 显示所有缓存的 query
- 查看数据状态（fresh/stale/fetching）
- 手动触发 refetch/invalidate

## English Short Summary

Set up React Query: install `@tanstack/react-query`, create `QueryClient` with `staleTime` config. Wrap app in `QueryClientProvider`. Add `ReactQueryDevtools` for cache debugging. staleTime controls cache freshness.
