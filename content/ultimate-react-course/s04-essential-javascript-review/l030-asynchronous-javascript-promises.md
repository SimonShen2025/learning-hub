---
title: "Asynchronous JavaScript: Promises"
lectureId: 30
section: 4
sectionTitle: "[Optional] Review of Essential JavaScript for React"
date: "2026-03-04"
tags: [javascript, promises, fetch, async]
---

## 中文短总结

Promise 是异步操作的结果容器。`fetch(url)` 返回 Promise，用 `.then()` 链式处理：第一个 `.then()` 将 response 转为 JSON（`res.json()` 也返回 Promise），第二个 `.then()` 处理实际数据。这是 async/await 的底层机制。

## 中文长总结

### fetch + Promise 链
```javascript
fetch("https://api.example.com/data")
  .then(res => res.json())    // Response → JSON（也是 Promise）
  .then(data => console.log(data));
```

### Promise 链式调用
- 每个 `.then()` 返回新 Promise → 可继续 `.then()`
- `.catch()` 处理错误
- `.finally()` 无论成功失败都执行

### 局限
- 链式 `.then()` 嵌套多了可读性下降
- 变量作用域限制（外层 `.then()` 的变量在内层不易访问）
- 下一讲的 async/await 是更好的替代方案

## English Short Summary

`fetch()` returns a Promise. Chain with `.then()` to process results: first `.then()` converts response to JSON, second handles data. Promise chaining works but can become hard to read — async/await (next lecture) is the preferred syntax.
