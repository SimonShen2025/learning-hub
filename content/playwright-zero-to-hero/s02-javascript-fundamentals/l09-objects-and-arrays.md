---
title: "Objects and Arrays"
lectureId: 9
section: 2
sectionTitle: "JavaScript Fundamentals"
date: "2026-04-29"
tags: [javascript, objects, arrays]
---

## 中文短总结

**对象**用 `{}` 定义，以键值对存储数据，通过点表示法（`obj.key`）或方括号表示法（`obj["key"]`）访问和修改。**数组**用 `[]` 定义，有序存储列表数据，索引从 0 开始。数组可嵌套在对象中构建复杂数据结构。

## 中文长总结

### 对象（Object）

- 用花括号定义：`{ firstName: "John", lastName: "Smith" }`
- **点表示法** — `customer.firstName`
- **方括号表示法** — `customer["firstName"]`
- 可直接修改属性值：`customer.firstName = "Mike"`

### 数组（Array）

- 用方括号定义：`["Volvo", "Toyota", "Tesla"]`
- 索引从 0 开始：`cars[0]` → `"Volvo"`
- 可通过索引修改值：`cars[1] = "BMW"`

### 对象嵌套数组

对象的属性值可以是数组，构建复杂数据结构。如 `customer.cars[0]` 可访问客户的第一辆车。

## English Short Summary

Objects use `{}` with key-value pairs, accessed via dot or bracket notation. Arrays use `[]` with zero-based indexing. Arrays can be nested inside objects to build complex data structures.
