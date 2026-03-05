---
title: "Elastic Load Balancer - SSL Certificates"
lectureId: 80
section: 8
sectionTitle: "High Availability and Scalability: ELB & ASG"
date: "2026-03-05"
tags: ["elb", "ssl", "tls", "sni", "acm", "https"]
---

## 中文短总结

SSL/TLS 证书实现客户端和 ELB 之间的传输加密（in-flight encryption）。证书由 CA 颁发，可通过 ACM（AWS Certificate Manager）管理。**SNI（Server Name Indication）** 是关键概念：允许在同一负载均衡器上加载多个 SSL 证书以服务多个域名，仅 ALB、NLB 和 CloudFront 支持，CLB 不支持。CLB 每个实例只能绑定一个 SSL 证书。

## 中文长总结

**SSL/TLS 基础：**
- SSL（Secure Sockets Layer）/ TLS（Transport Layer Security，更新版本） 提供传输加密
- 公共 SSL 证书由 CA（Certificate Authority）颁发（如 Comodo、GoDaddy、Let's Encrypt）
- 证书有过期日期，需定期续签
- 浏览器中看到锁形图标 = 连接已加密

**ELB 中的 SSL：**
- 用户通过 HTTPS 连接 ELB（加密），ELB 做 **SSL Termination**
- ELB 到 EC2 实例使用 HTTP（内网流量，相对安全）
- 证书使用 X.509 格式
- 通过 **ACM（AWS Certificate Manager）** 管理，也可上传自有证书

**SNI（Server Name Indication）— 重要：**
- 解决"一个服务器加载多个 SSL 证书"的问题
- 客户端在 SSL 握手时指明目标主机名
- 服务器根据主机名选择正确的证书
- **仅支持 ALB、NLB、CloudFront**（新一代）
- CLB 不支持 → 每个网站需要独立的 CLB

**各 ELB 证书支持：**
- CLB：仅 1 个 SSL 证书，多域名需多个 CLB
- ALB：支持多监听器 + 多 SSL 证书（通过 SNI）
- NLB：支持多监听器 + 多 SSL 证书（通过 SNI）

## 考试要点

- SNI 允许一个 ALB/NLB 加载多个 SSL 证书 → 服务多域名
- CLB 不支持 SNI，每个域名需要独立的 CLB
- ACM 管理 SSL/TLS 证书
- ELB 做 SSL Termination，后端内网用 HTTP
- 看到"多个 SSL 证书 + 负载均衡器"→ ALB 或 NLB + SNI

## English Short Summary

SSL/TLS certificates enable in-flight encryption between clients and ELB. Managed via ACM (AWS Certificate Manager). SNI (Server Name Indication) allows loading multiple SSL certificates on one load balancer for multiple domains — supported only by ALB, NLB, and CloudFront (not CLB). CLB supports only one SSL certificate per instance. ELB performs SSL termination; backend traffic uses HTTP over VPC.
