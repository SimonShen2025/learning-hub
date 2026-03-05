---
title: "Site to Site VPN Hands On"
lectureId: 340
section: "s27"
sectionTitle: "Networking - VPC"
date: "2026-03-05"
tags: [vpn, site-to-site, hands-on, customer-gateway, virtual-private-gateway]
---

## 中文短总结

实操演示 Site-to-Site VPN 创建流程（无实际 on-premises 设备，仅展示控制台）：①创建 Customer Gateway：指定名称、BGP ASN、对端 IP 地址、证书 ARN②创建 Virtual Private Gateway：指定 ASN③创建 Site-to-Site VPN Connection：选择 VGW + CGW → 配置路由/IPSec/隧道选项。考试只需知道三步：创建 CGW → 创建 VGW → 建立 VPN Connection。

## English Short Summary

Hands-on Site-to-Site VPN (console walkthrough, no actual on-premises): (1) Create Customer Gateway: name, BGP ASN, IP address, Certificate ARN; (2) Create Virtual Private Gateway: ASN; (3) Create Site-to-Site VPN Connection: select VGW + CGW, configure routing/tunneling. For exam: just know the three steps — CGW → VGW → VPN Connection.
