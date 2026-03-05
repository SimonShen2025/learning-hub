---
title: "Tour of the AWS Console & Services in AWS"
lectureId: 10
section: 3
sectionTitle: "Getting started with AWS"
date: "2026-03-05"
tags: [aws-console, regions, services]
---

## 中文短总结

AWS Console 界面导览：右上角选择 Region（建议选地理位置最近的），通过左上角 Services 菜单或搜索栏查找服务。部分服务（如 Route 53）显示 "Global" 无需选 Region，大部分服务（如 EC2）与所选 Region 绑定。可在 AWS Regional Services 页面查询各 Region 的服务可用性。

## 中文长总结

### Console 基本导航
- **Region 选择器**：右上角，选择地理位置最近的 Region 以降低延迟
- **服务浏览**：左上角 Services 菜单，支持按字母或分类查看
- **搜索栏**：输入服务名即可快速跳转，还可搜索功能、博客、文档等

### 全局服务 vs 区域服务
- **全局服务**：如 Route 53，控制台显示 "Global"，不需要选 Region
- **区域服务**：如 EC2，控制台显示当前 Region 名称，切换 Region 会看到不同资源
- 学习过程中应保持在同一个 Region

### 服务区域可用性
- 不是所有服务在每个 Region 都可用
- 可通过 AWS Regional Services 页面查询

## English Short Summary

AWS Console tour: select closest region (top-right), browse services via menu or search bar. Global services (Route 53) show "Global" — no region needed. Region-scoped services (EC2) display current region and show different resources per region. Check AWS Regional Services page for per-region service availability.
