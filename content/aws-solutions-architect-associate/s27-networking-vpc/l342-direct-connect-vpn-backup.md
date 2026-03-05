---
title: "Direct Connect + Site to Site VPN"
lectureId: 342
section: "s27"
sectionTitle: "Networking - VPC"
date: "2026-03-05"
tags: [direct-connect, vpn, backup, failover]
---

## 中文短总结

架构方案：Direct Connect 作为主连接 + Site-to-Site VPN 作为**备份连接**。当主 DX 故障时，VPN 自动接管（虽然通过公共互联网，但可靠且加密）。比设置第二个 DX 连接更经济。考试常见架构题。

## 中文长总结

当企业使用 Direct Connect 作为主要连接到 AWS VPC 时，需要考虑故障恢复方案。

**方案对比：**

| 备份方案 | 优点 | 缺点 |
|---------|------|------|
| **第二条 DX** | 高带宽、低延迟 | 昂贵、建立时间长 |
| **Site-to-Site VPN** | 便宜、快速建立 | 经公共互联网、带宽有限 |

**推荐架构：**
```
企业数据中心 → DX（主连接）→ VPC
             → VPN（备份连接）→ VPC
```

DX 故障 → VPN 自动接管 → 保持连接

## 考试要点

- DX + VPN 备份是常见考试架构
- 比双 DX 更经济
- VPN 通过公共互联网但加密

## English Short Summary

Architecture: Direct Connect as primary connection + Site-to-Site VPN as **backup**. When DX fails, VPN takes over (over public internet, but encrypted). More cost-effective than a second DX. Common exam architecture question.
