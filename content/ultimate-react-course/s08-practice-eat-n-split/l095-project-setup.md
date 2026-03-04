---
title: "Project Setup"
lectureId: 95
section: 8
sectionTitle: "[Optional] Practice Project: Eat-'N-Split"
date: "2026-03-04"
tags: [react, project-setup, eat-n-split]
---

## 中文短总结

CRA 创建新项目。查看最终效果：左侧朋友列表（显示余额颜色编码：绿色=对方欠你，红色=你欠对方，灰色=平账），右侧分账表单。导入 CSS starter file，设置初始朋友数据数组。

## 中文长总结

### 项目结构
- CRA 新建项目
- 单文件 `App.js` 开发（后续可拆分）
- 导入 `index.css` 样式文件

### 初始数据
```javascript
const initialFriends = [
  { id: 118836, name: "Clark", image: "...", balance: -7 },
  { id: 933372, name: "Sarah", image: "...", balance: 20 },
  { id: 499476, name: "Anthony", image: "...", balance: 0 },
];
```
- `balance` 正值 = 对方欠你，负值 = 你欠对方

### UI 目标
- 左面板：朋友列表 + 添加朋友按钮/表单
- 右面板：分账表单（选中朋友后显示）

## English Short Summary

Set up Eat-'N-Split with CRA. Import CSS, define initial friends data array with balance (positive = they owe you, negative = you owe them). UI: left panel with friends list + add form, right panel with bill splitting form shown when a friend is selected.
