---
title: "CHALLENGE #2: Refactoring \"React Quiz\" to Context API"
lectureId: 241
section: 18
sectionTitle: "Advanced State Management: The Context API"
date: "2026-03-04"
tags: [react, context-api, useReducer, challenge, refactoring]
---

## 中文短总结

挑战：将 React Quiz 应用重构为 Context + useReducer 模式。创建 QuizContext + QuizProvider。将所有 state 和 dispatch 移入 Provider。子组件用 useQuiz() Hook 替代 props。完整的状态管理系统重构练习。

## 中文长总结

### 重构步骤
1. 创建 `QuizContext.jsx`
2. 将 useReducer 从 App 移到 QuizProvider
3. 将派生数据计算移到 Provider
4. Provider value 包含所有 state + dispatch
5. 创建 `useQuiz()` 自定义 Hook
6. 所有子组件用 useQuiz() 替代 props

### QuizProvider
```jsx
function QuizProvider({ children }) {
  const [{ questions, status, index, answer, points, highscore,
    secondsRemaining }, dispatch] = useReducer(reducer, initialState);

  const numQuestions = questions.length;
  const maxPossiblePoints = questions.reduce(
    (prev, cur) => prev + cur.points, 0
  );

  return (
    <QuizContext.Provider
      value={{
        questions, status, index, answer, points, highscore,
        secondsRemaining, numQuestions, maxPossiblePoints, dispatch,
      }}
    >
      {children}
    </QuizContext.Provider>
  );
}
```

### 重构效果
- App 组件从 50+ 行减到 ~20 行
- 子组件不再接收 props
- 状态管理完全在 QuizProvider 中
- 添加新功能只需修改 Provider 和 Reducer

## English Short Summary

Challenge: refactor React Quiz to Context + useReducer. Create QuizProvider with reducer + derived data. All components use `useQuiz()` hook instead of props. App shrinks dramatically. Full state management system refactoring practice.
