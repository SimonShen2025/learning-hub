---
title: "Follow-Along: Building a Fitness Coach Gem (part 2)"
lectureId: 29
section: 3
sectionTitle: "Working with Gemini Canvas and Gems"
date: "2026-10-14"
tags: [gemini-gems, image-generation, prompt-design]
---

## 中文短总结

Gem 的知识库会将参考文件转为供模型检索的文本信息，而图像生成模型不一定能看到原图像素。因此，“参考知识库中的图片风格”可能只得到模糊描述。更可靠的做法是把布局、字体、配色和氛围写成明确的视觉规格，再用新对话测试和迭代。

## 中文长总结

- Gem 使用知识文件时，模型可能提取或概括其中信息供后续回答；这与图像生成模型直接获得原始图像像素并不等价。
- 因此，单写“匹配知识库参考图”可能无法复现布局或风格，尤其当生成流程只收到文本摘要时。
- 将隐含参考转化为明确规格：描述布局、视觉层级、字体、色彩、背景、质感及整体氛围，并把规则加入 Gem 指令。
- 可先让 Gemini 单独分析参考图并产出视觉描述，再将描述整理成可执行的约束。
- 通过新对话重新测试，比较结果与参考图的布局和视觉层级是否接近；再按差异调整规格，而不是期待模型自动访问原始像素。

## English Short Summary

Knowledge-base images may be summarized as text rather than passed as raw pixels to an image-generation model. Replace vague references with an explicit visual specification covering layout, typography, color, and atmosphere, then test and refine it.