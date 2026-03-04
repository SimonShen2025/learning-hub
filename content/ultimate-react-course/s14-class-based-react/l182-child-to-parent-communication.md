---
title: "Child to Parent Communication"
lectureId: 182
section: 14
sectionTitle: "[Optional] React Before Hooks: Class-Based React"
date: "2026-03-04"
tags: [react, class-components, child-to-parent, callbacks]
---

## 中文短总结

Class 组件中的子→父通信：与函数组件相同 — 父组件通过 props 传递回调函数，子组件调用回调传递数据。唯一区别是语法（`this.props.onSetLocation`）。模式完全一致。

## 中文长总结

### 实现
```jsx
// 父组件 App
class App extends React.Component {
  state = { location: "" };

  setLocation = (loc) => this.setState({ location: loc });

  render() {
    return <Input location={this.state.location} onSetLocation={this.setLocation} />;
  }
}

// 子组件 Input
class Input extends React.Component {
  render() {
    return (
      <input
        value={this.props.location}
        onChange={(e) => this.props.onSetLocation(e.target.value)}
      />
    );
  }
}
```

### 与函数组件对比
- 模式完全一致：callback props
- 语法差异：`this.props` vs 参数解构
- 子→父通信是 React 通用模式，与组件类型无关

## English Short Summary

Child-to-parent communication in class components: identical pattern to function components — pass callback via props, child calls it with data. Only syntactic difference: `this.props.onSetLocation` vs destructured props. Universal React pattern regardless of component type.
