---
title: "Claude Code in JetBrains IDEs"
lectureId: 43
section: 7
sectionTitle: "Terminal, IDEs & Claude Code Environments"
date: "2026-11-10"
tags: ["jetbrains", "claude-code", "editor-context", "validation"]
---

## 中文短总结

JetBrains 集成把 Claude Code 的工作流与编辑器选择、IDE diff 和诊断结合；不必为了使用 agent 放弃熟悉的开发环境。

## 中文长总结

- 课程在 Android Studio 演示 CLI 与兼容插件配合；安装和连接方式应参考所用 IDE 与插件版本。
- 将当前文件或选中代码作为明确上下文，先了解现有行为，再要求范围受控的修改。
- 在 IDE diff 中审查提案，并结合可用的编辑器诊断判断是否出现新问题。
- IDE 检查不能代替项目测试：使用集成终端运行相关类型检查、测试或构建，再确认结果。

## English Short Summary

Use the JetBrains integration to combine Claude Code with editor selections, IDE diffs, and available diagnostics. Review the proposed change and run the project's real validation rather than relying on editor inspections alone.
