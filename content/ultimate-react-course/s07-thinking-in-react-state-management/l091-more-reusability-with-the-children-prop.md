---
title: "More Reusability With the 'children' Prop"
lectureId: 91
section: 7
sectionTitle: "Thinking In React: State Management"
date: "2026-03-04"
tags: [react, children-prop, composition, reusability]
---

## 中文短总结

进一步用 children prop 构建可复用容器组件。创建一个通用 `StepMessage` 组件，使用 children 接收任意内容（文本 + 按钮等）。children 可以是任意复杂的 JSX 结构。组合模式让组件高度灵活 — 外层负责布局/样式，内层负责内容。

## 中文长总结

### 示例
```jsx
function StepMessage({ step, children }) {
  return (
    <div className="message">
      <h3>Step {step}</h3>
      {children}  {/* 可以是任何内容 */}
    </div>
  );
}

// 使用
<StepMessage step={step}>
  <p>{messages[step - 1]}</p>
  <Button onClick={() => alert("Learn more")}>Learn more</Button>
</StepMessage>
```

### 组合模式的力量
- `StepMessage` 不知道里面会放什么内容
- 调用者决定内容 → 极度灵活
- 可以嵌入文本、按钮、图片、甚至其他组件
- 就像 HTML 的容器元素（`<div>`、`<section>`）一样通用

## English Short Summary

Build reusable container components with children prop. `StepMessage` component provides structure (step number, styling), while the caller determines content via children — can be text, buttons, other components, or any JSX. Composition pattern: outer component handles layout, inner content is fully flexible.
