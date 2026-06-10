---
title: "Sending images along with your user prompt"
lectureId: 29
section: 2
sectionTitle: "AI-901 - Implement AI solutions - Microsoft Foundry"
date: "2026-06-10"
tags: [multimodal, image-input, gpt, playground]
---

## 中文短总结

多模态（Multimodal）概念：现代模型不仅接受文本，还能接受图像、音频、文件。GPT-5.4 支持文本和图像输入。在 Playground 中：attach files → 选择本地图片 → 配合文本 prompt 一起发送 → 模型理解图像内容并响应。示例：发送错误截图 + 描述问题的 prompt → 模型分析图像中的错误信息并给出解决方案。Model Card 会标明模型支持的输入/输出类型。

## 中文长总结

### 多模态概念
- 早期模型只接受文本输入
- 现代模型可接受多种输入：文本、图像、音频、文件
- GPT-5.4 支持：文本 + 图像作为输入

### 在 Playground 中使用
1. 点击 "Attach files"
2. 选择本地图片文件
3. 输入文本 prompt（描述问题/请求）
4. 发送：system prompt + user prompt + image 一起传给模型
5. 模型分析所有输入并给出响应

### 实际示例
- 发送一个部署错误截图
- Prompt: "While trying to deploy GPT 5.5 in Microsoft Foundry, I'm getting the attached error"
- 模型能读取图片中的错误信息并给出解决方案

### Model Card
- 查看 Model Card 可了解模型支持的输入/输出类型
- GPT-5.4：输入 = text + images，输出 = text

## 考试要点

- Multimodal = 模型接受多种输入类型（文本 + 图像 + 音频等）
- GPT-5.4 支持文本和图像输入，输出仅文本
- Model Card 说明模型的输入/输出能力
- 在 Playground 中可直接附加文件测试多模态功能

## English Short Summary

Multimodal concept: modern models accept multiple input types beyond text. GPT-5.4 supports text + image input. In Playground: attach image files alongside text prompts → model analyzes both and responds. Example: send error screenshot with description → model reads the error in the image and provides solutions. Check Model Card for supported input/output types.
