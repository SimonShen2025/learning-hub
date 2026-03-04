---
title: "Handling Loading, Error, and Ready Status"
lectureId: 192
section: 16
sectionTitle: "The Advanced useReducer Hook"
date: "2026-03-04"
tags: [react, useReducer, conditional-rendering, status]
---

## 中文短总结

根据 status 状态条件渲染不同 UI。loading → 显示 Loader 组件。error → 显示 Error 组件。ready → 显示 StartScreen（问题数量 + 开始按钮）。用 status 字段驱动整个应用流程，比多个 boolean flag 更清晰。

## 中文长总结

### 条件渲染
```jsx
function App() {
  // ...
  return (
    <div className="app">
      <Header />
      <Main>
        {status === "loading" && <Loader />}
        {status === "error" && <Error />}
        {status === "ready" && (
          <StartScreen numQuestions={numQuestions} dispatch={dispatch} />
        )}
        {status === "active" && /* ... */}
        {status === "finished" && /* ... */}
      </Main>
    </div>
  );
}
```

### 状态机思维
- 应用在任一时刻只处于一个状态
- `status` 是一个有限状态机
- 避免用多个 boolean（isLoading、hasError、isReady）
- 状态转换清晰：loading → ready/error → active → finished

### 派生数据
```jsx
const numQuestions = questions.length;
const maxPossiblePoints = questions.reduce(
  (prev, cur) => prev + cur.points, 0
);
```

## English Short Summary

Conditional rendering based on status: loading → Loader, error → Error, ready → StartScreen. Status acts as finite state machine (loading → ready/error → active → finished). Cleaner than multiple boolean flags. Derived data: numQuestions, maxPossiblePoints.
