---
title: "Asynchronous JavaScript: Async/Await"
lectureId: 31
section: 4
sectionTitle: "[Optional] Review of Essential JavaScript for React"
date: "2026-03-04"
tags: [javascript, async-await, fetch]
---

## 中文短总结

`async/await` 是 Promise 的语法糖，让异步代码看起来像同步代码。函数声明为 `async`，内部用 `await` 等待 Promise 结果。比 `.then()` 链更易读、更易维护。React 中主要在 `useEffect` 内部或事件处理函数中使用 async 函数进行数据获取。

## 中文长总结

### 基本用法
```javascript
async function fetchData() {
  const res = await fetch("https://api.example.com/data");
  const data = await res.json();
  console.log(data);
}
```

### 与 Promise 链对比
| Promise 链 | async/await |
|-----------|-------------|
| `fetch().then().then()` | `const res = await fetch(); const data = await res.json()` |
| 变量作用域受限 | 变量在同一作用域，可直接使用 |
| 多层嵌套 | 扁平结构，更易读 |

### React 中的使用
```javascript
useEffect(() => {
  async function fetchMovies() {
    const res = await fetch(url);
    const data = await res.json();
    setMovies(data);
  }
  fetchMovies();
}, []);
```
- **注意**：`useEffect` 的回调本身不能是 async → 在内部定义 async 函数再调用
- 事件处理函数可以直接声明为 async

## English Short Summary

`async/await` is syntactic sugar over Promises — makes async code read like synchronous code. Mark function as `async`, use `await` before Promises. In React, used inside `useEffect` (define inner async function) and event handlers for data fetching. Cleaner and more readable than `.then()` chains.
