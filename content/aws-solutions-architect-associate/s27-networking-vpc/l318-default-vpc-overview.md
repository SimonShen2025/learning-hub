---
title: "Default VPC Overview"
lectureId: 318
section: "s27"
sectionTitle: "Networking - VPC"
date: "2026-03-05"
tags: [vpc, default-vpc, subnet, route-table, internet-gateway]
---

## 中文短总结

每个 AWS 账号自动创建一个默认 VPC（/16 CIDR），包含：每个 AZ 一个子网（/24），默认有 Internet 连接，EC2 实例自动获得公共 IPv4。默认 VPC 包含默认路由表（指向 Internet Gateway）、默认 NACL（允许所有流量）。生产环境建议创建自定义 VPC。子网中每个 /24 有 256 个 IP，但实际可用 251 个（AWS 保留 5 个）。

## 中文长总结

所有新 AWS 账号都会自动创建一个默认 VPC，方便新用户直接使用。

**默认 VPC 特性：**
- CIDR：172.31.0.0/16（65,536 个 IP）
- 每个 AZ 有一个子网（/24 = 256 个 IP，可用 251 个）
- 默认有 Internet 连接
- EC2 实例自动获得**公共 IPv4 地址**和公共/私有 DNS 名称
- 有默认路由表、默认 NACL

**关键组件：**
- **路由表**：包含本地路由 + 指向 Internet Gateway 的默认路由
- **Internet Gateway**：已附加到 VPC，提供互联网访问
- **NACL**：允许所有入站和出站流量
- **子网**：3 个默认子网跨 3 个 AZ

**为什么 AWS 保留 5 个 IP？**
每个子网保留 5 个 IP 地址（首 4 个 + 最后 1 个），所以 /24 的 256 变成 251 可用。

**最佳实践：** 生产环境应创建自定义 VPC，不使用默认 VPC。

## 考试要点

- 默认 VPC 默认有 Internet 连接
- EC2 在默认 VPC 中自动获得公共 IPv4
- 每个子网保留 5 个 IP
- 生产应使用自定义 VPC

## English Short Summary

Every AWS account gets a default VPC (/16 CIDR) with one subnet per AZ (/24), internet connectivity by default, and EC2 instances auto-assigned public IPv4. Includes default route table (pointing to Internet Gateway), default NACL (all traffic allowed). Each subnet reserves 5 IPs. Best practice: create custom VPCs for production.
