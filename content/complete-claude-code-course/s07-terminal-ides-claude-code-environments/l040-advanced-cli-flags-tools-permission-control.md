---
title: "Advanced CLI Flags, Tools & Permission Control"
lectureId: 40
section: 7
sectionTitle: "Terminal, IDEs & Claude Code Environments"
date: "2026-11-10"
tags: ["cli", "permissions", "least-privilege", "claude-code"]
---

## 中文短总结

CLI 启动参数可提前选择模型、权限模式和工具范围。预先允许、显式拒绝与限制可用工具是不同机制，应结合实际权限和隔离环境使用。

## 中文长总结

- 启动时指定模型或 plan mode，有助于为分析、规划或实施任务建立合适的初始配置。
- 课程区分预先允许匹配的工具调用、拒绝特定工具或命令，以及限制可用内置工具集合；预先允许并不表示其他工具自动不可用。
- 仅禁用编辑工具并不能保证只读：shell 等其他能力仍可能修改文件。应限制所有相关权限、审查规则，并在需要时使用隔离环境。
- `--add-dir` 会扩大可访问目录，不只是向提示添加文本；仅授予任务必需的路径。
- 本课转录在介绍额外目录时中断，具体参数、规则与其他选项应以所用版本的文档和帮助信息为准。

## English Short Summary

Startup flags can set the model, permission mode, available tools, and additional directories. Pre-approval, explicit denial, and tool restriction differ; disabling edit tools alone does not make shell access read-only. The source transcript ends early.
