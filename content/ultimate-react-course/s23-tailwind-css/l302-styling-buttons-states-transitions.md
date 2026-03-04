---
title: "Styling Buttons: Element States and Transitions"
lectureId: 302
section: 23
sectionTitle: "[Optional] Tailwind CSS Crash Course: Styling the App"
date: "2026-03-04"
tags: [tailwind-css, states, hover, focus, transitions]
---

## 中文短总结

元素状态样式。`hover:`、`focus:`、`active:`、`disabled:` 前缀。过渡动画：`transition-all duration-300`。组合：`hover:bg-blue-600 focus:ring-2 focus:ring-blue-400 disabled:opacity-50`。Ring 比 outline 更好看。

## 中文长总结

### 状态前缀
```jsx
<button className="
  bg-yellow-400 text-stone-800 font-semibold
  px-4 py-3 rounded-full
  hover:bg-yellow-300
  focus:outline-none focus:ring focus:ring-yellow-300 focus:ring-offset-2
  active:bg-yellow-500
  disabled:cursor-not-allowed disabled:opacity-50
  transition-all duration-300
">
  Order now
</button>
```

### 常用状态前缀
| 前缀 | 触发条件 |
|------|---------|
| `hover:` | 鼠标悬停 |
| `focus:` | 获得焦点 |
| `active:` | 按下/激活 |
| `disabled:` | 禁用状态 |
| `first:` | 第一个子元素 |
| `last:` | 最后一个子元素 |
| `odd:` | 奇数子元素 |
| `group-hover:` | 父元素 hover 时 |

### 过渡
```jsx
// 基本过渡
<div className="transition-all duration-300">

// 指定属性
<div className="transition-colors duration-200">

// 延迟
<div className="transition-all duration-300 delay-100">
```

### Ring（推荐代替 outline）
```jsx
<input className="focus:ring focus:ring-blue-300 focus:ring-offset-2" />
// ring 比 outline 更美观，支持圆角，有偏移控制
```

## English Short Summary

State variants: `hover:`, `focus:`, `active:`, `disabled:` prefixes. Transitions: `transition-all duration-300`. Ring for focus styles (better than outline). Group states with `group-hover:`. Combine states for interactive buttons.
