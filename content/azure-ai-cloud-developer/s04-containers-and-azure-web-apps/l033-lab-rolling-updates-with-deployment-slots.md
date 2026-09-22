---
title: "Lab: Rolling Updates with Deployment Slots (Hands-On Lab)"
lectureId: 33
section: 4
sectionTitle: "Containers and Azure Web Apps"
date: "2026-09-22"
tags: ["azure-app-service", "deployment-slots", "rolling-updates", "hands-on-lab"]
---

## 中文短总结

本实验将 App Service Plan 升级为 Premium 层（v3 t0v3，约 $64.97/月）以启用部署槽，创建"staging"槽并克隆生产环境设置，在 staging 槽中将模型从 GPT-4.1 改为 GPT-5.2 供 QA 独立测试，再通过流量分配（如 20/80、50/50、80/20 直至 100/0）逐步将流量从生产槽切换到 staging 槽，实现平滑上线。

## 中文长总结

### 升级到 Premium 层

- 部署槽功能仅 Premium 层支持，需从 Basic/Standard 升级（示例选择最便宜的 Premium v3 t0v3，约 $64.97/月）
- 提醒：实验结束后应降级或删除该 Plan 以避免额外费用

### 创建 Staging 槽

- 在"部署槽"区域添加名为 "staging" 的槽，生成独立 URL（如 `<app>-staging.azurewebsites.net`）
- 创建时可选择克隆生产版本的设置（健康检查、环境变量等）
- 新增槽后，流量分配默认生产槽 100%、staging 槽 0%

### 验证与切换流程

1. 在 staging 槽的环境变量中，将模型名从 GPT-4.1 改为 GPT-5.2
2. 将 staging 槽独立 URL 提供给 QA/测试团队进行验证（此时通过该独立 URL 访问 100% 命中 staging 版本）
3. QA 确认无误后，在主 URL 的流量分配中逐步调整比例（如 20% → staging / 80% → production，再到 50/50、80/20），实现渐进式切换
4. 最终将 100% 流量切至 staging（GPT-5.2）版本，0% 留给生产（GPT-4.1）版本，随后可移除旧版本实例

## 考试要点

- 部署槽的流量分配可按百分比逐步调整，实现渐进式上线（灰度发布）
- 部署槽仅 Premium 计划支持，使用后应及时降级避免额外成本

## English Short Summary

Hands-on lab upgrading the App Service Plan to Premium (v3 t0v3, ~$64.97/month) to enable deployment slots, creating a "staging" slot cloned from production settings, switching the staging slot's model from GPT-4.1 to GPT-5.2 for independent QA testing via its own URL, then gradually shifting traffic allocation on the main URL (e.g., 20/80 → 50/50 → 80/20 → 100/0) from production to staging to achieve a smooth, near-zero-downtime rollout.
