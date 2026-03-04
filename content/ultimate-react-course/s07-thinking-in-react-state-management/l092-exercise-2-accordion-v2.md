---
title: "EXERCISE #2: Accordion Component (v2)"
lectureId: 92
section: 7
sectionTitle: "Thinking In React: State Management"
date: "2026-03-04"
tags: [react, exercise, accordion, children-prop]
---

## 中文短总结

改进手风琴组件：用 children prop 替代直接传 text prop，使 AccordionItem 更通用。内容不再限于纯文本 — 可以传入列表、链接、组件等任意 JSX。实践组合模式让组件更灵活、更可复用。

## 中文长总结

### 改进对比
```jsx
// v1 — text 作为 prop
<AccordionItem text={el.text} />

// v2 — children prop，可传任意内容
<AccordionItem>
  <p>{el.text}</p>
  <ul>
    <li>Point 1</li>
    <li>Point 2</li>
  </ul>
</AccordionItem>
```

### 学习要点
- children prop 使组件从"只接受文本"变为"接受任意 JSX"
- 这使得同一组件可以在不同场景复用
- 组合 > 配置（composition over configuration）

## English Short Summary

Upgrade Accordion: replace text prop with children prop, allowing any JSX content inside AccordionItem (paragraphs, lists, links, other components). Demonstrates composition over configuration — same component, infinitely flexible content.
