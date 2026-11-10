---
title: "Creating and Refining Your Project’s CLAUDE.md"
lectureId: 20
section: 4
sectionTitle: "Context Engineering & CLAUDE.md"
date: "2026-11-10"
tags: ["claude-md", "project-instructions", "verification"]
---

## 中文短总结

`/init` 可为项目指引生成初稿，但必须结合实际项目审查。保留具体、反复有用且能影响决策的规则，并在新会话中验证其是否被使用。

## 中文长总结

1. 检查项目配置、目录及可用脚本，再将 `/init` 生成的 `CLAUDE.md` 当作起点，而非未经审查的权威结果。
2. 记录可执行的信息：包管理器、测试与类型检查命令、代码归属、生成文件边界和已有项目模式。
3. 避免“写高质量代码”等不可操作的泛泛要求；一次性任务细节留在当前提示，详细资料留在适当文档中并按需引用。
4. 在新会话提问或模拟任务，检查 agent 能否应用相关指引；随着工具、目录和命令变化定期更新文件。

## English Short Summary

Use `/init` as a starting point, then review the generated `CLAUDE.md` against the real project. Keep specific recurring commands and constraints, validate them in a fresh session, and update stale guidance.
