---
title: "Core Features You May Not Know Yet"
lectureId: 12
section: 1
sectionTitle: "Getting Started"
date: "2026-06-17"
tags: ["claude-code", "cli-flags", "resume", "explore-mode"]
---

## 中文短总结

`claude "prompt"` 直接带初始 prompt 启动；`-p` 非交互模式只输出结果；`/resume` 恢复历史 session；`-c` 继续上一个 session。Claude Code 不仅写代码，也可用于探索代码库和讨论方案。

## 中文长总结

### 启动变体

| 用法 | 效果 |
|------|------|
| `claude "explain this project"` | 交互模式，自动执行初始 prompt |
| `claude -p "explain..."` | 非交互，后台执行后输出结果到终端 |
| `claude -c` | 恢复最近一个 session |
| `/resume` | 浏览并选择历史 session 恢复 |

### 重要认知

Claude Code 不仅用于编辑代码——同样适合：
- 探索 unfamiliar 代码库
- 提问、讨论架构方案
- 只读分析（不触发编辑）

### 实践建议

- 已知任务时用 inline prompt 省一步
- 只需一次性回答时用 `-p`
- 编辑器崩溃或误关窗口时用 `/resume` 或 `-c` 找回上下文

## English Short Summary

`claude "prompt"` starts with initial prompt; `-p` runs non-interactively; `-c` continues last session; `/resume` picks from history. Claude Code isn't just for editing—it excels at codebase exploration and Q&A too.
