---
title: "Updating an Item: Complex Immutable Data Operation"
lectureId: 83
section: 7
sectionTitle: "Thinking In React: State Management"
date: "2026-03-04"
tags: [react, immutable-update, map, toggle]
---

## 中文短总结

实现 toggle packed 状态：使用 `map()` + 展开运算符进行不可变更新。`items.map(item => item.id === id ? {...item, packed: !item.packed} : item)` — 找到目标 item 创建更新副本，其余保持不变。这是 React 中更新数组内对象的标准模式。

## 中文长总结

### 核心代码
```jsx
function handleToggleItem(id) {
  setItems(items =>
    items.map(item =>
      item.id === id ? { ...item, packed: !item.packed } : item
    )
  );
}
```

### 工作原理
1. `map()` 遍历每个 item
2. 找到目标 item（`id` 匹配）→ 创建新对象（`{...item, packed: !item.packed}`）
3. 非目标 item → 原样返回
4. `map()` 返回新数组 → 不可变！

### 为什么这样写
- **不能** `item.packed = !item.packed`（直接 mutate）
- 必须创建**新对象** → React 检测到引用变化 → 触发 re-render
- `...item` 复制所有属性 → 只覆盖 `packed` → 其余不变

### 同样的 Props Drilling 模式
- `handleToggleItem` 从 App → PackingList → Item
- Item 中：`onChange={() => onToggleItem(item.id)}`（checkbox onChange）

## English Short Summary

Toggle packed status with immutable update: `items.map(item => item.id === id ? {...item, packed: !item.packed} : item)`. Standard React pattern for updating objects in arrays — find target via `map()`, create new object with spread, return unchanged items as-is. Never mutate directly.
