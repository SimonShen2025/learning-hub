---
title: "Loading Questions from a Fake API"
lectureId: 191
section: 16
sectionTitle: "The Advanced useReducer Hook"
date: "2026-03-04"
tags: [react, useReducer, json-server, data-fetching]
---

## 中文短总结

用 json-server 搭建 fake API。将问题数据放在 `data/questions.json`。useEffect 中 fetch 数据 → dispatch `dataReceived` action → 设置 questions 数组和 status 为 ready。fetch 失败 → dispatch `dataFailed` → status 变为 error。

## 中文长总结

### 搭建 Fake API
```bash
npm i json-server
# package.json scripts:
"server": "json-server --watch data/questions.json --port 8000"
```

### 数据获取
```jsx
useEffect(() => {
  fetch("http://localhost:8000/questions")
    .then((res) => res.json())
    .then((data) => dispatch({ type: "dataReceived", payload: data }))
    .catch(() => dispatch({ type: "dataFailed" }));
}, []);
```

### Reducer 处理
```jsx
case "dataReceived":
  return { ...state, questions: action.payload, status: "ready" };

case "dataFailed":
  return { ...state, status: "error" };
```

### 流程
1. 组件挂载 → status = "loading"
2. fetch 成功 → dispatch "dataReceived" → status = "ready"
3. fetch 失败 → dispatch "dataFailed" → status = "error"

## English Short Summary

Set up fake API with json-server for quiz questions. useEffect fetches data on mount → dispatch `dataReceived` (sets questions + status "ready") or `dataFailed` (status "error"). Clean separation: fetch in effect, state logic in reducer.
