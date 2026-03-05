---
title: "CloudTrail vs CloudWatch vs Config"
lectureId: 284
section: "s24"
sectionTitle: "AWS Monitoring & Audit: CloudWatch, CloudTrail & Config"
date: "2026-03-05"
tags: [cloudwatch, cloudtrail, config, comparison]
---

## 中文短总结

三大监控服务对比（考试高频）：**CloudWatch** = 性能指标（CPU/网络）+ Dashboard + 日志聚合分析 + 事件/告警 | **CloudTrail** = 记录所有 API 调用审计（谁做了什么），全局服务 | **Config** = 记录资源配置变更 + 合规规则评估 + 变更/合规时间线。ELB 示例：CloudWatch 监控连接数/错误率/性能仪表板；Config 跟踪安全组规则/配置变更/合规规则（如必须有 SSL 证书、禁止未加密流量）；CloudTrail 记录谁修改了安全组/SSL 证书等。三者互补使用。

## 中文长总结

三大监控服务的区别是考试热门题目，三者互补使用。

**服务定位对比：**

| 服务 | 核心功能 | 关键词 |
|------|---------|--------|
| **CloudWatch** | 性能指标、Dashboard、日志聚合分析、事件/告警 | **性能监控** |
| **CloudTrail** | 记录所有 API 调用（谁做了什么），全局服务 | **API 审计** |
| **Config** | 记录配置变更、评估合规规则、变更/合规时间线 | **配置合规** |

**ELB 典型场景对比：**

| 服务 | ELB 应用场景 |
|------|------------|
| **CloudWatch** | 监控入站连接数、错误码百分比、性能 Dashboard |
| **Config** | 跟踪安全组规则变更、ELB 配置变更、合规规则（如必须有 SSL 证书、禁止未加密流量） |
| **CloudTrail** | 记录谁修改了安全组规则、谁更换了 SSL 证书 |

**简记：**
- 性能怎么样？→ CloudWatch
- 谁做了什么？→ CloudTrail
- 配置是否合规？→ Config

## 考试要点

- CloudWatch = 性能指标 + 日志 + 告警
- CloudTrail = API 调用审计（谁做了什么）
- Config = 配置变更 + 合规评估
- 三者互补：CloudWatch 看性能、CloudTrail 看操作、Config 看合规
- ELB 示例是理解三者区别的最佳方式

## English Short Summary

Three monitoring services comparison (exam favorite): **CloudWatch** = performance metrics (CPU/network) + dashboards + log aggregation/analysis + alerts | **CloudTrail** = records all API calls for audit (who did what), global service | **Config** = records resource configuration changes + evaluates compliance rules + change/compliance timeline. ELB example: CloudWatch monitors connections/error rates; Config tracks security group rules/config changes/compliance (SSL cert required, no unencrypted traffic); CloudTrail records who changed security groups/certificates. All three are complementary.
