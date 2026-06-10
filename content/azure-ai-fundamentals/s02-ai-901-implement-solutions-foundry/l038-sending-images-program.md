---
title: "Sending Images to Your AI Model"
lectureId: 38
section: 2
sectionTitle: "AI-901 - Implement AI solutions - Microsoft Foundry"
date: "2026-06-10"
tags: [python, multimodal, image-input, base64, responses-api]
---

## 中文短总结

Python 代码发送图像给模型。两种方式：通过 Image URL（图像托管在网络上）或 Base64 编码（本地文件转为 base64 字符串）。使用 Responses API 时，input 参数结构变为包含 text 和 image 的数组。Microsoft 文档详细说明了 Python 程序中图像输入的格式要求。支持格式：PNG、JPEG、GIF、WebP。

## 中文长总结

### 发送图像的两种方式

**1. Image URL**
- 图像已托管在某个 URL 上
- 直接将 URL 传给模型
- 适合：云端存储的图像

**2. Base64 编码**
- 将本地图像文件转为 base64 字符串
- 程序读取文件 → 编码为 base64 → 嵌入到请求中
- 适合：本地文件

### 代码结构（Responses API）
```python
response = client.responses.create(
    model="<DEPLOYMENT_NAME>",
    input=[
        {
            "role": "user",
            "content": [
                {"type": "input_text", "text": "<PROMPT>"},
                {"type": "input_image", "image_url": "<URL>"}
            ]
        }
    ]
)
```

### 支持的图像格式
- PNG, JPEG, GIF, WebP

### 文档参考
- Microsoft 文档：Azure OpenAI Responses API
- OpenAI 文档：Vision-enabled models

## 考试要点

- 图像输入两种方式：URL 或 Base64
- Responses API 中 input 变为数组结构（包含 text + image）
- 支持格式：PNG, JPEG, GIF, WebP
- 模型需支持 vision（如 GPT-5.4）才能处理图像
- 理解代码结构中 content 数组的 type 字段

## English Short Summary

Sending images to AI models via Python: two methods — Image URL (hosted online) or Base64 encoding (local files). In the Responses API, the input becomes an array with text and image content types. Supported formats: PNG, JPEG, GIF, WebP. The model must be vision-enabled (like GPT-5.4) to process images.
