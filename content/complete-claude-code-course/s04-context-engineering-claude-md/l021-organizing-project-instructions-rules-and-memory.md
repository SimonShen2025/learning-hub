---
title: "Organizing Project Instructions, Rules, and Memory"
lectureId: 21
section: 4
sectionTitle: "Context Engineering & CLAUDE.md"
date: "2026-11-10"
tags: ["claude-md", "project-rules", "auto-memory", "permissions"]
---

## 中文短总结

按作用范围组织上下文：共享项目指引、路径规则、本地或用户偏好，以及可审查的 auto memory 各司其职。Markdown 指令是行为引导，不是安全权限边界。

## 中文长总结

- **共享项目规则：**仓库中的 `CLAUDE.md` 保存团队共同需要的命令、架构和约束。
- **较窄范围：**`.claude/rules/` 可组织适用特定路径的规则；`CLAUDE.local.md` 可存放本地项目偏好，并应按项目需要排除版本控制。用户级 `~/.claude/CLAUDE.md` 用于跨项目偏好。
- **Auto memory：**保存未来可能有用的学习结果或偏好，可查看、修正和删除；关键团队规则不应依赖模型偶然记住。
- **一致性与安全：**检查不同层级是否互相冲突。文本规则不能替代实际权限、隔离或其他强制安全措施。
- 可通过当前版本的 `/context` 等工具检查已加载的上下文，而不是假定所有规则都生效。

## English Short Summary

Separate shared project instructions, path-scoped rules, local and user preferences, and inspectable auto memory. Avoid conflicting layers, and enforce critical security restrictions with permissions rather than relying on Markdown instructions.
