---
title: "Section Cleanup"
lectureId: 349
section: "s27"
sectionTitle: "Networking - VPC"
date: "2026-03-05"
tags: [cleanup, hands-on, cost-management]
---

## 中文短总结

VPC 部分资源清理步骤：①终止所有 EC2 实例②删除 NAT Gateway（收费）③释放 Elastic IP④删除 VPC Endpoints⑤删除 VPC Peering Connection⑥删除 VPC（会级联删除子网、路由表、安全组、IGW 等）⑦检查 Billing Dashboard 确认无意外费用。**重要**：NAT Gateway 和 Elastic IP 持续收费，必须及时清理。

## English Short Summary

VPC section cleanup: (1) Terminate all EC2 instances; (2) Delete NAT Gateway (costs money); (3) Release Elastic IPs; (4) Delete VPC Endpoints; (5) Delete VPC Peering Connection; (6) Delete VPC (cascades subnets, route tables, SGs, IGWs); (7) Check Billing Dashboard. **Important**: NAT Gateway and Elastic IP incur ongoing charges — clean up promptly.
