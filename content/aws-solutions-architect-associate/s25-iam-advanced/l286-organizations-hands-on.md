---
title: "Organizations - Hands On"
lectureId: 286
section: "s25"
sectionTitle: "Identity and Access Management (IAM) - Advanced"
date: "2026-03-05"
tags: [organizations, hands-on, scp, ou]
---

## 中文短总结

实操演示 AWS Organizations：①创建组织（全局服务），Management Account 自动加入 Root OU②邀请或创建 Member Account 加入组织③创建 OU 层级（Dev/Test/Prod，Prod 下可继续嵌套 HR/Finance）④将账号移动到特定 OU（如 Finance）⑤启用 SCP（Service Control Policies），同时可启用 Backup Policy 和 Tag Policy⑥创建 DenyAccessS3 SCP 并附加到 Finance OU⑦验证：Child Account 的 Root User 也无法访问 S3（因为 SCP 限制），SCP 策略继承从父 OU 传递到子 OU 和账号。

## English Short Summary

Hands-on demo of AWS Organizations: (1) Create organization (global service), management account auto-joins Root OU; (2) Invite member account; (3) Create OU hierarchy (Dev/Test/Prod with HR/Finance under Prod); (4) Move account to Finance OU; (5) Enable SCP, Backup Policy, Tag Policy; (6) Create DenyAccessS3 SCP and attach to Finance OU; (7) Verify: child account's root user cannot access S3 due to SCP — SCP inheritance flows from parent OU to child OU/accounts.
