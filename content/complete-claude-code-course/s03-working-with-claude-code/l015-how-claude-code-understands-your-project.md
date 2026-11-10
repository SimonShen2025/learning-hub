---
title: "How Claude Code Understands Your Project"
lectureId: 15
section: 3
sectionTitle: "Working with Claude Code"
date: "2026-11-10"
tags: ["claude-code", "project-context", "codebase-exploration", "verification"]
---

## 中文短总结

访问代码库不等于模型已理解或加载整个项目。Claude Code 根据任务逐步搜索、读取文件和运行工具，将相关证据引入当前上下文，再形成判断。

## 中文长总结

- **按需调查：**从目录、README、配置、入口、引用关系和相关测试入手；认证问题与性能问题需要不同的信息。
- **运行时证据：**测试失败、构建错误和程序行为可补充静态代码分析，帮助修正最初假设。
- **上下文边界：**仓库可访问的文件多于当前上下文窗口；消息、读取的文件和工具输出会占用上下文。长会话可能压缩，新会话也不一定保留之前的讨论。
- **持续知识：**项目指令可记录测试命令与约定，但文档或旧代码可能过时。对重要结论应检查实际代码、运行行为与当前工作区，而不是依赖未经验证的推断。

## English Short Summary

Repository access is not the same as loading or understanding the entire codebase. Claude Code investigates task-relevant files and runtime evidence as needed. Its active context is limited, so conclusions should be grounded in inspected code and verification.
