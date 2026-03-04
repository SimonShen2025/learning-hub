---
title: "EXERCISE #1: Flashcards"
lectureId: 75
section: 6
sectionTitle: "State, Events, and Forms: Interactive Components"
date: "2026-03-04"
tags: [react, exercise, state, conditional-rendering]
---

## 中文短总结

练习：构建翻转卡片（Flashcards）应用。点击卡片翻转显示答案/问题。核心技术：用 `selectedId` state 追踪当前选中的卡片，点击同一张卡片取消选中（toggle）。实践 state 管理和条件渲染在实际 UI 交互中的应用。

## 中文长总结

### 功能需求
- 显示多张问答卡片
- 默认显示问题
- 点击卡片 → 翻转显示答案
- 再次点击 → 翻转回问题
- 点击其他卡片 → 之前的翻转回问题

### 核心实现
```jsx
const [selectedId, setSelectedId] = useState(null);

function handleClick(id) {
  setSelectedId(id === selectedId ? null : id);  // toggle
}

{questions.map(q => (
  <div
    key={q.id}
    onClick={() => handleClick(q.id)}
    className={q.id === selectedId ? "selected" : ""}
  >
    {q.id === selectedId ? q.answer : q.question}
  </div>
))}
```

### 学习要点
- 用一个 state 控制多个元素的状态（选中/未选中）
- Toggle 模式：`id === selectedId ? null : id`
- 条件渲染 + 条件 className

## English Short Summary

Exercise: build Flashcards app — click to flip cards between question/answer. Use `selectedId` state to track the active card, toggle on click (`id === selectedId ? null : id`). Practice state management for multi-element interaction with conditional rendering and class toggling.
