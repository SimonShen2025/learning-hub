---
title: "Before We Start Coding: Debugging"
lectureId: 34
section: 5
sectionTitle: "Working With Components, Props, and JSX"
date: "2026-03-04"
tags: [react, debugging, devtools]
---

## 中文短总结

编码前必看的调试技巧：1）浏览器控制台查看错误信息（红色和黄色），2）React 的错误 overlay 会直接在页面上显示错误，3）检查终端（Terminal）输出，4）使用 `console.log` 定位问题，5）对比讲师代码排查差异。遇到问题不要跳过不看错误信息。

## 中文长总结

### 调试方法优先级
1. **浏览器控制台（Console）**：红色错误 + 黄色警告
2. **React Error Overlay**：页面上直接显示错误，通常有行号
3. **终端输出**：编译错误显示在运行 `npm start` 的终端
4. **`console.log`**：在可疑位置插入日志
5. **代码对比**：与讲师的代码比对找差异

### 常见新手错误
- 拼写错误（typo）
- 忘记 import
- 忘记 export
- 语法错误（括号不匹配等）

### 关键建议
- **不要害怕错误** — 它们是学习的一部分
- **阅读错误信息** — 大多数错误信息都有明确指向

## English Short Summary

Essential debugging before coding: 1) Browser console for errors/warnings, 2) React error overlay on page, 3) Terminal output for compile errors, 4) `console.log` for tracing, 5) Compare with instructor code. Always read error messages — they usually point to the exact issue.
