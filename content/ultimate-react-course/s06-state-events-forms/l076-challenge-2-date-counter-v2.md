---
title: "CHALLENGE #2: Date Counter (v2)"
lectureId: 76
section: 6
sectionTitle: "State, Events, and Forms: Interactive Components"
date: "2026-03-04"
tags: [react, challenge, controlled-elements, range-input]
---

## 中文短总结

升级日期计数器：添加 range slider（`<input type="range">`）控制步长（step），添加文本输入框直接输入 count 值，添加 Reset 按钮。综合练习受控组件、多 state 变量协同、事件处理。将之前的按钮交互扩展为更丰富的表单交互。

## 中文长总结

### 新增功能
1. **Range Slider**：`<input type="range">` 控制步长（step）
2. **文本输入**：`<input type="text">` 直接输入 count
3. **Reset 按钮**：重置所有 state 到初始值

### 受控组件应用
```jsx
const [step, setStep] = useState(1);
const [count, setCount] = useState(0);

<input
  type="range"
  min="1" max="10"
  value={step}
  onChange={e => setStep(Number(e.target.value))}
/>

<input
  type="text"
  value={count}
  onChange={e => setCount(Number(e.target.value))}
/>
```

### 学习要点
- 多种输入类型的受控组件（range、text、button）
- 多个 state 变量协同工作
- Reset 功能：`setStep(1); setCount(0);`
- 综合运用本 section 所有知识

## English Short Summary

Upgrade Date Counter: add range slider for step control, text input for direct count entry, and Reset button. Practice controlled elements with multiple input types, multi-state coordination, and form reset. Consolidates all Section 6 concepts.
