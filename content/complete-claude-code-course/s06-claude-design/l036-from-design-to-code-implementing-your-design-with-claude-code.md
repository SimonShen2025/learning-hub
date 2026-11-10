---
title: "From Design to Code: Implementing Your Design with Claude Code"
lectureId: 36
section: 6
sectionTitle: "Claude Design"
date: "2026-11-10"
tags: ["design-handoff", "claude-code", "validation", "git"]
---

## 中文短总结

设计交接是将已确认的视觉方向转化为真实代码：先理解项目并限定范围，复用现有架构，再比较界面、测试行为并按正常 Git 流程审查。

## 中文长总结

1. 将设计作为上下文交给 Claude Code，先只读分析现有页面、组件和导航，审查拟实施的方案。
2. 在获得适当授权后隔离工作，并要求复用现有组件、样式与路由，不修改无关页面。
3. 检查修改文件和 diff，在运行中的应用中比较视觉层级、布局和交互；只针对差异迭代。
4. 运行项目已有的相关测试、lint、类型检查或构建，处理本次引入的问题并说明未验证项。
5. 课程示例在审查 Git 状态后提交并创建 pull request，保留人工审查而不直接合并。提交、推送和发布应遵循实际项目权限与流程。

## English Short Summary

Hand an approved design to Claude Code, inspect the existing architecture, and implement within a defined scope. Review diffs, compare the real UI, test behavior, run relevant checks, and use an authorized Git review workflow before merging.
