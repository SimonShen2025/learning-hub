---
title: "Elastic Load Balancer - SSL Certificates - Hands On"
lectureId: 81
section: 8
sectionTitle: "High Availability and Scalability: ELB & ASG"
date: "2026-03-05"
tags: ["elb", "ssl", "tls", "https", "acm", "hands-on"]
---

## 中文短总结

实操为 ALB 和 NLB 添加 HTTPS/TLS 监听器：ALB 添加 HTTPS(443) 监听器时需选择 SSL 安全策略和证书来源（ACM、IAM 或直接导入）；NLB 添加 TLS 监听器同样需选择安全策略和证书。两者都支持从 ACM 加载证书，也可以直接粘贴私钥和证书体导入。

## English Short Summary

Hands-on adding HTTPS/TLS listeners to ALB and NLB: ALB gets an HTTPS (port 443) listener with configurable SSL security policy and certificate source (ACM, IAM, or direct import). NLB similarly adds a TLS listener with security policy and certificate selection. Both support loading certificates from ACM or importing by pasting private key and certificate body.
