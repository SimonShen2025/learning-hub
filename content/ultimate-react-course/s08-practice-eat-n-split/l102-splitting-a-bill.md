---
title: "Splitting a Bill"
lectureId: 102
section: 8
sectionTitle: "[Optional] Practice Project: Eat-'N-Split"
date: "2026-03-04"
tags: [react, state-update, immutable-array, eat-n-split]
---

## 中文短总结

完成分账功能：提交表单时根据"谁付账"计算 balance 变化量，用 `map()` 不可变更新 friends 数组中对应朋友的 balance。还需要用 `key` prop 在 FormSplitBill 上确保切换朋友时表单重置。项目完成！

## 中文长总结

### 核心逻辑
```jsx
function handleSplitBill(value) {
  setFriends(friends =>
    friends.map(friend =>
      friend.id === selectedFriend.id
        ? { ...friend, balance: friend.balance + value }
        : friend
    )
  );
  setSelectedFriend(null);  // 关闭表单
}
```

### FormSplitBill 提交
```jsx
function handleSubmit(e) {
  e.preventDefault();
  if (!bill || !paidByUser) return;

  // whoIsPaying === "user" → 朋友欠你（正值）
  // whoIsPaying === "friend" → 你欠朋友（负值）
  onSplitBill(whoIsPaying === "user" ? paidByFriend : -paidByUser);
}
```

### key prop 重要性
```jsx
<FormSplitBill
  selectedFriend={selectedFriend}
  onSplitBill={handleSplitBill}
  key={selectedFriend.id}  // 切换朋友 → component 重建 → state 重置
/>
```
- `key` 变化 → React 销毁旧组件、创建新组件 → 所有 state 重置
- 巧妙利用 React 的 key 机制实现表单重置

### 项目总结
Part 1 所有 React 基础知识的综合运用项目。

## English Short Summary

Complete bill splitting: calculate balance change based on who pays, immutably update the selected friend's balance with `map()`. Use `key={selectedFriend.id}` on FormSplitBill to reset form state when switching friends — key change destroys and recreates the component. Part 1 capstone project complete.
