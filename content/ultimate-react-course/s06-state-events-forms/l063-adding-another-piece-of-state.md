---
title: "Adding Another Piece of State"
lectureId: 63
section: 6
sectionTitle: "State, Events, and Forms: Interactive Components"
date: "2026-03-04"
tags: [react, useState, multiple-state]
---

## 中文短总结

一个组件可以有**多个独立的 state 变量**。为 Steps 组件添加 `isOpen` state 控制展开/收起。每个 state 变量独立管理、独立更新。GUI 有多少个需要变化的"东西"，就需要多少个 state 变量。

## 中文长总结

### 多个 state 变量
```jsx
function Steps() {
  const [step, setStep] = useState(1);
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div>
      <button onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? "Close" : "Open"}
      </button>
      {isOpen && (
        // Steps 内容...
      )}
    </div>
  );
}
```

### 关键概念
- 每个 `useState` 调用创建一个独立的 state 变量
- 更新一个 state 不影响其他 state
- 组件可以有任意多个 state 变量
- 什么时候需要新 state → 当 UI 中有一个新的"可变的东西"时

### 组合条件渲染 + State
- `isOpen` state + `&&` 条件渲染 = 展开/收起功能
- 这是 React 中非常常见的交互模式

## English Short Summary

Components can have multiple independent state variables with separate `useState` calls. Each state updates independently. Add `isOpen` state for open/close functionality combined with `&&` conditional rendering — a very common React interaction pattern. Add new state when UI has a new "changeable thing."
