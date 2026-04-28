---
title: "TypeScript vs JavaScript"
lectureId: 16
section: 2
sectionTitle: "JavaScript Fundamentals"
date: "2026-04-29"
tags: [typescript, javascript]
---

## 中文短总结

TypeScript 是 JavaScript 的超集，核心区别是**严格类型系统**。变量赋值后自动推断类型，不可赋予不同类型的值。可显式声明类型（`let name: string`），也可用 `type` 创建自定义类型。类型系统在编码阶段捕获错误，而 JS 只能在运行时发现。

## 中文长总结

### TypeScript 核心特性：严格类型

- 文件扩展名 `.ts`（VS Code 自动识别）
- 变量赋值后自动推断类型：`let name = "John"` → 类型为 string，后续不可赋值为 number

### 显式类型声明

```typescript
let firstName: string;
let age: number;
let isActive: boolean;
```

### 自定义类型

```typescript
type Customer = {
  firstName: string;
  lastName: string;
  active: boolean;
};

let customer: Customer = {
  firstName: "Mary",
  lastName: "Jones",
  active: true
};
```

- 类型约束对象结构：缺少属性、多余属性、类型不匹配均会报错
- 编码阶段即可发现类型错误，而 JS 只能在运行时才暴露

### 与 Playwright 的关系

Playwright 默认使用 TypeScript，文档也以 TypeScript 编写。

## English Short Summary

TypeScript adds strict typing to JavaScript. Variables get inferred types on assignment; explicit typing via `let x: type`. Custom types constrain object shapes. Type errors caught at coding time vs runtime in JS. Playwright defaults to TypeScript.
