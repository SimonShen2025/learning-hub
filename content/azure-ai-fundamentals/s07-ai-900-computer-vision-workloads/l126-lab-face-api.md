---
title: "Lab - Recognizing Faces with the Face API"
lectureId: 126
section: 7
sectionTitle: "AI-900 - Describe features of computer vision workloads on Azure"
date: "2026-06-10"
tags: [face-api, rest-api, powershell, lab]
---

## 中文短总结

通过 REST API 调用 Face Service。URL 结构：Foundry endpoint + /face/v1.0/detect + parameters（returnFaceId=false, returnFaceLandmarks=true）。请求：Content-Type: application/octet-stream + Subscription-Key + 图像数据。使用 PowerShell/curl 发送请求。功能有限但演示 API 调用模式。

## English Short Summary

Call Face Service via REST API. URL: Foundry endpoint + /face/v1.0/detect + parameters (returnFaceId=false, returnFaceLandmarks=true). Request: Content-Type: octet-stream + Subscription-Key + image data. Use PowerShell/curl. Limited functionality but demonstrates API call pattern.
