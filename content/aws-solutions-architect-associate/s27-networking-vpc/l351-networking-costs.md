---
title: "Networking Costs in AWS"
lectureId: 351
section: "s27"
sectionTitle: "Networking - VPC"
date: "2026-03-05"
tags: [networking-costs, data-transfer, egress, vpc-endpoint, cost-optimization]
---

## 中文短总结

AWS 网络费用核心规则：①**入站流量免费**（ingress）②**同 AZ + 私有 IP = 免费**③同 AZ + 公有/Elastic IP = $0.02/GB④**跨 AZ 私有 IP = $0.01/GB**（每方向）⑤跨 AZ 公有 IP = $0.02/GB（每方向）⑥跨区域 = $0.02/GB⑦**出站流量到互联网收费递减**（$0.09→$0.085→$0.07/GB）。**优化策略**：尽量使用私有 IP、同 AZ 部署（牺牲 HA）；S3 出站用 CloudFront（S3→CF 免费）；VPC Endpoint 访问 S3 比 NAT Gateway 更便宜（$0.01 vs $0.045/GB）。

## 中文长总结

AWS 网络数据传输费用详解。

**EC2 间数据传输费用：**

| 场景 | 费用/GB |
|------|---------|
| 同 AZ + **私有 IP** | **免费** |
| 同 AZ + 公有/Elastic IP | $0.02 |
| 跨 AZ + **私有 IP** | **$0.01**（每方向） |
| 跨 AZ + 公有 IP | $0.02（每方向） |
| 跨区域 | $0.02（每方向） |

**出站到互联网（us-east-1）：**

| 数据量 | 费用/GB |
|--------|---------|
| 前 10 TB | $0.09 |
| 10-40 TB | $0.085 |
| 40-100 TB | $0.07 |
| >150 TB | $0.05 |

**成本优化策略：**

1. **使用私有 IP** 替代公有 IP（节省一半）
2. **同 AZ 部署**（免费，但牺牲高可用性）
3. **S3 出站 → 用 CloudFront**：
   - S3 直接到互联网 = $0.09/GB
   - S3 → CloudFront → 互联网 = **$0.085/GB**（S3 到 CF 免费）
   - CloudFront 还提供缓存加速
4. **S3 访问方式对比**：
   - 通过 NAT GW = $0.045/GB 处理 + $0.09 出站 + $0.045 NAT
   - 通过 **VPC Endpoint** = **$0.01/GB**（Gateway Endpoint 免费更好）

## 考试要点

- 同 AZ + 私有 IP = **免费**（最便宜方案）
- 使用私有 IP 比公有 IP 便宜一半
- S3 出站用 CloudFront 更便宜（S3 到 CF 免费）
- VPC Endpoint 访问 S3 远比 NAT Gateway 便宜
- Ingress（入站）总是免费

## English Short Summary

AWS networking costs: **Ingress = free**. Same AZ + private IP = **free**. Cross-AZ private IP = $0.01/GB per direction. Public/Elastic IP costs double. **Optimization**: use private IPs, same-AZ placement (trades HA), CloudFront for S3 egress (S3→CF free, CF→internet $0.085/GB vs S3 direct $0.09/GB), **VPC Endpoint** for S3 access ($0.01/GB vs NAT GW $0.045/GB). Gateway Endpoint is free.
