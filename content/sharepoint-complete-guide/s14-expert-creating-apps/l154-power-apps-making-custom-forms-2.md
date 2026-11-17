---
title: "Power Apps - making custom forms 2"
lectureId: 154
section: 14
sectionTitle: "Expert - Creating Apps"
date: "2026-11-17"
tags: ["power-apps", "custom-forms", "buttons", "navigation"]
---

## 中文短总结

Power Apps 按钮可通过 OnSelect 属性执行操作。课程示例使用 Launch 打开规则说明页面，为表单添加直达业务要求的导航入口。

## 中文长总结

### 配置按钮

- 在表单中插入按钮，并设置易懂的文本，例如 Go to rule set。
- 为按钮的 **OnSelect** 属性配置 Launch 动作，并传入目标页面地址。
- 在 Play 预览中点击按钮，确认其能打开预期页面。

### 使用注意

确认目标链接有效且用户有权访问。按钮只提供导航，不会自动验证用户是否阅读规则，也不会替代表单或后端的数据校验。

## English Short Summary

Add a button to a Power Apps form and set its OnSelect behavior to Launch a rules page. Test the link and access in preview; navigation alone does not enforce the rules.
