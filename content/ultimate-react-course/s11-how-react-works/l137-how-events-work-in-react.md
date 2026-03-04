---
title: "How Events Work in React"
lectureId: 137
section: 11
sectionTitle: "How React Works Behind the Scenes"
date: "2026-03-04"
tags: [react, events, synthetic-events, event-delegation]
---

## 中文短总结

React 事件系统：所有事件处理都使用**合成事件（SyntheticEvent）**包装原生 DOM 事件，统一跨浏览器行为。React 使用**事件委托**：事件监听器注册在 root element（#root），而非每个 DOM 元素上。事件冒泡到 root → React 匹配对应 handler。

## 中文长总结

### 合成事件 (SyntheticEvent)
- 包装原生 `Event` 对象
- 跨浏览器一致 API
- `e.nativeEvent` 可访问原生事件
- 大部分合成事件冒泡（包括 `onFocus`、`onChange`）

### 事件委托
```
DOM 树:
  #root ← React 在这里注册所有事件监听
    ├── div
    │   └── button ← onClick 不在这里注册
    └── ...

点击 button
  → 原生事件冒泡到 #root
  → React 捕获事件
  → 匹配 onClick handler
  → 调用你的回调函数
```

### 与原生 DOM 的区别
| React | 原生 DOM |
|-------|---------|
| `onClick` | `onclick` / `addEventListener` |
| SyntheticEvent | Event |
| 委托到 root | 直接绑定到元素 |
| `e.preventDefault()` 有效 | 同 |
| `return false` 无效 | 可阻止默认行为 |

### 要点
- 因为事件委托，性能优秀（少量监听器）
- 默认冒泡（Capturing 需用 `onClickCapture`）

## English Short Summary

React events: **SyntheticEvent** wraps native events for cross-browser consistency. **Event delegation**: all listeners attached to root element, not individual DOM nodes. Events bubble to root → React matches handlers. Efficient (few listeners). Access native event via `e.nativeEvent`. Use `onClickCapture` for capture phase.
