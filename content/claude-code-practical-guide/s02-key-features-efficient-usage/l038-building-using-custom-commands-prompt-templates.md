---
title: "Building & Using Custom Commands (Prompt Templates)"
lectureId: 38
section: 2
sectionTitle: "Key Features & Efficient Usage"
date: "2026-06-17"
tags: ["claude-code", "custom-commands", "code-review"]
---

## 中文短总结

Custom commands 是可复用的 prompt 模板，放在 `.claude/commands/` 下。适合重复性任务如 code review——避免每次手写相同 prompt。与 skills（领域知识）不同，commands 是预设的任务指令。

## 中文长总结

### 问题

Code review 等任务需要重复发送类似 prompt。短 prompt 尚可，复杂 review 标准每次重写很浪费。

### Custom Commands

```
.claude/commands/code-review.md
```

内容为 prompt 模板，注册为 `/code-review` slash command。

### 与 Skills 的区别

| | Custom Command | Skill |
|---|---------------|-------|
| 目的 | 可重复任务 prompt | 领域知识/规则 |
| 触发 | 手动 `/command` | 自动或 `/skill-name` |
| 内容 | 任务指令模板 | SKILL.md + 参考文档 |

### 典型 Commands

- `/code-review` — 按项目标准审查代码
- `/write-tests` — 生成测试的 prompt 模板
- `/update-spec` — 同步 Spec.md

### 最佳实践

- 把经常重复的 elaborate prompt 提取为 command
- 可在 command 中引用 CLAUDE.md 规则和 skills

## English Short Summary

Custom commands in .claude/commands/ are reusable prompt templates (e.g., /code-review). Avoid retyping elaborate prompts for recurring tasks. Unlike skills (domain knowledge), commands are task instruction templates invoked via slash commands.
