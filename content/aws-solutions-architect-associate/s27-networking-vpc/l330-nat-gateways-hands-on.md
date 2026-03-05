---
title: "NAT Gateways Hands On"
lectureId: 330
section: "s27"
sectionTitle: "Networking - VPC"
date: "2026-03-05"
tags: [nat-gateway, hands-on, elastic-ip, route-table]
---

## 中文短总结

实操演示 NAT Gateway：①停止 NAT Instance 后路由变 blackhole②创建 NAT GW（DemoNATGW）：选择公共子网 + 分配 Elastic IP③编辑私有路由表：删除旧 blackhole 路由 → 添加 0.0.0.0/0 → NAT GW④等待 NAT GW 状态变 Active⑤验证：从私有实例 curl google.com / ping 成功。无需任何安全组配置。可在另一个 AZ 创建第二个 NAT GW 实现高可用（本 demo 未做）。

## English Short Summary

Hands-on NAT Gateway: (1) After stopping NAT Instance, route becomes blackhole; (2) Create NAT GW (DemoNATGW) in public subnet + allocate Elastic IP; (3) Edit private route table: replace blackhole → 0.0.0.0/0 → NAT GW; (4) Wait for Active state; (5) Verify: curl/ping google.com works from private instance. No security group configuration needed. For HA, create a second NAT GW in another AZ.
