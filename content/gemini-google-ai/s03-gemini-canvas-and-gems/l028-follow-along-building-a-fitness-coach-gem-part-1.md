---
title: "Follow-Along: Building a Fitness Coach Gem (part 1)"
lectureId: 28
section: 3
sectionTitle: "Working with Gemini Canvas and Gems"
date: "2026-10-14"
tags: [gemini-gems, video-analysis, fitness, safety]
---

## 中文短总结

健身教练 Gem 示例将视频动作反馈与激励图片生成组合起来。指令应定义教练角色、动作观察任务、安全关注点和非医疗免责声明，并可上传风格参考文件；但知识库参考图未必能直接约束图像生成结果，需要测试并准备替代方案。

## 中文长总结

- Gem 的任务包括分析训练视频、跟踪动作表现，并按需求生成每日激励背景图；应把不同任务及其输出分别写清楚。
- 指令需要指定教练角色、需要观察的动作和安全线索，以及如何给出结构化反馈。文件名等上下文可帮助识别训练日期，但仍需核实分析结果。
- 健身建议只用于一般训练反馈，不构成医疗诊断或治疗；开始新训练计划前应咨询专业医疗人员。
- 可上传图片作为知识库参考，并选择合适的默认工具。对同时包含视频分析、文字反馈和图像生成的 Gem，也可让系统按任务选择工具。
- 演示发现，仅上传参考图并要求生成图片模仿其风格，结果可能与原图差异很大。应把这一行为作为需要测试的限制，而非默认可靠能力。

## English Short Summary

The fitness Gem combines workout-video feedback with motivational image generation. Define observation and safety rules, include a non-medical disclaimer, and test reference-image behavior because knowledge files may not reliably control generated visuals.