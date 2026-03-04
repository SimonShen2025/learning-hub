---
title: "Improving Reusability With Props"
lectureId: 119
section: 10
sectionTitle: "Thinking in React: Components, Composition, and Reusability"
date: "2026-03-04"
tags: [react, props, reusability, star-rating, customization]
---

## 中文短总结

增强 StarRating 的可配置性。添加更多 props：`color`、`size`、`className`、`messages` 数组（替代数字显示文字）、`defaultRating`（初始值）、`onSetRating`（外部回调）。展示如何在保持简单 API 的同时提供灵活定制。

## 中文长总结

### 新增 Props
```jsx
function StarRating({
  maxRating = 5,
  color = "#fcc419",
  size = 48,
  className = "",
  messages = [],           // ["Terrible","Bad","Okay","Good","Amazing"]
  defaultRating = 0,       // 初始选中值
  onSetRating,             // 外部回调：父组件获取评分值
}) {
  const [rating, setRating] = useState(defaultRating);

  function handleRating(rating) {
    setRating(rating);
    onSetRating?.(rating);  // 通知外部
  }
  // ...
}
```

### 使用示例
```jsx
// 基础
<StarRating />

// 完全定制
<StarRating
  maxRating={10}
  color="red"
  size={24}
  messages={["Bad","OK","Good","Great","Perfect"]}
  defaultRating={3}
  onSetRating={setMovieRating}
/>
```

### 要点
- `onSetRating` 让外部可以响应评分变化（inverse data flow）
- `messages` 有值且长度 = maxRating 时显示文字
- 动态 style 用 `size` 和 `color` props

## English Short Summary

Enhance StarRating with customization props: `color`, `size`, `className`, `messages` (text labels), `defaultRating`, `onSetRating` (external callback). Demonstrates balancing a simple API with powerful customization. `onSetRating` enables inverse data flow to parent.
