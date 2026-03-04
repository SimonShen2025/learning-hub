---
title: "Class Components vs. Function Components"
lectureId: 177
section: 14
sectionTitle: "[Optional] React Before Hooks: Class-Based React"
date: "2026-03-04"
tags: [react, class-components, function-components, comparison]
---

## 中文短总结

全面对比 Class 与 Function 组件。Function + Hooks 是现代推荐方式。Class 组件写法冗长（this、bind、生命周期方法）。Hooks 更简洁、可组合、易测试。两者都能完成相同功能。新项目应使用函数组件。

## 中文长总结

### 对比表
| 维度 | Class | Function + Hooks |
|------|-------|-----------------|
| 定义 | `class X extends Component` | `function X()` |
| State | `this.state` 对象 | 多个 `useState` |
| Side Effects | 生命周期方法 | `useEffect` |
| Event Handler | 需要绑定 this | 普通函数 |
| 代码量 | 多（样板代码多） | 少 |
| 逻辑复用 | HOC / Render Props（复杂） | 自定义 Hooks（简单） |
| this 问题 | 需要处理 | 无 this |

### 历史
- React 0-16.7：只有 Class 能用 state/lifecycle
- React 16.8+：Hooks 发布 → 函数组件完全替代 Class
- 现在：函数组件是默认标准

### 何时用 Class
- 维护旧项目
- Error Boundaries（仍需 class，但可用 react-error-boundary 库）

## English Short Summary

Class vs Function components: Functions + Hooks are modern standard (simpler, composable, no `this` issues). Class: verbose (boilerplate, lifecycle methods, this binding), logic reuse via HOC/render props. Function: concise, custom hooks for reuse. New projects should always use function components.
