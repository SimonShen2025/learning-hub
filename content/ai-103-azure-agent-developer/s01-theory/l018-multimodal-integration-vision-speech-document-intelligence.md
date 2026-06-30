---
title: "Unit 17: Multimodal Integration – Vision, Speech & Document Intelligence"
lectureId: 18
section: 1
sectionTitle: "Theory"
date: "2026-07-01"
tags: ["Multimodal", "Azure AI Vision", "Speech Services", "Document Intelligence", "OCR", "SSML"]
---

## 中文短总结

本讲说明 Agent **不能**直接处理图像/语音/文档，需调用独立 API 后将结果传给 LLM。**Azure AI Vision** 提供 caption、OCR、object detection；**AI Speech** 提供 STT（SDK 用 **recognizer**）与 TTS（SDK 用 **synthesizer**，SSML 用 `speak_ssml_async`）；**Document Intelligence**（原 Form Recognizer）用 `begin_analyze_document` 提取 invoice/receipt 等结构化字段。所有服务返回 JSON，应注册为 Agent **tools**。认证用 Managed Identity + Cognitive Services User 角色；监控用 vision/speech/doc intel spans。

## 中文长总结

### 核心认知

- **Multimodal**：Agent 接受/输出多种类型（text、image、audio、document）
- LLM **无法**直接看图像、听语音、读 PDF——必须在 Agent 代码中调用专用 API
- ChatGPT/Gemini 的多模态能力来自后台嵌入的外部工具，非 LLM 本身
- AI-103 相对 AI-102 降低了此类 API 比重，但仍为考点

### Azure AI Vision

- 功能：图像描述、对象检测、**OCR**（含手写）、成人内容评级
- 输入：URL 或 raw binary data
- SDK：`client.analyze(image_url, features=["caption", "read"])`
- 输出 JSON：`caption.text`、`ocrResult.lines`、objects（带 label）
- 原则：只请求需要的 features（降低成本）
- REST endpoint 仍用 `cognitiveservices.azure.com`（旧术语）
- 手写字收据 → Vision OCR；数字化收据 → Document Intelligence 更优且更便宜

### Azure AI Speech

#### Speech-to-Text (STT)

- SDK 关键词：**recognizer** → `speech_recognizer.recognize_once_async()`
- REST endpoint 用 **transcribe**（非 recognizer，考试易混淆）
- 返回 `display_text` + **confidence score**
- 支持 100+ 语言、实时或 batch

#### Text-to-Speech (TTS)

- SDK 关键词：**synthesizer** → `speak_text_async()` 或 `speak_ssml_async()`
- 输出 MP3/WAV，neural voices 自然语音
- **SSML**（Speech Synthesis Markup Language）：控制语速、音调、voice
- SSML 必须用 `speak_ssml_async`，不能用 `speak_text_async`

### Azure AI Document Intelligence

- 原名 **Form Recognizer**，现为 Document Intelligence
- 提取 PDF/Office/图像中的 key-value pairs、tables、text
- Pre-built models：`prebuilt-invoice`、`prebuilt-receipt`、`prebuilt-idDocument`
- Custom/neural models 需少量训练样本
- SDK：`client.begin_analyze_document("prebuilt-invoice", document_bytes)`
- 结果：`poller.result().documents[0].fields`（vendor_name、invoice_total 等 + confidence）

### 集成模式

- 将 Vision/Speech/Doc Intel 注册为 Agent **tools**
- System instruction 引导：「用户上传音频 → 先调用 transcribe tool」
- 这些服务用专用神经网络，**比 LLM 便宜**

### 认证与监控

- 各服务有独立 endpoint + API key → 存 **Key Vault**
- 最佳实践：**Managed Identity** + Cognitive Services User 角色
- Span 命名建议：
  - `vision.analyze`（image size, features, objects detected）
  - `speech.to_text` / `speech.to_speech`（duration, confidence, voice name）
  - `doc.intel.analyze`（model ID, pages, fields count, avg confidence）

## 考试要点

- LLM **不能**直接处理 multimodal 输入，需外部 API
- Vision SDK：`client.analyze()`；OCR 用于手写/截图文本
- Speech STT SDK 用 **recognizer**；REST 用 **transcribe**
- Speech TTS SDK 用 **synthesizer**；SSML 用 `speak_ssml_async`
- Document Intelligence = 原 Form Recognizer；`begin_analyze_document()`
- Pre-built models vs custom/neural models
- 手写收据 → Vision OCR；数字化 invoice/receipt → Document Intelligence
- 所有服务返回 **JSON**，适合 Agent tool 集成
- Endpoint 仍可能显示 `cognitiveservices.azure.com`（旧名）
- Managed Identity + Cognitive Services User 角色
- AI-103 中 multimodal 占比小于 AI-102 但仍有考题

## English Short Summary

This lecture explains that LLMs cannot directly process images, speech, or documents—agents must call separate Azure APIs and pass JSON results to the LLM. Azure AI Vision provides captioning, OCR, and object detection via `client.analyze()`. Azure AI Speech uses recognizer for STT (`recognize_once_async`) and synthesizer for TTS (`speak_text_async` or `speak_ssml_async` for SSML). Document Intelligence (formerly Form Recognizer) extracts structured fields from invoices/receipts via `begin_analyze_document()` with pre-built or custom models. Register these as agent tools with system instruction guidance. All services return JSON. Authentication via Managed Identity; monitoring via standardized spans. Exam tip: SDK uses recognizer/synthesizer; REST STT endpoint uses transcribe.
