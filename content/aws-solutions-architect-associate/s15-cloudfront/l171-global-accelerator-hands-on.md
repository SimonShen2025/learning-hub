---
title: "AWS Global Accelerator - Hands On"
lectureId: 171
section: 15
sectionTitle: "CloudFront & AWS Global Accelerator"
date: "2026-03-05"
tags: ["Global Accelerator", "Hands-On"]
---

## 中文短总结

本讲演示 Global Accelerator。创建 Standard Accelerator，设置 TCP 80 Listener。配置两个 Endpoint Group（US-East-1 和 EU-West-1），每个 Region 启动一个 EC2 实例（User Data 输出所在 Region）。将 EC2 实例作为 Endpoint 添加到对应 Endpoint Group。配置 HTTP 健康检查（路径 `/`，端口 80）。等待 Provisioning 完成后获得两个静态 IP。通过 VPN 切换位置测试：欧洲访问 → EU-West-1 实例，美国 VPN → US-East-1 实例。演示了 Anycast 路由到最近 Region 的效果。清理：删除 Accelerator + 终止两个 Region 的 EC2 实例。

## English Short Summary

Hands-on Global Accelerator demo. Creates Standard Accelerator with TCP port 80 listener, two endpoint groups (US-East-1, EU-West-1), each with an EC2 instance displaying its region. Adds instances as endpoints, configures HTTP health checks (path `/`, port 80). After provisioning, two static IPs are available. Testing with VPN: from Europe → routes to EU-West-1; from US VPN → routes to US-East-1, demonstrating Anycast routing to the nearest region. Cleanup: delete accelerator + terminate EC2 instances in both regions.
