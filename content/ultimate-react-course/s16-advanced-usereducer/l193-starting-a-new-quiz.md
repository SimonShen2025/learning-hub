---
title: "Starting a New Quiz"
lectureId: 193
section: 16
sectionTitle: "The Advanced useReducer Hook"
date: "2026-03-04"
tags: [react, useReducer, state-transition]
---

## 中文短总结

实现开始 Quiz 功能。点击 "Let's start" 按钮 → dispatch `{ type: "start" }` → status 从 "ready" 变为 "active"。active 状态下显示第一个问题。StartScreen 组件接收 dispatch 函数作为 prop。

## 中文长总结

### StartScreen 组件
```jsx
function StartScreen({ numQuestions, dispatch }) {
  return (
    <div className="start">
      <h2>Welcome to The React Quiz!</h2>
      <h3>{numQuestions} questions to test your React mastery</h3>
      <button
        className="btn btn-ui"
        onClick={() => dispatch({ type: "start" })}
      >
        Let's start
      </button>
    </div>
  );
}
```

### Reducer 处理
```jsx
case "start":
  return { ...state, status: "active",
    secondsRemaining: state.questions.length * SECS_PER_QUESTION };
```

### 状态转换
```
ready → (dispatch "start") → active
```
- 进入 active 后渲染 Question 组件
- index 保持 0（从第一题开始）

## English Short Summary

Start quiz: click button → dispatch `{ type: "start" }` → status changes from "ready" to "active". Active status renders first question. StartScreen receives dispatch as prop. Timer initialized with `questions.length * SECS_PER_QUESTION`.
