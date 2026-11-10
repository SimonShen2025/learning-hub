---
title: "Claude Code in VS Code"
lectureId: 42
section: 7
sectionTitle: "Terminal, IDEs & Claude Code Environments"
date: "2026-11-10"
tags: ["vs-code", "claude-code", "editor-context", "validation"]
---

## 中文短总结

在 VS Code 中将编辑器上下文、Claude Code、diff 审查和集成终端组合成开发闭环，修改后仍需运行项目检查。

## 中文长总结

- 引用当前文件、选中代码或相关路径，并明确修改范围和需要保持的行为；确认实际传入了预期上下文。
- 在编辑器中审查 proposed diff，必要时拒绝或要求调整；用 IDE 导航和类型信息理解周边代码。
- 通过集成终端运行类型检查和测试，将失败信息提供给 Claude 调查，修复后重新运行相关检查。
- 图形扩展与终端 CLI 可以配合：前者便于选择代码和审查，后者适合脚本、管道与启动参数。具体集成方式依版本而异。

## English Short Summary

Combine editor context, Claude Code, visual diff review, and the integrated terminal. Verify the selected context, inspect proposed changes, and rerun project checks after investigating any failures.
