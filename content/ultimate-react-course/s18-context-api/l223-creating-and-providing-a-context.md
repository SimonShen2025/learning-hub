---
title: "Creating and Providing a Context"
lectureId: 223
section: 18
sectionTitle: "Advanced State Management: The Context API"
date: "2026-03-04"
tags: [react, context-api, createContext, Provider]
---

## 中文短总结

实践 Context API。`createContext()` 创建 context 对象。`<PostContext.Provider value={{posts, onAddPost, onClearPosts}}>` 包裹组件树。value 是一个对象，包含 state 和 handler 函数。通常在 App 或顶层组件中提供。

## 中文长总结

### 步骤 1：创建 Context
```jsx
import { createContext } from "react";

const PostContext = createContext();
```

### 步骤 2：提供 Context
```jsx
function App() {
  const [posts, setPosts] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  // 派生数据
  const searchedPosts = posts.filter((post) =>
    `${post.title} ${post.body}`.toLowerCase().includes(searchQuery.toLowerCase())
  );

  function handleAddPost(post) {
    setPosts((posts) => [post, ...posts]);
  }

  function handleClearPosts() {
    setPosts([]);
  }

  return (
    <PostContext.Provider
      value={{
        posts: searchedPosts,
        onAddPost: handleAddPost,
        onClearPosts: handleClearPosts,
        searchQuery,
        setSearchQuery,
      }}
    >
      <Header />
      <Main />
      <Footer />
    </PostContext.Provider>
  );
}
```

### 注意事项
- value 通常是对象（便于传多个值）
- 可以传 state、setter、handler 函数
- Provider 之外的组件无法访问 context

## English Short Summary

Create context: `createContext()`. Provide via `<Context.Provider value={{...}}>` wrapping component tree. Value is typically an object with state, setters, and handlers. Components outside Provider cannot access the context.
