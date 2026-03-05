---
title: "Route 53 - Creating Our First Records"
lectureId: 104
section: 10
sectionTitle: "Route 53"
date: "2026-03-05"
tags: ["Route 53", "DNS Records", "Hands-On"]
---

## 中文短总结

本讲演示了在 Route 53 中创建第一条 DNS 记录。创建了一条 A Record 指向一个 IP 地址，使用 nslookup 和 dig 命令验证 DNS 解析结果。dig 命令可显示 TTL 和记录类型等额外信息。虽然浏览器无法访问（目标 IP 不存在），但 DNS 查询返回了正确的记录值，验证了 DNS 记录的工作机制。

## English Short Summary

This hands-on demonstrates creating the first DNS A record in Route 53 pointing to an IP address. Verification is done using `nslookup` and `dig` commands (installed via `bind-utils`). The `dig` command shows additional details like TTL and record type. While the browser can't access the non-existent IP, the DNS query correctly returns the configured record value.
