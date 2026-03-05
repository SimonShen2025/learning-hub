---
title: "S3 Performance"
lectureId: 147
section: 13
sectionTitle: "Advanced Amazon S3"
date: "2026-03-05"
tags: ["S3", "Performance", "Multi-Part Upload", "Transfer Acceleration", "Byte Range Fetch"]
---

## 中文短总结

本讲介绍 S3 性能优化。基线性能：首字节延迟 **100-200ms**；每个 Prefix 每秒 **3,500 PUT/COPY/POST/DELETE** + **5,500 GET/HEAD**，Prefix 数量无限制。**上传优化**：Multi-Part Upload（>100MB 推荐，>5GB 必须，并行上传加速）和 S3 Transfer Acceleration（通过 Edge Location 利用 AWS 私网传输，与 Multi-Part 兼容）。**下载优化**：S3 Byte-Range Fetches（并行请求文件的不同字节范围加速下载，也可只请求文件头部信息）。

## 中文长总结

### 基线性能
- 首字节延迟：**100-200 毫秒**
- 每个 Prefix 每秒请求数：
  - **3,500** PUT/COPY/POST/DELETE
  - **5,500** GET/HEAD
- Prefix = Bucket 名和文件名之间的路径
- Prefix 数量**无限制** → 分散 Prefix 可提高总吞吐

### 上传优化

#### Multi-Part Upload
- **>100MB 推荐**使用
- **>5GB 必须**使用
- 将文件分成多个部分**并行上传**
- S3 自动将所有部分合并为完整文件

#### S3 Transfer Acceleration
- 通过 **Edge Location** 上传
- Edge Location → S3 Bucket 走 **AWS 私有网络**（快速）
- 最小化公网传输距离
- 与 Multi-Part Upload **兼容**
- 适合跨大洋/跨大陆传输

### 下载优化

#### S3 Byte-Range Fetches
- 对文件的不同字节范围**并行请求** → 加速下载
- 失败时可重试更小的范围 → 更好的容错
- 用例 1：**加速下载**（并行请求多个分片）
- 用例 2：**只取文件头部**（如前 50 字节获取元数据）

## 考试要点

- 每 Prefix **3,500 PUT + 5,500 GET/秒**
- Multi-Part Upload：>100MB 推荐，>5GB 必须
- Transfer Acceleration：Edge Location + AWS 私网
- Byte-Range Fetches：并行下载或只取部分数据
- 分散 Prefix 可线性提升吞吐

## English Short Summary

S3 baseline: 100-200ms first byte latency; 3,500 PUT/COPY/POST/DELETE + 5,500 GET/HEAD per second per prefix (unlimited prefixes). Upload optimization: Multi-Part Upload (recommended >100MB, required >5GB, parallelized parts) and Transfer Acceleration (upload to nearby Edge Location, then fast AWS private network to target region; compatible with multi-part). Download optimization: Byte-Range Fetches (parallel requests for different byte ranges of a file; also useful for fetching only file headers like first 50 bytes).
