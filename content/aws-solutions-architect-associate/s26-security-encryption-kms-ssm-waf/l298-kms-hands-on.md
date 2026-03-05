---
title: "KMS Hands On w/ CLI"
lectureId: 298
section: "s26"
sectionTitle: "AWS Security & Encryption: KMS, SSM Parameter Store, Shield, WAF"
date: "2026-03-05"
tags: [kms, hands-on, cli, encrypt, decrypt]
---

## 中文短总结

实操演示 KMS：①查看 AWS Managed Keys（如 aws/ebs, aws/sqs），每个有 Key Policy 限制只能从特定服务访问②创建 Customer Managed Key（Symmetric, $1/月），设置 Alias（tutorial），可配置 Key Administrators、Key Users、跨账号访问和自动轮换③CLI 加密/解密演示：`aws kms encrypt` 加密文件→Base64 编码→二进制密文；`aws kms decrypt` 解密（KMS 自动识别使用哪个 Key）→Base64 解码→恢复明文。完整展示从明文→密文→明文的往返流程。

## English Short Summary

Hands-on KMS demo: (1) View AWS Managed Keys (aws/ebs, aws/sqs) with service-specific key policies; (2) Create Customer Managed Key (Symmetric, $1/month) with alias "tutorial", configurable administrators/users/cross-account/auto-rotation; (3) CLI encrypt/decrypt: `aws kms encrypt` → Base64 → binary ciphertext; `aws kms decrypt` (auto-detects key) → Base64 decode → plaintext. Full roundtrip from plaintext → ciphertext → plaintext demonstrated.
