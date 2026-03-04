---
title: "Setting Up a Timer With useEffect"
lectureId: 200
section: 16
sectionTitle: "The Advanced useReducer Hook"
date: "2026-03-04"
tags: [react, useReducer, useEffect, timer, setInterval]
---

## 中文短总结

用 useEffect + setInterval 实现倒计时。每秒 dispatch `{ type: "tick" }` → secondsRemaining - 1。到 0 时自动 dispatch "finish"。用 useEffect cleanup 清除 interval。Timer 组件只负责显示，逻辑在 reducer 中。

## 中文长总结

### Timer 组件
```jsx
function Timer({ dispatch, secondsRemaining }) {
  const mins = Math.floor(secondsRemaining / 60);
  const seconds = secondsRemaining % 60;

  useEffect(() => {
    const id = setInterval(() => {
      dispatch({ type: "tick" });
    }, 1000);

    return () => clearInterval(id); // cleanup
  }, [dispatch]);

  return (
    <div className="timer">
      {mins < 10 && "0"}{mins}:{seconds < 10 && "0"}{seconds}
    </div>
  );
}
```

### Reducer
```jsx
case "tick":
  return {
    ...state,
    secondsRemaining: state.secondsRemaining - 1,
    status: state.secondsRemaining === 0 ? "finished" : state.status,
  };
```

### 关键点
- interval 在 Timer 组件 mount 时启动
- Timer unmount 时 cleanup 清除 interval（如重启 quiz）
- 时间到自动结束 — 在 reducer 中判断 `secondsRemaining === 0`
- useReducer + useEffect 配合很自然

## English Short Summary

Timer with useEffect + setInterval: dispatch `tick` every second → secondsRemaining - 1. Auto-finish when reaching 0 (checked in reducer). Cleanup clears interval on unmount. Timer component handles display, logic stays in reducer. Natural useReducer + useEffect combo.
