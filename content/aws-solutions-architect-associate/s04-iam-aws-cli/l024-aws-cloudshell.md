---
title: "AWS CloudShell"
lectureId: 24
section: 4
sectionTitle: "IAM & AWS CLI"
date: "2026-03-05"
tags: ["cloudshell", "cli", "aws-console"]
---

## 中文短总结

AWS CloudShell 是浏览器内的免费云终端，可替代本地终端使用 AWS CLI。点击控制台右上角图标即可启动（仅部分区域可用）。默认使用当前登录用户的凭证和当前区域，无需额外配置。支持文件持久化存储、文件上传/下载、多标签页、字体/主题自定义。若 CloudShell 不可用，使用本地终端同样可以。

## 中文长总结

**CloudShell 概述：**
- 基于浏览器的 AWS 终端，免费使用
- 通过控制台右上角的 CloudShell 图标启动
- 仅在部分区域可用（需检查可用区域列表）
- AWS CLI 已预装，无需单独安装配置

**默认配置：**
- 使用当前登录账户的凭证执行 API 调用
- 默认区域为当前控制台所在区域
- 可通过 `--region` 参数指定其他区域

**文件与环境：**
- 在 CloudShell 中创建的文件会持久保存（重启后仍存在）
- 支持文件上传和下载功能
- 支持多标签页和分栏显示
- 可自定义字体大小和主题（亮色/暗色）

**使用建议：**
- 如果本地终端已配置好，可以不用 CloudShell
- CloudShell 和本地终端效果完全一致
- 适合快速执行命令或不想配置本地环境的场景

## English Short Summary

AWS CloudShell is a free browser-based terminal in the AWS Console. It comes with AWS CLI pre-installed and uses the current logged-in user's credentials by default. Files persist across sessions. Supports file upload/download, multiple tabs, and theme customization. Available only in select regions—if unavailable, the locally configured terminal works identically.
