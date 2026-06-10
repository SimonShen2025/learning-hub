---
title: "Reliability & Safety - AI That Works When It Matters"
lectureId: 15
section: 1
sectionTitle: "AI-901 - Identify AI concepts and capabilities"
date: "2026-06-10"
tags: [responsible-ai, reliability, safety, hallucinations]
---

## 中文短总结

负责任 AI 原则之二：可靠性与安全。Reliability = 系统在各种条件下一致执行预期功能。Safety = 系统不造成伤害，错误后果可控可恢复。AI 与传统软件的关键区别：传统软件是确定性的（同输入同输出），AI 模型是非确定性的（同输入可能不同输出）。AI 特有挑战：Hallucinations（幻觉）— 输出看似合理但事实上错误。关键领域：医疗诊断、自动驾驶。必须在设计阶段纳入，部署后持续测试监控。

## 中文长总结

### Reliability（可靠性）
- 系统在各种条件下都能执行预期功能
- 不仅是理想条件，还包括：不同用户、不同输入、边缘情况
- 一致性表现是核心要求

### Safety（安全）
- 系统不对人造成伤害（直接用户、受影响者、社会）
- 核心问题：系统出错时会怎样？如何设计使后果可控可恢复？

### AI vs 传统软件的可靠性差异
| 传统软件 | AI 模型 |
|----------|---------|
| 确定性：同输入 → 同输出 | 非确定性：同输入可能 → 不同输出 |
| 基于明确规则 | 基于学习到的模式 |
| 可追踪代码逻辑 | 数十亿参数难以解释 |
| 可预测 | 行为不完全可预测 |

### Hallucinations（幻觉）
- AI 特有的可靠性挑战
- 输出看似合理（plausible）但事实上错误
- LLM 最核心的可靠性问题

### 关键应用领域
- **医疗**：诊断系统必须对多样化患者群体可靠，包括罕见病例
- **自动驾驶**：必须在雾天、雨天、施工区等异常情况下可靠运行
- 安全性在此 = 生死攸关

### 最佳实践
- 设计阶段即纳入可靠性和安全性
- 全面测试（包括边缘情况）
- 部署后持续监控和测试

## 考试要点

- Reliability = 在全范围条件下一致执行
- Safety = 出错时后果可控、不造成伤害
- AI 的非确定性 vs 传统软件的确定性
- Hallucinations = AI 特有问题（plausible but wrong）
- 从设计到生产持续测试监控

## English Short Summary

Reliability & Safety (Responsible AI principle #2): Reliability means consistent performance across all conditions; Safety means errors don't cause harm and consequences are containable. Key AI challenge vs traditional software: non-deterministic behavior — same input may produce different outputs. Hallucinations (plausible but factually wrong outputs) are the central reliability challenge for LLMs. Critical in healthcare and autonomous vehicles.
