---
title: "CHALLENGE #2: Profile Card (v2)"
lectureId: 55
section: 5
sectionTitle: "Working With Components, Props, and JSX"
date: "2026-03-04"
tags: [react, challenge, lists, conditional-rendering]
---

## 中文短总结

第二个编程挑战：改进 Profile Card，用**技能数组** + `map()` 渲染技能列表（替代手动硬编码），每个技能包含名称、熟练度和颜色。实践列表渲染、条件样式、props 传递等本 section 学到的所有技能。

## 中文长总结

### 挑战内容
- 将技能数据改为数组：`[{ skill: "React", level: "advanced", color: "#61DAFB" }, ...]`
- 用 `map()` 渲染技能列表
- 根据 level 动态显示不同 emoji（💪/👍/👶）
- 用内联 style 设置技能标签的背景颜色

### 实践要点
- `skills.map(skill => <Skill key={skill.skill} ... />)`
- 条件渲染 emoji（三元或 &&）
- 内联 style 对象：`style={{ backgroundColor: props.color }}`
- Props 传递与解构

## English Short Summary

Challenge: improve Profile Card with a skills array + `map()` for list rendering (replacing hardcoded skills). Each skill has name, level, and color. Practice list rendering, conditional emoji display, inline styles with dynamic colors, and props destructuring.
