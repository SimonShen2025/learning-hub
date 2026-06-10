---
title: "Lab - Using Automated ML in Azure"
lectureId: 111
section: 6
sectionTitle: "AI-900 - Describe fundamental principles of machine learning on Azure"
date: "2026-06-10"
tags: [automated-ml, automl, regression, model-selection, lab]
---

## 中文短总结

AutoML 运行：Automated ML → New Job → 选择数据集 → Task type: Regression（预测数值） → Target column: price → Compute: 选已有实例 → Submit。等待 10-15 分钟，系统自动尝试多种回归算法（如 VotingEnsemble、LightGBM、RandomForest 等），按性能排名选出最优模型。比手动 Designer 更简单：不需设计 pipeline，一切自动化。

## 考试要点

- AutoML 流程：选数据 → 选任务类型 → 选目标列 → 运行
- 任务类型：Classification / Regression / Time Series Forecasting
- 自动尝试多种算法并排名
- 选出最佳模型（基于评估指标）
- No-code 到极致：无需设计 pipeline

## English Short Summary

AutoML execution: Automated ML → New Job → select dataset → Task type: Regression → Target: price → Compute → Submit. Waits 10-15 min, automatically tries multiple regression algorithms (VotingEnsemble, LightGBM, RandomForest, etc.), ranks by performance. Simpler than Designer: no pipeline design needed, fully automated.
