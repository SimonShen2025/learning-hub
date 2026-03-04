---
title: "Fetching Data With getServerSideProps (SSR)"
lectureId: 502
section: 39
sectionTitle: "[Legacy] The Next.js Pages Router"
date: "2026-03-05"
tags: [getServerSideProps, SSR, server-side-rendering, data-fetching]
---

## 中文短总结

`getServerSideProps` 在**每次请求时**在服务端获取数据。返回最新数据但速度比 SSG 慢。适合需要实时数据或用户特定内容的页面。可以访问 `context`（req、res、params、query）。

## 中文长总结

### getServerSideProps
```jsx
// pages/cabins/[cabinId].js
import { getCabin } from "../../lib/data-service";

export async function getServerSideProps(context) {
  const { cabinId } = context.params;
  const cabin = await getCabin(cabinId);

  if (!cabin) {
    return { notFound: true }; // 返回 404
  }

  return {
    props: { cabin },
  };
}

export default function Cabin({ cabin }) {
  return (
    <div>
      <h1>{cabin.name}</h1>
      <p>{cabin.description}</p>
    </div>
  );
}
```

### context 对象
```js
export async function getServerSideProps(context) {
  const { params, query, req, res } = context;

  // params: 路由参数 { cabinId: "1" }
  // query: URL 查询参数 { page: "2" }
  // req: Node.js HTTP request
  // res: Node.js HTTP response

  // 可以设置 headers
  res.setHeader("Cache-Control", "s-maxage=60, stale-while-revalidate");

  return { props: { ... } };
}
```

### 运行时机
```
每次请求时执行：
1. 用户请求页面
2. 服务器调用 getServerSideProps()
3. 获取最新数据
4. 渲染 HTML
5. 返回给用户

→ 每次都获取最新数据
→ 比 SSG 慢（不能预生成）
→ TTFB（Time to First Byte）较高
```

### getStaticProps vs getServerSideProps
| `getStaticProps` | `getServerSideProps` |
|-----------------|---------------------|
| 构建时执行 | 每次请求时执行 |
| 生成静态 HTML | 动态渲染 |
| 极快（CDN 缓存） | 较慢（每次渲染） |
| 数据可以过期 | 永远最新 |
| 适合博客/文档 | 适合用户数据/实时内容 |
| 可用 ISR 折中 | 无需 ISR |

### 使用场景
- 需要访问 request headers / cookies
- 需要基于用户身份的数据
- 数据必须实时最新
- 依赖 URL 查询参数的复杂查询

### App Router 等价
```
Pages Router:
export async function getServerSideProps() { ... }

App Router:
// 默认 Server Component + dynamic rendering
export const dynamic = "force-dynamic";
export default async function Page() {
  const data = await fetchData();
  return <div>{data}</div>;
}
```

## English Short Summary

`getServerSideProps`: fetch data on every request, server-side. Access `context` (params, req, res). Always fresh data but slower than SSG. Use for user-specific or real-time content. App Router replaces with dynamic Server Components.
