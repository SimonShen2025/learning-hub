---
title: "Building AI Agents in Microsoft Foundry"
lectureId: 44
section: 2
sectionTitle: "AI-901 - Implement AI solutions - Microsoft Foundry"
date: "2026-06-10"
tags: [ai-agents, microsoft-foundry, agent-service, tools, web-search]
---

## 中文短总结

在 Microsoft Foundry 中构建 AI Agent。Agent 三大核心组件：Model（大脑，理解意图和推理）、Instructions（系统 prompt，定义角色和行为）、Tools（让 Agent 能执行真实操作）。与普通聊天的区别：Agent 能推理、决策、使用工具执行动作。示例：给 Agent 添加 Web Search 工具 → Agent 能搜索互联网获取实时信息并构建响应。在 Foundry Build 部分可创建和配置 Agent。

## 中文长总结

### Agent vs 普通聊天
- **普通聊天**：prompt in → response out，单次交互
- **Agent**：推理、决策、使用工具执行多步操作

### Agent 三大核心组件

| 组件 | 作用 | 类比 |
|------|------|------|
| Model | 理解用户意图、推理、生成响应 | 大脑 |
| Instructions | 定义角色、行为、限制 | 人设/系统 prompt |
| Tools | 执行真实操作（搜索、调API等） | 手脚 |

### Agent 可使用的工具
- **Web Search**：搜索互联网获取实时信息
- **Code Interpreter**：执行代码
- **File Search**：搜索文件/知识库
- **Custom Functions**：自定义函数/API 调用

### 在 Foundry 中创建 Agent
1. Build 区域 → 创建 Agent
2. 选择模型（如 GPT-5.4）
3. 配置 Instructions（定义角色）
4. 添加 Tools（如 Web Search）
5. 测试 Agent 行为

### 实际示例
- 创建一个 Azure 学习助手 Agent
- 添加 Web Search 工具
- Agent 能根据问题搜索最新 Azure 文档并回答
- 响应中标注信息来源

## 考试要点

- Agent 三组件：Model + Instructions + Tools
- Tools 是 Agent 区别于普通聊天的核心
- Web Search 让 Agent 获取实时互联网信息
- Agent 在 Foundry 的 Build 区域创建
- Agent 能推理、决策、执行多步操作

## English Short Summary

Building AI agents in Microsoft Foundry with three core components: Model (the brain — understanding and reasoning), Instructions (system prompt — defining role and behavior), and Tools (what separates agents from chat — web search, code interpreter, file search, custom functions). Agents reason, decide, and take actions. Created in Foundry's Build section. Example: agent with Web Search tool fetches real-time internet information.
