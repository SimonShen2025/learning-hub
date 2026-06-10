---
title: "Using a model to generate images"
lectureId: 31
section: 2
sectionTitle: "AI-901 - Implement AI solutions - Microsoft Foundry"
date: "2026-06-10"
tags: [image-generation, dall-e, gpt-image, multimodal, microsoft-foundry]
---

## 中文短总结

GPT-5.4 虽能接受图像输入，但只能输出文本（不能生成图像）。ChatGPT 能生成图像是因为后台调用了专门的图像生成模型。在 Microsoft Foundry 中，需要部署专用的图像生成模型（如 gpt-image-1 或 DALL-E）。部署图像模型后，在 Playground 中选择该模型，输入描述性 prompt 即可生成图像。关键：不同模型有不同能力，文本模型不能生成图像。

## 中文长总结

### 关键区分
- GPT-5.4：输入 = text + images，**输出 = 仅 text**
- 无法直接用 GPT-5.4 生成图像
- 发送"生成图像"的 prompt → GPT-5.4 只会回复如何用图像工具的建议

### ChatGPT 如何生成图像？
- ChatGPT 理解你要生成图像
- 将请求转发给专门的图像生成模型（如 DALL-E）
- 图像由另一个模型生成，不是 GPT 本身

### 在 Microsoft Foundry 中生成图像
1. 需要单独部署图像生成模型（如 gpt-image-1）
2. 部署后在 Playground 中选择该模型
3. 输入描述性 prompt → 模型生成图像
4. 可设置图像尺寸等参数

### 核心概念
- 不同模型有不同的输入/输出能力
- 文本模型 ≠ 图像生成模型
- 需要为不同任务选择合适的模型

## 考试要点

- GPT 文本模型不能生成图像（输出仅 text）
- 图像生成需要专用模型（DALL-E / gpt-image-1）
- ChatGPT 通过后台路由到图像模型实现图像生成
- 在 Foundry 中需单独部署图像生成模型
- 了解模型的 input/output 能力范围

## English Short Summary

GPT-5.4 accepts images as input but only outputs text — it cannot generate images. ChatGPT generates images by routing requests to a dedicated image model (DALL-E). In Microsoft Foundry, you must separately deploy an image generation model (like gpt-image-1). Different models have different capabilities; always check the Model Card for input/output types.
