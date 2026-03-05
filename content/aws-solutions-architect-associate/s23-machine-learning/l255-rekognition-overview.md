---
title: "Rekognition Overview"
lectureId: 255
section: "s23"
sectionTitle: "Machine Learning"
date: "2026-03-05"
tags: [rekognition, ml, image, video, facial-analysis, content-moderation]
---

## 中文短总结

Amazon Rekognition 使用 ML 在图像和视频中查找对象、人物、文字、场景。功能：标签识别、内容审核（Content Moderation）、文字检测、人脸检测与分析（性别/年龄/情绪）、人脸搜索验证、名人识别、运动路径追踪（Pathing）。内容审核重点：设置最低置信度阈值（Minimum Confidence Threshold）标记不当内容，配合 Amazon A2I（Augmented AI）进行人工复审，帮助合规。

## 中文长总结

Amazon Rekognition 是一项基于机器学习的图像和视频分析服务。

**核心功能：**
- **标签识别（Labeling）**：识别图像中的对象（人物、岩石、自行车等）
- **内容审核（Content Moderation）**：检测不当/冒犯性内容
- **文字检测（Text Detection）**：识别图像中的文字（如运动员编号）
- **人脸检测与分析**：识别性别、年龄范围、情绪（开心/悲伤等）
- **人脸搜索与验证**：安全应用中的身份验证
- **名人识别**：识别照片中的知名人物
- **路径追踪（Pathing）**：体育视频中追踪运动轨迹（如足球比赛）

**内容审核（Content Moderation，考试重点）：**
- 用例：社交网络、媒体广播、广告、电商 → 创建安全用户体验
- 检测不当/冒犯性/不良内容（种族歧视、色情等）
- 设置 **Minimum Confidence Threshold**（最低置信度阈值）筛选标记内容
- 阈值越低 → 匹配越多
- 标记后可选 **Amazon A2I（Augmented AI）** 进行人工手动复审
- 帮助满足合规要求

**用例：** 社交媒体内容过滤、安全验证、体育分析、电商图片分类

## 考试要点

- Rekognition = 图像和视频的 ML 分析
- 内容审核：Minimum Confidence Threshold + A2I 人工复审
- 支持标签、文字、人脸、名人、路径追踪
- 人脸分析可提取性别/年龄/情绪

## English Short Summary

Amazon Rekognition uses ML to find objects, people, text, and scenes in images and videos. Features: labeling, content moderation, text detection, face detection/analysis (gender/age/emotions), face search/verification, celebrity recognition, and pathing (sports analysis). Content Moderation: set Minimum Confidence Threshold to flag inappropriate content, with optional Amazon A2I (Augmented AI) for human manual review to help meet compliance requirements.
