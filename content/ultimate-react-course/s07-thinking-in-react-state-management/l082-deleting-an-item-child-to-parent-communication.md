---
title: "Deleting an Item: More Child-to-Parent Communication!"
lectureId: 82
section: 7
sectionTitle: "Thinking In React: State Management"
date: "2026-03-04"
tags: [react, child-to-parent, filter, delete]
---

## 中文短总结

实现删除功能：在 App 中定义 `handleDeleteItem(id)` 用 `filter()` 移除指定 item，通过 props 传递到 PackingList → Item 组件。点击删除按钮时调用 `onDeleteItem(item.id)`。完整链路：App → PackingList → Item（props drilling），Item → App（回调函数调用）。

## 中文长总结

### 实现步骤
```jsx
// App 中
function handleDeleteItem(id) {
  setItems(items => items.filter(item => item.id !== id));
}
<PackingList items={items} onDeleteItem={handleDeleteItem} />

// PackingList 中
function PackingList({ items, onDeleteItem }) {
  return items.map(item => (
    <Item item={item} onDeleteItem={onDeleteItem} key={item.id} />
  ));
}

// Item 中
function Item({ item, onDeleteItem }) {
  return (
    <li>
      <span>{item.description}</span>
      <button onClick={() => onDeleteItem(item.id)}>❌</button>
    </li>
  );
}
```

### 关键概念
- **Props Drilling**：回调函数需要经过多层组件传递（App → PackingList → Item）
- 删除用 `filter()`：不可变操作，返回新数组
- 每个中间组件都需要传递 props（即使自己不使用）

## English Short Summary

Delete items: define `handleDeleteItem(id)` in App using `filter()`, pass through PackingList to Item via props. Item calls `onDeleteItem(item.id)` on button click. Demonstrates props drilling — callback passes through intermediate components (App → PackingList → Item).
