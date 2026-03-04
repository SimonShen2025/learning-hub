---
title: "What is React Query?"
lectureId: 346
section: 27
sectionTitle: "React Query: Managing Remote State"
date: "2026-03-05"
tags: [react-query, tanstack-query, remote-state, caching]
---

## 中文短总结

React Query（TanStack Query）是远程状态管理库。自动管理缓存、后台重新获取、过期数据、失败重试。区分 remote state（服务器数据）和 UI state（本地界面状态）。比 useEffect + useState 方案更强大。

## 中文长总结

### 核心特性
| 特性 | 说明 |
|------|------|
| **自动缓存** | 数据存在缓存中，组件间共享 |
| **自动重新获取** | 窗口聚焦、网络恢复时 |
| **过期数据** | stale 数据自动标记 |
| **后台更新** | 先显示旧数据，后台获取新数据 |
| **失败重试** | 自动重试失败的请求 |
| **离线支持** | 网络恢复后自动重试 |
| **Prefetching** | 提前获取可能需要的数据 |
| **DevTools** | 可视化缓存状态 |

### Remote State vs UI State
- **Remote State** — 存在服务器上的数据（异步获取、共享所有权）
- **UI State** — 纯前端状态（同步、组件拥有）
- React Query 专门管理 Remote State
- UI State 用 useState/Context/Redux

### 为什么不用 useEffect + fetch
```jsx
// ❌ 手动管理 — 大量样板代码
const [data, setData] = useState([]);
const [isLoading, setIsLoading] = useState(false);
const [error, setError] = useState(null);
useEffect(() => {
  setIsLoading(true);
  fetch(url).then(res => res.json()).then(setData).catch(setError).finally(() => setIsLoading(false));
}, []);

// ✅ React Query — 简洁强大
const { data, isLoading, error } = useQuery({ queryKey: ["cabins"], queryFn: getCabins });
```

## English Short Summary

React Query (TanStack Query): remote state management library. Auto caching, background refetching, stale data tracking, retry on failure, prefetching. Separates remote state from UI state. Far superior to useEffect + useState pattern.
