---
title: "NACL & Security Groups"
lectureId: 331
section: "s27"
sectionTitle: "Networking - VPC"
date: "2026-03-05"
tags: [nacl, network-acl, security-group, stateful, stateless, ephemeral-port]
---

## 中文短总结

NACL（Network ACL）是子网级防火墙，**无状态**（入站和出站规则独立评估）。安全组是实例级防火墙，**有状态**（入站允许则出站自动允许）。NACL 规则按编号优先级排序（数字小优先），首个匹配决定结果。**默认 NACL 允许所有流量**。新建 NACL 拒绝所有流量。NACL 最佳用途：**阻止特定 IP**。**临时端口（Ephemeral Ports）**：客户端随机开放的回复端口（Linux: 32768-60999），NACL 必须在出/入站规则中允许这些端口。

## 中文长总结

NACL 和安全组是 VPC 的两层防御。

**有状态 vs 无状态：**

| 特性 | Security Group | NACL |
|------|---------------|------|
| 级别 | **实例级** | **子网级** |
| 状态 | **有状态**（stateful） | **无状态**（stateless） |
| 规则类型 | 仅允许（Allow） | 允许 + **拒绝（Deny）** |
| 规则评估 | 所有规则评估 | **编号优先级**（小数字优先） |
| 应用方式 | 手动指定 | 自动应用于子网所有实例 |

**入站请求流程：**
```
请求 → NACL 入站规则 → SG 入站规则 → EC2
EC2 回复 → SG 出站（自动允许，有状态）→ NACL 出站规则（需评估，无状态）
```

**NACL 规则编号：**
- 范围 1-32,766
- 数字小 = 优先级高
- 首个匹配决定结果
- 最后一条 * 规则 = 拒绝（无匹配时）
- 建议增量 100（方便插入新规则）

**默认 NACL vs 自定义 NACL：**
- **默认 NACL**：允许所有入站和出站 → 不要修改
- **新建 NACL**：默认拒绝所有 → 需手动添加规则

**临时端口（Ephemeral Ports）：**
客户端连接服务器时随机开放的端口，用于接收回复。

| 操作系统 | 端口范围 |
|---------|---------|
| Windows | 49,152 - 65,535 |
| Linux | 32,768 - 60,999 |

**NACL 必须在出站规则中允许临时端口范围**，否则客户端收不到回复。

**NACL 用途：** 最适合**阻止特定 IP 地址**（安全组无法做到，因为只有允许规则）。

## 考试要点

- SG = 有状态（入站允许→出站自动允许）
- NACL = 无状态（入站出站独立评估）
- NACL 可拒绝特定 IP（SG 不能）
- 默认 NACL = 允许所有，新建 NACL = 拒绝所有
- 规则按编号优先级，首个匹配决定
- 临时端口必须在 NACL 中允许
- NACL 增加子网 → 需更新所有相关 NACL 规则

## English Short Summary

NACL (Network ACL) is a subnet-level firewall, **stateless** (inbound/outbound rules evaluated independently). Security Groups are instance-level, **stateful** (inbound allowed → outbound auto-allowed). NACL rules ordered by number (lower=higher priority), first match wins. **Default NACL allows all traffic**; new NACLs deny all. Best use: **blocking specific IPs**. **Ephemeral ports** (Linux: 32768-60999) must be allowed in NACL outbound/inbound rules for return traffic.
