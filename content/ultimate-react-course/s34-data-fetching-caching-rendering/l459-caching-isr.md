---
title: "Experimenting With Caching and ISR"
lectureId: 459
section: 34
sectionTitle: "Data Fetching, Caching, and Rendering"
date: "2026-03-05"
tags: [isr, revalidation, caching, experiment]
---

## 中文短总结

ISR（Incremental Static Regeneration）：静态页面在后台按时间间隔重新生成。设置 `revalidate` 秒数。首次请求返回缓存 → 后台重新生成 → 下次请求返回新内容。实验验证缓存行为和 revalidation。

## 中文长总结

### ISR 配置
```jsx
// 方式 1：路由段配置
// app/cabins/page.js
export const revalidate = 3600; // 每小时重新验证

// 方式 2：fetch 级别
const res = await fetch(url, {
  next: { revalidate: 3600 },
});
```

### ISR 流程
```
T = 0: 构建时生成静态页面
T = 1s: 用户 A 访问 → 返回缓存的页面
T = 3601s: 用户 B 访问 → 返回缓存（触发后台重新生成）
T = 3602s: 用户 C 访问 → 返回新生成的页面 ✅
```

### 实验
```
1. npm run build → 观察渲染类型
2. npm start → 访问 /cabins
3. 修改 Supabase 中的数据
4. 刷新页面 → 旧数据（缓存中）
5. 等待 revalidate 时间
6. 再次刷新 → 新数据 ✅
```

### 按需 Revalidation
```js
// 在 Server Action 或 Route Handler 中
import { revalidatePath, revalidateTag } from "next/cache";

// 按路径
revalidatePath("/cabins");

// 按标签
revalidateTag("cabins");
```

### Fetch 标签
```js
const res = await fetch(url, {
  next: { tags: ["cabins"] },
});
// revalidateTag("cabins") 会让这个 fetch 的缓存失效
```

### Build 输出
```bash
● /cabins   → ISR (revalidate: 3600)
# ● = ISR 标记
```

## English Short Summary

ISR: static pages regenerate in background after `revalidate` seconds. First request serves cache, triggers regeneration. Next request gets new content. On-demand revalidation with `revalidatePath`/`revalidateTag`. Build output shows ● for ISR.
