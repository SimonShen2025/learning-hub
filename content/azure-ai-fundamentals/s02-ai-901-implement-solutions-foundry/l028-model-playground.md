---
title: "Working with the Model Playground"
lectureId: 28
section: 2
sectionTitle: "AI-901 - Implement AI solutions - Microsoft Foundry"
date: "2026-06-10"
tags: [playground, microsoft-foundry, system-prompt, chat, lab]
---

## 中文短总结

Microsoft Foundry 的 Playground 功能：在编写代码前测试模型行为。位于 Build → Models → Playground。可以输入 user prompt 聊天、设置 system instructions（角色/上下文）、添加 tools/knowledge/memory（预览中）。用途：在正式开发前验证模型是否适合用例、测试响应质量。Playground 就是一个可视化的模型交互界面，无需写代码即可测试。

## 中文长总结

### Playground 的作用
- 在编写代码前测试和"玩"模型
- 理解模型行为是否符合用例需求
- 验证响应质量

### 访问路径
Build → Models → 选择已部署模型 → Playground

### 功能组成
| 组件 | 作用 |
|------|------|
| Chat 区域 | 输入 user prompt，查看模型响应 |
| System Instructions | 定义模型角色、行为、约束 |
| Attachments | 附加文件/图片 |
| Tools | 添加工具能力（预览） |
| Knowledge | 添加知识库（预览） |
| Memory | 添加记忆（预览） |

### 实际使用
- 输入 prompt → 发送 → 模型处理 → 返回响应
- 可设置 system prompt 给模型角色（如"你是 Azure 课程助手"）
- 测试满意后再写代码调用

## 考试要点

- Playground = 无需写代码即可测试模型的可视化界面
- 位于 Build → Models → Playground
- 支持 user prompt + system instructions
- 用于在开发前验证模型行为和响应质量

## English Short Summary

The Model Playground in Microsoft Foundry (Build → Models → Playground) lets developers test model behavior without writing code. Features: chat with user prompts, set system instructions (role/context), attach files. Purpose: validate model suitability and response quality before actual development. Tools, knowledge, and memory features are in preview.
