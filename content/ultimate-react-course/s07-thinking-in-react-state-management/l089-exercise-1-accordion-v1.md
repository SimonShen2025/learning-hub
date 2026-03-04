---
title: "EXERCISE #1: Accordion Component (v1)"
lectureId: 89
section: 7
sectionTitle: "Thinking In React: State Management"
date: "2026-03-04"
tags: [react, exercise, accordion, state]
---

## 中文短总结

练习：构建手风琴（Accordion）组件。点击标题展开/收起内容面板。使用 `curOpen` state 追踪当前打开的 item（存 index 或 null）。只能同时打开一个 item（点击新的会关闭旧的）。实践 state 管理、条件渲染和子→父通信。

## 中文长总结

### 核心实现
```jsx
function Accordion({ data }) {
  const [curOpen, setCurOpen] = useState(null);

  return (
    <div className="accordion">
      {data.map((el, i) => (
        <AccordionItem
          key={el.title}
          num={i}
          title={el.title}
          curOpen={curOpen}
          onOpen={setCurOpen}
        >
          {el.text}
        </AccordionItem>
      ))}
    </div>
  );
}
```

### 学习要点
- 单一 state 控制多个 item 的开/关（而非每个 item 一个 state）
- `curOpen === num` 判断当前 item 是否展开
- 点击已展开 → 关闭（`setCurOpen(null)`）
- 点击未展开 → 打开（`setCurOpen(num)`）

## English Short Summary

Exercise: build Accordion component. Single `curOpen` state tracks which item is open (index or null). Only one item open at a time. Practice state management for multi-element interaction — using one state variable to control multiple components' visibility.
