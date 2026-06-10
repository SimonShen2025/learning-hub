---
title: "Lab - Binary Classification Model - Setting Up Your Compute Instance"
lectureId: 100
section: 6
sectionTitle: "AI-900 - Describe fundamental principles of machine learning on Azure"
date: "2026-06-10"
tags: [compute-instance, azure-ml, pipeline-execution, lab]
---

## 中文短总结

运行 Pipeline 需要计算基础设施。在 ML Studio → Compute 创建 Compute Instance（虚拟机）。类似应用开发中的开发机器。选项：单台 Compute Instance（适合简单模型）或 Compute Cluster（多台机器，适合大模型/大数据集）。创建后可运行 Pipeline 实验。计算实例产生费用，不用时应停止。

## 考试要点

- 运行 Pipeline 需要 Compute 资源
- Compute Instance = 单台虚拟机
- Compute Cluster = 多台机器（大规模训练）
- 类比：应用代码需要机器运行，Pipeline 也需要
- 计算 = 主要费用来源

## English Short Summary

Running pipelines requires compute infrastructure. Create Compute Instance (VM) in ML Studio → Compute. Options: single Compute Instance (simple models) or Compute Cluster (multiple machines for large models/datasets). Similar to needing a dev machine to run application code. Compute is the main cost driver — stop when not in use.
