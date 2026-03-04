---
title: "Using the Key Prop to Fix Our Eat-'N-Split App"
lectureId: 133
section: 11
sectionTitle: "How React Works Behind the Scenes"
date: "2026-03-04"
tags: [react, key-prop, eat-n-split, bug-fix]
---

## 中文短总结

回到 Eat-'N-Split 项目修复 bug：切换朋友后 FormSplitBill 的表单 state 没有重置。解决：`<FormSplitBill key={selectedFriend.id} />`。Key 变化 → 组件重建 → 表单 state 重置。前面 Section 8 已经用过这个技巧，现在理解了原理。

## 中文长总结

### Bug 描述
1. 选择 Clark → 填写分账表单
2. 切换选择 Sarah → 表单数据还是 Clark 的值！
3. 原因：FormSplitBill 类型相同 → React 保留 state

### 修复
```jsx
{selectedFriend && (
  <FormSplitBill
    selectedFriend={selectedFriend}
    onSplitBill={handleSplitBill}
    key={selectedFriend.id}  // ← 关键！
  />
)}
```

### 原理
- Clark（id=118836）→ Sarah（id=933372）
- key 从 118836 → 933372
- React 认为是不同的组件 → 销毁旧的 → 创建新的
- 新实例的 state（bill, paidByUser 等）从初始值开始

## English Short Summary

Fix Eat-'N-Split bug: switching friends didn't reset FormSplitBill state. Solution: `key={selectedFriend.id}`. Key change (different friend ID) forces React to destroy and recreate the form component, resetting all state. Now we understand the mechanism behind the fix used in Section 8.
