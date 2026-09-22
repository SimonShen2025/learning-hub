---
title: "Understand Feature Flags in Azure App Configuration"
lectureId: 128
section: 14
sectionTitle: "Application Settings and Configuration with Azure App Configuration"
date: "2026-09-22"
tags: ["azure-app-configuration", "feature-flags", "blue-green-deployment", "ab-testing"]
---

## 中文短总结

功能标志（Feature Flag）支持在不重新部署代码的前提下，通过开关切换应用行为，典型场景是 A/B 测试和渐进式发布（如从 GPT-4.1 灰度切换到 GPT-5.2 Chat）。应用代码中通过 App Configuration SDK 读取标志值（如 `use_new_model`），根据布尔值决定调用哪个模型；只需在门户切换标志开关即可实时生效，无需重新部署，从而降低发布风险，出现问题时也能快速回滚。

## 中文长总结

### 功能标志解决的问题

- 场景：生产环境（"绿色部署"）中的 Python 应用当前调用 GPT-4.1 模型，希望逐步切换到 GPT-5.2 Chat，先收集用户反馈再决定是否全量切换
- 传统做法需要修改代码并重新部署才能切换模型；而功能标志允许**不修改代码、不重新部署**即可控制这一行为

### 工作原理

- 在应用代码中借助 App Configuration SDK 读取某个功能标志（如 `use_new_model`）的布尔值
- 若标志为 true，应用切换到调用新模型（GPT-5.2 Chat），相当于从"绿色部署"切换为"蓝色部署"，形成蓝绿部署（Blue-Green Deployment）/ A-B 测试的效果
- 若标志为 false，应用继续使用旧模型（GPT-4.1）

### 优势

- 无需重新部署代码即可启用或禁用某项应用功能
- 降低发布风险：一旦发现新功能（新模型）存在问题，只需在 Azure 门户将标志切回 false，即可让所有应用实例立即回退到旧行为，实现快速回滚

## English Short Summary

Feature flags let applications toggle behavior without redeploying code, commonly used for A/B testing and gradual rollouts (e.g., progressively switching from GPT-4.1 to GPT-5.2 Chat). Application code reads a boolean flag (e.g., `use_new_model`) via the App Configuration SDK to decide which model to call — effectively a blue-green deployment. Flipping the flag in the portal takes effect immediately across all instances, reducing deployment risk and enabling rapid rollback if issues arise.
