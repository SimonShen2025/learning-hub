---
title: "NAT Instances"
lectureId: 327
section: "s27"
sectionTitle: "Networking - VPC"
date: "2026-03-05"
tags: [nat-instance, nat, public-subnet, private-subnet, deprecated]
---

## 中文短总结

NAT Instance（已过时，但考试仍出现）：部署在**公共子网**的 EC2 实例，让私有子网实例访问互联网。工作原理：重写网络包源 IP（私有 → NAT 实例公共 IP）。关键要求：①**必须禁用 Source/Destination Check**（因为 IP 被重写）②附加 Elastic IP③配置安全组（允许私有子网 HTTP/HTTPS）④编辑私有子网路由表指向 NAT 实例。缺点：非高可用、带宽受限于实例类型、需自行管理。**推荐使用 NAT Gateway 替代。**

## 中文长总结

NAT（Network Address Translation）实例让私有子网的 EC2 实例通过公共子网访问互联网。

**工作原理：**
```
私有 EC2（10.0.0.20）→ NAT 实例 → 互联网
源 IP 被重写：10.0.0.20 → 12.34.56.78（NAT 实例 Elastic IP）
回复时反向重写
```

**必要配置：**
1. NAT 实例部署在公共子网
2. 附加 **Elastic IP**
3. **禁用 Source/Destination Check**（关键！因为 NAT 重写 IP）
4. 配置安全组：允许私有子网的 HTTP/HTTPS/ICMP
5. 编辑私有子网路由表：0.0.0.0/0 → NAT 实例

**缺点：**
- 2020 年底已停止标准支持
- 非高可用（需自行配置 ASG + 脚本）
- 带宽受限于实例类型
- 需自行管理安全组和补丁

## 考试要点

- NAT Instance = 过时方案，Source/Destination Check 必须禁用
- NAT Instance vs NAT Gateway 的对比是考试热点
- NAT Instance 在公共子网，需要 Elastic IP
- 需自行管理 SG、补丁、HA

## English Short Summary

NAT Instance (outdated, exam still tests): EC2 in **public subnet** enabling private subnet internet access. Rewrites source IP (private → NAT's Elastic IP). Key: (1) **Disable Source/Destination Check**; (2) Attach Elastic IP; (3) Configure SG for HTTP/HTTPS from private subnets; (4) Route table: 0.0.0.0/0 → NAT instance. Drawbacks: not HA, bandwidth limited by instance type, self-managed. **NAT Gateway recommended instead.**
