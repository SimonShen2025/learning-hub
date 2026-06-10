---
title: "Lab - Binary Classification Model - Cleaning for Better Accuracy"
lectureId: 99
section: 6
sectionTitle: "AI-900 - Describe fundamental principles of machine learning on Azure"
date: "2026-06-10"
tags: [data-cleaning, feature-selection, pipeline, designer, lab]
---

## 中文短总结

Pipeline 数据清洗步骤：1) **Select Columns in Dataset**（特征选择）— 仅选择对预测有贡献的列（age, work_class, education, occupation, race, income 等）；2) **Clean Missing Data**（清洗缺失数据）— 选择移除包含缺失值的整行。两个组件连接：Dataset → Select Columns → Clean Missing Data。特征选择是重要的数据预处理步骤。

## 考试要点

- Feature Selection：仅选择相关特征，提高模型效率
- Clean Missing Data：处理缺失值（移除行/填充/插值）
- Pipeline 组件通过连接线串联
- 数据预处理对模型准确性至关重要

## English Short Summary

Pipeline data cleaning: 1) Select Columns in Dataset (feature selection — choose only relevant columns: age, work_class, education, occupation, race, income); 2) Clean Missing Data (remove entire rows with missing values). Components connected: Dataset → Select Columns → Clean Missing Data. Feature selection is critical preprocessing.
