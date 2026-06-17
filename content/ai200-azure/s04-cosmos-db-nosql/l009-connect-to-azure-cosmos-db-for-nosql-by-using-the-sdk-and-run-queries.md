---
title: "Connect to Azure Cosmos DB for NoSQL by using the SDK and run queries"
lectureId: 9
section: 4
sectionTitle: "Develop AI solutions by using Azure Cosmos DB for NoSQL"
date: "2026-06-17"
tags: ["Cosmos-DB", "NoSQL", "SDK", "RU", "partition-key"]
---

## 中文短总结

Cosmos DB NoSQL SDK（Python `azure-cosmos`）：connection string 建 client → database → container → `query_items`。**Partition key**（如 `/category`）决定物理分片；跨 partition 查询需 `enable_cross_partition_query=True`。用 **参数化查询**（`@param`）防注入。RU 消耗从响应 header **`x-ms-request-charge`** 读取。Demo 选 **serverless** + key auth；后续节才涉及 vector search。

## 中文长总结

### 资源层级
```
Cosmos DB Account → Database (ai-demo) → Container (products) → Items
```
- **Partition key**：`/category`（每 item 必须有该属性）
- **Serverless**：demo 低成本；provisioned throughput 按 RU/s 计费

### 创建要点（Portal）
- API：**Azure Cosmos DB for NoSQL**
- Workload preset：**Learning**；capacity mode：**Serverless**
- Auth：**Key-based**（primary connection string）；RBAC/Entra ID 更安全
- Container：partition key = `/category`

### Python SDK 模式
```python
from azure.cosmos import CosmosClient

client = CosmosClient.from_connection_string(conn_str)
database = client.get_database_client("ai-demo")
container = database.get_container_client("products")

# 单 partition 查询
items = container.query_items(
    query="SELECT * FROM c WHERE c.category = 'electronics'",
    enable_cross_partition_query=False
)

# 参数化 + 跨 partition
items = container.query_items(
    query="SELECT * FROM c WHERE c.price < @max_price",
    parameters=[{"name": "@max_price", "value": 700}],
    enable_cross_partition_query=True
)

ru = items.headers.get("x-ms-request-charge")  # 或从 response 获取
```

### 考试关键行为
- **`enable_cross_partition_query=False`** 且 WHERE 未含 partition key → **失败**
- **参数化查询**：`@param` + `parameters` 数组（防 prompt/SQL injection）
- **RU 不可精确预估**：必须执行后读 request charge
- `pip install azure-cosmos`

### 与 AWS 对照
- Cosmos container ≈ DynamoDB table + 更灵活 SQL API
- Partition key 类似 DynamoDB PK，但 cross-partition SQL 显式开关
- RU ≈ DynamoDB RCU 混合读写单位

## 考试要点

- SDK：`CosmosClient.from_connection_string` → get database/container → **`query_items`**
- **Partition key** 必须在 item 中存在；单 partition 查询更高效
- **`enable_cross_partition_query=True`**：跨 category 等 partition 时必需
- **参数化查询** `@name` + `parameters`（安全，考试推荐）
- RU 消耗：**response header `x-ms-request-charge`**
- Serverless vs provisioned：计费模型不同
- 本节尚未涉及 vector search（L011）

## English Short Summary

Connect via azure-cosmos SDK: CosmosClient.from_connection_string → database → container → query_items. Partition key (e.g., /category) drives physical partitioning; cross-partition queries require enable_cross_partition_query=True. Use parameterized queries (@param) for safety. Read RU cost from x-ms-request-charge response header—cost is not predictable upfront. Serverless mode for low-cost demos; key-based auth shown, RBAC preferred in production. Vector search comes in later lectures.
