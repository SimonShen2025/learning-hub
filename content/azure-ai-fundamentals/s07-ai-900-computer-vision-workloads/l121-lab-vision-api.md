---
title: "Lab - Calling the Computer Vision API"
lectureId: 121
section: 7
sectionTitle: "AI-900 - Describe features of computer vision workloads on Azure"
date: "2026-06-10"
tags: [rest-api, computer-vision, curl, authentication, lab]
---

## 中文短总结

使用 REST API 调用 Vision 服务。API = Application Programming Interface，两个系统间的通信契约。构造请求：URL（endpoint + feature parameter，如 tags/read/caption）+ Authentication（Subscription Key）+ Image data。Features parameter 决定使用哪个功能（OCR=read, tags=tags）。可使用任何编程语言（C#, Java, Python）或 curl/PowerShell。

## 考试要点

- REST API 调用 Vision 服务
- URL 结构：endpoint + /vision + /features parameter
- 认证：Subscription Key（Header）
- Features：read（OCR）, tags, caption, objects
- 响应：JSON 格式
- API = Application Programming Interface

## English Short Summary

Call Vision service via REST API. API = communication contract between systems. Request: URL (endpoint + feature parameter like tags/read/caption) + Authentication (Subscription Key) + image data. Features parameter determines which capability. Any language (C#, Java, Python) or curl/PowerShell works.
