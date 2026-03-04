---
title: "useState Summary"
lectureId: 164
section: 13
sectionTitle: "Custom Hooks, Refs, and More State"
date: "2026-03-04"
tags: [react, useState, summary]
---

## 中文短总结

useState 完整总结。创建、更新、初始化三个维度。简单 vs 基于前值更新。Lazy initialization。State 是不可变的（对象/数组要创建新引用）。State 更新是异步批处理的。

## 中文长总结

### 速查表
| 操作 | 语法 |
|------|------|
| 创建 | `const [val, setVal] = useState(initial)` |
| 直接更新 | `setVal(newValue)` |
| 基于前值更新 | `setVal(prev => prev + 1)` |
| Lazy Init | `useState(() => compute())` |

### 核心规则
1. **不可变**：不直接修改 state，创建新值
2. **异步**：setState 后 state 不会立即更新
3. **批处理**：同一 handler 中多个 setState → 一次 render
4. **Object.is**：相同值 → 跳过 render
5. **Lazy Init**：传函数 → 只 mount 时执行

### 何时使用
- 组件需要随时间变化的数据
- 用户交互改变的数据
- 渲染间需要保持的数据
- 需要触发 re-render 的数据

## English Short Summary

useState comprehensive summary. Create: `useState(init)`. Update: direct value or callback. Lazy init: pass function. Rules: immutable updates, async/batched setState, Object.is skip, callback for previous state. Use when data changes over time and needs to trigger re-renders.
