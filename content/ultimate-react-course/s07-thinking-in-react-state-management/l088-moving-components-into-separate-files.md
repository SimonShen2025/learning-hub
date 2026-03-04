---
title: "Moving Components Into Separate Files"
lectureId: 88
section: 7
sectionTitle: "Thinking In React: State Management"
date: "2026-03-04"
tags: [react, file-organization, import-export]
---

## 中文短总结

将所有组件从 `App.js` 拆分到独立文件。每个组件文件使用 **default export**（`export default function Component`），在 App.js 中 import。文件名通常与组件名一致（如 `Logo.js`、`Form.js`）。这是 React 项目的标准组织方式。

## 中文长总结

### 步骤
1. 创建新文件（如 `Logo.js`）
2. 将组件函数移到新文件
3. 添加必要的 import（React、子组件等）
4. 使用 `export default` 导出
5. 在使用处 `import Logo from './Logo'`

### 文件组织示例
```
src/
  App.js          → 主组件 + import 子组件
  Logo.js         → export default function Logo
  Form.js         → export default function Form
  PackingList.js  → export default function PackingList
  Item.js         → export default function Item
  Stats.js        → export default function Stats
```

### 注意事项
- 每个文件约定只有一个组件
- 使用 default export（React 社区标准）
- 辅助数据/常量可以放在单独文件导出

## English Short Summary

Split components from single App.js into individual files. Each file: one component with `export default`. Import in parent: `import Logo from './Logo'`. Standard React project organization. Convention: filename matches component name.
