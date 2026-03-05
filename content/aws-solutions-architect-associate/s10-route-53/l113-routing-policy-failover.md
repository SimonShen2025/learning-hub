---
title: "Routing Policy - Failover"
lectureId: 113
section: 10
sectionTitle: "Route 53"
date: "2026-03-05"
tags: ["Route 53", "Routing Policy", "Failover", "Disaster Recovery"]
---

## 中文短总结

本讲介绍 Failover（故障转移）路由策略。配置一个 Primary 记录和一个 Secondary（灾备）记录。Primary **必须关联 Health Check**；当 Health Check 判断 Primary 不健康时，Route 53 自动将 DNS 响应切换到 Secondary 记录。只能有一个 Primary 和一个 Secondary。Secondary 可选择性关联 Health Check。演示中通过删除 Primary 实例的安全组 HTTP 规则触发 Health Check 失败，验证了浏览器自动切换到 Secondary 的 us-east-1 实例，恢复安全组后自动切回 Primary。

## 中文长总结

### Failover 路由策略
- **Primary Record**：主记录，**必须关联 Health Check**（强制要求）
- **Secondary Record**：灾备/DR 记录，Health Check 可选
- 只能**一个 Primary + 一个 Secondary**
- Health Check Unhealthy → 自动切换到 Secondary
- Health Check 恢复 Healthy → 自动切回 Primary

### 工作流程
1. 客户端发起 DNS 查询
2. Route 53 检查 Primary 的 Health Check
3. Healthy → 返回 Primary IP
4. Unhealthy → 返回 Secondary IP
5. 客户端连接到对应的实例

## 考试要点

- Primary **必须关联 Health Check**
- 只能一个 Primary + 一个 Secondary
- 自动故障转移，无需人工干预
- Secondary 的 Health Check 是可选的
- 恢复后自动切回 Primary

## English Short Summary

Failover routing configures one Primary and one Secondary (DR) record. The Primary record MUST be associated with a Health Check (mandatory). When the health check reports unhealthy, Route 53 automatically fails over to the Secondary record. Only one Primary and one Secondary are allowed. The demo shows automatic failover when removing the Primary's HTTP security group rule (causing health check failure), and automatic failback when the rule is restored.
