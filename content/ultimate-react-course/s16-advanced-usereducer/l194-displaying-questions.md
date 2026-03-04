---
title: "Displaying Questions"
lectureId: 194
section: 16
sectionTitle: "The Advanced useReducer Hook"
date: "2026-03-04"
tags: [react, useReducer, quiz-app, rendering]
---

## 中文短总结

渲染当前问题。用 `questions[index]` 获取当前题目。Question 组件显示题目文本和选项列表。Options 组件 map 渲染选项按钮。index 状态控制当前显示哪道题。

## 中文长总结

### 获取当前问题
```jsx
// App 组件中
const question = questions[index];

// 传递给 Question 组件
<Question question={question} dispatch={dispatch} answer={answer} />
```

### Question 组件
```jsx
function Question({ question, dispatch, answer }) {
  return (
    <div>
      <h4>{question.question}</h4>
      <Options
        question={question}
        dispatch={dispatch}
        answer={answer}
      />
    </div>
  );
}
```

### Options 组件
```jsx
function Options({ question, dispatch, answer }) {
  const hasAnswered = answer !== null;

  return (
    <div className="options">
      {question.options.map((option, index) => (
        <button
          className={`btn btn-option ${index === answer ? "answer" : ""} ${
            hasAnswered
              ? index === question.correctOption
                ? "correct"
                : "wrong"
              : ""
          }`}
          key={option}
          disabled={hasAnswered}
          onClick={() => dispatch({ type: "newAnswer", payload: index })}
        >
          {option}
        </button>
      ))}
    </div>
  );
}
```

## English Short Summary

Display current question using `questions[index]`. Question component renders question text + Options. Options maps over choices, disables after answering. CSS classes: `answer` for selected, `correct`/`wrong` for feedback. Click dispatches `newAnswer` with option index.
