---
title: "NACL & Security Groups Hands On"
lectureId: 332
section: "s27"
sectionTitle: "Networking - VPC"
date: "2026-03-05"
tags: [nacl, security-group, hands-on, stateful, stateless]
---

## 中文短总结

实操演示 NACL vs Security Group 的有/无状态差异：①默认 NACL 允许所有流量（Rule 100 Allow All）②在默认 NACL 添加 Rule 80 Deny HTTP → 访问 EC2 网页超时（Rule 80 < 100，优先拒绝）③改为 Rule 140 Deny HTTP → 访问成功（Rule 100 Allow 优先于 140 Deny）④将 NACL 出站改为 Deny → 访问超时（无状态：入站允许但出站被拒）⑤删除 SG 所有出站规则 → 访问仍成功（有状态：入站允许则出站自动允许）。完美演示有状态/无状态的区别。

## English Short Summary

Hands-on NACL vs SG stateful/stateless demo: (1) Default NACL allows all (Rule 100); (2) Add Rule 80 Deny HTTP → page timeout (80 < 100 takes precedence); (3) Change to Rule 140 Deny → page works (100 Allow beats 140 Deny); (4) Set NACL outbound to Deny → timeout (stateless: inbound allowed but outbound denied); (5) Remove all SG outbound rules → page still works (stateful: inbound allowed = outbound auto-allowed). Perfect demonstration of stateful vs stateless behavior.
