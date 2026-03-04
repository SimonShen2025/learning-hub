---
title: "CHALLENGE #1: Fix Performance Issues in \"Workout Timer\""
lectureId: 256
section: 19
sectionTitle: "Performance Optimization and Advanced useEffect"
date: "2026-03-04"
tags: [react, useEffect, challenge, workout-timer]
---

## 中文短总结

新项目 Workout Timer — 展示 useEffect 问题。计时器应用有多种锻炼类型、时长设置。存在性能问题：不必要的 re-render、声音重复播放、状态更新循环。后续讲解修复方法。

## 中文长总结

### 应用功能
- 选择锻炼类型（workout / running / cycling 等）
- 设置组数、速度、休息时间
- 自动计算总时长
- 切换声音

### 组件结构
```
App
├── Calculator（计算训练时长）
│   ├── 类型选择
│   ├── 组数、速度、休息设置
│   └── Duration 显示
└── ToggleSounds（切换声音）
```

### 存在的问题
1. 声音在每次 re-render 时都播放（useEffect 依赖过多）
2. Duration 的 state 更新触发额外 re-render
3. ToggleSounds 按钮触发整个 App re-render
4. useEffect 的依赖数组需要优化

### 挑战目标
- 识别并修复以上问题
- 应用本节学到的优化技巧
- 正确管理 useEffect 依赖

## English Short Summary

Workout Timer project with performance issues: sound plays on every re-render, unnecessary state updates, excessive re-renders. Challenge: identify and fix issues using optimization techniques from this section.
