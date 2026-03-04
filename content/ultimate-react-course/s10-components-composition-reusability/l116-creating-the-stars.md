---
title: "Creating the Stars"
lectureId: 116
section: 10
sectionTitle: "Thinking in React: Components, Composition, and Reusability"
date: "2026-03-04"
tags: [react, svg, star-rating, components]
---

## 中文短总结

实现 Star 子组件。用 SVG 绘制星形：`full` 时填充黄色，否则只有轮廓。处理 `onClick`、`onMouseEnter`、`onMouseLeave` 事件。Star 是纯 presentational 组件，所有逻辑由父组件 StarRating 控制。

## 中文长总结

### Star 组件
```jsx
function Star({ onRate, full, onHoverIn, onHoverOut }) {
  return (
    <span
      role="button"
      style={starStyle}
      onClick={onRate}
      onMouseEnter={onHoverIn}
      onMouseLeave={onHoverOut}
    >
      {full ? (
        <svg>/* 填充星 SVG */</svg>
      ) : (
        <svg>/* 空心星 SVG */</svg>
      )}
    </span>
  );
}
```

### 要点
- SVG 内联在组件中
- `full` prop 决定显示实心/空心
- 事件处理完全由 props 传入（受控模式）
- `cursor: pointer` 交互提示
- `role="button"` 增强可访问性

## English Short Summary

Implement Star child component with inline SVG (filled/outline based on `full` prop). Handles click, mouseEnter, mouseLeave via props from parent StarRating. Pure presentational component — all logic controlled by parent.
