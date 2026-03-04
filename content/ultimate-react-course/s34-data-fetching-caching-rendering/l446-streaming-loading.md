---
title: "Streaming Route Segments With loading.js File"
lectureId: 446
section: 34
sectionTitle: "Data Fetching, Caching, and Rendering"
date: "2026-03-05"
tags: [streaming, loading, suspense, nextjs]
---

## 中文短总结

`loading.js` 文件在数据获取期间自动显示加载状态。Next.js 内部用 `<Suspense>` 包裹 `page.js`。Streaming SSR：先发送布局 → 数据就绪后流式发送页面内容。改善用户感知加载速度。

## 中文长总结

### loading.js
```jsx
// app/cabins/loading.js
import Spinner from "@/app/_components/Spinner";

export default function Loading() {
  return (
    <div className="grid items-center justify-center">
      <Spinner />
      <p className="text-xl text-primary-200">Loading cabin data...</p>
    </div>
  );
}
```

### 工作原理
```
Next.js 内部等价于：
<Layout>
  <Suspense fallback={<Loading />}>
    <Page />
  </Suspense>
</Layout>
```

### Streaming SSR 流程
```
1. 请求 /cabins
2. 服务器立即返回：Layout + Loading 组件的 HTML
3. 浏览器显示 Header + Spinner
4. 服务器获取数据...
5. 数据就绪 → 把 Page HTML "流" 到浏览器
6. 浏览器替换 Loading → Page 内容
```

### Spinner 组件
```jsx
// _components/Spinner.js
export default function Spinner() {
  return (
    <div className="spinner"></div>
  );
}
```

### 优势
- 不需要客户端 loading state 管理
- 用户更快看到部分 UI（Layout + Nav）
- SEO 不受影响（最终 HTML 包含数据）
- 自动应用在 `loading.js` 所在路由段

## English Short Summary

`loading.js`: automatic loading state during data fetching. Next.js wraps page in Suspense internally. Streaming SSR sends layout first, then streams page content when data is ready. Better perceived performance.
