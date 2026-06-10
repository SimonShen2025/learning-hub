---
title: "Lab - Azure Speech - Python - Speech to Text"
lectureId: 54
section: 3
sectionTitle: "AI-901 - Implement AI solutions - Azure AI Services"
date: "2026-06-10"
tags: [azure-speech, python, speech-to-text, sdk, lab]
---

## 中文短总结

Python 代码实现 Speech-to-Text。使用 `azure.cognitiveservices.speech` SDK（非 OpenAI SDK）。步骤：pip install azure-cognitiveservices-speech → 配置 key 和 region（从 Foundry 首页获取）→ 创建 SpeechConfig → 创建 AudioConfig（指定音频文件）→ 创建 SpeechRecognizer → 调用 recognize_once_async() → 获取转录文本。Key 和 region 从 Microsoft Foundry 首页获取。

## 中文长总结

### 准备工作
```bash
pip install azure-cognitiveservices-speech
```

### 代码结构
```python
import azure.cognitiveservices.speech as speechsdk

# 配置
speech_config = speechsdk.SpeechConfig(
    subscription="<FOUNDRY_KEY>",
    region="<REGION>"  # e.g., "eastus2"
)

# 音频输入
audio_config = speechsdk.AudioConfig(filename="<AUDIO_FILE>")

# 创建识别器
recognizer = speechsdk.SpeechRecognizer(
    speech_config=speech_config,
    audio_config=audio_config
)

# 执行识别
result = recognizer.recognize_once_async().get()
print(result.text)
```

### 关键点
- 使用独立的 Speech SDK（非 OpenAI SDK）
- Key 和 Region 从 Foundry 首页 → Home tab 获取
- 不再需要单独创建 Speech 资源
- `recognize_once_async()` 识别一段语音
- 支持多种音频格式

## 考试要点

- Speech SDK 包：`azure.cognitiveservices.speech`
- SpeechConfig 需要 subscription key + region
- AudioConfig 指定输入音频文件
- SpeechRecognizer 执行语音转文本
- Key/Region 从 Microsoft Foundry 资源获取

## English Short Summary

Python Speech-to-Text using `azure.cognitiveservices.speech` SDK (not OpenAI). Steps: install package → configure SpeechConfig with Foundry key + region → create AudioConfig (specify audio file) → create SpeechRecognizer → call recognize_once_async() → get transcribed text. Key and region obtained from Microsoft Foundry home page.
