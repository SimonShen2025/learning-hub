---
title: "Advanced: Server Components in Client Components"
lectureId: 466
section: 35
sectionTitle: "Client and Server Interactions"
date: "2026-03-05"
tags: [rsc, composition, children-pattern, advanced]
---

## 中文短总结

高级模式：通过 children/props 将 Server Component "传入" Client Component。CC 不能 import SC，但 SC 可以作为 JSX props 传递（因为已经在服务端渲染完成）。实际应用：交互式容器包裹服务端内容。

## 中文长总结

### 问题
```jsx
// ❌ 不行：CC 中 import SC
"use client";
import ServerList from "./ServerList"; // 变成 CC 了

function Container() {
  const [isOpen, setIsOpen] = useState(true);
  return isOpen ? <ServerList /> : null;
}
```

### 解决：children 模式
```jsx
// ✅ 在父级 SC 中组合
// Parent.js (Server Component)
import Container from "./Container";  // CC
import ServerList from "./ServerList"; // SC

export default function Parent() {
  return (
    <Container>
      <ServerList />  {/* SC 作为 children 传入 CC */}
    </Container>
  );
}

// Container.js (Client Component)
"use client";
import { useState } from "react";

export default function Container({ children }) {
  const [isOpen, setIsOpen] = useState(true);
  return isOpen ? <div>{children}</div> : null;
}
```

### 为什么这样有效
```
渲染顺序：
1. 服务端：Parent (SC) → 渲染 ServerList → 生成 RSC Payload
2. ServerList 的渲染结果作为"已序列化的 JSX"传入 Container
3. Container (CC) 在客户端只负责"展示"传入的内容
4. ServerList 的代码不会发送到客户端
```

### 实际应用
```jsx
// Reservation 区域
// CabinPage (SC)
export default async function Page({ params }) {
  const cabin = await getCabin(params.cabinId);

  return (
    <Reservation cabin={cabin}>
      <DateSelector settings={settings} bookedDates={bookedDates} cabin={cabin} />
    </Reservation>
  );
}

// Reservation (CC) — 提供交互和状态管理
"use client";
export default function Reservation({ cabin, children }) {
  const [range, setRange] = useState({});
  return (
    <ReservationContext.Provider value={{ range, setRange }}>
      {children}
      <ReservationForm cabin={cabin} />
    </ReservationContext.Provider>
  );
}
```

## English Short Summary

SC in CC via children/props pattern. CC can't import SC, but SC parent can pass SC as children to CC. SC pre-rendered on server → serialized JSX → CC just renders it. No SC code sent to client.
