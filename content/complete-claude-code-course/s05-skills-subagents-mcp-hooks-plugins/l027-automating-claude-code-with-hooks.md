---
title: "Automating Claude Code with Hooks"
lectureId: 27
section: 5
sectionTitle: "Skills, Subagents, MCP, Hooks & Plugins"
date: "2026-11-10"
tags: ["hooks", "automation", "validation", "permissions"]
---

## 中文短总结

Hooks 在生命周期事件发生时执行自动检查或操作。课程演示编辑后格式化、敏感命令前验证，以及结束前运行轻量检查。

## 中文长总结

- **PostToolUse：**文件编辑或写入后，对匹配的文件运行局部格式化；配置前确认相关工具和命令实际存在。
- **PreToolUse：**在指定工具执行前检查输入；示例在推送前运行类型检查和测试，失败时阻止该次操作并返回原因。
- **Stop：**结束响应前执行适度的最终检查；处理重复触发状态，避免验证失败导致无止境循环。
- Hooks 是事件驱动自动化，与依靠模型遵循的文字指引不同。配置和脚本应按当前版本验证；简单命令字符串匹配不能替代完整权限控制或服务端保护。
- 检查成本应与触发频率匹配，不要在每次小编辑后无条件运行大型测试套件。

## English Short Summary

Hooks react to lifecycle events: format after edits, validate before a sensitive tool action, or run a final check at stop. Keep checks proportional, prevent repeated-stop loops, and do not treat simplistic command matching as a complete security boundary.
