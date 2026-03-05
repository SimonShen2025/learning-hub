---
title: "VPC Endpoints Hands On"
lectureId: 336
section: "s27"
sectionTitle: "Networking - VPC"
date: "2026-03-05"
tags: [vpc-endpoint, gateway-endpoint, s3, hands-on]
---

## 中文短总结

实操演示 VPC Endpoint：①为私有 EC2 添加 S3ReadOnly IAM 角色②删除私有路由表中 NAT GW 路由 → 断开互联网 → aws s3 ls 和 curl 都失败③创建 Gateway Endpoint for S3：选择 DemoVPC + 关联私有路由表④路由表自动添加 S3 前缀列表路由⑤验证：curl google.com 仍失败（无互联网），但 aws s3 ls --region eu-central-1 成功（通过 VPC Endpoint 私有访问 S3）。注意 CLI 默认区域可能不对，需指定 --region。

## English Short Summary

Hands-on VPC Endpoint: (1) Attach S3ReadOnly IAM role to private EC2; (2) Remove NAT GW route → no internet → aws s3 ls and curl fail; (3) Create Gateway Endpoint for S3: select VPC + associate private route table; (4) Route table auto-adds S3 prefix list route; (5) Verify: curl google.com still fails (no internet), but `aws s3 ls --region <region>` works (private S3 access via VPC Endpoint). Note: must specify --region matching your VPC region.
