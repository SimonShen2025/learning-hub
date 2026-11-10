---
title: "Working with Claude Code Directly from the Terminal"
lectureId: 38
section: 7
sectionTitle: "Terminal, IDEs & Claude Code Environments"
date: "2026-11-10"
tags: ["claude-code", "cli", "validation", "git"]
---

## 中文短总结

从项目目录启动 Claude Code，先只读了解代码，再明确任务和验证方式；修改后运行实际检查并审查 diff，而不是仅凭模型回答判断完成。

## 中文长总结

1. 在项目目录运行 `claude`，要求先分析架构和依赖；工具会按需探索，而非自动了解整个代码库。
2. 使用 `@` 引用相关文件，明确要复用的现有脚本和修改范围；需要时审查并批准具体操作。
3. 课程示例组合已有类型检查与测试脚本，执行新命令并观察结果；失败时继续调查和验证。
4. 可使用会话内 shell 命令检查 `git diff`，也可查看工具执行详情。退出会话不会撤销工作区修改。

## English Short Summary

Start Claude Code in the project directory, investigate before editing, and reference relevant files explicitly. Reuse existing checks, inspect command results and diffs, and verify the actual change before ending the session.
