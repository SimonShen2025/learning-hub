---
title: "The Profiler Developer Tool"
lectureId: 244
section: 19
sectionTitle: "Performance Optimization and Advanced useEffect"
date: "2026-03-04"
tags: [react, profiler, devtools, performance]
---

## 中文短总结

React DevTools 的 Profiler 面板。录制渲染 → 查看每次 commit 中哪些组件渲染了、渲染耗时多久。Flamegraph 和 Ranked 视图。设置中勾选 "Record why each component rendered" 查看 re-render 原因。

## 中文长总结

### 使用 Profiler
1. 打开 React DevTools → Profiler 标签
2. 点击录制按钮
3. 在应用中交互
4. 停止录制 → 查看结果

### 视图模式
- **Flamegraph**：树状展示每次 commit 中所有组件
  - 灰色 = 未渲染
  - 彩色 = 渲染了（颜色越深耗时越长）
- **Ranked**：按渲染耗时排序

### 设置
```
⚙️ Settings → Profiler:
☑ Record why each component rendered
```

### 渲染原因
- "Props changed"
- "State changed"
- "Parent rendered"（这就是 wasted render 的来源）
- "Context changed"

### 实用场景
- 找到哪些组件渲染频率过高
- 识别渲染原因
- 验证优化是否有效

## English Short Summary

React DevTools Profiler: record renders, view flamegraph/ranked charts. Shows which components rendered per commit, render duration, and why (props/state/parent/context change). Enable "Record why each component rendered" in settings.
