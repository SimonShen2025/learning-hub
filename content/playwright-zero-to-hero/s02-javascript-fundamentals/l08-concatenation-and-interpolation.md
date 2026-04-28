---
title: "Concatenation and Interpolation"
lectureId: 8
section: 2
sectionTitle: "JavaScript Fundamentals"
date: "2026-04-29"
tags: [javascript, strings]
---

## 中文短总结

两种字符串组合方式：**Concatenation** 用 `+` 拼接字符串和变量；**Interpolation** 用反引号（`` ` ``）和 `${variable}` 模板语法。两者效果相同，选择看个人偏好。Interpolation 是 JS 特有的更简洁写法。

## 中文长总结

### Concatenation（拼接）

通用编程方式，用 `+` 号将字符串和变量拼接：

```javascript
let msg = "The price for your " + itemName + " is $" + price;
```

### Interpolation（模板字面量）

JS 特有语法，用反引号包裹，变量用 `${}` 嵌入：

```javascript
let msg = `The price for your ${itemName} is $${price}`;
```

两种方式效果相同，interpolation 更简洁可读。

## English Short Summary

Concatenation uses `+` to combine strings and variables. Interpolation uses backticks with `${variable}` template syntax. Both produce the same result; interpolation is more concise.
