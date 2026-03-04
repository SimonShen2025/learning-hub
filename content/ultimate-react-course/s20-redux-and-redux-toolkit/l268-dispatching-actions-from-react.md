---
title: "Dispatching Actions from Our React App"
lectureId: 268
section: 20
sectionTitle: "Redux and Modern Redux Toolkit (With Thunks)"
date: "2026-03-04"
tags: [react, redux, useDispatch, actions]
---

## 中文短总结

在 React 组件中 dispatch Redux actions。用表单收集用户输入 → dispatch action creator。CreateCustomer 组件创建用户。AccountOperations 处理存取款和贷款。组件通过 useSelector 读取条件数据来控制 UI 显示。

## 中文长总结

### CreateCustomer 组件
```jsx
function CreateCustomer() {
  const [fullName, setFullName] = useState("");
  const [nationalID, setNationalID] = useState("");
  const dispatch = useDispatch();

  function handleClick() {
    if (!fullName || !nationalID) return;
    dispatch(createCustomer(fullName, nationalID));
  }

  return (
    <div>
      <input value={fullName} onChange={e => setFullName(e.target.value)} />
      <input value={nationalID} onChange={e => setNationalID(e.target.value)} />
      <button onClick={handleClick}>Create customer</button>
    </div>
  );
}
```

### 条件渲染
```jsx
function App() {
  const fullName = useSelector(state => state.customer.fullName);

  return (
    <div>
      <h1>The React-Redux Bank</h1>
      {fullName === "" ? (
        <CreateCustomer />
      ) : (
        <>
          <Customer />
          <AccountOperations />
          <BalanceDisplay />
        </>
      )}
    </div>
  );
}
```

### 模式
- 本地表单 state 用 useState（输入值）
- 全局 state 用 Redux（提交后）
- useSelector 读取全局 state 控制 UI 流程

## English Short Summary

Dispatch actions from React components. Form collects local state (useState) → dispatch action creator on submit. useSelector reads global state for conditional rendering (show CreateCustomer or Account operations). Local vs global state separation.
