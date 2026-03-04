---
title: "Props as a Component API"
lectureId: 118
section: 10
sectionTitle: "Thinking in React: Components, Composition, and Reusability"
date: "2026-03-04"
tags: [react, props, api-design, reusability]
---

## 中文短总结

Props 是组件的公开 API。好的组件 API：足够的 props 让使用者灵活配置，但不过多导致复杂度爆炸。在 "too little props"（不灵活）和 "too many props"（太复杂）之间找平衡。提供合理的默认值。

## 中文长总结

### 组件的两个视角
1. **组件创作者**（你写组件时）— 定义 props = 公开 API
2. **组件使用者**（别人用你的组件时）— 通过 props 配置行为

### API 设计原则
| 问题 | 方案 |
|------|------|
| Props 太少 | 组件不够灵活，难以适应不同场景 |
| Props 太多 | 使用者困惑，学习成本高 |
| 没有默认值 | 每次使用都要传大量配置 |

### 好的实践
- 提供合理的 **默认值**（`maxRating = 5`）
- 必需 props 最少化
- 可选 props 让高级用户定制
- 命名清晰（`onRate` 而非 `handleRate`）

### StarRating 的 API 演进
基础：`<StarRating />` — 默认 5 星
定制：`<StarRating maxRating={10} color="red" size={24} />`

## English Short Summary

Props are a component's public API. Balance between too few (inflexible) and too many (complex). Provide sensible defaults, minimize required props, allow optional customization. Think from both creator and consumer perspectives when designing component APIs.
