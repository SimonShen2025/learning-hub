---
title: "Creating Controlled Elements"
lectureId: 101
section: 8
sectionTitle: "[Optional] Practice Project: Eat-'N-Split"
date: "2026-03-04"
tags: [react, controlled-elements, forms, derived-state, eat-n-split]
---

## 中文短总结

将 FormSplitBill 的所有输入变为受控组件：`bill`、`paidByUser`、`whoIsPaying` 三个 state。`paidByFriend` 是 derived value（`bill - paidByUser`），不需要 state。验证：paidByUser 不能超过 bill。select 用 "user"/"friend" 作为 value 。

## 中文长总结

### 受控组件设置
```jsx
const [bill, setBill] = useState("");
const [paidByUser, setPaidByUser] = useState("");
const [whoIsPaying, setWhoIsPaying] = useState("user");

const paidByFriend = bill ? bill - paidByUser : "";  // derived!

<input value={bill} onChange={e => setBill(Number(e.target.value))} />
<input value={paidByUser}
  onChange={e =>
    setPaidByUser(Number(e.target.value) > bill
      ? paidByUser  // 不允许超过 bill
      : Number(e.target.value))
  }
/>
<input value={paidByFriend} disabled />  // 只读，derived
<select value={whoIsPaying}
  onChange={e => setWhoIsPaying(e.target.value)}>
  <option value="user">You</option>
  <option value="friend">{selectedFriend.name}</option>
</select>
```

### 关键点
- `paidByFriend` 不是 state → derived state 实践
- 输入验证在 `onChange` 中进行
- disabled input 展示计算值
- 每次选不同朋友时表单应重置 → 用 `key` prop

## English Short Summary

Make FormSplitBill inputs controlled: `bill`, `paidByUser`, `whoIsPaying` as state. `paidByFriend = bill - paidByUser` is derived (no state). Validate paidByUser ≤ bill in onChange. Use `key={selectedFriend.id}` on form to reset when switching friends.
