---
title: "Fairness - Building AI That Treats Everyone Equally"
lectureId: 14
section: 1
sectionTitle: "AI-901 - Identify AI concepts and capabilities"
date: "2026-06-10"
tags: [responsible-ai, fairness, algorithmic-bias, representation-bias]
---

## 中文短总结

Microsoft 负责任 AI 六大原则之一：公平性（Fairness）。核心问题：AI 系统是否公平对待所有人，不论其身份？不公平的根源通常在训练数据——历史数据反映了现实偏见。两种偏见类型：Algorithmic Bias（算法偏见，模型复制历史歧视模式）和 Representation Bias（代表性偏见，某些群体在训练数据中不足导致模型对其表现差）。应对：多样化训练数据 + 公平性指标测试。公平性应从设计阶段开始，持续监控。

## 中文长总结

### Microsoft 负责任 AI 六大原则
1. **Fairness**（公平性）— 本节重点
2. Reliability & Safety（可靠性与安全）
3. Privacy & Security（隐私与安全）
4. Inclusiveness（包容性）
5. Transparency（透明度）
6. Accountability（问责制）

### 公平性的含义
- 核心问题：AI 系统是否公平对待所有人？
- 检查维度：性别、种族、年龄、收入水平、地理位置
- 公平不等于每个人得到相同输出

### 不公平的来源
**Algorithmic Bias（算法偏见）**
- AI 从历史数据学习，历史数据可能包含人类偏见
- 模型不是恶意歧视，而是复制了数据中的模式
- 示例：招聘模型训练于过去偏向某群体的决策数据

**Representation Bias（代表性偏见）**
- 某些群体在训练数据中不足
- 模型对这些群体的经验少 → 表现差

### 关键应用场景
- **招聘**：基于历史招聘数据的 AI 可能复制偏见
- **医疗**：诊断模型对数据不足的患者群体准确度低 → 生死攸关

### 应对措施
1. 多样化和有代表性的训练数据
2. 公平性指标和跨群体测试
3. 从设计阶段开始，生产环境持续监控

## 考试要点

- Fairness = AI 系统公平对待所有人
- 不公平来源：训练数据中的历史偏见
- Algorithmic Bias = 模型系统性地对特定群体产生偏向结果
- Representation Bias = 训练数据中某群体不足导致表现差
- 应对：多样化数据 + 公平性测试 + 持续监控
- 公平不等于相同输出（fairness ≠ identical outputs）

## English Short Summary

Fairness (Responsible AI principle #1): AI systems should treat all people fairly regardless of identity. Unfairness stems from training data reflecting historical biases. Two types: Algorithmic Bias (model replicates discriminatory patterns) and Representation Bias (underrepresented groups get worse performance). Address via diverse training data, fairness metrics testing, and continuous monitoring from design through production.
