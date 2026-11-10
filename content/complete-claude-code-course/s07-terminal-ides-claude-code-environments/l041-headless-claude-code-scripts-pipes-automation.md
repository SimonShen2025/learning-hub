---
title: "Headless Claude Code: Scripts, Pipes & Automation"
lectureId: 41
section: 7
sectionTitle: "Terminal, IDEs & Claude Code Environments"
date: "2026-11-10"
tags: ["cli", "automation", "structured-output", "permissions"]
---

## 中文短总结

使用非交互模式将 Claude Code 接入脚本、管道和 CI：定义输入、最小权限、结构化输出与失败处理，再由后续程序消费结果。

## 中文长总结

- `claude -p` 运行一次任务后退出；可通过标准输入传递 diff 或日志，并将输出重定向给后续程序。
- `--output-format json` 提供机器可读的执行结果；课程进一步使用 `--json-schema` 约束业务数据结构，再由独立程序生成报告。
- 处理退出状态、执行错误及无效或缺失的结构化结果。符合 schema 不代表分析结论正确，仍需按风险进行审查。
- 自动化应只授予所需工具与目录权限，避免依赖无人确认的交互；大输入宜有选择地读取文件，而不是无差别发送整个项目。
- 流式 JSON 适用于实时消费事件；课程还提及 `--bare` 来减少环境配置影响，其可用性和认证要求应以当前版本为准。

## English Short Summary

Use non-interactive execution to connect Claude Code to scripts and pipelines. Define limited tool access, structured output, and explicit error handling; validate both the returned data and the underlying conclusions before downstream use.
