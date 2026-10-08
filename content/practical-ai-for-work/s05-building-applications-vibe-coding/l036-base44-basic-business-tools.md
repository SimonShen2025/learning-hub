---
title: "Base44 - Basic Business Tools"
lectureId: 36
section: 5
sectionTitle: "Building applications using AI - Vibe coding"
date: "2026-10-08"
tags: ["base44", "vibe-coding", "application-prototyping"]
---

## 中文短总结

Base44 将自然语言需求转成带界面和业务功能的应用原型。先整理功能清单并让 AI 协助完善 prompt，再生成、测试每个页面；遇到 404 等问题，提供明确复现信息并迭代修复。

## 中文长总结

Base44 示例从业务生产力应用的功能列表开始，先让 ChatGPT 把需求整理为清晰 prompt，再交给 Base44 生成应用。课程展示 dashboard、线索、时间记录、费用等页面，并介绍用户、数据、认证和发布设置。

生成结果并非一次完成：示例中的 time tracking 页面最初返回 404。通过指出问题并使用平台的 AI 修复功能，迭代后才恢复工作。这说明每个路由、表单和数据操作都应实际测试，而不能只检查首页视觉效果。

平台集成的数据存储和认证可降低原型集成成本，但发布前仍需核实数据模型、访问控制、认证配置、隐私和部署范围。检查示例数据是否为虚构，并确认用户只能访问授权数据。

## English Short Summary

Base44 turns a structured feature list into an application prototype with UI and built-in services. Test every route and workflow; the demo's time-tracking page initially returned 404. Review authentication, data access, privacy, and sample data before publishing.