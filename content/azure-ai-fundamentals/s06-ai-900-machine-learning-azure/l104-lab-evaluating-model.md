---
title: "Lab - Binary Classification Model - Evaluating the Model's Performance"
lectureId: 104
section: 6
sectionTitle: "AI-900 - Describe fundamental principles of machine learning on Azure"
date: "2026-06-10"
tags: [model-evaluation, confusion-matrix, accuracy, precision, recall, lab]
---

## 中文短总结

模型评估：Pipeline 运行完成后查看评估结果。评估指标：ROC Curve、Precision、Recall、Lift Curve、Accuracy、**Confusion Matrix**（混淆矩阵）。混淆矩阵四象限：True Positive（正确预测正类）、True Negative（正确预测负类）、False Positive（误报）、False Negative（漏报）。不用编码即可构建和评估完整 ML 模型。

## 考试要点

- 模型评估指标：Accuracy, Precision, Recall, ROC, F1
- **Confusion Matrix**（考试重点）：
  - True Positive (TP)：正确识别为正类
  - True Negative (TN)：正确识别为负类
  - False Positive (FP)：错误识别为正类（误报）
  - False Negative (FN)：错误识别为负类（漏报）
- Accuracy = (TP + TN) / Total
- Pipeline：训练 + 评分 + 评估三步

## English Short Summary

Model evaluation after pipeline run. Metrics: ROC Curve, Precision, Recall, Lift Curve, Accuracy, Confusion Matrix. Confusion Matrix quadrants: True Positive, True Negative, False Positive (false alarm), False Negative (miss). Complete ML model built and evaluated without any code.
