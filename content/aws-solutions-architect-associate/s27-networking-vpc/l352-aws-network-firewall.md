---
title: "AWS Network Firewall"
lectureId: 352
section: "s27"
sectionTitle: "Networking - VPC"
date: "2026-03-05"
tags: [network-firewall, vpc, firewall-manager, layer3-layer7, gateway-load-balancer]
---

## 中文短总结

AWS Network Firewall：保护整个 VPC 的 L3-L7 防火墙（从 VPC 级别到任何方向）。可检查 VPC-to-VPC、internet outbound/inbound、Direct Connect、Site-to-Site VPN 流量。内部使用 **Gateway Load Balancer**。支持 **1000+ 规则**：IP/端口/协议过滤、域名过滤（.mycorp.com 或第三方域名）、正则表达式匹配。匹配规则后可 allow/drop/alert。活跃流量检查（防止入侵）。日志发送到 S3/CloudWatch/Firehose。通过 **AWS Firewall Manager** 跨账号集中管理。

## 中文长总结

AWS Network Firewall 是 VPC 级别的全面网络安全方案。

**覆盖范围：**
```
互联网 ←→ Network Firewall ←→ VPC
           ↕
其他 VPC / Direct Connect / Site-to-Site VPN
```

**底层实现：** 使用 **AWS Gateway Load Balancer**（透明代理）

**规则能力（1000+ 条规则）：**

| 规则类型 | 示例 |
|---------|------|
| **IP & 端口过滤** | 阻止特定 CIDR 的流量 |
| **协议过滤** | 仅允许 HTTPS |
| **域名过滤** | 允许 *.mycorp.com，阻止其他 |
| **正则匹配** | 匹配 payload 中的模式 |

**规则动作：** Allow / Drop / Alert

**与其他防火墙对比：**

| 防火墙 | 工作层级 | 作用范围 |
|--------|---------|---------|
| **Security Group** | L4 | 实例/ENI 级别 |
| **NACL** | L4 | 子网级别 |
| **AWS WAF** | L7（HTTP） | ALB/CloudFront/API GW |
| **AWS Network Firewall** | **L3-L7** | **整个 VPC** |

**日志目标：** S3 / CloudWatch Logs / Kinesis Data Firehose

**跨账号管理：** AWS Firewall Manager 集中管理所有账号的 Network Firewall 规则。

## 考试要点

- Network Firewall = VPC 级别 L3-L7 防火墙
- 内部使用 Gateway Load Balancer
- 支持 IP/端口/协议/域名/正则过滤
- Firewall Manager 跨账号管理
- 与 WAF（仅 HTTP L7）/ NACL（仅 L4 子网级）/ SG（仅 L4 实例级）区分

## English Short Summary

AWS Network Firewall: VPC-level L3-L7 firewall protecting all VPC traffic (internet, VPC-to-VPC, DX, VPN). Uses **Gateway Load Balancer** internally. Supports 1000+ rules: IP/port/protocol filtering, domain name filtering, regex pattern matching. Actions: allow/drop/alert. Active flow inspection. Logs to S3/CloudWatch/Firehose. **Firewall Manager** for cross-account centralized management. Distinguish from WAF (HTTP L7), NACL (L4 subnet), SG (L4 instance).
