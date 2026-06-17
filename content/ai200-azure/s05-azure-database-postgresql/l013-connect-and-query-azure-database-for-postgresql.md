---
title: "Connect and query Azure Database for PostgreSQL"
lectureId: 13
section: 5
sectionTitle: "Develop AI solutions by using Azure Database for PostgreSQL"
date: "2026-06-17"
tags: ["postgresql", "flexible-server", "connectivity", "ai-200"]
---

## 中文短总结

创建 **Azure Database for PostgreSQL Flexible Server**（Dev/Burstable B-series 适合 demo）。认证可选 Entra ID 或传统 admin 用户名密码；需配置 **防火墙** 白名单。连接用标准 **`psycopg2`**（非 Azure SDK），或通过 VS Code PostgreSQL extension 浏览。典型操作：connect → CREATE TABLE → INSERT → SELECT。Endpoint 格式 `{server}.postgres.database.azure.com`。

## 中文长总结

本讲建立 PostgreSQL Flexible Server 并从应用连接查询——后续 vector/RAG 的基础。

**创建 Flexible Server**（Portal）：
- Resource group、全局唯一 server name、区域
- **Compute**：Dev 场景选 Burstable **B-series**（如 B2s：2 vCore / 4 GB RAM）
- **Authentication**：Microsoft Entra 或 PostgreSQL native（admin login + password）
- **Networking**：Public access + firewall rules（添加客户端 IP）
- **Encryption**：默认 Microsoft-managed key
- 创建后获得 **endpoint**（FQDN）

**连接方式**：
1. **Python + psycopg2**：`host`, `dbname`, `user`, `password`, `sslmode`——与自建 PostgreSQL 相同，无 Azure 专有驱动
2. **VS Code PostgreSQL extension**：Microsoft 出品，可浏览 tables（Portal 本身不提供 table 浏览）

**Demo 流程**：检查 PostgreSQL 版本 → CREATE TABLE → INSERT row → SELECT 验证。环境变量存储 host/credentials。

**与 RDS/Aurora 对比**：Flexible Server 是 Azure 托管开源 PostgreSQL；连接协议与社区 PostgreSQL 100% 兼容。后续 vector 能力需额外开启 `azure.extensions` 和 `pgvector` extension。

## 考试要点

- 服务名：**Azure Database for PostgreSQL Flexible Server**（非 Single Server，已退役方向）
- 连接库：**psycopg2** 或标准 PostgreSQL 客户端，不是 Azure SDK
- 必须配置 **network/firewall** 允许客户端 IP（public access 场景）
- 支持 **Entra ID authentication** 与传统密码认证
- Burstable tier 适合 dev/test，非生产 vector workload 首选
- Endpoint：`{name}.postgres.database.azure.com`

## English Short Summary

Provision **PostgreSQL Flexible Server** (Burstable B-series for dev). Configure firewall for public access. Connect via standard **psycopg2** or VS Code PostgreSQL extension—not Azure-specific SDK. Run CREATE/INSERT/SELECT as on any PostgreSQL. Supports Entra ID or native auth. Foundation for later pgvector and RAG workloads.
