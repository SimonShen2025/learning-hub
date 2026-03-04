---
title: "Advanced Pattern: A Custom Provider and Hook"
lectureId: 225
section: 18
sectionTitle: "Advanced State Management: The Context API"
date: "2026-03-04"
tags: [react, context-api, custom-provider, custom-hook, pattern]
---

## 中文短总结

高级模式：自定义 Provider 组件 + 自定义 Hook。将 Context 创建、state 逻辑和 Provider 封装到单独文件。自定义 `usePost()` hook 替代 `useContext(PostContext)`。加入错误检查 — 在 Provider 外使用时报错。

## 中文长总结

### 自定义 Provider
```jsx
// PostContext.jsx
const PostContext = createContext();

function PostProvider({ children }) {
  const [posts, setPosts] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  const searchedPosts = posts.filter(/* ... */);

  function handleAddPost(post) { /* ... */ }
  function handleClearPosts() { /* ... */ }

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
      {children}
    </PostContext.Provider>
  );
}
```

### 自定义 Hook
```jsx
function usePosts() {
  const context = useContext(PostContext);
  if (context === undefined)
    throw new Error("usePosts must be used within a PostProvider");
  return context;
}

export { PostProvider, usePosts };
```

### 使用
```jsx
// App.jsx
<PostProvider>
  <Header />
  <Main />
</PostProvider>

// 任意组件
const { posts, onAddPost } = usePosts();
```

### 优势
- State 逻辑与 UI 分离
- 更好的代码组织
- 错误保护（Provider 外使用时提示）
- 更干净的 API

## English Short Summary

Advanced pattern: extract Context + state into custom Provider component + custom Hook. `PostProvider` wraps children with context. `usePosts()` hook with guard: throws if used outside Provider. Separates state logic from UI. Cleaner API.
