---
title: "SageMaker AI Overview"
lectureId: 262
section: "s23"
sectionTitle: "Machine Learning"
date: "2026-03-05"
tags: [sagemaker, ml, machine-learning, model-training, deployment]
---

## 中文短总结

Amazon SageMaker 是面向开发者和数据科学家的完全托管 ML 服务，用于构建自定义机器学习模型（与其他 AWS ML 服务的特定用途不同）。完整 ML 流程：数据收集→数据标注（Labeling）→模型构建→训练与调优→模型部署→预测。SageMaker 在所有步骤提供帮助，并自动预置计算服务器。适用于需要自定义 ML 模型而非使用预建服务的场景。

## 中文长总结

Amazon SageMaker 是一项完全托管的机器学习服务，帮助开发者和数据科学家构建自定义 ML 模型。

**与其他 ML 服务的区别：**
- Transcribe/Polly/Rekognition 等：特定用途的托管 ML 服务
- SageMaker：更高级、更灵活的 ML 平台，用于**构建自定义模型**
- 使用难度更高，但灵活性更强

**完整 ML 流程（SageMaker 全程支持）：**

1. **数据收集**：收集大量相关数据（如调查 10,000 名学生）
2. **数据标注（Labeling）**：标记列对应关系和目标值，这一步骤复杂且耗时
3. **模型构建（Build）**：确定如何从历史数据预测目标
4. **训练与调优（Train & Tune）**：优化模型以更好拟合数据
5. **模型部署（Deploy）**：将训练好的模型投入使用
6. **预测（Prediction）**：输入新数据 → 模型输出预测结果

**SageMaker 提供的价值：**
- 在所有步骤（标注→构建→训练→部署）提供工具和帮助
- 自动预置计算服务器，无需手动管理基础设施
- 降低 ML 模型全生命周期的复杂度

**示例场景：** 预测考试成绩——收集学生数据（IT 经验年限、AWS 经验、课程时间、练习考试次数等）→ 标注实际成绩 → 训练模型 → 输入新学生数据 → 预测分数（如 906 分）

## 考试要点

- SageMaker = 自定义 ML 模型构建平台（非特定用途服务）
- 覆盖完整 ML 流程：标注→构建→训练→调优→部署→预测
- 自动预置计算资源
- 面向开发者和数据科学家

## English Short Summary

Amazon SageMaker is a fully managed ML service for developers and data scientists to build custom machine learning models (unlike specific-purpose services like Transcribe/Polly/Rekognition). Covers the full ML lifecycle: data collection→labeling→model building→training & tuning→deployment→prediction. SageMaker assists at every step and auto-provisions compute servers, reducing the complexity of building and deploying custom ML models.
