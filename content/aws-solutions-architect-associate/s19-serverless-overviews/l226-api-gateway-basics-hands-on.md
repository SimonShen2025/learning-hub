---
title: "API Gateway Basics Hands-On"
lectureId: 226
section: "19"
sectionTitle: "Serverless Overviews from a Solution Architect Perspective"
date: "2026-03-05"
tags: ["api-gateway", "hands-on", "lambda", "rest-api", "proxy-integration", "deployment"]
---

## 中文短总结

API Gateway 控制台实操 — 创建 Regional REST API，配置 Lambda Proxy Integration 集成两个 Lambda 函数（/ 和 /houses 路由返回不同响应）。API Gateway 默认超时 29 秒（不能超过 29 秒，但可设更短）。通过 Lambda 打印 event 可查看 API Gateway 传递的完整请求信息（resource、path、method、headers、query parameters）。部署到 dev 阶段获取 Invoke URL 后可通过浏览器直接访问验证。API Gateway 自动授予 Lambda 调用权限（Resource-based Policy）。

## English Short Summary

API Gateway hands-on: created a Regional REST API with two Lambda integrations (/ returns "hello from Lambda", /houses returns "hello from my pretty house") using Lambda Proxy Integration. API Gateway has a max timeout of 29 seconds. Printing the Lambda event shows full request details (resource, path, method, headers, query parameters) passed by API Gateway. Deployed to "dev" stage to get an invoke URL accessible via browser. API Gateway automatically grants Lambda invoke permissions via a resource-based policy.
