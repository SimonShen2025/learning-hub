---
title: "Lab - Binary Classification Model - Splitting the Dataset"
lectureId: 102
section: 6
sectionTitle: "AI-900 - Describe fundamental principles of machine learning on Azure"
date: "2026-06-10"
tags: [train-test-split, pipeline, designer, lab]
---

## 中文短总结

数据集分割：使用 Split Data 组件将数据按 70:30 比例分割。70% 用于训练模型，30% 用于测试/评估模型。Split mode: Split Rows, Fraction: 0.7。重要：必须在 Select Columns 中包含 label 列（income），因为是 supervised learning 需要 features + labels。分割是防止过拟合的关键步骤。

## 考试要点

- Train/Test Split：常见比例 70:30 或 80:20
- 训练集：训练模型
- 测试集：评估模型（模型未见过的数据）
- 防止过拟合（overfitting）
- Supervised learning 必须包含 label 列

## English Short Summary

Dataset splitting: Split Data component with 70:30 ratio. 70% for training, 30% for testing/evaluation. Split mode: Split Rows, Fraction: 0.7. Must include label column (income) in selected columns for supervised learning. Splitting prevents overfitting by evaluating on unseen data.
