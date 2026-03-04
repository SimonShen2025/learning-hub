---
title: "Cleaning Up the Title"
lectureId: 155
section: 12
sectionTitle: "Effects and Data Fetching"
date: "2026-03-04"
tags: [react, useEffect, cleanup, document-title]
---

## 中文短总结

用 cleanup 函数恢复页面标题。关闭电影详情后，document.title 应恢复为 "usePopcorn"。在 MovieDetails 的 title effect 中返回 cleanup：`return () => { document.title = "usePopcorn" }`。组件 unmount 时自动执行。

## 中文长总结

### 问题
- 打开电影 → 标题变为 "Movie | Interstellar"
- 关闭电影详情 → MovieDetails unmount → 但标题不变！

### 解决
```jsx
useEffect(() => {
  if (!title) return;
  document.title = `Movie | ${title}`;

  return function () {
    document.title = "usePopcorn"; // cleanup: 恢复标题
  };
}, [title]);
```

### Closure 在 cleanup 中的作用
- cleanup 函数形成 closure → 记住上一次 effect 的 `title` 值
- 即使组件已 unmount，cleanup 仍能访问 `title`
- 这是理解 cleanup 的关键：它"记住"了它被创建时的上下文

## English Short Summary

Clean up document.title: return cleanup function from title effect that resets to "usePopcorn". Runs when MovieDetails unmounts (closing movie). Closure: cleanup retains access to the `title` value from when it was created — key to understanding cleanup behavior.
