---
title: "Unit 17: Multimodal Integration – Vision, Speech, Document Intel"
lectureId: 38
section: 2
sectionTitle: "Code Walkthroughs"
date: "2026-07-01"
tags:
  - multimodal
  - azure-ai-vision
  - azure-ai-speech
  - document-intelligence
  - grounding
  - lab
---

## 中文短总结

LLM **无法直接**看图像/听音频/读 PDF；通过 **Azure AI Vision**、**Speech**、**Document Intelligence** 将多模态输入转为 text，再作为 grounding context 传给 agent。三个服务均部署 **Free tier**（每订阅各限一个实例）。

## 中文长总结

### Bicep 新增资源

| 服务 | 用途 | Tier |
|------|------|------|
| **Azure AI Vision** | OCR、caption、tags、objects | F0 (free) |
| **Azure AI Speech** | Speech-to-text / text-to-speech | F0 |
| **Document Intelligence** | Invoice/receipt/ID 结构化提取 | F0 |

- Foundry + Project + Content Safety + 1 LLM（同前）
- Outputs：各 endpoint + API key；Speech 仅需 **region + key**（无 endpoint）

### Free Tier 限制

- 每类 cognitive service **仅一个** F0 实例
- 删除 deployment 后须**单独删除** cognitive service 资源才能 redeploy
- Shell script 追加三条 delete 命令

### 核心架构模式

```
Multimodal input → Azure AI Service → text description → append to messages → LLM
```

**BasicAgent**：system instructions + AI service response + user message → LLM

### Azure AI Vision

```python
result = vision_client.analyze(
    image_data=image_bytes,
    visual_features=[VisualFeatures.READ, VisualFeatures.TAGS]  # caption 可能 region 不可用
)
# 提取 tags (indoor, display device...) + OCR text → 格式化 string
```

- Caption 在某些 region 不可用 → 用 **tags + OCR** 替代
- 演示：broken TV 图片 → tags 识别为 "display device"（非完美但可用）

### Azure AI Speech

```python
speech_config = speechsdk.SpeechConfig(subscription=key, region=region)
audio_config = speechsdk.audio.AudioConfig(filename="recording.wav")
recognizer = speechsdk.SpeechRecognizer(speech_config, audio_config)
result = recognizer.recognize_once_async().get()
# result.text = transcribed text
```

- **WAV** 格式可靠；MP3 可能有兼容问题
- Agent "听"音频 = STT 转 text 再送 LLM

### Document Intelligence

```python
poller = doc_intel_client.begin_analyze_document(
    model_id="prebuilt-invoice",  # or receipt, idDocument
    document=pdf_bytes
)
result = poller.result()
# 提取 vendor, customer, total, date → text summary → LLM
```

- 模型映射：invoice / receipt / idDocument
- 可输出全部 JSON 或提取 key fields

### Multimodal Router

`process_multimodal_request(content_type, path)`:
- `image` → analyze_image
- `audio` → speech_to_text
- `pdf/invoice` → analyze_document

## 考试要点

- LLM 默认**不能**直接处理 image/audio/PDF；需 Azure AI Services 预处理为 text
- Vision：OCR (read)、caption、tags；region 限制
- Speech：SpeechRecognizer (input) vs SpeechSynthesizer (output)
- Document Intelligence：prebuilt models for structured docs
- 多模态 = **grounding** 模式（类似 RAG，但直接转换输入）
- Free tier 单实例限制；删除需手动清理 cognitive services
- 可扩展为 tool definitions 让 agent 自行选择何时调用

## English Short Summary

Unit 17 integrates Azure AI Vision (image tags/OCR), Speech (STT from WAV), and Document Intelligence (invoice extraction) to convert multimodal inputs into text grounding for a basic LLM agent. LLMs cannot natively see/hear/read documents—specialized Azure services preprocess to text. All three use F0 free tier (one instance each). Exam focus: multimodal-as-grounding pattern, service selection, Speech region+key vs endpoint, and Document Intelligence prebuilt models.
