---
title: "Lab: Performing Data Operations with the redis-py library (Hands-On Lab)"
lectureId: 88
section: 9
sectionTitle: "Enhance AI Solutions with Azure Managed Redis"
date: "2026-09-22"
tags: ["redis", "redis-py", "python-sdk", "hands-on-lab"]
---

## 中文短总结

使用 `redis-py`（8.0.0）库连接 Azure Managed Redis（端口 10000），演示 Redis String 的 SET/GET/EXISTS 操作、带过期时间（EX 秒 / PX 毫秒）的 SET 及对已有键设置 EXPIRE、DELETE 删除键；以及 Redis Hash 的 HSET/HGET/HGETALL 操作；并介绍了 Pipeline 机制，可将多次 Hash 操作合并为单次网络调用，显著减少延迟。

## 中文长总结

### 连接配置

- 环境变量中的 Redis 终结点不应包含端口号（因为创建客户端时单独指定 `port=10000`）
- 使用 `redis-py` 库（版本 8.0.0）创建 Redis 客户端，传入 host、port、password

### Redis String 操作

- `SET`：设置键值对，如 `user:1001:name` → `Kuljit Bakshi`
- `GET`：读取指定键的值
- `EXISTS`：检查键是否存在
- 带过期时间的 SET：使用 `EX` 参数（秒）或 `PX` 参数（毫秒）设置过期时间
- 对已存在的键设置过期时间：使用 `EXPIRE` 命令（默认单位为秒）
- `DELETE`：删除一个或多个键

### Redis Hash 操作

- `HSET`：为某个父键（如 `user:1001`）设置多个内部字段映射（name、email、age）
- `HGET`：获取 Hash 中某个特定字段的值（如只获取 name）
- `HGETALL`：获取 Hash 中所有字段的映射

### Pipeline（管道）机制

- 若需对多个 Hash 执行多次操作（如对 user:1001 和 user:1002 分别执行 HGETALL），逐条执行需要多次网络调用
- 使用 Pipeline 可将多条命令打包，在**一次网络调用**中批量执行，显著提升效率
- 同样适用于批量执行 HGET 获取多个 Hash 的特定字段

## English Short Summary

Used the `redis-py` library (v8.0.0) to connect to Azure Managed Redis on port 10000, demonstrating Redis String operations (SET/GET/EXISTS, TTLs via EX/PX, EXPIRE on existing keys, DELETE) and Redis Hash operations (HSET/HGET/HGETALL), then introduced pipelining to batch multiple hash operations into a single network round-trip for better efficiency.
