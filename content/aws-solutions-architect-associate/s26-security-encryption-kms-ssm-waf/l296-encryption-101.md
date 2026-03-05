---
title: "Encryption 101"
lectureId: 296
section: "s26"
sectionTitle: "AWS Security & Encryption: KMS, SSM Parameter Store, Shield, WAF"
date: "2026-03-05"
tags: [encryption, tls, ssl, at-rest, in-transit, client-side]
---

## 中文短总结

三种加密方式：①**Encryption in Flight（传输加密/TLS/SSL）**——数据发送前加密，接收后解密，HTTPS = TLS 证书，防止中间人攻击②**Server-Side Encryption at Rest（服务端静态加密）**——服务器接收后用 Data Key 加密存储，发送前解密，密钥由服务器管理（如 S3）③**Client-Side Encryption（客户端加密）**——客户端自行加密/解密，服务器永远看不到明文，Data Key 在客户端。

## 中文长总结

云环境中三种加密机制的详解：

**1. Encryption in Flight（传输中加密）：**
- 也称 TLS / SSL（TLS 是 SSL 的新版本）
- 工作方式：客户端加密 → 网络传输（密文）→ 服务器解密
- HTTPS 就是使用 TLS 证书的传输加密
- 目的：防止中间人攻击（Man-in-the-Middle）
- 只有目标服务器才能解密数据

**2. Server-Side Encryption at Rest（服务端静态加密）：**
- 服务器接收明文数据后用 **Data Key** 加密存储
- 返回数据时用 Data Key 解密后发送
- 密钥管理在服务端
- 示例：S3 接收对象 → 用 Data Key 加密 → 加密存储 → 读取时解密 → 返回

**3. Client-Side Encryption（客户端加密）：**
- Data Key 在客户端
- 客户端加密后发送密文到服务器
- 服务器**永远无法解密**（不持有密钥）
- 可存储到 FTP/S3/EBS 等任何存储
- 适用于不信任服务器的场景

## 考试要点

- In-Flight = TLS/SSL = HTTPS
- Server-Side at Rest = 服务器用 Data Key 加密存储
- Client-Side = 客户端持有 Key，服务器无法解密
- 三种方式可组合使用（如 HTTPS + S3 SSE）

## English Short Summary

Three encryption mechanisms: (1) **Encryption in Flight** (TLS/SSL) — data encrypted before sending, decrypted after receiving, HTTPS uses TLS certificates, prevents man-in-the-middle attacks; (2) **Server-Side Encryption at Rest** — server encrypts data after receiving using Data Key, decrypts before sending back, key managed server-side (e.g., S3); (3) **Client-Side Encryption** — client encrypts/decrypts with own Data Key, server never sees plaintext data.
