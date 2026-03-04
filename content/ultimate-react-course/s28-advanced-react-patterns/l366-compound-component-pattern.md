---
title: "The Compound Component Pattern"
lectureId: 366
section: 28
sectionTitle: "Advanced React Patterns"
date: "2026-03-05"
tags: [compound-component, context, pattern, react]
---

## 中文短总结

Compound Component 模式：一组相关组件共享隐式状态，作为一个整体使用（如 `<Counter>` + `<Counter.Count>` + `<Counter.Increase>`）。用 Context 共享内部状态，子组件作为父组件的静态属性。

## 中文长总结

### 实现步骤
1. 创建父组件管理状态
2. 创建 Context 共享状态
3. 创建子组件消费 Context
4. 将子组件挂到父组件上作为属性

```jsx
// 1. Context
const CounterContext = createContext();

// 2. 父组件
function Counter({ children }) {
  const [count, setCount] = useState(0);
  const increase = () => setCount((c) => c + 1);
  const decrease = () => setCount((c) => c - 1);

  return (
    <CounterContext.Provider value={{ count, increase, decrease }}>
      <span>{children}</span>
    </CounterContext.Provider>
  );
}

// 3. 子组件
function Count() {
  const { count } = useContext(CounterContext);
  return <span>{count}</span>;
}

function Increase({ icon }) {
  const { increase } = useContext(CounterContext);
  return <button onClick={increase}>{icon}</button>;
}

function Decrease({ icon }) {
  const { decrease } = useContext(CounterContext);
  return <button onClick={decrease}>{icon}</button>;
}

function Label({ children }) {
  return <span>{children}</span>;
}

// 4. 挂载
Counter.Count = Count;
Counter.Increase = Increase;
Counter.Decrease = Decrease;
Counter.Label = Label;
```

### 使用
```jsx
<Counter>
  <Counter.Label>My super flexible counter</Counter.Label>
  <Counter.Decrease icon="−" />
  <Counter.Count />
  <Counter.Increase icon="+" />
</Counter>
```

### 核心优势
- **灵活布局** — 使用者决定子组件排列顺序
- **隐式状态共享** — 不需要手动传 props
- **API 清晰** — 像原生 HTML 的 `<select>/<option>` 一样自然

## English Short Summary

Compound Component pattern: parent manages state via Context, child components consume it. Static properties (`Counter.Count`). Consumer controls layout and ordering. Implicit state sharing like native `<select>/<option>`.
