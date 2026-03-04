---
title: "Section Overview"
lectureId: 140
section: 12
sectionTitle: "Effects and Data Fetching"
date: "2026-03-04"
tags: [react, effects, useEffect, data-fetching]
---

## 中文短总结

本节主题：useEffect Hook — React 中执行副作用的机制。涵盖组件生命周期、数据获取（fetch API）、加载/错误状态、依赖数组、清理函数。在 usePopcorn 项目中实现电影搜索和详情获取功能。

## 中文长总结

### 学习目标
1. 组件生命周期（mount → re-render → unmount）
2. **useEffect** Hook
3. 数据获取（fetch + async/await）
4. Loading 和 Error 状态
5. 依赖数组的作用和规则
6. Effect 清理函数（cleanup）
7. 键盘事件监听

### 项目功能
- 搜索电影（OMDB API）
- 显示搜索结果列表
- 查看电影详情
- 管理已观看列表

## English Short Summary

Section on useEffect: React's mechanism for side effects. Covers component lifecycle, data fetching (fetch API), loading/error states, dependency array, and cleanup functions. Implements movie search and details in the usePopcorn project using OMDB API.
