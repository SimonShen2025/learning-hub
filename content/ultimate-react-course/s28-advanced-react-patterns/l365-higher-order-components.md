---
title: "A Look at Higher-Order Components (HOC)"
lectureId: 365
section: 28
sectionTitle: "Advanced React Patterns"
date: "2026-03-05"
tags: [hoc, higher-order-component, pattern, legacy]
---

## 中文短总结

Higher-Order Component (HOC) 是接收组件、返回增强组件的函数。在 Hooks 出现前是共享逻辑的主要方式。现在大部分场景可用 Custom Hooks 替代，但了解它很重要（很多老代码用 HOC）。

## 中文长总结

### HOC 概念
```
Component → withSomething(Component) → EnhancedComponent
```

### 示例：withToggles
```jsx
function withToggles(WrappedComponent) {
  return function List(props) {
    const [isOpen, setIsOpen] = useState(true);
    const [isCollapsed, setIsCollapsed] = useState(false);

    const displayItems = isCollapsed
      ? props.items.slice(0, 3)
      : props.items;

    return (
      <div className="list-container">
        <div className="heading">
          <h2>{props.title}</h2>
          <button onClick={() => setIsOpen((o) => !o)}>
            {isOpen ? "Close" : "Open"}
          </button>
        </div>
        {isOpen && <WrappedComponent {...props} items={displayItems} />}
        <button onClick={() => setIsCollapsed((c) => !c)}>
          {isCollapsed ? `Show all ${props.items.length}` : "Show less"}
        </button>
      </div>
    );
  };
}

// 使用
const ProductListWithToggles = withToggles(ProductList);
```

### HOC vs Custom Hooks
| HOC | Custom Hooks |
|-----|-------------|
| Hooks 前的方案 | 现代方案 |
| 包装组件（多层嵌套） | 直接在组件中调用 |
| 可能造成 "wrapper hell" | 干净简洁 |
| 老代码中常见 | 推荐使用 |

### 常见 HOC 例子
- `React.memo()` — React 自带的 HOC
- `connect()` — Redux 旧版
- `withRouter()` — React Router 旧版

## English Short Summary

HOC: function that takes a component and returns an enhanced component. Pre-Hooks pattern for sharing logic. Mostly replaced by Custom Hooks now. Still important to understand (legacy code, `React.memo`, old Redux `connect`).
