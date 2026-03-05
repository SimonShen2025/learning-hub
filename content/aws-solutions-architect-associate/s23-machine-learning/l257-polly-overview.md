---
title: "Polly Overview"
lectureId: 257
section: "s23"
sectionTitle: "Machine Learning"
date: "2026-03-05"
tags: [polly, ml, text-to-speech, lexicon, ssml]
---

## 中文短总结

Amazon Polly 是 Transcribe 的反向服务，使用深度学习将文本转换为语音。两个定制功能：①Pronunciation Lexicons（发音词典）：自定义特殊词汇/缩写的发音（如 AWS→"Amazon Web Services"），在 SynthesizeSpeech 操作中引用②SSML（语音合成标记语言）：精细控制语音输出，支持强调词语、音标发音、呼吸声、耳语、新闻播报风格等。

## 中文长总结

Amazon Polly 是一项文本转语音（Text-to-Speech）服务，使用深度学习生成自然语音，是 Transcribe 的反向服务。

**核心功能：**
- 将文本转换为逼真的语音输出
- 支持多种语言和声音
- 可创建"会说话的"应用程序

**发音定制功能：**

1. **Pronunciation Lexicons（发音词典）：**
   - 自定义特殊词汇的发音
   - 用例：风格化拼写（Steph4ne → "Stephane"）、缩写展开（AWS → "Amazon Web Services"）
   - 上传 Lexicon 文件后在 SynthesizeSpeech 操作中引用

2. **SSML（Speech Synthesis Markup Language）：**
   - 使用标记语言精细控制语音生成
   - 支持功能：
     - 强调特定词语或短语
     - 音标发音（Phonetic Pronunciation）
     - 呼吸声效果
     - 耳语（Whispering）
     - 新闻播报风格（Newscaster Style）
     - 添加停顿/间隔（Break）

**记忆方法：**
- 特殊词汇/缩写发音 → Pronunciation Lexicons
- 语音风格定制（耳语/强调/音标）→ SSML

## 考试要点

- Polly = 文本→语音（与 Transcribe 相反）
- Pronunciation Lexicons：自定义特殊词汇和缩写的发音
- SSML：精细控制语音输出（强调/耳语/音标/停顿等）
- Lexicons 在 SynthesizeSpeech 操作中使用

## English Short Summary

Amazon Polly converts text to speech using deep learning (opposite of Transcribe). Two customization features: (1) Pronunciation Lexicons for custom pronunciation of stylized words/acronyms (e.g., AWS→"Amazon Web Services"), used in SynthesizeSpeech operations; (2) SSML (Speech Synthesis Markup Language) for fine-grained speech control including emphasis, phonetic pronunciation, breathing sounds, whispering, and newscaster speaking style.
