---
title: "S3 CORS Hands On"
lectureId: 155
section: 14
sectionTitle: "Amazon S3 Security"
date: "2026-03-05"
tags: ["S3", "CORS", "Hands-On"]
---

## 中文短总结

本讲演示 S3 CORS 配置。创建两个公开的静态网站 Bucket。主 Bucket 的 `index.html` fetch 另一个 Bucket 的 `extra-page.html`。初始状态下浏览器 Console 报错 "cross-origin request blocked"。解决方法：在目标 Bucket 的 Permissions → CORS 中添加 JSON 配置，设置 `AllowedOrigins` 为主 Bucket 的 URL（不带尾部斜杠），`AllowedMethods` 为 GET。配置后刷新，跨域请求成功，Network 选项卡中可看到 `Access-Control-Allow-Origin` 响应头。

## English Short Summary

Hands-on CORS demo with two public S3 static website buckets. Main bucket's `index.html` fetches `extra-page.html` from the other bucket. Initially blocked with "cross-origin request blocked" error in browser console. Fix: add CORS JSON config in target bucket's Permissions → CORS, setting `AllowedOrigins` to the main bucket's URL (no trailing slash) and `AllowedMethods` to GET. After configuration, cross-origin request succeeds; Network tab shows `Access-Control-Allow-Origin` response header.
