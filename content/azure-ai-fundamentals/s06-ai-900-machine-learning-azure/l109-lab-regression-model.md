---
title: "Lab - End-to-End Adventure - Building a Regression Model"
lectureId: 109
section: 6
sectionTitle: "AI-900 - Describe fundamental principles of machine learning on Azure"
date: "2026-06-10"
tags: [regression, supervised-learning, numerical-prediction, designer, lab]
---

## 中文短总结

第二个示例：使用 Designer 构建回归模型。Classification vs Regression：分类预测类别（如 ≤50K/>50K），回归预测数值（如房价、股价）。Regression 同属 Supervised Learning（需要 features + labels，但 labels 必须是数值）。使用内置汽车价格数据集，预测汽车价格。流程与分类相同：数据集 → 预处理 → 分割 → 训练（用 regression 算法）→ 评分 → 评估。

## 考试要点

- **Regression** = 预测连续数值（房价、股价、温度）
- **Classification** = 预测离散类别
- 两者都是 Supervised Learning
- Regression labels 必须是数值
- Classification labels 可以是非数值
- 流程相同，只是算法不同

## English Short Summary

Second example: build regression model with Designer. Classification predicts categories (≤50K/>50K); Regression predicts numerical values (house/car prices). Both are Supervised Learning (need features + labels), but regression labels must be numeric. Uses built-in automobile price dataset. Same flow: data → preprocess → split → train (regression algorithm) → score → evaluate.
