---
title: "Unit 15: Performance Evaluation – Metrics That Matter"
lectureId: 16
section: 1
sectionTitle: "Theory"
date: "2026-07-01"
tags: ["Performance Evaluation", "Tool Call Accuracy", "Task Adherence", "Intent Resolution", "Ground Truth", "CI/CD"]
---

## 中文短总结

本讲介绍 Agent **性能评估**三大核心指标：**Tool Call Accuracy**（正确工具名与参数，目标 ≥95%）、**Task Adherence**（遵循 system instructions，目标 ≥99%）、**Intent Resolution**（理解用户意图，目标 ≥90%）。评估应使用 **ground truth 数据集**（人工标注 ~500 条对话）而非另一个 Agent 评判。可用 Foundry Trace + KQL 辅助测量。修复策略包括改进 tool description、red teaming、升级模型及嵌入 **CI/CD** 持续评估管道（部署前阈值检查、A/B 测试、回归告警与自动回滚）。

## 中文长总结

### 三大评估指标

#### 1. Tool Call Accuracy（工具调用准确率）

- 衡量 Agent 选择正确工具名并提供有效参数的比例
- 示例：「天气如何？」应调用 `get_weather(city="Seattle")`，而非 `send_email`
- **目标阈值：≥95%**
- 低准确率常见原因：tool description 模糊、工具名歧义、缺少参数示例

#### 2. Task Adherence（任务遵循度）

- 衡量 Agent 是否遵循 system instructions 并保持在定义边界内
- **目标阈值：≥99% 甚至 100%**（违规代价高）
- 违规类型：
  - **Boundary violation**：严重违规（如「永不删除数据」却删除）
  - **Instruction skipping**：跳过必需步骤（如未要 order number 直接查账户）
  - **Persona drift**：语气/角色漂移（专业变 slang）

#### 3. Intent Resolution（意图解析率）

- 衡量 Agent 是否正确理解用户意图（不论执行是否成功）
- **目标阈值：≥90%**
- 失败模式：错误分类、过于模糊（要求澄清）、幻觉意图（虚构不存在的 intent category）

### 指标对比

| 对比 | 区别 |
|------|------|
| Intent vs Tool Accuracy | 理解 vs 执行 |
| Adherence vs Resolution | 安全边界 vs 用户体验 |
| 修复优先级 | **Adherence 优先**（安全风险），然后 Resolution，最后 Tool Accuracy |

### Ground Truth 数据集

- 人工创建/标注 ~100–500 条测试对话
- 标注内容：正确工具、参数、intent category、adherence 预期
- 多标注者一致性：分歧时引入第三人裁决
- **不要用 Agent 评估 Agent**（可能犯相同错误）

### Foundry Trace 辅助测量

- Tool accuracy：KQL 查询 trace 中 tool.name/parameters，对比 ground truth
- Task adherence：扫描 LLM response 中违规关键词（如 "price"）
- Intent resolution：分析 tool chain（weather 请求却调用 get_stock_price = 错误 intent）

### CI/CD 持续评估

1. 部署前运行 500 条测试对话，任一指标低于阈值则 **block deployment**
2. **A/B 测试**：10% 用户访问新版本对比体验
3. **Regression alerts**：Azure Monitor 告警（如 tool accuracy 骤降）
4. **Automated rollback**：告警触发时回滚到已知良好版本

### 修复策略

| 问题 | 解决方案 |
|------|----------|
| 低 tool accuracy | 改进 tool description、重命名歧义工具、添加参数示例 |
| 低 task adherence | Red teaming agent + 更严格 boundary rules |
| 低 intent resolution | 升级模型（SLM→LLM）、添加 chain-of-thought instructions |

## 考试要点

- 三大指标及阈值：**95% / 99% / 90%**
- 评估必须用 **human-labeled ground truth**，不用 Agent 互评
- Tool accuracy 低 → 检查 tool definition（description、name、parameter examples）
- Task adherence 违规三类：boundary / instruction skipping / persona drift
- Intent resolution 测 **理解**，tool accuracy 测 **执行**
- Adherence 修复优先级高于 resolution（安全风险）
- Foundry Trace + KQL 可自动化部分测量
- CI/CD 集成：pre-deploy 阈值检查、A/B test、regression detection、auto rollback
- Red teaming 用于发现 adherence 漏洞

## English Short Summary

This lecture covers agent performance evaluation via three metrics: tool call accuracy (≥95%, correct tool name and parameters), task adherence (≥99%, following system instructions with boundary/instruction/persona violation types), and intent resolution (≥90%, understanding user intent). Evaluation requires human-labeled ground truth datasets (~500 conversations), not agent-based scoring. Foundry Trace and KQL can automate span-based measurement. Fix strategies: improve tool descriptions, red teaming for adherence, model upgrades for intent. CI/CD integration includes pre-deploy threshold checks, A/B testing, regression alerts, and automated rollback. Adherence fixes take priority over resolution due to security risk.
