---
title: "Handling Form Submissions"
lectureId: 504
section: 39
sectionTitle: "[Legacy] The Next.js Pages Router"
date: "2026-03-05"
tags: [forms, submission, api-routes, pages-router]
---

## 中文短总结

Pages Router 中的表单提交：客户端 `fetch` 调用 API Route。`useState` 管理表单状态。`onSubmit` 处理函数发送 POST 请求。与 App Router 的 Server Actions 对比：需要更多样板代码。

## 中文长总结

### 表单组件
```jsx
// components/ReservationForm.js
import { useState } from "react";
import { useRouter } from "next/router";

export default function ReservationForm({ cabinId }) {
  const [numGuests, setNumGuests] = useState(1);
  const [observations, setObservations] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  async function handleSubmit(e) {
    e.preventDefault();
    setIsLoading(true);

    try {
      const res = await fetch("/api/reservations", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          cabinId,
          numGuests,
          observations,
          startDate: "2024-01-15",
          endDate: "2024-01-20",
        }),
      });

      if (!res.ok) throw new Error("Failed to create reservation");

      router.push("/account/reservations");
    } catch (err) {
      console.error(err);
      alert("Something went wrong");
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>Number of guests</label>
      <select value={numGuests} onChange={e => setNumGuests(Number(e.target.value))}>
        {[1, 2, 3, 4].map(n => (
          <option key={n} value={n}>{n}</option>
        ))}
      </select>

      <label>Observations</label>
      <textarea value={observations} onChange={e => setObservations(e.target.value)} />

      <button disabled={isLoading}>
        {isLoading ? "Reserving..." : "Reserve now"}
      </button>
    </form>
  );
}
```

### API Route 处理
```js
// pages/api/reservations.js
export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  const { cabinId, numGuests, observations, startDate, endDate } = req.body;

  // 验证
  if (!cabinId || !numGuests) {
    return res.status(400).json({ message: "Missing required fields" });
  }

  // 创建预订
  const newReservation = await createBooking({
    cabinId,
    numGuests,
    observations,
    startDate,
    endDate,
  });

  res.status(201).json(newReservation);
}
```

### Pages Router vs App Router 表单处理
```
Pages Router:
1. useState 管理每个字段
2. onSubmit + e.preventDefault()
3. fetch("/api/route", { method: "POST", body })
4. 手动 loading 状态
5. 手动错误处理
6. router.push() 重定向

App Router:
1. form action={serverAction}
2. formData 自动收集
3. 直接调用数据库
4. useFormStatus 自动 loading
5. useOptimistic 乐观更新
6. redirect() 在 Server Action 中
```

### 关键差异
```
代码量: Pages Router > App Router
方式:   API Route + fetch ↔ Server Action
状态:   useState 手动管理 ↔ FormData 自动
Loading: 手动 setState ↔ useFormStatus / useTransition
```

## English Short Summary

Forms in Pages Router: `useState` for fields, `onSubmit` with `fetch()` to API Route. Manual loading/error handling. More boilerplate than App Router's Server Actions. Separate API Route for backend logic.
