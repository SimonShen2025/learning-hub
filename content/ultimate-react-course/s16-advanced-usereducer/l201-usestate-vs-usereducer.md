---
title: "Section Summary: useState vs. useReducer"
lectureId: 201
section: 16
sectionTitle: "The Advanced useReducer Hook"
date: "2026-03-04"
tags: [react, useState, useReducer, comparison, summary]
---

## 中文短总结

useState vs useReducer 完整对比。useState：简单独立 state、少量更新。useReducer：复杂关联 state、多种 action、状态转换有逻辑。选择标准：state 数量、关联度、更新复杂度。大多数场景 useState 就够了。

## 中文长总结

### 对比表
| 维度 | useState | useReducer |
|------|----------|------------|
| State 类型 | 独立的单一值 | 关联的多个值（对象） |
| 更新方式 | setter 函数 | dispatch action |
| 更新逻辑位置 | 分散在组件各处 | 集中在 reducer |
| 事件数量 | 少量 | 多种 action type |
| 学习曲线 | 简单 | 需要理解 reducer 模式 |

### 何时用 useState
- 1-2 个简单 state
- state 之间无关联
- 更新逻辑简单直接
- 不需要 state 转换逻辑

### 何时用 useReducer
- 3+ 个关联的 state
- 复杂的状态更新逻辑
- 多种不同的 action 类型
- state 有明确的状态机模式
- 需要一个 action 更新多个 state

### 经验法则
> 如果发现自己在用多个 useState 并且它们经常一起更新 → 考虑 useReducer

## English Short Summary

useState vs useReducer: useState for simple independent state with few updates. useReducer for complex related state, multiple action types, state machine patterns. Rule of thumb: if multiple useState calls frequently update together → consider useReducer. Most cases useState suffices.
