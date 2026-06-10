---
title: "Lab - Azure Speech - Python - Text to Speech"
lectureId: 56
section: 3
sectionTitle: "AI-901 - Implement AI solutions - Azure AI Services"
date: "2026-06-10"
tags: [azure-speech, python, text-to-speech, sdk, lab]
---

## 中文短总结

Python 代码实现 Text-to-Speech。使用同一 Speech SDK。配置 SpeechConfig（key + region）→ 选择 voice_name（内置自然声音）→ 创建 AudioOutputConfig（指定输出音频文件名）→ 创建 SpeechSynthesizer → 调用 speak_text() 传入文本 → 生成音频文件。Microsoft 文档列出了所有可用声音的代码。

## 中文长总结

### 代码结构
```python
import azure.cognitiveservices.speech as speechsdk

# 配置
speech_config = speechsdk.SpeechConfig(
    subscription="<KEY>", region="<REGION>"
)
speech_config.speech_synthesis_voice_name = "<VOICE_NAME>"

# 音频输出
audio_config = speechsdk.AudioOutputConfig(filename="output.wav")

# 合成器
synthesizer = speechsdk.SpeechSynthesizer(
    speech_config=speech_config,
    audio_config=audio_config
)

# 合成语音
result = synthesizer.speak_text("Your text here")
```

### 关键区别（vs Speech-to-Text）
| Speech-to-Text | Text-to-Speech |
|----------------|----------------|
| AudioConfig → 输入音频文件 | AudioOutputConfig → 输出音频文件 |
| SpeechRecognizer | SpeechSynthesizer |
| recognize_once_async() | speak_text() |
| 结果是文本 | 结果是音频文件 |

### Voice 选择
- Microsoft Foundry 提供多种自然发音声音
- 通过 speech_synthesis_voice_name 设置
- 文档列出所有可用声音代码

## 考试要点

- Text-to-Speech 使用 SpeechSynthesizer 类
- AudioOutputConfig 指定输出文件
- speak_text() 方法将文本转为语音
- speech_synthesis_voice_name 选择声音
- 同一 SDK：azure.cognitiveservices.speech

## English Short Summary

Python Text-to-Speech using the same Speech SDK. Configure SpeechConfig (key + region) → set voice_name → create AudioOutputConfig (output file) → create SpeechSynthesizer → call speak_text() with text → generates audio file. Multiple natural-sounding voices available via speech_synthesis_voice_name property.
