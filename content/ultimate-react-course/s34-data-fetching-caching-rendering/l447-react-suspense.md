---
title: "What is React Suspense?"
lectureId: 447
section: 34
sectionTitle: "Data Fetching, Caching, and Rendering"
date: "2026-03-05"
tags: [suspense, react, streaming, async]
---

## 中文短总结

React Suspense 让组件在异步操作时"暂停"渲染，显示 fallback UI。主要用于：数据获取（Server Components）和代码分割（`React.lazy`）。组件 throw Promise → Suspense 捕获 → 显示 fallback → 完成后替换。

## 中文长总结

### Suspense 概念
```jsx
<Suspense fallback={<Spinner />}>
  <SlowComponent />   {/* 异步数据获取 */}
</Suspense>
```

### 触发 Suspense 的方式
1. **Server Components** — `async` 组件自动触发
2. **React.lazy** — 代码分割（懒加载组件）
3. **use() hook** — 从 Promise 中读取值（React 19）

### 工作原理
```
1. React 渲染组件树
2. 遇到异步 Server Component → "暂停"
3. 向上找到最近的 <Suspense> 边界
4. 渲染 fallback UI
5. 异步操作完成 → 替换 fallback 为实际内容
```

### 嵌套 Suspense
```jsx
<Suspense fallback={<PageSpinner />}>
  <Header />           {/* 立即渲染 */}
  <Suspense fallback={<ListSpinner />}>
    <CabinList />      {/* 独立加载 */}
  </Suspense>
  <Suspense fallback={<SidebarSpinner />}>
    <Sidebar />        {/* 独立加载 */}
  </Suspense>
</Suspense>
```

### 与 Error Boundary 的关系
| Suspense | Error Boundary |
|----------|---------------|
| 捕获 Promise | 捕获 Error |
| 显示 loading | 显示 error |
| 成功后替换 | 可以 retry |

### 关键点
- Suspense 是 React API（不是 Next.js 特有）
- 不是 loading state 管理 → 是渲染流控制
- 多个 Suspense 可以独立加载（并行）

## English Short Summary

React Suspense: components "suspend" during async operations, show fallback. Triggered by async Server Components, `React.lazy`, `use()` hook. Nested Suspense for independent loading. Like Error Boundary but for loading.
