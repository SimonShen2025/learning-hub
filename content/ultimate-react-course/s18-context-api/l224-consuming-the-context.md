---
title: "Consuming the Context"
lectureId: 224
section: 18
sectionTitle: "Advanced State Management: The Context API"
date: "2026-03-04"
tags: [react, context-api, useContext, consuming]
---

## 中文短总结

用 `useContext(PostContext)` 在任意组件中消费 context 值。解构获取需要的数据。消除了所有 prop drilling。组件不再需要接收和传递它们自己不用的 props。Context value 变化时所有消费组件自动 re-render。

## 中文长总结

### 消费 Context
```jsx
import { useContext } from "react";
import { PostContext } from "../App";

function List() {
  const { posts } = useContext(PostContext);

  return (
    <ul>
      {posts.map((post, i) => (
        <li key={i}>{post.title}</li>
      ))}
    </ul>
  );
}
```

### 重构前后对比
```jsx
// 之前：prop drilling
<Main posts={posts}>
  <List posts={posts} />
</Main>

// 之后：Context
<Main>
  <List />   {/* List 内部直接用 useContext */}
</Main>
```

### 多个消费者
```jsx
// Header 组件
const { onClearPosts } = useContext(PostContext);

// SearchPosts 组件
const { searchQuery, setSearchQuery } = useContext(PostContext);

// FormAddPost 组件
const { onAddPost } = useContext(PostContext);
```

### 注意
- 每个消费组件只取自己需要的值
- Context value 变化 → 所有消费组件 re-render（可能有性能影响）

## English Short Summary

Consume context with `useContext(PostContext)`, destructure needed values. Eliminates prop drilling — components no longer pass unused props. All consumers re-render when context value changes. Each consumer extracts only what it needs.
