---
title: "Cleaning Up Data Fetching"
lectureId: 156
section: 12
sectionTitle: "Effects and Data Fetching"
date: "2026-03-04"
tags: [react, useEffect, cleanup, abort-controller, race-condition]
---

## 中文短总结

用 `AbortController` 清理 fetch 请求。问题：快速输入搜索时，多个 fetch 同时进行，旧的请求可能在新请求之后完成 → 显示错误结果（race condition）。解决：cleanup 中 `controller.abort()` 取消上一次请求。捕获 AbortError 时不设为 error state。

## 中文长总结

### Race Condition 问题
```
输入 "i" → fetch("...?s=i") 发出
输入 "in" → fetch("...?s=in") 发出
输入 "int" → fetch("...?s=int") 发出
// "i" 的结果可能最后返回 → 显示错误的搜索结果！
```

### 解决方案
```jsx
useEffect(() => {
  const controller = new AbortController();

  async function fetchMovies() {
    try {
      const res = await fetch(`...?s=${query}`, {
        signal: controller.signal, // 传入 abort signal
      });
      // ...
    } catch (err) {
      if (err.name !== "AbortError") {
        setError(err.message); // 只处理非 abort 错误
      }
    }
  }
  fetchMovies();

  return function () {
    controller.abort(); // cleanup: 取消上一次请求
  };
}, [query]);
```

### 效果
- query 变化 → cleanup 取消上次 fetch → 新 fetch 发出
- 只有最新的请求结果会被使用
- AbortError 被忽略（是预期行为）

## English Short Summary

Clean up fetch with `AbortController` to prevent race conditions. Fast typing triggers multiple fetches; old requests completing after new ones show wrong results. Cleanup: `controller.abort()` cancels previous fetch. Ignore `AbortError` in catch (expected behavior). Only latest request's result is used.
