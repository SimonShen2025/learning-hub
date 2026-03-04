---
title: "Sharing State Between Client and Server: The URL"
lectureId: 465
section: 35
sectionTitle: "Client and Server Interactions"
date: "2026-03-05"
tags: [url-state, searchParams, client-server, state-sharing]
---

## 中文短总结

URL（searchParams）是 Server/Client Component 之间共享状态的桥梁。Client Component 修改 URL → Server Component 通过 `searchParams` prop 读取 → 重新渲染。不需要 Context、全局 store 或 prop drilling。

## 中文长总结

### URL 状态共享流程
```
1. Client Component 更新 URL
   router.replace(`/cabins?capacity=small`)

2. Next.js 检测 URL 变化 → 重新渲染页面

3. Server Component 读取 searchParams
   export default function Page({ searchParams }) {
     const filter = searchParams.capacity; // "small"
   }

4. 数据根据参数筛选 → 新 UI
```

### 完整示例
```jsx
// app/cabins/page.js (Server Component)
export default function Page({ searchParams }) {
  const filter = searchParams?.capacity ?? "all";

  return (
    <div>
      <Filter />   {/* Client Component: 修改 URL */}
      <Suspense fallback={<Spinner />} key={filter}>
        <CabinList filter={filter} />  {/* SC: 读取 URL 参数 */}
      </Suspense>
    </div>
  );
}
```

### 为什么用 URL
| 方案 | 问题 |
|------|------|
| 状态提升 | 页面是 SC，不能用 useState |
| Context | 只在 CC 之间工作 |
| 全局 Store | 只在客户端 |
| **URL** | ✅ SC 和 CC 都能访问 |

### URL 状态的优势
- Server Component 和 Client Component 都能读取
- 可以书签、分享
- 浏览器前进/后退自动工作
- SEO 友好
- 不需要额外的状态管理库

### 注意
- `searchParams` 使页面变为 Dynamic Rendering
- 用 `key={filter}` 让 Suspense 在 filter 变化时重新触发

## English Short Summary

URL (searchParams) bridges Server and Client Components. CC updates URL → page re-renders → SC reads `searchParams`. No Context/store needed. Bookmarkable, shareable, SEO-friendly. Makes page dynamically rendered.
