---
title: "VPC Traffic Mirroring"
lectureId: 344
section: "s27"
sectionTitle: "Networking - VPC"
date: "2026-03-05"
tags: [traffic-mirroring, vpc, security, network-inspection]
---

## 中文短总结

VPC Traffic Mirroring：非侵入式捕获和检查 VPC 中的网络流量。Mirror Source（ENI）的流量复制到 Mirror Target（ENI 或 NLB）。可镜像所有或部分流量（过滤器）。Source 和 Target 可在同一 VPC 或跨 VPC（通过 Peering）。用途：内容检查、威胁监控、故障排查。Target 通常是 NLB 后面的安全分析 ASG。

## 中文长总结

VPC Traffic Mirroring 允许复制 ENI 流量到安全分析工具，而不影响原始流量。

**架构：**
```
源 ENI (EC2/RDS/...) → [Traffic Mirroring] → 目标 ENI 或 NLB
                                                ↓
                                          安全分析 ASG
```

**关键特点：**
- **非侵入式**：不影响源实例性能
- **Source**：要镜像的 ENI
- **Target**：接收镜像流量的 ENI 或 **Network Load Balancer**
- **Filter**：可选择镜像全部或部分流量
- **跨 VPC 支持**：通过 VPC Peering 镜像到另一个 VPC 的目标

**典型用途：**
- 网络安全威胁检测
- 合规审计
- 故障排查
- 内容检查

## 考试要点

- Traffic Mirroring = 非侵入式 ENI 流量复制
- Source = ENI，Target = ENI 或 NLB
- 支持同 VPC 和跨 VPC（Peering）
- 不是 Flow Logs（Flow Logs 只记录元数据，Traffic Mirroring 复制全部或部分流量）

## English Short Summary

VPC Traffic Mirroring: non-intrusive capture and inspection of VPC network traffic. Mirror Source (ENI) traffic is copied to Mirror Target (ENI or NLB). Can mirror all or filtered traffic. Source and Target can be in the same VPC or cross-VPC (via Peering). Use cases: content inspection, threat monitoring, troubleshooting. Target is typically an NLB fronting a security analysis ASG.
