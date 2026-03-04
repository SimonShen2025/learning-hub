---
title: "What are React Server Components? (RSC – Part 1)"
lectureId: 425
section: 32
sectionTitle: "Overview of Next.js With the App Router"
date: "2026-03-05"
tags: [rsc, server-components, client-components, react]
---

## 中文短总结

React Server Components (RSC)：组件在服务端渲染，不发送组件代码到客户端。默认所有组件都是 Server Component。只有添加 `"use client"` 的组件是 Client Component。Server Component 可以直接 async/await 获取数据。

## 中文长总结

### Server vs Client Components
| 特性 | Server Component | Client Component |
|------|-----------------|------------------|
| 执行位置 | 服务器 | 服务器 + 客户端 |
| JS 发送到浏览器 | ❌ 不发送 | ✅ 发送 |
| 交互（useState, onClick） | ❌ 不能 | ✅ 可以 |
| 数据获取 | ✅ 直接 async/await | ⚠️ useEffect/React Query |
| 访问后端资源 | ✅ 数据库、文件系统 | ❌ |
| 声明方式 | 默认 | `"use client"` 指令 |

### "use client" 指令
```jsx
// Server Component（默认）
export default async function CabinsPage() {
  const cabins = await getCabins(); // 直接获取数据
  return <CabinList cabins={cabins} />;
}

// Client Component
"use client";
import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);
  return <button onClick={() => setCount(c + 1)}>{count}</button>;
}
```

### 核心思想
- 大多数组件是 Server Component（减少客户端 JS）
- 只有需要交互的组件标记为 Client Component
- Server Component 可以导入 Client Component
- Client Component **不能** 导入 Server Component

## English Short Summary

RSC: components run on server, no JS sent to client. Default is Server Component. Add `"use client"` for interactivity (useState, onClick). Server Components can async/await data directly. Reduces client JS bundle.
