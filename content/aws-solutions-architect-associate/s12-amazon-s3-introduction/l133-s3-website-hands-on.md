---
title: "S3 Website Hands On"
lectureId: 133
section: 12
sectionTitle: "Amazon S3 Introduction"
date: "2026-03-05"
tags: ["S3", "Static Website", "Hands-On"]
---

## 中文短总结

本讲演示了启用 S3 静态网站托管。在 Properties → Static Website Hosting 中启用并指定 `index.html` 为首页。上传 index.html、coffee.jpg、beach.jpg 后，通过生成的 Bucket Website Endpoint URL 即可访问网站。前提是 Bucket Policy 已设为公共（上一节已完成）。

## English Short Summary

This hands-on enables S3 static website hosting: Properties → Static Website Hosting → enable, set index document to `index.html`. After uploading index.html, coffee.jpg, and beach.jpg, the website is accessible via the Bucket Website Endpoint URL. Requires the bucket to have a public Bucket Policy (configured in the previous lecture).
