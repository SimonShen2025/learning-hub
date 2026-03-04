---
title: "What is the Context API?"
lectureId: 222
section: 18
sectionTitle: "Advanced State Management: The Context API"
date: "2026-03-04"
tags: [react, context-api, prop-drilling, theory]
---

## 中文短总结

Context API 解决 prop drilling 问题。Prop drilling：数据通过多层组件传递给深层组件。Context 让任意组件直接访问共享数据，无需逐层传递。三步：createContext → Provider 提供值 → useContext 消费值。

## 中文长总结

### Prop Drilling 问题
```
App → Header → Nav → Button (需要 user)
App → Main → Sidebar → List (需要 user)
// user 从 App 传递到每个中间层
```

### Context API 解决方案
```jsx
// 1. 创建 Context
const UserContext = createContext();

// 2. Provider 提供值（通常在 App 或近根组件）
<UserContext.Provider value={user}>
  <App />
</UserContext.Provider>

// 3. 任意深层组件直接消费
const user = useContext(UserContext);
```

### 工作原理
- Provider 像"广播站"，向所有子组件广播值
- Consumer 像"收音机"，接收需要的值
- 不需要经过中间层组件
- 值变化时，所有 Consumer 自动 re-render

### Context 不是万能的
- 不替代所有 props（组件特有的 props 还是需要的）
- 适合"全局性"数据（主题、用户、语言）
- 频繁变化的数据可能有性能问题

## English Short Summary

Context API solves prop drilling — data passes through many layers just to reach deep components. Three steps: createContext → Provider wraps tree with value → useContext reads value anywhere. Provider broadcasts, consumers receive. Good for global data (theme, user, locale).
