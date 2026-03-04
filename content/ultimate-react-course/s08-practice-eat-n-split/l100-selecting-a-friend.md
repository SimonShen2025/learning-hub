---
title: "Selecting a Friend"
lectureId: 100
section: 8
sectionTitle: "[Optional] Practice Project: Eat-'N-Split"
date: "2026-03-04"
tags: [react, state, selection, conditional-rendering, eat-n-split]
---

## 中文短总结

实现选择朋友功能：`selectedFriend` state 存储当前选中的朋友对象（或 null）。点击 Select 按钮 → toggle 选中状态（已选中则取消）。选中朋友后显示 FormSplitBill，未选中则隐藏。按钮文本在 "Select" / "Close" 之间切换。

## 中文长总结

### 实现
```jsx
const [selectedFriend, setSelectedFriend] = useState(null);

function handleSelection(friend) {
  setSelectedFriend(cur =>
    cur?.id === friend.id ? null : friend  // toggle
  );
  setShowAddFriend(false);  // 选择朋友时关闭添加表单
}

// 条件渲染分账表单
{selectedFriend && (
  <FormSplitBill selectedFriend={selectedFriend} />
)}
```

### 要点
- `selectedFriend` 存整个对象（不只是 id）→ 方便传给 FormSplitBill
- Toggle：点击已选中的朋友 → 取消（`null`）
- 互斥行为：选择朋友时关闭添加朋友表单
- Select 按钮文本：`{selectedFriend?.id === friend.id ? "Close" : "Select"}`

## English Short Summary

Select a friend: `selectedFriend` state holds the selected friend object or null. Toggle on click — selecting same friend deselects. Show FormSplitBill when selected. Mutual exclusion: selecting a friend closes the add friend form. Button text toggles between "Select"/"Close".
