---
title: "Optimizing Context Re-Renders"
lectureId: 251
section: 19
sectionTitle: "Performance Optimization and Advanced useEffect"
date: "2026-03-04"
tags: [react, context-api, performance, optimization]
---

## 中文短总结

Context value 变化 → 所有消费者 re-render。三种优化策略：① memo 包裹消费组件的子组件 ② 拆分 Context（频繁变化 vs 稳定） ③ useMemo 缓存 context value 对象。最常用的是 memo + useMemo 组合。

## 中文长总结

### Context 性能问题
```jsx
// 每次 SearchQuery 变化，所有消费者都 re-render
// 即使它们不使用 searchQuery
<PostContext.Provider value={{ posts, searchQuery, onAddPost }}>
```

### 策略 1：memo 子组件
```jsx
// 消费组件的子组件用 memo
const MemoChild = memo(ChildComponent);
function Consumer() {
  const { posts } = useContext(PostContext);
  return <MemoChild posts={posts} />;
}
```

### 策略 2：拆分 Context
```jsx
// 将频繁变化的 state 和稳定的 state 分开
const SearchContext = createContext(); // searchQuery（频繁）
const PostContext = createContext();   // posts, handlers（稳定）
```

### 策略 3：useMemo 缓存 value
```jsx
function PostProvider({ children }) {
  const [posts, setPosts] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  const value = useMemo(() => ({
    posts: searchedPosts,
    onAddPost: handleAddPost,
    searchQuery,
    setSearchQuery,
  }), [searchedPosts, searchQuery]);

  return <PostContext.Provider value={value}>{children}</PostContext.Provider>;
}
```

## English Short Summary

Context value change re-renders all consumers. Three strategies: memo consumer children, split contexts (frequent vs stable), useMemo context value object. Most common: memo + useMemo combo. Split context for high-frequency updates.
