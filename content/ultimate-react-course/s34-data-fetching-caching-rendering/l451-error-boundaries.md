---
title: "Error Handling: Setting Up Error Boundaries"
lectureId: 451
section: 34
sectionTitle: "Data Fetching, Caching, and Rendering"
date: "2026-03-05"
tags: [error-handling, error-boundary, nextjs]
---

## 中文短总结

`error.js` 特殊文件自动捕获当前路由段的运行时错误。必须是 Client Component（`"use client"`）。接收 `error` 和 `reset` props。`reset()` 可以重试渲染。类似 React Error Boundary，但由 Next.js 自动设置。

## 中文长总结

### error.js
```jsx
// app/cabins/[cabinId]/error.js
"use client"; // 必须！

export default function Error({ error, reset }) {
  return (
    <main className="flex justify-center items-center flex-col gap-6">
      <h1 className="text-3xl font-semibold">Something went wrong!</h1>
      <p className="text-lg">{error.message}</p>

      <button
        className="inline-block bg-accent-500 text-primary-800 px-6 py-3 text-lg"
        onClick={reset}
      >
        Try again
      </button>
    </main>
  );
}
```

### 工作原理
```
Next.js 内部等价于：
<Layout>
  <ErrorBoundary fallback={<Error />}>
    <Suspense fallback={<Loading />}>
      <Page />
    </Suspense>
  </ErrorBoundary>
</Layout>

异常流程：
1. Page throw Error
2. ErrorBoundary 捕获
3. 显示 error.js 的内容
4. 用户点击 "Try again"
5. reset() → 重新渲染 Page
```

### 错误冒泡
- `error.js` 只捕获当前路由段的错误
- 不捕获同级 `layout.js` 的错误
- 向上冒泡到父路由的 `error.js`
- 根级别错误用 `app/global-error.js`

### global-error.js
```jsx
// app/global-error.js — 捕获根布局错误
"use client";
export default function GlobalError({ error, reset }) {
  return (
    <html>
      <body>
        <h2>Something went wrong!</h2>
        <button onClick={reset}>Try again</button>
      </body>
    </html>
  );
}
```

## English Short Summary

`error.js`: auto error boundary for route segments. Must be `"use client"`. `error.message` + `reset()` to retry. Errors bubble up to parent `error.js`. `global-error.js` for root layout errors.
