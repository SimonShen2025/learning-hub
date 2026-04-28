---
title: "Loops"
lectureId: 13
section: 2
sectionTitle: "JavaScript Fundamentals"
date: "2026-04-29"
tags: [javascript, loops]
---

## 中文短总结

三种循环方式：**for 循环** — `for (let i = 0; i < n; i++)` 重复执行固定次数；**for...of** — 遍历数组元素；**forEach** — ES6 数组方法，箭头函数语法。`break` 可中断循环。

## 中文长总结

### for 循环（for-i）

```javascript
for (let i = 0; i < 5; i++) {
  console.log("Hello World " + i);
}
```

三个语句：初始化 → 停止条件 → 每次迭代后操作。`i++` 等同于 `i = i + 1`。

### for...of 循环

```javascript
for (let car of cars) {
  console.log(car);
}
```

遍历数组元素，迭代器变量自动持有当前元素值。可用 `break` 提前终止。

### forEach（ES6 语法）

```javascript
cars.forEach((car) => {
  console.log(car);
});
```

数组方法，箭头函数语法，功能等同于 `for...of`，写法更紧凑。

## English Short Summary

Three loop types: `for` loop (fixed iterations), `for...of` (iterate array elements), `forEach` (ES6 array method with arrow syntax). Use `break` to exit early.
