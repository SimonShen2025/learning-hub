---
title: "Our First Class Component"
lectureId: 175
section: 14
sectionTitle: "[Optional] React Before Hooks: Class-Based React"
date: "2026-03-04"
tags: [react, class-components, state, render]
---

## 中文短总结

Class 组件基本结构：`class Counter extends React.Component`，`render()` 方法返回 JSX。State 用 `this.state` 对象（不是分开的 useState）。更新用 `this.setState({ key: value })` — 自动合并（不是替换）。Props 通过 `this.props` 访问。

## 中文长总结

### 基本结构
```jsx
class Counter extends React.Component {
  constructor(props) {
    super(props); // 必须调用
    this.state = { count: 0 }; // state 是一个对象
  }

  render() {
    return (
      <div>
        <p>{this.state.count}</p>
        <button onClick={() => this.setState({ count: this.state.count + 1 })}>
          +1
        </button>
      </div>
    );
  }
}
```

### 与函数组件对比
| Class | Function |
|-------|----------|
| `class X extends Component` | `function X()` |
| `this.state = {...}` | `useState()` × N |
| `this.setState({...})` | `setState()` |
| `this.props.x` | 参数解构 `{ x }` |
| `render()` 返回 JSX | 函数直接返回 JSX |

### setState 自动合并
```jsx
this.setState({ count: 1 }); 
// 只更新 count，保留 state 中其他字段
// 函数组件的 useState 是替换！
```

## English Short Summary

Class component basics: `class X extends Component`, state as object `this.state = {}`, update with `this.setState({})` (merges, not replaces). Props via `this.props`. `render()` method returns JSX. Constructor calls `super(props)`. setState auto-merges with existing state.
