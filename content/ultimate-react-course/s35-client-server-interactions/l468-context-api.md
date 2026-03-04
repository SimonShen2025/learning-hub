---
title: "Using the Context API for State Management"
lectureId: 468
section: 35
sectionTitle: "Client and Server Interactions"
date: "2026-03-05"
tags: [context-api, state-management, reservation, nextjs]
---

## 中文短总结

在 Next.js 中使用 Context API 管理 Client Component 之间的共享状态。创建 ReservationContext → Provider 包裹在 CC 中 → DateSelector 和 ReservationForm 共享日期范围状态。Context 只在 Client Component 中工作。

## 中文长总结

### ReservationContext
```jsx
// _components/ReservationContext.js
"use client";

import { createContext, useContext, useState } from "react";

const ReservationContext = createContext();

export function ReservationProvider({ children }) {
  const [range, setRange] = useState({ from: undefined, to: undefined });
  const resetRange = () => setRange({ from: undefined, to: undefined });

  return (
    <ReservationContext.Provider value={{ range, setRange, resetRange }}>
      {children}
    </ReservationContext.Provider>
  );
}

export function useReservation() {
  const context = useContext(ReservationContext);
  if (!context) throw new Error("useReservation must be used within ReservationProvider");
  return context;
}
```

### 使用 Provider
```jsx
// _components/Reservation.js
"use client";
import { ReservationProvider } from "./ReservationContext";

export default function Reservation({ children }) {
  return (
    <ReservationProvider>
      <div className="grid grid-cols-2 border border-primary-800 min-h-[400px]">
        {children}
      </div>
    </ReservationProvider>
  );
}
```

### 消费 Context
```jsx
// DateSelector.js
"use client";
import { useReservation } from "./ReservationContext";

export default function DateSelector({ settings, bookedDates, cabin }) {
  const { range, setRange, resetRange } = useReservation();
  // 日期选择器更新 range → ReservationForm 自动获取
}

// ReservationForm.js
"use client";
import { useReservation } from "./ReservationContext";

export default function ReservationForm({ cabin }) {
  const { range, resetRange } = useReservation();
  // 使用 range 创建预订
}
```

### 注意事项
- Context Provider **必须**是 Client Component
- 把 Provider 放在最需要的地方（不要全局）
- Server Component **不能**使用 Context
- 这是 Client Component 之间共享状态的标准方式

## English Short Summary

Context API in Next.js: `"use client"` Provider wraps CC children. DateSelector and ReservationForm share date range state. Context only works in Client Components. Provider placed at Reservation level, not global.
