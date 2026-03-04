---
title: "Applying the Render Props Pattern"
lectureId: 372
section: 28
sectionTitle: "Advanced React Patterns"
date: "2026-03-05"
tags: [render-props, table, body, pattern]
---

## 中文短总结

在 Table Body 中应用 Render Props 模式。`Table.Body` 接收 `data` 和 `render` prop。`render` 函数决定每行如何渲染。Table 组件完全不知道行的结构 — 由使用者通过 render 函数定义。

## 中文长总结

### Render Props 在 Table 中的应用
```jsx
// Table.Body 定义
function Body({ data, render }) {
  if (!data.length) return <Empty>No data to show at the moment</Empty>;
  return <StyledBody>{data.map(render)}</StyledBody>;
}

// 使用 — Cabins
<Table.Body
  data={cabins}
  render={(cabin) => <CabinRow cabin={cabin} key={cabin.id} />}
/>

// 使用 — Bookings（同一个 Table.Body，不同的渲染）
<Table.Body
  data={bookings}
  render={(booking) => <BookingRow booking={booking} key={booking.id} />}
/>
```

### 为什么不直接用 children
```jsx
// 也可以：
<Table.Body>
  {cabins.map((cabin) => <CabinRow cabin={cabin} key={cabin.id} />)}
</Table.Body>

// 但 render prop 允许 Body 组件：
// 1. 控制"空数据"情况
// 2. 将来可添加虚拟化、分页等功能
// 3. 保持对渲染流程的控制权
```

### Compound Component + Render Props 组合
- Compound Component 管理表格结构和列宽
- Render Props 代理行渲染
- 两种模式完美互补

## English Short Summary

Render Props in Table: `Body` takes `data` + `render` function. Table doesn't know row structure — consumer defines via render. Allows Body to handle empty state, future virtualization. Compound Component + Render Props complement each other.
