---
title: "IAM Users & Groups Hands On"
lectureId: 12
section: 4
sectionTitle: "IAM & AWS CLI"
date: "2026-03-05"
tags: ["iam", "users", "groups", "hands-on", "admin"]
---

## 中文短总结

演示在 IAM 控制台创建用户和组的完整流程：创建 IAM 用户（设置密码、选择控制台访问方式）、创建 admin 组并附加 AdministratorAccess 策略、将用户加入组。用户从组继承权限。可通过账户别名（Account Alias）自定义登录 URL。使用浏览器隐私窗口可同时登录 root 账户和 IAM 用户。

## 中文长总结

**创建 IAM 用户步骤：**
1. 在 IAM 控制台中选择 Users → Create user
2. 输入用户名，选择提供控制台访问权限
3. 选择创建 IAM 用户（而非 Identity Center，考试需掌握 IAM 用户方式）
4. 设置密码（自定义或自动生成）
5. 可选择是否要求首次登录更改密码

**创建用户组并分配权限：**
1. 创建名为 "admin" 的组
2. 附加 "AdministratorAccess" 策略
3. 将用户加入 admin 组
4. 用户自动继承组的权限（继承方式会在权限页面标注 "Attached via group"）

**账户别名与登录：**
- 可在 IAM Dashboard 创建 Account Alias 简化登录 URL
- IAM 用户登录需要：账户 ID（或别名）+ 用户名 + 密码
- 使用浏览器隐私/无痕模式可以同时登录 root 和 IAM 用户

**Tags（标签）：**
- 可为用户添加键值对标签（如 Department: Engineering），用于元数据管理

## English Short Summary

Walkthrough of creating IAM users and groups: create an IAM user with console access, create an "admin" group with AdministratorAccess policy, add the user to the group. Users inherit group permissions. Account aliases simplify the sign-in URL, and browser private windows enable simultaneous root and IAM user sessions.
