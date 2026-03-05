---
title: "Private vs Public vs Elastic IP"
lectureId: 47
section: 6
sectionTitle: "EC2 - Solutions Architect Associate Level"
date: "2026-03-05"
tags: ["ec2", "networking", "ip", "elastic-ip", "vpc"]
---

## 中文短总结

本讲解释了 AWS 中 Private IP、Public IP 和 Elastic IP 的区别。IPv4 是最常用格式（约 37 亿地址），Public IP 可在互联网上被访问且全球唯一，Private IP 仅在私有网络内部可用，通过 NAT/Internet Gateway 访问外网。EC2 实例停止后重启会更换 Public IP；如需固定公网 IP 可使用 Elastic IP（每账户限 5 个）。但 AWS 建议尽量避免使用 Elastic IP，改用 DNS 域名映射或 Load Balancer，这是更好的架构实践。

## 中文长总结

### IPv4 与 IPv6
- IPv4：四组数字用点分隔（如 192.168.1.1），约 37 亿个公共地址，目前最常用
- IPv6：更长的地址格式，主要用于 IoT 场景，AWS 也支持

### Public IP（公共 IP）
- 可在互联网上被识别和访问
- 全球唯一，不可重复
- 可通过 IP 查找地理位置

### Private IP（私有 IP）
- 仅在私有网络内可识别
- 仅需在同一私有网络内唯一
- 不同私有网络（不同公司）可使用相同的 Private IP
- 通过 NAT 设备和 Internet Gateway 访问互联网
- 只有特定范围的 IP 可用作 Private IP

### Elastic IP（弹性 IP）
- EC2 实例 stop 再 start 后 Public IP 会改变
- Elastic IP 是你拥有的固定 Public IPv4 地址
- 一次只能绑定一个实例
- 可快速在实例间迁移以实现故障转移
- 每账户限制 5 个（可申请增加）
- **AWS 建议避免使用**，应使用 DNS 名称（Route 53）或 Load Balancer

### EC2 默认网络行为
- 默认获得 Private IP（AWS 内部网络）和 Public IP（WWW）
- SSH 只能通过 Public IP 连接（除非有 VPN）
- 停止/启动实例后 Public IP 会变化

## 考试要点

- **Elastic IP 限制**：每账户默认 5 个，是一种不推荐的架构模式
- **最佳实践**：使用随机 Public IP + DNS（Route 53）或 Load Balancer，而非 Elastic IP
- **Private vs Public IP**：Private IP 仅网络内可达，Public IP 全球可达
- **EC2 行为**：停止/启动会更换 Public IP，Private IP 不变
- 无 VPN 时只能用 Public IP 进行 SSH

## English Short Summary

This lecture covers Private, Public, and Elastic IPs in AWS. IPv4 is the most common format with ~3.7B addresses. Public IPs are globally unique and internet-accessible; Private IPs are only reachable within a private network via NAT/Internet Gateway. EC2 instances get new Public IPs after stop/start. Elastic IPs provide fixed public addresses (limit 5/account), but AWS recommends using DNS names (Route 53) or Load Balancers instead — Elastic IPs are considered a poor architectural pattern.
