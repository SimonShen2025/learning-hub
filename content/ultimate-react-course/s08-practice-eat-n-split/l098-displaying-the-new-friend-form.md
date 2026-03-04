---
title: "Displaying the New Friend Form"
lectureId: 98
section: 8
sectionTitle: "[Optional] Practice Project: Eat-'N-Split"
date: "2026-03-04"
tags: [react, conditional-rendering, toggle, eat-n-split]
---

## 中文短总结

用 `showAddFriend` state（布尔值）控制 FormAddFriend 的显示/隐藏。按钮文本在 "Add friend" 和 "Close" 之间切换。`{showAddFriend && <FormAddFriend />}` 条件渲染。简单但实用的 toggle UI 模式。

## 中文长总结

### 实现
```jsx
const [showAddFriend, setShowAddFriend] = useState(false);

<button onClick={() => setShowAddFriend(show => !show)}>
  {showAddFriend ? "Close" : "Add friend"}
</button>
{showAddFriend && <FormAddFriend />}
```

### 要点
- Boolean state + `&&` 条件渲染 = toggle 显示/隐藏
- 按钮文本用三元运算符切换
- 回调形式更新 state：`show => !show`

## English Short Summary

Toggle FormAddFriend visibility with boolean `showAddFriend` state. `{showAddFriend && <FormAddFriend />}` for conditional rendering. Button text toggles between "Add friend" and "Close" using ternary. Classic toggle UI pattern.
