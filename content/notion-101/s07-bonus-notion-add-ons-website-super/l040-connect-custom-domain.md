---
title: "Connect a custom domain"
lectureId: 40
section: 7
sectionTitle: "Bonus: Notion add-ons & creating a website with Super"
date: "2026-10-13"
tags: [custom-domain, dns, super]
---

## 中文短总结

Super 自定义域名需在站点设置中添加域名，并在域名供应商配置 Super 指定的 A 与 CNAME DNS 记录。此功能需要相应付费方案；DNS 生效可能需要等待传播。

## 中文长总结

- 在 Super 的 Domains 设置中添加 custom domain；按 Super 当时提供的目标值配置域名 DNS。
- 示例包含根域名的 A record 和 `www` 的 CNAME record。记录类型、主机名和目标值必须以当前 Super 控制台显示为准，不要照抄课程中的旧 IP。
- 保存记录后等待 DNS 传播，再返回 Super 确认连接状态并测试 HTTPS 与页面访问。
- 课程演示指出自定义域名需要 Super Pro 方案；当前方案名称和价格可能变化，实施前核对 Super 文档。

## English Short Summary

Add the domain in Super, then configure the provider's DNS with the A and CNAME values currently shown by Super. Allow time for propagation, verify HTTPS and routing, and confirm that the required Super plan is active.