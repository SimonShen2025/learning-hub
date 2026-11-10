---
title: "Managing Claude Code Sessions from the CLI"
lectureId: 39
section: 7
sectionTitle: "Terminal, IDEs & Claude Code Environments"
date: "2026-11-10"
tags: ["claude-code", "sessions", "context-management", "permissions"]
---

## 中文短总结

将会话围绕一个明确目标组织：适时命名、恢复和压缩上下文，并根据当前任务调整模型、推理强度和权限模式。

## 中文长总结

- 用 `/rename` 给长期任务命名；课程演示 `claude --continue` 恢复最近会话，使用 `claude --resume` 或 `/resume` 选择其他会话。
- 调查与规划阶段可选择合适的模型、effort 和 plan mode；实施及审查时根据需要重新调整权限。
- 用 `/context` 观察上下文占用，同一任务过长时可用 `/compact` 并注明要保留的目标、文件和决策。
- 压缩可能遗漏细节，恢复后应核对关键事实；切换到无关任务时可清理上下文或开启新会话，重要信息先单独保存。
- 命令及可选模式可能随版本变化；会话历史不能替代代码、测试结果或正式项目记录。

## English Short Summary

Organize a session around one coherent objective. Name and resume long-running work, adjust model and permission settings as the task changes, and compact context carefully without assuming every detail will survive.
