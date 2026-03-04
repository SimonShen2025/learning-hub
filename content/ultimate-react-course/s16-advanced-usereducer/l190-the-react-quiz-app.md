---
title: "The \"React Quiz\" App"
lectureId: 190
section: 16
sectionTitle: "The Advanced useReducer Hook"
date: "2026-03-04"
tags: [react, useReducer, project, quiz-app]
---

## 中文短总结

开始构建 React Quiz 应用 — 一个关于 React 概念的问答 Quiz。展示 useReducer 在真实项目中的威力。应用有多个状态：loading、error、ready、active、finished。15 道题，每题有分值，需要跟踪当前题号、分数、答案。

## 中文长总结

### 应用功能
- 从 fake API 加载问题
- 显示加载/错误/就绪状态
- 逐题显示问题
- 点击选项回答
- 追踪分数和进度
- 完成后显示得分
- 可重新开始

### State 设计
```jsx
const initialState = {
  questions: [],      // 问题列表
  status: "loading",  // loading | error | ready | active | finished
  index: 0,           // 当前问题索引
  answer: null,       // 当前答案
  points: 0,          // 当前得分
  highscore: 0,       // 最高分
  secondsRemaining: null, // 剩余时间
};
```

### 为什么用 useReducer
- 7+ 个关联的 state 字段
- 状态转换有明确的流程（loading → ready → active → finished）
- 多个 action 会同时更新多个字段
- 用 useState 管理会非常混乱

## English Short Summary

Build React Quiz app — a React concepts quiz. Demonstrates useReducer power in real projects. Multiple states: loading, error, ready, active, finished. 15 questions with points. State includes questions, status, index, answer, points, highscore, secondsRemaining. Perfect useReducer use case.
