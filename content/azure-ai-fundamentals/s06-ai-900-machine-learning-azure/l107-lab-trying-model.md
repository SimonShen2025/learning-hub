---
title: "Lab - Binary Classification Model - Trying Out Your Model"
lectureId: 107
section: 6
sectionTitle: "AI-900 - Describe fundamental principles of machine learning on Azure"
date: "2026-06-10"
tags: [model-consumption, endpoint, curl, json, lab]
---

## 中文短总结

调用已部署模型：1) 准备 JSON 输入（name-value pairs：age, work_class, education 等）保存为 payload.json；2) 使用 curl 命令发送 HTTP POST 请求到 endpoint（公网 IP:80）+ Authentication Key；3) 获得预测结果（income ≤50K or >50K）。这就是 ML 模型消费的完整流程：训练 → 部署 → 通过 API 调用。

## 考试要点

- 模型通过 REST API（HTTP 请求）消费
- 输入：JSON 格式（name-value pairs）
- 认证：Primary/Secondary Key
- 端点：公网 IP + Port 80
- 完整流程：训练 → 部署 → API 调用 → 获取预测

## English Short Summary

Consume deployed model: 1) Prepare JSON input (name-value pairs: age, work_class, education, etc.) as payload.json; 2) Use curl to send HTTP POST to endpoint (public IP:80) with authentication key; 3) Get prediction result (income ≤50K or >50K). Full ML consumption flow: train → deploy → API call → get prediction.
