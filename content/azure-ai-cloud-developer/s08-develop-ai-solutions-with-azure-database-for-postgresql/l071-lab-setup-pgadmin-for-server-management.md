---
title: "Lab: Setup pgAdmin for Server Management  (Hands-On Lab)"
lectureId: 71
section: 8
sectionTitle: "Develop AI Solutions with Azure Database for PostgreSQL"
date: "2026-09-22"
tags: ["postgresql", "pgadmin", "hands-on-lab"]
---

## 中文短总结

下载并安装 pgAdmin 4（PostgreSQL 官方图形化服务器管理工具），通过 Register → Server 功能，使用 Azure 门户 Connect 区域提供的主机地址（终结点）、端口（5432）、用户名和密码，将本地 pgAdmin 4 连接到已部署的 Azure PostgreSQL 服务器，连接成功后即可在管理面板中查看数据库列表。

## 中文长总结

### 下载与安装 pgAdmin 4

- 访问 pgadmin.org/download 下载对应操作系统版本（Windows/macOS/Linux）的 pgAdmin 4
- 安装完成后打开 pgAdmin 4，默认工作区为空白状态，尚未连接任何服务器

### 注册服务器连接

- 在 Servers 区域点击 Object → Register → Server
- General 标签页填写服务器名称（可与 Azure 门户中的服务器名一致）
- Connection 标签页填写：
  - **Host name/address**：来自 Azure 门户 Connect 标签页下 Connection details 中的 Host 值（即终结点），需确保身份验证方式设为 PostgreSQL
  - **Port**：5432（PostgreSQL 默认监听端口）
  - **Username** 和 **Password**：创建服务器时设置的管理员凭据
- 点击 Save 完成注册

### 验证连接

- 注册成功后，服务器出现在 pgAdmin 4 的 Servers 树状列表中
- 展开 Databases 节点，可看到默认的 `postgres` 数据库正在运行

## English Short Summary

Downloaded and installed pgAdmin 4 (the official PostgreSQL GUI management tool), then registered the deployed Azure PostgreSQL server by supplying the host/endpoint, port 5432, and admin credentials from the Azure portal's Connect blade. Once registered, the server and its default `postgres` database appear in the pgAdmin 4 Servers tree.
