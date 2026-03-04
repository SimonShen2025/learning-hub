---
title: "How to Split a UI Into Components"
lectureId: 107
section: 10
sectionTitle: "Thinking in React: Components, Composition, and Reusability"
date: "2026-03-04"
tags: [react, components, component-size, guidelines]
---

## 中文短总结

组件拆分的指导原则。过大（巨型组件）和过小（碎片化）都有问题。四个标准：逻辑分离（不同内容/功能拆开）、可复用性、职责单一（低复杂度）、个人编码风格。先从大组件开始，按需拆分。

## 中文长总结

### 组件大小的光谱
- 过大：难维护、难复用、prop 过多、职责不清
- 过小：过度抽象、组件树过深、到处是 props

### 四个拆分标准 (CRITERIA)
1. **Logical Separation** — 组件是否包含不相关的内容？如果是 → 拆分
2. **Reusability** — 是否有部分可以在其他地方复用？→ 提取
3. **Responsibilities / Complexity** — 组件是否做了太多事？→ 拆分
4. **Personal Coding Style** — 偏好大组件还是小组件

### 指导原则
- 刚开始先写大组件（"一锅端"）
- 当发现组件太大或有复用需求时再拆
- **不要提前过度拆分**
- 命名很重要：组件名应描述其做什么或显示什么

## English Short Summary

Component splitting guidelines. Avoid both too-large (monolithic) and too-small (fragmented) components. Four criteria: logical separation, reusability, single responsibility, personal style. Start big, split as needed — don't over-engineer upfront.
