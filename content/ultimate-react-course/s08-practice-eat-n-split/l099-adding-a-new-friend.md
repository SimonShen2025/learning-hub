---
title: "Adding a New Friend"
lectureId: 99
section: 8
sectionTitle: "[Optional] Practice Project: Eat-'N-Split"
date: "2026-03-04"
tags: [react, state, forms, controlled-elements, eat-n-split]
---

## 中文短总结

实现添加新朋友功能。将 `friends` 数组提升为 state（Lifting State Up 到 App）。FormAddFriend 中用受控组件管理 name 和 image 输入。提交时创建新朋友对象（`id: crypto.randomUUID()`，`balance: 0`），通过回调 prop 传给 App 更新 state。提交后重置表单并关闭。

## 中文长总结

### 实现步骤
1. `friends` 从常量变为 state：`useState(initialFriends)`
2. App 中定义 `handleAddFriend`：
   ```jsx
   function handleAddFriend(friend) {
     setFriends(friends => [...friends, friend]);
     setShowAddFriend(false);  // 提交后关闭表单
   }
   ```
3. FormAddFriend 中：
   - 受控组件：`name` + `image` state
   - 提交时创建新对象 + 调用 `onAddFriend(newFriend)`
   - 重置表单 state

### 关键模式
- Lifting State Up：friends state 在 App 中
- 子→父通信：FormAddFriend 通过 `onAddFriend` callback 通知 App
- 不可变更新：`[...friends, newFriend]`

## English Short Summary

Add new friend: lift `friends` to App state. FormAddFriend uses controlled elements for name/image, creates new friend object on submit (`crypto.randomUUID()` for ID), and calls `onAddFriend` callback to update parent state. Form resets and closes after submission. Classic lifting state up + child-to-parent pattern.
