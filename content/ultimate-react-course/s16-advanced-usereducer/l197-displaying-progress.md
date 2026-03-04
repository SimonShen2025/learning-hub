---
title: "Displaying Progress"
lectureId: 197
section: 16
sectionTitle: "The Advanced useReducer Hook"
date: "2026-03-04"
tags: [react, useReducer, quiz-app, progress]
---

## 中文短总结

显示 Quiz 进度：当前题号 / 总题数、当前得分 / 总分、进度条。Progress 组件接收 index、numQuestions、points、maxPossiblePoints、answer。用 HTML `<progress>` 元素显示进度条，value 根据是否已回答决定。

## 中文长总结

### Progress 组件
```jsx
function Progress({ index, numQuestions, points, maxPossiblePoints, answer }) {
  return (
    <header className="progress">
      <progress
        max={numQuestions}
        value={index + Number(answer !== null)}
      />
      <p>
        Question <strong>{index + 1}</strong> / {numQuestions}
      </p>
      <p>
        <strong>{points}</strong> / {maxPossiblePoints}
      </p>
    </header>
  );
}
```

### 进度条技巧
```jsx
value={index + Number(answer !== null)}
```
- 未回答时：value = index（进度条到当前题前面）
- 已回答后：value = index + 1（进度条填满当前题）
- `Number(answer !== null)` → boolean 转 0/1

### 派生数据
- `numQuestions` 和 `maxPossiblePoints` 是从 questions 数组派生的
- 不需要存在 state 中

## English Short Summary

Display quiz progress: question X/N, points/maxPoints, progress bar. Uses HTML `<progress>` element. Value trick: `index + Number(answer !== null)` — advances after answering. numQuestions and maxPossiblePoints derived from questions array, not stored in state.
