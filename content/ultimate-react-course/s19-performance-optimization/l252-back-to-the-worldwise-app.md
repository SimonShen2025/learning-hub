---
title: "Back to \"The WorldWise\" App"
lectureId: 252
section: 19
sectionTitle: "Performance Optimization and Advanced useEffect"
date: "2026-03-04"
tags: [react, performance, worldwise, profiler]
---

## 中文短总结

回到 WorldWise 应用检查性能。用 Profiler 分析 → 发现少量 wasted renders。应用规模小，无需大量优化。memo 化 Map 组件避免列表操作触发 re-render。实际项目中不要过度优化 — 找到瓶颈再处理。

## 中文长总结

### 分析过程
1. 打开 Profiler
2. 在应用中操作（添加城市、搜索、导航）
3. 检查每次 commit 的渲染情况

### 发现
- 大部分 re-render 是必要的
- 少量 wasted render（如 Map 在列表操作时 re-render）
- 应用规模小，性能影响可忽略

### 优化措施
```jsx
// Map 组件用 memo 包裹
const Map = memo(function Map() {
  const { cities } = useCities();
  // ...
});
```

### 实际建议
- WorldWise 规模小，不需要激进优化
- 真实大项目才需要系统性优化
- Profiler 是诊断工具，不是日常工具
- 优先保证代码可读性和正确性

## English Short Summary

Profile WorldWise app — find few wasted renders, small app needs minimal optimization. Memo Map component to avoid re-renders during list operations. Real-world advice: don't over-optimize small apps, use Profiler to find actual bottlenecks.
