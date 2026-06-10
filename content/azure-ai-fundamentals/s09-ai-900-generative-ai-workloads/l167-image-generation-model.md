---
title: "Microsoft Foundry - Using an image generation model"
lectureId: 167
section: 9
sectionTitle: "AI-900 - Describe features of generative AI workloads on Azure"
date: "2026-06-10"
tags: [image-generation, gpt-image, dall-e, code-generation, lab]
---

## 中文短总结

GPT 模型可生成代码但不能直接生成图像。图像生成需要专门模型（如 gpt-image/DALL-E）。在 Foundry 中：GPT 模型可生成代码（Python 示例：连接 Azure OpenAI）；要生成图像需另外部署 gpt-image 模型。ChatGPT 界面能生成图像是因为后台调用了专门的图像模型或工具——不是 GPT 文本模型直接生成。

## 考试要点

- GPT 文本模型 ≠ 图像生成模型
- 图像生成需要专门模型（gpt-image / DALL-E）
- ChatGPT 生成图像 = 后台调用图像专用模型
- GPT 可生成代码（文本形式）
- 不同任务需要不同模型

## English Short Summary

GPT text models generate code but cannot directly generate images. Image generation requires specialized models (gpt-image/DALL-E). In Foundry: GPT generates code (Python example: connect to Azure OpenAI); for images, deploy gpt-image model separately. ChatGPT generates images because it calls specialized image model behind the scenes — not the text model itself.
