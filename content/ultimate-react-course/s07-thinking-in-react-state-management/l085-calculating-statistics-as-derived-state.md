---
title: "Calculating Statistics as Derived State"
lectureId: 85
section: 7
sectionTitle: "Thinking In React: State Management"
date: "2026-03-04"
tags: [react, derived-state, statistics, far-away]
---

## 中文短总结

在 Stats 组件中实践 derived state：接收 `items` props，计算总数、已打包数、百分比。全部用普通变量而非 `useState`。还加了 early return 处理空列表情况。展示了 derived state 如何让代码简洁高效。

## 中文长总结

### 实现
```jsx
function Stats({ items }) {
  if (items.length === 0)
    return <p>Start adding items to your packing list!</p>;

  const numItems = items.length;
  const numPacked = items.filter(item => item.packed).length;
  const percentage = Math.round((numPacked / numItems) * 100);

  return (
    <footer>
      <em>
        {percentage === 100
          ? "You got everything! Ready to go ✈️"
          : `You have ${numItems} items, and you already packed ${numPacked} (${percentage}%)`}
      </em>
    </footer>
  );
}
```

### 要点
- 三个统计值全是 derived state → 无需 `useState`
- early return 处理边界情况（空列表）
- 条件文本：100% 时显示特殊消息
- items 变化 → Stats re-render → 统计值自动重新计算

## English Short Summary

Practice derived state in Stats component: compute `numItems`, `numPacked`, `percentage` from `items` prop — no `useState` needed. Early return for empty list. Conditional text for 100% completion. Values automatically recalculate on every re-render when items change.
