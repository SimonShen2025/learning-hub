---
title: "Referencing Files, Folders, and Project Context"
lectureId: 17
section: 3
sectionTitle: "Working with Claude Code"
date: "2026-11-10"
tags: ["project-context", "file-references", "requirements", "claude-code"]
---

## 中文短总结

用文件或目录引用引导调查，只提供与任务相关的项目、需求和实现上下文。将文档与实际代码对照，有助于发现需求和现状之间的差异。

## 中文长总结

- 在支持的输入界面使用 `@` 指向已知文件；只知道功能区域时，可引用目录并让 Claude Code 查找相关实现。
- 将项目说明、需求文档和源代码组合使用：文档描述预期，代码体现实际实现；两者都可能需要进一步验证。
- 课程示例比较订单搜索需求与实现，发现需求包含邮箱搜索而代码尚未覆盖；先要求解释差异，再决定是否修改。
- CLI 示例 `claude --add-dir ../shared` 可将额外目录加入可访问范围。授予访问不意味着所有文件都会自动进入上下文，也应只授权必要目录。

## English Short Summary

Point Claude Code to relevant files, folders, requirements, and implementation rather than supplying the entire project. Compare documented behavior with actual code, and grant access to additional directories only when needed.
