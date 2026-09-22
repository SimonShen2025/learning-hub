---
title: "Lab: Deploy Azure Database for PostgreSQL on Azure (Hands-On Lab)"
lectureId: 69
section: 8
sectionTitle: "Develop AI Solutions with Azure Database for PostgreSQL"
date: "2026-09-22"
tags: ["postgresql", "azure-portal", "hands-on-lab"]
---

## 中文短总结

通过 Azure 门户部署 Azure Database for PostgreSQL 灵活服务器（Flexible Server）：选择最新版本、DevTest 工作负载类型、Burstable 最低成本规格（约每月 33.43 美元）、仅 PostgreSQL 身份验证方式，并在网络标签页添加允许所有 IP（0.0.0.0-255.255.255.255）的防火墙规则以支持公网访问。部署完成后可在 Connect 区域查看端点、端口（5432）及连接方式（如 pgAdmin4）。

## 中文长总结

### 部署配置

- 搜索 "Azure Database for PostgreSQL Flexible Servers" 并创建
- 服务器名称、资源组自定义;区域选择（如 Sweden Central）
- PostgreSQL 版本选择最新版（18）
- 工作负载类型选择 **DevTest**（仅用于非生产开发用途）
- 计算与存储选择最低成本的 **Burstable** 规格：约 2 核 CPU、4GB 内存、32GB 存储、120 IOPS，计算费用约 29 美元/月，存储约 4.38 美元/月，合计约 33.43 美元/月
- 可用区选择"无偏好"
- 身份验证方式选择仅 PostgreSQL 身份验证（管理员用户名+密码），简化配置

### 网络配置

- 连接方式设为允许公网访问
- 需要至少添加一条防火墙规则才能启用公网访问：规则名 "Allow All"，起始 IP 为 `0.0.0.0`，结束 IP 为 `255.255.255.255`（覆盖整个 IPv4 地址范围），使任何拥有正确凭据的设备均可连接

### 安全配置

- 静态数据加密使用服务管理密钥（默认，也可选择客户管理密钥）

### 部署后验证

- 部署完成后，Overview 区域显示资源终结点
- Connect 区域展示各种连接方式（如通过 pgAdmin4）、默认数据库（postgres）、身份验证方式（PostgreSQL）、监听端口（5432）
- Networking 区域可查看已配置的公网访问和刚创建的 "Allow All" 防火墙规则

## English Short Summary

Deployed an Azure Database for PostgreSQL Flexible Server via the Azure portal: latest version, DevTest workload, the cheapest Burstable compute tier (~$33.43/month), PostgreSQL-only authentication, and a firewall rule allowing the full IPv4 range (0.0.0.0–255.255.255.255) for public access. After deployment, verified the endpoint, port 5432, and connection options (e.g., pgAdmin4) in the Connect and Networking blades.
