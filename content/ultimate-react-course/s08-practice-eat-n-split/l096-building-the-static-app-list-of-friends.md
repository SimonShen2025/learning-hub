---
title: "Building the Static App: List of Friends"
lectureId: 96
section: 8
sectionTitle: "[Optional] Practice Project: Eat-'N-Split"
date: "2026-03-04"
tags: [react, components, list-rendering, eat-n-split]
---

## 中文短总结

构建静态朋友列表。创建 `FriendsList` 和 `Friend` 组件。用 `map()` 渲染朋友列表，根据 `balance` 值条件设置文字颜色（绿/红/灰）和消息内容。每个朋友有 Select 按钮（后续实现功能）。

## 中文长总结

### 组件结构
```
App
└── FriendsList
    └── Friend (×N)
```

### 条件样式和文本
```jsx
function Friend({ friend }) {
  return (
    <li>
      <img src={friend.image} alt={friend.name} />
      <h3>{friend.name}</h3>
      {friend.balance < 0 && (
        <p className="red">You owe {friend.name} ${Math.abs(friend.balance)}</p>
      )}
      {friend.balance > 0 && (
        <p className="green">{friend.name} owes you ${friend.balance}</p>
      )}
      {friend.balance === 0 && (
        <p>You and {friend.name} are even</p>
      )}
      <button>Select</button>
    </li>
  );
}
```

## English Short Summary

Build static friends list: FriendsList + Friend components. Render with `map()`, conditionally style balance text (red = you owe, green = they owe, neutral = even) using `&&` conditional rendering. Select button added but not yet functional.
