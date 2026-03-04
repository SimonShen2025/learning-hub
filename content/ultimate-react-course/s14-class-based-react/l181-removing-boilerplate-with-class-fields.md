---
title: "Removing Boilerplate Code With Class Fields"
lectureId: 181
section: 14
sectionTitle: "[Optional] React Before Hooks: Class-Based React"
date: "2026-03-04"
tags: [react, class-components, class-fields, syntax]
---

## 中文短总结

用 Class Fields 简化代码：① state 直接作为类属性（不需要 constructor）。② 方法用箭头函数（不需要 bind）。ES2022 Class Fields 语法让 class 组件减少大量样板代码。

## 中文长总结

### 之前（传统）
```jsx
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { location: "", weather: {} };
    this.fetchWeather = this.fetchWeather.bind(this);
  }

  fetchWeather() {
    // ...
  }
}
```

### 之后（Class Fields）
```jsx
class App extends React.Component {
  state = { location: "", weather: {} }; // 直接属性

  fetchWeather = async () => {  // 箭头函数 → 自动绑定 this
    // ...
  };
}
```

### 减少的代码
- ❌ constructor
- ❌ super(props)
- ❌ this.bindAll
- ✅ 更接近函数组件的简洁度

## English Short Summary

Class Fields (ES2022) reduce boilerplate: state as class property (no constructor needed), methods as arrow functions (no bind needed). Eliminates constructor, super(props), and manual this binding. Makes class components more concise.
