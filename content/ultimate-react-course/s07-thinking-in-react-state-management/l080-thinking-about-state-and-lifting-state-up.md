---
title: "Thinking About State and Lifting State Up"
lectureId: 80
section: 7
sectionTitle: "Thinking In React: State Management"
date: "2026-03-04"
tags: [react, lifting-state-up, state-management, far-away]
---

## 中文短总结

**Lifting State Up**：当兄弟组件（如 Form 和 PackingList）需要共享同一份数据时，将 state 从子组件移到它们的**共同父组件**（App），然后通过 props 向下传递数据，通过**回调函数 props** 实现子→父通信（子组件调用父组件传来的函数来更新 state）。

## 中文长总结

### 问题场景
```
App
├── Form          → 需要添加 items
├── PackingList   → 需要显示 items
└── Stats         → 需要统计 items
```
三个兄弟组件都需要 `items` → items state 不能放在任何一个子组件内。

### 解决方案：Lifting State Up
```jsx
function App() {
  const [items, setItems] = useState([]);

  function handleAddItem(item) {
    setItems(items => [...items, item]);
  }

  return (
    <>
      <Form onAddItem={handleAddItem} />  {/* 传回调函数 */}
      <PackingList items={items} />        {/* 传数据 */}
      <Stats items={items} />             {/* 传数据 */}
    </>
  );
}
```

### 子→父通信
```jsx
function Form({ onAddItem }) {
  function handleSubmit(e) {
    e.preventDefault();
    const newItem = { id: Date.now(), description, quantity, packed: false };
    onAddItem(newItem);  // 调用父组件传来的函数 → 更新父的 state
  }
  // ...
}
```

### 核心模式
- **数据向下**：父→子通过 props 传数据
- **事件向上**：子→父通过回调函数 props 通知父组件

## English Short Summary

**Lifting State Up**: when sibling components need shared data, move state to their common parent. Pass data down via props, communicate up via callback function props. Pattern: parent defines state + handler → passes handler as prop to child → child calls handler to update parent's state.
