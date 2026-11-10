---
title: "Worktrees and Parallel Claude Code Sessions"
lectureId: 44
section: 7
sectionTitle: "Terminal, IDEs & Claude Code Environments"
date: "2026-11-10"
tags: ["git-worktrees", "parallel-work", "claude-code", "git"]
---

## 中文短总结

Git worktree 为并行任务提供分离的工作目录和分支，减少会话互相覆盖文件；集成结果时仍需审查、解决冲突并重新验证。

## 中文长总结

- 先检查主工作区状态，用 `git worktree list` 确认现有工作目录；课程通过 `claude --worktree` 启动独立任务。
- 新 worktree 不会自动包含未跟踪的依赖或本地配置。按需准备环境，不应无授权复制凭据或敏感文件。
- 各工作目录共享仓库历史，但不是完整的安全隔离；外部服务、端口、缓存等仍可能互相影响。
- 优先并行真正独立的任务；分别审查 diff 和测试结果，再按项目流程集成并测试组合后的结果。隔离目录不能消除逻辑冲突或合并冲突。
- 清理前确认所有需要保留的修改与提交已安全保存；并行任务也有资源、模型调用和审查成本。

## English Short Summary

Use Git worktrees to give parallel sessions separate working directories and branches. They reduce file interference but do not prevent shared-resource or merge conflicts; review and validate each result and the integrated changes.
