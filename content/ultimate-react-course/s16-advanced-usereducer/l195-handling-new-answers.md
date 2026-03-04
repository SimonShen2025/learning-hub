---
title: "Handling New Answers"
lectureId: 195
section: 16
sectionTitle: "The Advanced useReducer Hook"
date: "2026-03-04"
tags: [react, useReducer, quiz-app, state-update]
---

## 中文短总结

处理用户回答逻辑。dispatch `{ type: "newAnswer", payload: index }` → reducer 更新 answer 和 points。如果答对（`payload === question.correctOption`），累加该题 points。Options 按钮根据 answer 显示正确/错误样式并禁用。

## 中文长总结

### Reducer 处理
```jsx
case "newAnswer":
  const question = state.questions[state.index];
  return {
    ...state,
    answer: action.payload,
    points:
      action.payload === question.correctOption
        ? state.points + question.points
        : state.points,
  };
```

### 流程
1. 用户点击选项 → dispatch newAnswer(index)
2. Reducer 检查是否正确
3. 正确 → 累加分数
4. 设置 answer 状态
5. Options 根据 answer 值禁用所有按钮并高亮结果

### 样式反馈
- 已选的选项加 `answer` class
- 正确答案加 `correct` class（绿色）
- 错误答案加 `wrong` class（红色）
- 所有按钮 disabled

## English Short Summary

Handle answers: dispatch `newAnswer` with option index. Reducer checks if correct (`payload === correctOption`), adds points if yes. Sets answer state. Options disabled after answering with CSS feedback: `correct` (green), `wrong` (red), `answer` (selected).
