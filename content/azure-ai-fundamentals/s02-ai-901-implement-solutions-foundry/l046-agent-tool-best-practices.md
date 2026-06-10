---
title: "Agent Tool Best Practices"
lectureId: 46
section: 2
sectionTitle: "AI-901 - Implement AI solutions - Microsoft Foundry"
date: "2026-06-10"
tags: [ai-agents, tools, best-practices, tool-choice]
---

## 中文短总结

Agent 工具使用最佳实践。tool_choice 参数控制模型如何调用工具：auto（模型自行决定）、required（必须调用至少一个工具）、none（禁止调用工具）。最佳实践：Instructions 要具体且与工具配置一致；说明每个工具的用途；多个工具有功能重叠时，添加 decision rule（决策规则）指导模型选择合适的工具。

## 中文长总结

### tool_choice 参数

| 值 | 行为 |
|----|------|
| auto | 模型自行决定是否调用工具 |
| required | 模型必须调用一个或多个工具 |
| none | 模型不调用任何工具 |

### 最佳实践
1. **Instructions 要具体一致**：与工具配置保持对齐
2. **说明工具用途**：告诉模型每个工具用于什么场景
3. **Decision Rule**：当多个工具功能重叠时，添加决策规则帮助模型选择
4. **限制范围**：明确工具能做什么和不能做什么

### 参考文档
- Microsoft Foundry Agent Service 文档
- 提供了详细的工具配置和最佳实践指南

## 考试要点

- tool_choice: auto / required / none
- auto = 模型决定；required = 必须用工具；none = 禁止用工具
- 工具重叠时需要 decision rule
- Instructions 应与工具配置一致

## English Short Summary

Agent tool best practices: tool_choice parameter controls tool usage — auto (model decides), required (must use tools), none (no tools). Best practices: keep instructions specific and consistent with tool setup, explain each tool's purpose, add decision rules when tools overlap in functionality.
