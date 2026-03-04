---
title: "Extracting JSX Into a New Component"
lectureId: 50
section: 5
sectionTitle: "Working With Components, Props, and JSX"
date: "2026-03-04"
tags: [react, refactoring, component-extraction]
---

## 中文短总结

当组件中的 JSX 过长或逻辑过多时，提取部分 JSX 为新组件（component extraction）。步骤：1）识别可独立提取的 JSX 片段，2）创建新组件函数，3）将需要的数据通过 props 传入。这是 React 开发中最基本的重构技巧。

## 中文长总结

### 提取示例
```jsx
// 重构前：Footer 太长
function Footer() {
  return (
    <footer>
      {/* ...很多 JSX */}
      <div className="order">
        <p>We're open until 22:00</p>
        <button>Order</button>
      </div>
    </footer>
  );
}

// 重构后：提取 Order 组件
function Order({ closeHour }) {
  return (
    <div className="order">
      <p>We're open until {closeHour}:00</p>
      <button>Order</button>
    </div>
  );
}
```

### 何时提取
- 组件 JSX 超过 ~50 行
- 有独立的逻辑或职责
- 需要在其他地方复用

### 注意
- 提取后需要通过 props 传递原来直接访问的数据
- 不要过度提取 — 太多小组件反而增加复杂度

## English Short Summary

Extract long JSX into new components when a component grows too large or has identifiable independent pieces. Create a new function component, move the JSX, and pass required data via props. Core refactoring technique — but avoid over-extraction.
