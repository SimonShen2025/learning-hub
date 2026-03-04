---
title: "CHALLENGE #1: Text Expander Component"
lectureId: 121
section: 10
sectionTitle: "Thinking in React: Components, Composition, and Reusability"
date: "2026-03-04"
tags: [react, challenge, reusable-components, composition]
---

## 中文短总结

挑战：构建可复用的 TextExpander 组件。默认显示截断文本，点击 "Show more" 展开全文。可配置 props：`collapsedNumWords`（截断字数）、`expandButtonText`/`collapseButtonText`（按钮文字）、`buttonColor`、`expanded`（默认展开状态）、`className`。综合运用本节所学。

## 中文长总结

### 组件 API
```jsx
<TextExpander
  collapsedNumWords={20}       // 默认显示前 20 个单词
  expandButtonText="Show text"
  collapseButtonText="Collapse text"
  buttonColor="#ff6622"
  expanded={false}             // 初始是否展开
  className="box"
>
  {longText}
</TextExpander>
```

### 实现要点
- `isExpanded` state 控制展开/折叠
- 截断：`text.split(" ").slice(0, collapsedNumWords).join(" ") + "..."`
- 使用 `children` 接收文本内容
- 按钮样式用 inline style + `buttonColor` prop
- 提供合理默认值

### 练习目的
- 综合运用：children、props 作为 API、state、条件渲染
- 从零构建可复用组件的完整流程

## English Short Summary

Challenge: build reusable TextExpander component. Shows truncated text (configurable word count), expands on click. Props: `collapsedNumWords`, button texts, `buttonColor`, `expanded` default, `className`. Uses children for text content. Synthesizes section concepts: composition, props as API, state.
