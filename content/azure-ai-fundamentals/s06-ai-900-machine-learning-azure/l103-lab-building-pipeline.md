---
title: "Lab - Binary Classification Model - Building Your ML Pipeline"
lectureId: 103
section: 6
sectionTitle: "AI-900 - Describe fundamental principles of machine learning on Azure"
date: "2026-06-10"
tags: [train-model, algorithm, logistic-regression, score-model, lab]
---

## 中文短总结

完成 Pipeline 构建：1) **Train Model** 组件（输入：70% 训练数据 + 算法，指定 label 列 = income）；2) **算法选择**：Two-Class Logistic Regression（用于二元分类）；3) **Score Model** 组件（使用训练好的模型对 30% 测试数据评分/预测）。完整 Pipeline：Dataset → Select Columns → Clean Data → Split Data → Train Model + Algorithm → Score Model。

## 考试要点

- Train Model 需要：数据集 + 算法 + label 列名
- Two-Class Logistic Regression：用于二元分类
- Score Model：用训练好的模型对测试数据预测
- Pipeline 完整流程：数据 → 预处理 → 分割 → 训练 → 评分
- 算法 = 数学方法发现数据模式

## English Short Summary

Complete pipeline: 1) Train Model (input: 70% training data + algorithm, specify label = income); 2) Algorithm: Two-Class Logistic Regression (binary classification); 3) Score Model (predict on 30% test data using trained model). Full pipeline: Dataset → Select Columns → Clean → Split → Train Model + Algorithm → Score Model.
