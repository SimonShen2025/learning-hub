---
title: "VPC Endpoints"
lectureId: 335
section: "s27"
sectionTitle: "Networking - VPC"
date: "2026-03-05"
tags: [vpc-endpoint, privatelink, gateway-endpoint, interface-endpoint, s3, dynamodb]
---

## 中文短总结

VPC Endpoints：私有访问 AWS 服务（不经过公共互联网）。两种类型：①**Interface Endpoint**（PrivateLink）：创建 ENI（私有 IP）→ 需安全组、有费用、支持大多数服务②**Gateway Endpoint**：修改路由表目标 → **仅支持 S3 和 DynamoDB**、免费、自动扩展。考试中 **Gateway Endpoint 优先选择**（S3/DynamoDB 场景）。Interface Endpoint 仅在需要从 on-premises（Site-to-Site VPN/Direct Connect）或跨 VPC 私有访问时使用。

## 中文长总结

VPC Endpoints 允许通过 AWS 私有网络访问 AWS 服务，避免经过公共互联网。

**两种类型对比：**

| 特性 | Interface Endpoint | Gateway Endpoint |
|------|-------------------|-----------------|
| 实现 | **ENI（私有 IP）** | **路由表目标** |
| 安全组 | ✅ 需要 | ❌ 不需要 |
| 费用 | **按小时 + 数据量** | **免费** |
| 支持服务 | 几乎所有 AWS 服务 | **仅 S3 和 DynamoDB** |
| 扩展 | 手动选择子网 | 自动 |
| 底层技术 | AWS PrivateLink | 路由表条目 |

**何时用 Interface vs Gateway（S3/DynamoDB）：**
- **默认用 Gateway Endpoint**（免费 + 自动扩展）
- **仅在以下场景用 Interface Endpoint**：
  - 从 on-premises 通过 VPN/Direct Connect 访问
  - 从另一个 VPC 通过 Peering 访问

**流量路径优化：**
```
❌ EC2 → NAT GW → IGW → 公共互联网 → S3（费用高）
✅ EC2 → VPC Endpoint → S3（免费/低费）
```

**故障排查：** 检查 DNS 设置和路由表。

## 考试要点

- Gateway Endpoint = S3 + DynamoDB（免费）→ **考试默认选择**
- Interface Endpoint = 其他所有服务（收费，需 SG）
- Interface Endpoint 仅在 on-premises 或跨 VPC 时优于 Gateway
- VPC Endpoint 避免经过公共互联网

## English Short Summary

VPC Endpoints: private access to AWS services without public internet. Two types: (1) **Interface Endpoint** (PrivateLink): ENI with private IP, needs SG, costs per hour+data, supports most services; (2) **Gateway Endpoint**: route table target, **S3 and DynamoDB only**, free, auto-scales. **Exam preference: Gateway Endpoint** for S3/DynamoDB. Interface Endpoint only when accessing from on-premises (VPN/DX) or cross-VPC.
