---
title: "Class and Methods"
lectureId: 15
section: 2
sectionTitle: "JavaScript Fundamentals"
date: "2026-04-29"
tags: [javascript, classes, oop]
---

## 中文短总结

JS 类用 `class ClassName {}` 声明（大写驼峰），内部方法用驼峰命名。使用 `new` 创建实例后通过实例调用方法。可导出整个类或导出类的实例。JSDoc 注释（`/** */`）可为方法添加描述和类型提示。

## 中文长总结

### 类的定义与使用

```javascript
export class CustomerDetails {
  printFirstName(firstName) {
    console.log(firstName);
  }
}
```

- 类名大写驼峰（PascalCase），方法名小写驼峰（camelCase）
- 用 `new` 关键字创建实例：`const details = new CustomerDetails()`
- 通过实例调用方法：`details.printFirstName("Steve")`

### 导出方式

1. 导出类本身：`export class CustomerDetails {}`，使用方 `import` 后 `new` 创建实例
2. 导出实例：`export const customerDetails = new CustomerDetails()`，使用方直接导入实例调用方法（代码更简洁）

### JSDoc 注释

```javascript
/** This method will print the last name
 * @param {string} lastName
 */
printLastName(lastName) {}
```

在 VS Code 中悬停方法时显示描述和参数类型提示。

## English Short Summary

Classes use PascalCase, methods use camelCase. Create instances with `new`, call methods via instance. Export the class or a pre-created instance. Use JSDoc comments for method descriptions and type hints.
