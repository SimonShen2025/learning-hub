---
title: "Rendering the Items List"
lectureId: 71
section: 6
sectionTitle: "State, Events, and Forms: Interactive Components"
date: "2026-03-04"
tags: [react, lists, map, key, far-away]
---

## 中文短总结

在 Far Away 项目中实践列表渲染。从 CSS 文件中复制初始数据数组，用 `items.map()` 渲染每个打包物品。创建 `Item` 组件接收 props 展示物品信息（数量、名称、已打包状态用删除线表示）。每个列表项需要唯一 `key`。

## 中文长总结

### 代码示例
```jsx
function PackingList() {
  return (
    <ul className="list">
      {initialItems.map(item => (
        <Item item={item} key={item.id} />
      ))}
    </ul>
  );
}

function Item({ item }) {
  return (
    <li>
      <span style={item.packed ? { textDecoration: "line-through" } : {}}>
        {item.quantity} {item.description}
      </span>
      <button>❌</button>
    </li>
  );
}
```

### 要点
- `map()` 渲染列表 — 每次都需要
- 已打包物品用 `textDecoration: "line-through"` 样式
- 条件内联样式：`style={condition ? styleObj : {}}`
- key 使用 item 的唯一 id

## English Short Summary

Render packing items list with `items.map()`. Create an Item component to display quantity, description, and packed status (line-through style). Each item needs a unique `key` prop. Conditional inline styles for packed items: `style={item.packed ? {textDecoration: "line-through"} : {}}`.
