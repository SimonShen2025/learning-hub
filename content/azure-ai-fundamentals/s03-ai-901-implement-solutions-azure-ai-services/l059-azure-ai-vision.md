---
title: "Azure AI Vision Service"
lectureId: 59
section: 3
sectionTitle: "AI-901 - Implement AI solutions - Azure AI Services"
date: "2026-06-10"
tags: [azure-vision, image-analysis, ocr, face-service]
---

## 中文短总结

Azure AI Vision 服务提供三大能力：Image Analysis（图像分析：特征提取、目标检测、标签、描述生成、内容审核）、Face Service（人脸识别和分析）、OCR（光学字符识别：从图像和文档中提取印刷和手写文本）。该服务现在通过 Microsoft Foundry 作为 Foundry Tools 呈现。目前 Foundry 新界面中 Vision 的 playground 尚未上线（coming soon），需通过旧界面或 AI-900 章节的演示了解。

## 中文长总结

### Azure AI Vision 三大能力

| 能力 | 功能 |
|------|------|
| Image Analysis | 提取视觉特征、检测对象、生成标签、图像描述、内容审核 |
| Face Service | 人脸识别和分析 |
| OCR | 提取印刷和手写文本 |

### 使用方式
- 提交图像（上传文件或提供 URL）
- 服务返回结构化分析结果
- 现在作为 Foundry Tools 的一部分

### 当前状态
- 新 Foundry 界面中 Vision playground "coming soon"
- 需要通过经典方式使用（单独创建 Vision 资源）
- AI-900 章节中有详细 demo

### 应用场景
- 图像内容理解
- 文档 OCR 处理
- 人脸验证系统
- 内容审核

## 考试要点

- Azure AI Vision = 分析图像和返回有意义信息的服务
- 三大能力：Image Analysis, Face Service, OCR
- 支持文件上传或 Image URL
- 现在通过 Foundry Tools 提供
- OCR = 从图像中提取印刷和手写文本

## English Short Summary

Azure AI Vision provides: Image Analysis (extract visual features, detect objects, generate captions, moderate content), Face Service (recognize and analyze faces), OCR (extract printed and handwritten text from images/documents). Now surfaced via Microsoft Foundry as Foundry Tools. Currently, the new Vision playground is "coming soon" in the latest Foundry interface.
