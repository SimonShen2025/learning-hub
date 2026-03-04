---
title: "Handling Hover Events"
lectureId: 117
section: 10
sectionTitle: "Thinking in React: Components, Composition, and Reusability"
date: "2026-03-04"
tags: [react, events, hover, star-rating]
---

## 中文短总结

实现 hover 预览效果。`onMouseEnter` 设置 `tempRating`，`onMouseLeave` 重置为 0。显示逻辑：hover 时用 `tempRating` 决定填充状态和数字显示，离开后恢复为 `rating`。`tempRating || rating` 短路逻辑。

## 中文长总结

### hover 状态管理
```jsx
// 在 StarRating 中
const [tempRating, setTempRating] = useState(0);

// Star 的 full 判定
full={tempRating ? tempRating >= i + 1 : rating >= i + 1}

// 数字显示
<p>{tempRating || rating || ""}</p>
```

### 事件流
1. 鼠标进入第 3 颗星 → `setTempRating(3)` → 前 3 颗填充
2. 鼠标移到第 5 颗 → `setTempRating(5)` → 前 5 颗填充
3. 鼠标离开 → `setTempRating(0)` → 恢复到 `rating` 状态
4. 点击第 4 颗 → `setRating(4)` → 永久设定

### 要点
- `tempRating` 是临时状态，只在 hover 时有值
- 利用短路运算 `tempRating || rating` 优先显示 hover 值

## English Short Summary

Hover preview: `onMouseEnter` sets `tempRating`, `onMouseLeave` resets to 0. Star fill logic: `tempRating ? tempRating >= i+1 : rating >= i+1`. Display text uses `tempRating || rating` short-circuit. Temporary state overlays permanent rating during hover.
