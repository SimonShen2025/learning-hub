---
title: "Creating Your First Claude Code Skill"
lectureId: 24
section: 5
sectionTitle: "Skills, Subagents, MCP, Hooks & Plugins"
date: "2026-11-10"
tags: ["skills", "code-review", "claude-code"]
---

## 中文短总结

将反复执行的代码审查流程写成项目 skill：定义何时使用、审查范围、验证方式和输出格式，再通过实际使用逐步完善。

## 中文长总结

- 课程示例将审查流程放在 `.claude/skills/code-review/SKILL.md`，用名称和清晰的描述说明用途及适用场景。
- 审查前理解变更目的和相关代码，再关注错误、回归、架构一致性、维护性、安全和测试覆盖；适用时运行项目已有验证命令。
- 明确审查与修改的边界：默认报告问题，只有被要求修复时才改代码；按严重程度组织发现，没有问题时也应明确说明。
- 可通过 `/code-review` 显式调用，或在匹配请求中使用；根据结果调整规则。项目专属流程与跨项目个人流程应放在合适作用范围。

## English Short Summary

Create a reusable review skill with a clear description, project-aware checks, validation guidance, and a findings format. Keep review separate from fixing unless requested, invoke the skill, and refine it based on observed results.
