---
title: "Let's Build a Steps Component"
lectureId: 57
section: 6
sectionTitle: "State, Events, and Forms: Interactive Components"
date: "2026-03-04"
tags: [react, components, steps-project]
---

## 中文短总结

创建一个简单的 Steps 导航组件：显示步骤编号和内容，有 Previous/Next 按钮。先构建静态部分（不含交互），后续通过 state 添加交互。在新项目（不是 Pizza Menu）中构建，使用 CRA 创建。

## 中文长总结

### 项目结构
- 新建 CRA 项目
- Steps 组件：显示 3 个步骤的进度指示器
- 静态版本：步骤编号硬编码、消息硬编码

### 构建要点
- 定义 `messages` 数组保存各步骤文本
- 用步骤号高亮激活的步骤
- 按钮布局（Previous / Next）
- 先用静态 JSX 搭建 UI 骨架 → 后续加入 state 使其交互

## English Short Summary

Build a Steps navigation component with step indicators and Previous/Next buttons. Start with a static version (hardcoded step number). Created in a new CRA project — interactivity added in subsequent lectures via state.
