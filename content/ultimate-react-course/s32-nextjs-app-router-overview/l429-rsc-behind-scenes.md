---
title: "How RSC Works Behind the Scenes (RSC – Part 2)"
lectureId: 429
section: 32
sectionTitle: "Overview of Next.js With the App Router"
date: "2026-03-05"
tags: [rsc, behind-the-scenes, payload, rendering]
---

## 中文短总结

RSC 工作原理。Server Components 在服务端运行 → 生成 RSC Payload（非 HTML/JSON 的特殊格式）→ 传输到客户端。客户端 React 用 payload 构建虚拟 DOM。Client Components 的代码也发送到客户端用于 hydration。

## 中文长总结

### RSC 渲染流程
```
1. 服务器收到请求
2. React 渲染所有 Server Components → RSC Payload
   - SC 的渲染结果（类似虚拟 DOM 的序列化）
   - Client Component 的占位符 + 引用
3. RSC Payload + Client Component 代码 → 生成 HTML (SSR)
4. HTML 发送到浏览器（初始渲染）
5. Client Component 代码下载
6. Hydration：Client Components 变为可交互
7. RSC Payload 用于客户端导航时的更新
```

### RSC Payload
```
不是 HTML，不是 JSON
而是 React 自定义的流式格式：
- Server Component 的渲染结果
- Client Component 的"洞"（占位符）
- props 数据
```

### Server Component 生命周期
- 服务端渲染 → 不会在客户端重新渲染
- 没有 state、没有 effect
- 只在请求时或重新验证时重新运行
- 可以直接访问数据库、文件系统

### 客户端导航
- 不需要全页 HTML
- 只获取 RSC Payload → 更新变化的部分
- 布局保持，只替换页面内容

## English Short Summary

RSC rendering: Server Components → RSC Payload (custom streaming format, not HTML/JSON) → combined with Client Component code → HTML for initial load. Client navigation uses RSC Payload to update only changed parts. SC never re-render on client.
