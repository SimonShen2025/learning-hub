---
title: "Lab: Creating a Foundry Agent in Portal (Hands-On Lab)"
lectureId: 13
section: 3
sectionTitle: "AI-200 Primers and Foundations"
date: "2026-09-22"
tags: ["microsoft-foundry", "ai-agents", "hands-on-lab", "tool-calling"]
---

## 中文短总结

本实验在 Foundry 门户 Build → Agents 中创建智能体（选定基础模型、编写系统提示词），并演示可添加的工具（文件搜索、Azure AI Search、Web Search、Bing 自定义搜索、SharePoint、浏览器自动化、代码解释器）。每次修改都会生成新版本；通过 AI Quality（意图识别、任务遵循度评分）与 Trace（对话与工具调用轨迹）观察智能体行为，并演示单工具与多工具串联（Web Search → Code Interpreter）调用场景。

## 中文长总结

### 创建智能体

- 在 Build → Agents 区域创建智能体，命名并选择基础大语言模型（示例使用 GPT-5.2）
- 智能体支持**版本控制**：每次修改（模型、工具增减、系统提示）都会生成新版本，可查看历史与版本对比

### 可用工具

- **File Search**：基于上传文件建立本地向量存储供检索
- **Azure AI Search**：面向大规模非结构化企业数据的检索增强方案
- **Web Search / Bing 自定义搜索**：实时联网搜索，自定义搜索可限定站点范围
- **SharePoint 知识接入**
- **浏览器自动化（Browser Automation）**：模拟人类浏览器操作
- **Code Interpreter**：提供沙盒 Python 环境执行代码（如用 matplotlib 生成图表）
- **Foundry IQ**：整合 SharePoint、企业知识库、Azure Data Lake、AWS S3 等多云数据源
- **Memory Store**：跨会话为用户保留记忆，由 Foundry 托管
- **默认防护栏**：Microsoft Default Version 2，防敏感数据泄露、任务漂移、间接提示注入、越狱攻击

### 观测与调试

- **AI Quality**：意图识别（Intent Resolution）与任务遵循度（Task Adherence）评分
- **Traces（轨迹）**：按对话 ID 查看每一步骤（推理、工具调用、token 消耗）

### 演示场景

1. 添加 Web Search 工具，询问全球新闻头条，智能体正确调用 Web Search 并附引用来源
2. 添加 Code Interpreter，要求根据给定数值绘图，生成 PNG 图表
3. 组合场景：先 Web Search 获取实时股价，再由 Code Interpreter 生成图表并导出为图片/CSV
4. 智能体的 YAML 定义与示例代码（支持 Python、JavaScript、C#）可用于代码优先集成，亦可发布到 Microsoft Teams / M365 Copilot

## English Short Summary

Hands-on lab creating an agent in the Foundry portal (Build → Agents), selecting a base model and writing a system prompt, with an overview of available tools: File Search, Azure AI Search, Web Search/Bing custom search, SharePoint, Browser Automation, Code Interpreter, Foundry IQ, and a managed Memory Store — all protected by default guardrails. Demonstrates agent versioning, AI Quality scoring (intent resolution, task adherence), and trace inspection, plus live demos of single-tool (web search for news) and chained multi-tool (web search → code interpreter to chart live stock prices) tool-calling scenarios.
