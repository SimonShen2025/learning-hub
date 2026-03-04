---
title: "PropTypes"
lectureId: 120
section: 10
sectionTitle: "Thinking in React: Components, Composition, and Reusability"
date: "2026-03-04"
tags: [react, proptypes, type-checking, validation]
---

## 中文短总结

PropTypes 是 React 内置的运行时类型检查机制。为组件 props 定义类型和是否必需。传错类型时在控制台警告。基本用法：`StarRating.propTypes = { maxRating: PropTypes.number }`。TypeScript 是更现代的替代方案，但 PropTypes 在纯 JS 项目中仍有价值。

## 中文长总结

### 基本用法
```jsx
import PropTypes from "prop-types";

StarRating.propTypes = {
  maxRating: PropTypes.number,
  defaultRating: PropTypes.number,
  color: PropTypes.string,
  size: PropTypes.number,
  messages: PropTypes.array,
  className: PropTypes.string,
  onSetRating: PropTypes.func,
};
```

### 必需 props
```jsx
maxRating: PropTypes.number.isRequired,
```

### 特点
- **运行时** 检查（非编译时）
- 错误只在控制台显示 warning
- React 内置，无需额外安装
- 支持：`number`, `string`, `bool`, `array`, `object`, `func`, `node`, `element`

### PropTypes vs TypeScript
| PropTypes | TypeScript |
|-----------|-----------|
| 运行时检查 | 编译时检查 |
| 只有 warning | 编译错误 |
| 无需构建步骤 | 需要编译 |
| 适合小项目/纯 JS | 现代项目首选 |

## English Short Summary

PropTypes: React's built-in runtime type checking. Define expected types (`PropTypes.number`, `.string`, `.func`, etc.) and required props (`.isRequired`). Shows console warnings for mismatches. TypeScript is the modern alternative, but PropTypes work in plain JS without build setup.
