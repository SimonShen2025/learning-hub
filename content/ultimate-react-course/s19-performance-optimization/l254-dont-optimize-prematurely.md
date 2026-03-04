---
title: "Don't Optimize Prematurely!"
lectureId: 254
section: 19
sectionTitle: "Performance Optimization and Advanced useEffect"
date: "2026-03-04"
tags: [react, performance, best-practices, optimization]
---

## 中文短总结

性能优化的 DO 和 DON'T。不要给每个 state、prop、context 都加 memo/useMemo/useCallback。先关注代码质量 → 有问题再优化。useMemo/useCallback 本身也有成本。真正必要时才用 Profiler 找瓶颈。

## 中文长总结

### DO ✅
1. 用 children prop 技巧（零成本）
2. 用 Profiler 找到**真正的**瓶颈
3. 必要时 memo 昂贵的、频繁 re-render 的组件
4. 用 useMemo 缓存真正昂贵的计算
5. 用 useCallback 配合 memo 组件
6. 代码分割（永远是好主意）

### DON'T ❌
1. 不要 memo 所有组件
2. 不要 useMemo/useCallback 所有值/函数
3. 不要在没测量前就优化
4. 不要为小优化牺牲代码可读性
5. 不要在早期开发阶段优化

### 优化成本
- memo：额外的 props 浅比较
- useMemo/useCallback：额外的 Hook 调用 + 依赖检查 + 内存存储
- 如果组件本身很轻 → 优化本身比 re-render 更贵

### 优先级
```
1. 正确性 > 性能
2. 代码可读性 > 性能
3. 测量 > 猜测
4. 代码分割（必做）
5. 找到瓶颈后有针对性优化
```

## English Short Summary

Don't optimize prematurely. memo/useMemo/useCallback have their own costs. Priorities: correctness > readability > performance. Always measure with Profiler before optimizing. DO: children trick, code splitting, targeted memo. DON'T: memo everything, optimize without measuring.
