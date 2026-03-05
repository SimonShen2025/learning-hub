---
title: "DDoS Protection Best Practices"
lectureId: 312
section: "s26"
sectionTitle: "AWS Security & Encryption: KMS, SSM Parameter Store, Shield, WAF"
date: "2026-03-05"
tags: [ddos, best-practices, architecture, cloudfront, global-accelerator, waf, shield]
---

## 中文短总结

DDoS 防护最佳实践（四层防御）：①**Edge 缓解**：CloudFront（Edge 分发+Shield）、Global Accelerator（固定 IP+Shield）、Route 53（全局 DNS+DDoS 防护）②**基础设施防御**：CloudFront/GA/Route 53/ELB 吸收流量+EC2 Auto Scaling 弹性扩展+ELB 分散流量③**应用层防御**：CloudFront 提供静态内容+WAF 过滤恶意请求（Rate-Based 规则自动阻止恶意 IP）+Shield Advanced 自动创建 WAF 规则④**减少攻击面**：隐藏后端资源（CloudFront/API GW/ELB 前置）、安全组/NACL 过滤、Elastic IP 用 Shield Advanced 保护、API GW 自带 Rate Limiting/Header 过滤/API Key。

## 中文长总结

DDoS 防护架构的全面最佳实践（解决方案架构师视角）。

**典型架构：**
```
Route 53 → CloudFront （+ WAF）→ ALB / Global Accelerator → EC2 ASG
           CloudFront → API Gateway → Lambda/Backend
```

**四层防御：**

**1. Edge Location 缓解（BP1/BP3/BP6）：**
- **CloudFront**：Edge 分发 + Shield Standard 自动防护 SYN/UDP floods
- **Global Accelerator**：边缘固定 IP + Shield DDoS 防护（后端不兼容 CF 时使用）
- **Route 53**：全局 DNS + DDoS 防护

**2. 基础设施层防御（BP1/BP3/BP6）：**
- CloudFront/GA/Route 53/ELB 在流量到达 EC2 前吸收大部分
- **EC2 Auto Scaling**：自动扩展应对突发流量
- **ELB**：分散请求到多 EC2，每个实例流量可控

**3. 应用层防御（BP1/BP2）：**
- CloudFront 提供静态内容（减轻后端压力）
- WAF 过滤恶意请求：
  - Rate-Based Rules 自动阻止高频 IP
  - 托管规则阻止恶意 IP/匿名 IP
  - CloudFront 国家地理阻止
- **Shield Advanced**：自动创建 WAF L7 缓解规则

**4. 减少攻击面（BP1/BP4/BP6）：**
- 隐藏后端（CloudFront/API GW/ELB 前置）
- 安全组/NACL 按 IP 过滤
- Elastic IP → Shield Advanced 保护
- API Gateway：Rate limiting + Header 过滤 + API Key + 端点类型控制

## 考试要点

- DDoS 防御 = 多层递进（Edge → 基础设施 → 应用 → 攻击面）
- Edge 缓解：CloudFront + GA + Route 53
- WAF Rate-Based Rules 自动阻止恶意 IP
- Shield Advanced 自动 WAF L7 规则
- 隐藏后端资源 = 减少攻击面

## English Short Summary

DDoS protection best practices (four-layer defense): (1) **Edge mitigation**: CloudFront (Edge distribution + Shield), Global Accelerator (fixed IP + Shield), Route 53 (global DNS + DDoS); (2) **Infrastructure defense**: services absorb traffic before EC2 + Auto Scaling + ELB distribution; (3) **Application layer**: CloudFront serves static content + WAF filters malicious requests (rate-based rules auto-block bad IPs) + Shield Advanced auto-creates L7 WAF rules; (4) **Reduce attack surface**: hide backend with CloudFront/API GW/ELB, Security Groups/NACLs, Elastic IP with Shield Advanced, API Gateway rate limiting/API keys.
