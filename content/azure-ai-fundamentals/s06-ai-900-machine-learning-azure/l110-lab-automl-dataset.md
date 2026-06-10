---
title: "Lab - Automated ML - Preparing the Dataset"
lectureId: 110
section: 6
sectionTitle: "AI-900 - Describe fundamental principles of machine learning on Azure"
date: "2026-06-10"
tags: [automated-ml, automl, dataset, data-asset, lab]
---

## 中文短总结

Automated ML 示例——数据准备。AutoML：自动尝试不同算法 → 选出最佳模型（无需自己选算法）。步骤：1) 准备本地 CSV（house_prices.csv：location_score, year_built, garage, bathrooms, area, rooms → price）；2) ML Studio → Data → Create new data asset → Tabular → 从本地上传到 Azure Storage Account → 验证数据列。

## 考试要点

- **AutoML** = 自动尝试多种算法，选出最佳模型
- 适合不知道选择什么算法的场景
- 数据资产（Data Asset）= ML Studio 中的数据集
- 可从本地文件、Azure Storage、SQL DB 上传
- 上传实际存储到 ML Workspace 关联的 Storage Account

## English Short Summary

Automated ML data prep. AutoML: automatically tries different algorithms → selects best model (no manual algorithm selection needed). Steps: 1) Prepare local CSV (house_prices: location, year, garage, bathrooms, area, rooms → price); 2) ML Studio → Data → Create data asset → Tabular → upload from local to Azure Storage Account → verify columns.
