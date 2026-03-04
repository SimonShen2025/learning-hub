---
title: "A Vanilla JavaScript Implementation"
lectureId: 67
section: 6
sectionTitle: "State, Events, and Forms: Interactive Components"
date: "2026-03-04"
tags: [react, vanilla-js, comparison]
---

## 中文短总结

对比 React 版本和 Vanilla JavaScript 版本的 Steps 组件。Vanilla JS 需要手动查询 DOM 元素、手动绑定事件、手动更新文本内容和 class — 大量命令式操作。React 只需声明 state 和 JSX，UI 自动同步。代码量更少，可维护性更强。

## 中文长总结

### Vanilla JS 的问题
```javascript
// 命令式：每一步都要手动操作 DOM
document.querySelector('.btn').addEventListener('click', () => {
  step++;
  document.querySelector('.number').textContent = step;
  document.querySelector('.message').textContent = messages[step - 1];
  // 手动更新 class...
  // 手动同步所有相关 DOM...
});
```

### React 的优势
```jsx
// 声明式：只管描述 state 和 UI 的关系
const [step, setStep] = useState(1);
return <p>{messages[step - 1]}</p>;
// state 变了 → UI 自动更新
```

### 两者对比
| 维度 | Vanilla JS | React |
|------|-----------|-------|
| 范式 | 命令式 | 声明式 |
| DOM 操作 | 手动 | 自动 |
| 数据→UI 同步 | 手动 | 自动 |
| 可扩展性 | 越来越复杂 | 保持一致 |

## English Short Summary

Comparison: Vanilla JS Steps component requires manual DOM queries, manual event binding, manual DOM updates for every state change (imperative). React only declares state and JSX — UI syncs automatically (declarative). Less code, better maintainability, and consistent complexity as app grows.
