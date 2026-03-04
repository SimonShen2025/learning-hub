---
title: "Rendering Lists"
lectureId: 46
section: 5
sectionTitle: "Working With Components, Props, and JSX"
date: "2026-03-04"
tags: [react, lists, map, key-prop]
---

## 中文短总结

列表渲染是 React 中最常见的操作。用 `array.map()` 将数据数组转为 JSX 元素数组。每个列表项必须有唯一的 **`key` prop**（通常用 `id`），帮助 React 高效更新 DOM。不要用数组索引作为 key（除非列表不会变化）。

## 中文长总结

### 基本模式
```jsx
function Menu() {
  return (
    <ul>
      {pizzaData.map(pizza => (
        <Pizza
          name={pizza.name}
          ingredients={pizza.ingredients}
          price={pizza.price}
          photoName={pizza.photoName}
          key={pizza.name}  // 每个元素必须有唯一 key
        />
      ))}
    </ul>
  );
}
```

### key 的作用
- React 用 key 识别哪些元素变了、添加了、删除了
- 必须在列表的**同级元素**中唯一
- 推荐用稳定的 ID（数据库 ID、唯一标识符）
- ⚠️ 不推荐用数组索引（列表变化时会导致 bug）

### 为什么不用 `for` 循环？
- JSX `{}` 中只能用表达式
- `map()` 返回新数组 → 是表达式 ✅
- `for` 是语句 ❌

## English Short Summary

Render lists with `array.map()` converting data arrays to JSX elements. Each item needs a unique `key` prop (use stable IDs, not array indices). `map()` is used because JSX requires expressions — `for` loops are statements and can't be used inside JSX.
