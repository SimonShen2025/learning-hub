---
title: "Bastion Hosts"
lectureId: 325
section: "s27"
sectionTitle: "Networking - VPC"
date: "2026-03-05"
tags: [bastion-host, ssh, private-subnet, security-group]
---

## 中文短总结

Bastion Host（堡垒机）：部署在**公共子网**中的 EC2 实例，用于 SSH 访问私有子网中的 EC2 实例。用户先 SSH 到 Bastion Host，再从 Bastion Host SSH 到私有实例。**安全组规则**：Bastion Host SG 允许来自公司公网 CIDR 的 SSH（port 22），尽量限制来源 IP；私有实例 SG 允许来自 Bastion Host 私有 IP 或 SG 的 SSH。

## 中文长总结

Bastion Host 是 SSH 访问私有子网 EC2 实例的跳板机。

**架构：**
```
用户（公网）→ SSH → Bastion Host（公共子网）→ SSH → EC2（私有子网）
```

**安全组配置：**

| 组件 | 入站规则 | 说明 |
|------|---------|------|
| **Bastion Host SG** | Port 22 from 公司公网 CIDR | 限制来源 IP，减少攻击面 |
| **私有 EC2 SG** | Port 22 from Bastion Host 私有 IP 或 SG | 只允许 Bastion Host 访问 |

**安全建议：**
- 不要允许 0.0.0.0/0 访问 Bastion Host
- 限制为公司 CIDR 或特定 IP
- Bastion Host 被攻破 = 整个私有基础设施暴露

## 考试要点

- Bastion Host 必须在公共子网
- 用于 SSH 访问私有子网实例
- 限制 Bastion Host SG 的来源 IP

## English Short Summary

Bastion Host: EC2 instance in a **public subnet** used to SSH into EC2 instances in private subnets. Users SSH to Bastion Host first, then SSH to private instances. **Security group rules**: Bastion Host SG allows SSH (port 22) from corporate public CIDR only (restrict source IPs); private instance SG allows SSH from Bastion Host's private IP or SG.
