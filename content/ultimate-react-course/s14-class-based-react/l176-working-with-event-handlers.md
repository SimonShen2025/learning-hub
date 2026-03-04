---
title: "Working With Event Handlers"
lectureId: 176
section: 14
sectionTitle: "[Optional] React Before Hooks: Class-Based React"
date: "2026-03-04"
tags: [react, class-components, events, this-binding]
---

## 中文短总结

Class 组件中的事件处理和 `this` 绑定问题。方法中的 `this` 默认是 `undefined`（在事件回调中）。三种解决方式：① constructor 中 `this.handleClick = this.handleClick.bind(this)`。② 箭头函数包裹。③ Class fields（箭头函数属性）。

## 中文长总结

### 问题
```jsx
class App extends Component {
  handleClick() {
    console.log(this); // undefined! 在事件回调中 this 丢失
    this.setState({}); // ❌ 报错
  }
  render() {
    return <button onClick={this.handleClick}>Click</button>;
  }
}
```

### 解决方案 1：bind（传统）
```jsx
constructor(props) {
  super(props);
  this.handleClick = this.handleClick.bind(this); // 绑定 this
}
```

### 解决方案 2：箭头函数包裹
```jsx
<button onClick={() => this.handleClick()}>Click</button>
```

### 解决方案 3：Class fields + 箭头函数（推荐）
```jsx
handleClick = () => {
  this.setState({}); // ✅ 箭头函数继承外层 this
};
```

## English Short Summary

`this` binding issue in class components: event handler methods lose `this` context. Three solutions: 1) `bind(this)` in constructor, 2) arrow function wrapper in JSX, 3) class field arrow functions (recommended). Class fields with arrows auto-bind `this`.
