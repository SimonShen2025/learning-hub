---
title: "Restarting a Quiz"
lectureId: 199
section: 16
sectionTitle: "The Advanced useReducer Hook"
date: "2026-03-04"
tags: [react, useReducer, quiz-app, reset]
---

## 中文短总结

实现 Quiz 重启。dispatch `{ type: "restart" }` → 重置 status、index、answer、points，保留 questions 和 highscore。useReducer 的优势：一个 action 轻松重置多个 state 字段，用 useState 要调用多个 setter。

## 中文长总结

### Reducer
```jsx
case "restart":
  return {
    ...initialState,
    questions: state.questions,
    status: "ready",
    highscore: state.highscore,
  };
```

### 重置策略
- 从 initialState 展开基础值
- 覆盖需要保留的字段：questions、highscore
- status 设为 "ready"（不是 "loading"，因为数据已有）

### useReducer 的优势体现
```jsx
// useReducer：一行搞定
dispatch({ type: "restart" });

// useState 等价操作：
setStatus("ready");
setIndex(0);
setAnswer(null);
setPoints(0);
setSecondsRemaining(questions.length * SECS_PER_QUESTION);
// 容易漏掉某个！
```

## English Short Summary

Restart quiz: dispatch `restart` → spread initialState, keep questions & highscore, set status "ready". One action resets multiple fields — useReducer advantage over calling multiple useState setters (risk of forgetting one).
