---
title: "Blurring the Boundary Between Server and Client (RSC – Part 4)"
lectureId: 462
section: 35
sectionTitle: "Client and Server Interactions"
date: "2026-03-05"
tags: [rsc, boundary, server-client, composition]
---

## 中文短总结

RSC Part 4：深入 Server/Client 边界。`"use client"` 创建边界 → 该组件及其所有导入的模块都在客户端运行。Server Component 可以作为 props/children 传给 Client Component（"穿透"边界）。

## 中文长总结

### "use client" 边界规则
```
"use client" 标记的组件：
  - 自身 → Client Component
  - 它直接 import 的组件 → 也变成 Client Component
  - 它的子组件文件 → 也变成 Client Component

注意：不是说整个子树都变成 Client
而是：通过 import 引入的才变
通过 props/children 传入的不变！
```

### 边界示例
```jsx
// ❌ 错误：在 Client Component 中导入 Server Component
"use client";
import ServerComp from "./ServerComp"; // ServerComp 被迫变成 CC

function ClientComp() {
  return <ServerComp />; // 不是真正的 Server Component 了
}
```

```jsx
// ✅ 正确：通过 children 传入
// Parent.js (Server Component)
import ClientComp from "./ClientComp";
import ServerComp from "./ServerComp";

function Parent() {
  return (
    <ClientComp>
      <ServerComp />   {/* 仍然是 Server Component！ */}
    </ClientComp>
  );
}

// ClientComp.js
"use client";
function ClientComp({ children }) {
  return <div>{children}</div>;
}
```

### 关键规则
| 规则 | 说明 |
|------|------|
| SC → import CC | ✅ 允许 |
| CC → import SC | ❌ SC 变成 CC |
| CC 接收 SC 作为 children/props | ✅ SC 保持不变 |
| CC → import CC | ✅ 都是 CC |

### 可序列化 Props
- Server → Client 传递的 props 必须可序列化
- ✅ 字符串、数字、布尔、数组、对象
- ❌ 函数、Date 对象、Map/Set、JSX（特殊情况除外）

## English Short Summary

RSC Part 4: `"use client"` boundary — imports become Client Components. Server Components passed as children/props stay as SC. SC can import CC, but CC can't import SC (import makes it CC). Props must be serializable.
