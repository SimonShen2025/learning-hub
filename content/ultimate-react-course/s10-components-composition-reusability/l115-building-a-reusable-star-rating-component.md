---
title: "Building a Reusable Star Rating Component"
lectureId: 115
section: 10
sectionTitle: "Thinking in React: Components, Composition, and Reusability"
date: "2026-03-04"
tags: [react, reusable-components, star-rating]
---

## 中文短总结

开始构建可复用的 StarRating 组件。设计思路：接受 `maxRating` prop 控制星星数量，内部管理 `rating` state（点击设定值）和 `tempRating` state（hover 临时值）。先搭建基础结构和样式。

## 中文长总结

### 组件设计
```jsx
function StarRating({ maxRating = 5 }) {
  const [rating, setRating] = useState(0);
  const [tempRating, setTempRating] = useState(0);

  return (
    <div style={containerStyle}>
      <div style={starContainerStyle}>
        {Array.from({ length: maxRating }, (_, i) => (
          <Star
            key={i}
            full={tempRating ? tempRating >= i + 1 : rating >= i + 1}
            onRate={() => setRating(i + 1)}
            onHoverIn={() => setTempRating(i + 1)}
            onHoverOut={() => setTempRating(0)}
          />
        ))}
      </div>
      <p style={textStyle}>
        {tempRating || rating || ""}
      </p>
    </div>
  );
}
```

### 关键
- `Array.from({ length: maxRating })` 创建星星数组
- 两个 state：永久评分 + hover 临时评分
- 用 inline styles（便于组件独立使用）

## English Short Summary

Start building reusable StarRating component. Takes `maxRating` prop. Two states: `rating` (permanent, set on click) and `tempRating` (hover preview). Generates stars with `Array.from()`. Uses inline styles for portability.
