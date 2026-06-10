---
title: "Agentic AI - From Answering Questions to Getting Things Done"
lectureId: 9
section: 1
sectionTitle: "AI-901 - Identify AI concepts and capabilities"
date: "2026-06-10"
tags: [agentic-ai, ai-agents, tools, planning, autonomy]
---

## 中文短总结

AI Agent 不仅响应，还能主动行动：接收目标 → 分解步骤 → 执行 → 评估结果 → 调整 → 循环直到完成。五大核心能力：Tools（使用工具：搜索、执行代码、调用 API）、Planning（多步推理规划）、Memory/State（跨步骤维持状态）、Self-correction（自我纠正）、Autonomy（最少人工干预下长期运行）。与普通聊天的根本区别：聊天是单次交互（prompt in → response out），Agent 是循环工作流。

## 中文长总结

### Agent vs 普通模型交互
- **普通模型**：Reactive，prompt in → response out，单次交互后停止
- **AI Agent**：Act，目标驱动的循环工作流（think → act → observe → think again → act again）

### AI Agent 五大核心能力
1. **Tools（工具使用）**
   - 搜索 web、读写文件、执行代码、查询数据库、调用外部 API、发送邮件、填写表单
   
2. **Planning（规划）**
   - 不盲目执行，先推理和识别依赖关系
   - 制定多步骤执行计划

3. **Memory & State（记忆与状态）**
   - 跨步骤维持状态
   - 记住已完成的操作和发现
   - 用历史信息决定下一步

4. **Self-correction（自我纠正）**
   - 执行结果不符预期时能识别问题
   - 调整方法重新尝试，不会无声失败

5. **Autonomy（自主性）**
   - 长时间运行，最少人工干预
   - 区别于普通聊天的核心特征

### 实际应用场景
- **软件开发**：接收 bug 报告 → 读代码库 → 定位根因 → 编写修复 → 运行测试 → 提交 PR
- **研究分析**：搜索数十个来源 → 阅读综合 → 交叉验证 → 识别矛盾 → 产出结构化报告

### 注意事项
- Trust & Verification：Agent 执行真实操作（发邮件、修改数据库）时后果不可逆
- 需要明确的边界和人工审查关卡

## 考试要点

- AI Agent = 能推理、决策、行动的系统（不仅仅是响应）
- 五大特征：Tools, Planning, Memory/State, Self-correction, Autonomy
- Agent 工作流是循环的：think → act → observe → repeat
- 普通聊天是单次交互：prompt in → response out
- Agent 需要 trust boundaries 和 human review gates

## English Short Summary

AI agents don't just respond — they act autonomously in a loop: think → act → observe → adjust → repeat until goal is met. Five key capabilities: Tools (web search, code execution, APIs), Planning (multi-step reasoning), Memory/State (cross-step context), Self-correction (adapt on failure), and Autonomy (minimal human intervention). Key distinction from chat: agents execute real-world actions with consequences.
