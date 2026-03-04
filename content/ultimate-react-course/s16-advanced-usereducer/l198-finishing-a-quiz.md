---
title: "Finishing a Quiz"
lectureId: 198
section: 16
sectionTitle: "The Advanced useReducer Hook"
date: "2026-03-04"
tags: [react, useReducer, quiz-app, state-transition]
---

## 中文短总结

实现 Quiz 结束功能。dispatch `{ type: "finish" }` → status 变为 "finished"，更新 highscore。FinishScreen 显示最终得分、百分比、highscore、emoji 反馈。根据得分百分比显示不同 emoji（🥇🎉🧐🤔😞）。

## 中文长总结

### Reducer
```jsx
case "finish":
  return {
    ...state,
    status: "finished",
    highscore:
      state.points > state.highscore ? state.points : state.highscore,
  };
```

### FinishScreen 组件
```jsx
function FinishScreen({ points, maxPossiblePoints, highscore, dispatch }) {
  const percentage = (points / maxPossiblePoints) * 100;

  let emoji;
  if (percentage === 100) emoji = "🥇";
  if (percentage >= 80 && percentage < 100) emoji = "🎉";
  if (percentage >= 50 && percentage < 80) emoji = "🧐";
  if (percentage >= 0 && percentage < 50) emoji = "🤨";
  if (percentage === 0) emoji = "🤦‍♂️";

  return (
    <>
      <p className="result">
        {emoji} You scored <strong>{points}</strong> out of {maxPossiblePoints}
        ({Math.ceil(percentage)}%)
      </p>
      <p className="highscore">(Highscore: {highscore} points)</p>
      <button className="btn btn-ui"
        onClick={() => dispatch({ type: "restart" })}>
        Restart quiz
      </button>
    </>
  );
}
```

## English Short Summary

Finish quiz: dispatch `finish` → status "finished", update highscore if beaten. FinishScreen shows score, percentage, emoji feedback (🥇🎉🧐🤨🤦‍♂️ based on percentage), highscore, and restart button.
