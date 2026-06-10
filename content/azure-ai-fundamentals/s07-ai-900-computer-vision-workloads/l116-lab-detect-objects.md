---
title: "Lab - Image Insights - Detect Common Objects"
lectureId: 116
section: 7
sectionTitle: "AI-900 - Describe features of computer vision workloads on Azure"
date: "2026-06-10"
tags: [object-detection, azure-ai-vision, bounding-box, lab]
---

## 中文短总结

Object Detection 功能演示。在 Microsoft Foundry → AI Services → Vision and Document → Image → Object Detection。提交图像后：识别图像中的各个对象 + 返回每个对象的位置（bounding box 坐标）。JSON 响应包含：对象名称、置信度分数、边界多边形坐标。实际应用：零售货架分析、安防监控、自动驾驶。

## 考试要点

- Object Detection = 识别对象 + 返回位置（bounding box）
- 返回：对象名称 + 置信度 + 坐标
- JSON 格式响应
- vs Image Classification：只分类不定位

## English Short Summary

Object Detection demo: Microsoft Foundry → AI Services → Vision → Object Detection. Submit image → identifies individual objects + returns location (bounding box coordinates). JSON response: object name, confidence score, bounding polygon. Applications: retail shelf analysis, security, autonomous driving.
