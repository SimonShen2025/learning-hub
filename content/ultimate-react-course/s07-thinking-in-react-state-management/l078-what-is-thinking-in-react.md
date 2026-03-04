---
title: "What is 'Thinking in React'?"
lectureId: 78
section: 7
sectionTitle: "Thinking In React: State Management"
date: "2026-03-04"
tags: [react, thinking-in-react, mental-model]
---

## 中文短总结

"Thinking in React" 是一种思维方式/流程：1）将 UI 拆分为**组件**并建立组件树，2）为每个组件构建**静态版本**（无 state），3）思考 **state**：需要什么 state、放在哪里、数据如何流动，4）确定**数据流**（单向 + 子→父通信）。这不仅是技术问题，更是设计思维。

## 中文长总结

### "Thinking in React" 的四个步骤
1. **拆分组件**：将 UI 分解为组件，建立组件树（component tree）
2. **构建静态版本**：先实现不含 state 的静态 UI
3. **规划 State**：
   - 需要哪些 state？
   - 每个 state 放在哪个组件？
   - 是否需要 lifting state up？
4. **确定数据流**：
   - 单向数据流（parent → child via props）
   - 逆向通信（child → parent via callback functions）

### 这不仅仅是代码
- 需要将**设计稿/需求**转化为组件结构
- 需要**提前规划** state 的位置和数据流
- 经验越多，这个过程越自然

### 关键转变
- 从"命令式地操作 DOM"→ "声明式地描述状态和 UI 的对应关系"
- 从"想怎么做"→ "想要什么结果"

## English Short Summary

"Thinking in React" is a mental process: 1) Break UI into components + component tree, 2) Build static version (no state), 3) Plan state — what state, where to place it, lifting up, 4) Establish data flow — parent→child via props, child→parent via callbacks. A design mindset, not just coding.
