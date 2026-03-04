---
title: "How Next.js Caches Data"
lectureId: 458
section: 34
sectionTitle: "Data Fetching, Caching, and Rendering"
date: "2026-03-05"
tags: [caching, data-cache, router-cache, full-route-cache, nextjs]
---

## 中文短总结

Next.js 有四层缓存机制：Request Memoization（请求去重）、Data Cache（fetch 结果持久缓存）、Full Route Cache（构建时生成的 HTML 缓存）、Router Cache（客户端路由缓存）。理解缓存对 Next.js 开发至关重要。

## 中文长总结

### 四层缓存

#### 1. Request Memoization
```
同一次渲染中，相同 fetch 调用只执行一次。
- generateMetadata 和 Page 都调用 getCabin(7)
- 实际只请求一次
- React 级别的去重
```

#### 2. Data Cache
```
fetch 结果默认被永久缓存（跨请求、跨部署）。
- 第一次 fetch → 存入 Data Cache
- 后续 fetch → 直接从 Cache 返回
- 需要 revalidate 来更新
```

#### 3. Full Route Cache
```
Static 路由在构建时生成的 HTML 和 RSC Payload 被缓存。
- 构建时：渲染 → 缓存 HTML + RSC Payload
- 请求时：直接返回缓存内容
- Dynamic 路由不使用这层缓存
```

#### 4. Router Cache (Client-side)
```
客户端导航时，已访问过的路由缓存在浏览器内存中。
- 用户访问 /about → 缓存
- 用户回到 /about → 从内存读取
- 默认 30 秒（Dynamic）或 5 分钟（Static）
```

### 缓存关系图
```
请求 → Request Memoization → Data Cache → Full Route Cache → Router Cache
```

### 控制缓存
```js
// 禁用 Data Cache
fetch(url, { cache: "no-store" });

// 设置 revalidation
fetch(url, { next: { revalidate: 3600 } });

// 路由段配置
export const revalidate = 3600; // 页面级
export const dynamic = "force-dynamic"; // 强制动态

// 手动 revalidation
revalidatePath("/cabins");
revalidateTag("cabins");
```

## English Short Summary

Next.js 4 caching layers: Request Memoization (dedupe), Data Cache (persistent fetch cache), Full Route Cache (build-time HTML), Router Cache (client-side). Control with `cache`, `revalidate`, `revalidatePath`, `revalidateTag`.
