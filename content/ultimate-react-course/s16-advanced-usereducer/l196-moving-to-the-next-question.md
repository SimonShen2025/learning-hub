---
title: "Moving to the Next Question"
lectureId: 196
section: 16
sectionTitle: "The Advanced useReducer Hook"
date: "2026-03-04"
tags: [react, useReducer, quiz-app, navigation]
---

## 中文短总结

实现"下一题"功能。回答后显示 NextButton。点击 → dispatch `{ type: "nextQuestion" }` → index + 1，answer 重置为 null。index 小于总题数时继续，否则 dispatch "finish" 结束 quiz。

## 中文长总结

### NextButton 组件
```jsx
function NextButton({ dispatch, answer, index, numQuestions }) {
  if (answer === null) return null; // 未回答时不显示

  if (index < numQuestions - 1)
    return (
      <button className="btn btn-ui"
        onClick={() => dispatch({ type: "nextQuestion" })}>
        Next
      </button>
    );

  // 最后一题
  return (
    <button className="btn btn-ui"
      onClick={() => dispatch({ type: "finish" })}>
      Finish
    </button>
  );
}
```

### Reducer
```jsx
case "nextQuestion":
  return { ...state, index: state.index + 1, answer: null };
```

### 关键逻辑
- 只有 `answer !== null` 时才显示按钮
- 非最后一题 → "Next"
- 最后一题 → "Finish"
- 切到下一题时必须 reset answer

## English Short Summary

Next question: show NextButton only after answering. Click dispatches `nextQuestion` → index + 1, answer reset to null. Last question shows "Finish" button instead, dispatching `finish`. Button visibility controlled by answer state.
