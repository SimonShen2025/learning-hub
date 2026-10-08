---
title: "Cursor - Advanced applications"
lectureId: 37
section: 5
sectionTitle: "Building applications using AI - Vibe coding"
date: "2026-10-08"
tags: ["cursor", "ai-coding-agent", "product-requirements", "development-workflow"]
---

## 中文短总结

Cursor 适合愿意操作开发环境、命令和项目文件的进阶场景。先与 Agent 共同澄清需求并生成 PRD，再按规格实现、运行和调试；检查生成代码与命令，不要把 Agent 输出视为天然正确。

## 中文长总结

与浏览器内的可视化工具相比，Cursor 是本地开发环境，需要安装软件并直接处理项目文件和命令。它适合想进一步掌握开发流程、构建更复杂应用的用户。

课程建议先在空项目中用 Agent 讨论产品需求，围绕目标用户、输入、行为和图表等细节追问，生成 PRD 并保存为项目规格。再基于规格实现复利计算器等应用，运行服务并在浏览器验证交互。

明确规格能减少实现过程中的猜测，也便于拆分任务和验收。执行 Agent 提出的命令前应先理解其作用；检查改动、依赖、数据处理和安全边界。若应用复杂，应拆成较小任务逐步实现和测试。

## English Short Summary

Cursor supports agent-assisted work directly in a local development environment. Clarify requirements in a PRD, implement against that specification, and run the app to verify behavior. Review generated code and commands, and break complex work into testable tasks.