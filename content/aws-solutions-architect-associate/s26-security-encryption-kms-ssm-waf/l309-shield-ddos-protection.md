---
title: "Shield - DDoS Protection"
lectureId: 309
section: "s26"
sectionTitle: "AWS Security & Encryption: KMS, SSM Parameter Store, Shield, WAF"
date: "2026-03-05"
tags: [shield, ddos, protection, waf]
---

## 中文短总结

AWS Shield 提供 DDoS 防护。两个层级：①**Shield Standard**（免费，所有客户默认启用）——保护 SYN/UDP flooding、反射攻击、Layer 3/4 攻击②**Shield Advanced**（$3,000/月/组织）——更高级 DDoS 防护（EC2/ELB/CloudFront/Global Accelerator/Route 53），24/7 DDoS 响应团队（DRT），攻击导致的额外费用保护，**自动创建 WAF 规则**缓解 Layer 7 攻击。

## 中文长总结

AWS Shield 是 DDoS（分布式拒绝服务）防护服务。

**DDoS 攻击原理：** 大量计算机同时发送海量请求 → 压垮基础设施 → 真实用户无法访问

**两个层级对比：**

| 特性 | Shield Standard | Shield Advanced |
|------|----------------|-----------------|
| 费用 | **免费** | **$3,000/月/组织** |
| 激活 | 默认启用 | 需订阅 |
| 防护级别 | SYN/UDP flooding, 反射攻击, L3/L4 | 更高级 DDoS（L3-L7） |
| 保护资源 | 所有 | EC2, ELB, CloudFront, Global Accelerator, Route 53 |
| DDoS 响应团队 | ❌ | ✅ 24/7 DRT |
| 费用保护 | ❌ | ✅ 攻击导致的额外费用保护 |
| 自动 WAF 规则 | ❌ | ✅ 自动创建 WAF 规则缓解 L7 攻击 |

## 考试要点

- Shield Standard = 免费，默认启用，L3/L4
- Shield Advanced = $3,000/月，高级防护 + DRT + 费用保护 + 自动 WAF 规则
- 自动 WAF 规则 = Layer 7 DDoS 缓解

## English Short Summary

AWS Shield provides DDoS protection. Two tiers: (1) **Shield Standard** (free, default for all) — protects against SYN/UDP floods, reflection attacks, Layer 3/4; (2) **Shield Advanced** ($3,000/month/org) — advanced DDoS on EC2/ELB/CloudFront/Global Accelerator/Route 53, 24/7 DDoS Response Team, fee protection during attacks, **auto-creates WAF rules** for Layer 7 mitigation.
