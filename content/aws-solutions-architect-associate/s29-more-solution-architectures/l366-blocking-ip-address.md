---
title: "Blocking an IP Address in AWS"
lectureId: 366
section: "s29"
sectionTitle: "More Solution Architectures"
date: "2026-03-05"
tags: [ip-blocking, nacl, security-group, waf, cloudfront, alb]
---

## 中文短总结

在 AWS 中阻止 IP 的分层防御。**EC2 直接暴露**：①NACL（子网级，有 Deny） → ②SG（实例级，仅 Allow）→ ③EC2 防火墙软件（CPU 成本）。**ALB/NLB 架构**：NACL（公有子网）→ ALB SG → EC2 SG（仅允许 ALB）。**ALB + WAF**：WAF 做 IP 过滤（更强大，有成本）。**CloudFront + ALB**：NACL 无用（流量来自 CloudFront Edge IP 不是客户端 IP）→ ALB SG 允许 CloudFront 公共 IP → 用 **CloudFront Geo Restriction** 封锁国家 + **WAF IP 过滤**。

## 中文长总结

AWS 网络安全分层阻止 IP：

**场景 1：EC2 直接暴露：**
```
客户端 → NACL（Deny/Allow）→ SG（Allow only）→ EC2（防火墙软件）
```

**场景 2：ALB + EC2：**
```
客户端 → NACL → ALB (SG) → EC2 (SG: 仅允许 ALB)
                 ↓
              + WAF → IP 过滤
```
- EC2 在私有子网，SG 仅允许 ALB
- ALB + WAF = 更强 IP 过滤

**场景 3：CloudFront + ALB：**
```
客户端 → CloudFront → ALB → EC2
              ↓
    Geo Restriction（封锁国家）
    + WAF（IP 过滤）
```
- **NACL 无效**：流量来自 CloudFront Edge IP
- ALB SG 必须允许所有 CloudFront 公共 IP
- 防御靠 **Geo Restriction**  + **WAF**

**各层防御对比：**

| 层级 | 工具 | 能力 |
|------|------|------|
| 子网 | **NACL** | Deny + Allow（无 CloudFront 场景有效） |
| 实例 | **SG** | Allow only |
| ALB | **WAF** | IP 过滤 + SQL 注入 + XSS 等 |
| Edge | **CloudFront** | Geo Restriction |
| EC2 | 防火墙软件 | 完全自定义（CPU 成本） |

## 考试要点

- NACL = 唯一可以 Deny IP 的网络层
- SG 只能 Allow，不能 Deny
- CloudFront 前面 NACL 无效（IP 是 CloudFront Edge 的）
- WAF + CloudFront/ALB = 最佳 IP 过滤方案
- CloudFront Geo Restriction = 封锁国家

## English Short Summary

IP blocking in AWS — layered defense. **Direct EC2**: NACL (deny/allow) → SG (allow only) → EC2 firewall software. **ALB architecture**: NACL → ALB SG → EC2 SG (ALB only) + optional **WAF** (IP filtering). **CloudFront + ALB**: NACL ineffective (CloudFront Edge IPs, not client IPs) → use **Geo Restriction** (block countries) + **WAF** (IP filtering). NACL is the only layer that can explicitly DENY. SG is allow-only.
