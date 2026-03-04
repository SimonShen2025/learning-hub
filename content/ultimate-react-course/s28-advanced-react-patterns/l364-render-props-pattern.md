---
title: "The Render Props Pattern"
lectureId: 364
section: 28
sectionTitle: "Advanced React Patterns"
date: "2026-03-05"
tags: [render-props, pattern, reusability, react]
---

## 中文短总结

Render Props 模式：传入一个 `render` 函数 prop，组件用它来决定渲染什么。List 组件只负责遍历和布局，具体的 item 渲染由调用者提供。完全解耦了列表逻辑和渲染逻辑。

## 中文长总结

### 核心概念
```jsx
// List 组件 — 不知道 item 长什么样
function List({ title, items, render }) {
  const [isOpen, setIsOpen] = useState(true);
  const [isCollapsed, setIsCollapsed] = useState(false);
  const displayItems = isCollapsed ? items.slice(0, 3) : items;

  return (
    <div className="list-container">
      <div className="heading">
        <h2>{title}</h2>
        <button onClick={() => setIsOpen((o) => !o)}>
          {isOpen ? "Close" : "Open"}
        </button>
      </div>
      {isOpen && (
        <ul className="list">
          {displayItems.map(render)}
        </ul>
      )}
      <button onClick={() => setIsCollapsed((c) => !c)}>
        {isCollapsed ? `Show all ${items.length}` : "Show less"}
      </button>
    </div>
  );
}
```

### 使用
```jsx
// 产品列表
<List
  title="Products"
  items={products}
  render={(product) => (
    <ProductItem key={product.productName} product={product} />
  )}
/>

// 公司列表 — 同一个 List，不同的渲染
<List
  title="Companies"
  items={companies}
  render={(company) => (
    <CompanyItem
      key={company.companyName}
      company={company}
      defaultVisibility={false}
    />
  )}
/>
```

### 优势
- List 完全不知道 item 的结构
- 同一 List 可渲染任何类型的数据
- 状态逻辑（展开/折叠）可复用

## English Short Summary

Render Props pattern: pass a `render` function prop. Component iterates data and calls `render(item)` for each. Consumer decides rendering. Same List component, different item types. Decouples list logic from rendering.
