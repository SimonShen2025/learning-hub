---
title: "AWS Amplify"
lectureId: 382
section: "s30"
sectionTitle: "Other Services"
date: "2026-03-05"
tags: [amplify, web-app, mobile-app, full-stack, elastic-beanstalk]
---

## 中文短总结

AWS Amplify：Web 和移动应用的全栈开发部署工具 — 想象成 **"Web/Mobile 应用的 Elastic Beanstalk"**。提供前端框架库集成（React/Vue/Flutter/React Native 等）。后端自动配置：S3 / Cognito / AppSync / API Gateway / Lambda / DynamoDB 等。**Amplify Studio** 提供可视化开发环境。前端部署到 CloudFront。支持 CI/CD 连接 Git 仓库自动构建部署。关键词：考试中看到全栈 Web/Mobile 开发部署 → 选 Amplify。

## 中文长总结

Amplify 是 AWS 面向前端和移动开发者的一站式平台。

**核心定位：**
- **类比**：Elastic Beanstalk 面向后端 ↔ **Amplify 面向 Web/Mobile**
- **一键式**：前端框架 + 后端服务 + CI/CD + 托管

**自动配置的后端服务：**
| 服务 | 用途 |
|------|------|
| S3 | 文件存储 |
| Cognito | 用户认证 |
| AppSync | GraphQL API |
| API Gateway + Lambda | REST API |
| DynamoDB | 数据库 |

**部署架构：**
```
Git 仓库 → Amplify CI/CD → 构建
  → 前端 → CloudFront（CDN）
  → 后端 → 自动配置各服务
```

## 考试要点

- Amplify = Elastic Beanstalk for Web/Mobile
- 全栈：前端框架 + 后端 AWS 服务 + CI/CD
- 前端 → CloudFront
- 考试看到 Web/Mobile 全栈开发 → Amplify

## English Short Summary

AWS Amplify: full-stack development and deployment for web and mobile apps — think **"Elastic Beanstalk for web/mobile"**. Provides frontend framework libraries (React/Vue/Flutter/React Native). Auto-configures backend: S3/Cognito/AppSync/API Gateway/Lambda/DynamoDB. **Amplify Studio** for visual development. Frontend deploys to CloudFront. CI/CD with Git repo integration. **Exam**: see full-stack web/mobile development → choose Amplify.
