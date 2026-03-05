---
title: "Security Groups & Classic Ports Overview"
lectureId: 35
section: 5
sectionTitle: "EC2 Fundamentals"
date: "2026-03-05"
tags: ["ec2", "security-group", "firewall", "ports", "ssh", "http", "https"]
---

## 中文短总结

安全组（Security Group）是 EC2 实例的防火墙，控制入站（Inbound）和出站（Outbound）流量。规则仅包含允许（Allow），通过 IP 地址或其他安全组引用控制访问。安全组可跨多个实例使用，绑定到区域/VPC。重要排障：超时=安全组问题，连接被拒=应用问题。默认入站全部阻止，出站全部允许。考试必记端口：SSH(22)、FTP(21)、SFTP(22)、HTTP(80)、HTTPS(443)、RDP(3389)。

## 中文长总结

**安全组核心概念：**
- 安全组是 EC2 的防火墙，控制进出流量
- 仅包含**允许规则**（Allow Rules），无显式拒绝
- 规则可引用 IP 地址（IPv4/IPv6）或其他安全组

**规则结构：**
- Type（类型）+ Protocol（协议，如 TCP）+ Port（端口）+ Source（来源 IP 范围）
- `0.0.0.0/0` = 任何 IP 地址

**重要特性：**
- 一个安全组可附加到多个实例，一个实例可有多个安全组
- 安全组绑定到**区域+VPC**，换区域需重建
- 安全组在 EC2 外部运行——被阻止的流量实例完全看不到
- **默认规则**：入站全部阻止，出站全部允许

**排障关键：**
- **超时（Timeout）**= 100% 是安全组问题
- **连接被拒（Connection Refused）**= 安全组正常，应用层问题

**安全组互相引用：**
- 安全组规则可引用其他安全组（而非 IP），实现基于安全组的访问控制
- 典型场景：负载均衡器架构中，后端实例允许负载均衡器安全组的流量

**考试必记端口：**
| 端口 | 协议 | 用途 |
|------|------|------|
| 22 | SSH | Linux 实例远程登录 |
| 21 | FTP | 文件传输 |
| 22 | SFTP | 安全文件传输（基于 SSH） |
| 80 | HTTP | 不安全的 Web 访问 |
| 443 | HTTPS | 安全的 Web 访问 |
| 3389 | RDP | Windows 实例远程桌面 |

## 考试要点

- 安全组仅有 Allow 规则，无 Deny
- 超时 = 安全组问题；连接被拒 = 应用问题
- 默认：入站全阻止，出站全允许
- 安全组绑定到区域 + VPC
- 安全组可以互相引用（适用于 ELB 架构）
- 必记端口：SSH=22, HTTP=80, HTTPS=443, RDP=3389

## English Short Summary

Security Groups are EC2 firewalls controlling inbound/outbound traffic with allow-only rules referencing IPs or other security groups. Bound to region/VPC, they can attach to multiple instances. Key troubleshooting: timeout = security group issue; connection refused = application issue. Default: all inbound blocked, all outbound allowed. Essential ports: SSH(22), FTP(21), SFTP(22), HTTP(80), HTTPS(443), RDP(3389).
