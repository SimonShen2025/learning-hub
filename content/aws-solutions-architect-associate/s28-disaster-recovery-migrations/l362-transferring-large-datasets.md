---
title: "Transferring Large Datasets into AWS"
lectureId: 362
section: "s28"
sectionTitle: "Disaster Recovery & Migrations"
date: "2026-03-05"
tags: [data-transfer, snowball, direct-connect, site-to-site-vpn, datasync]
---

## 中文短总结

大数据集传输方案对比（200TB / 100Mbps 互联网为例）：①**公网/VPN**：即时建立 → **185 天**（半年！）②**Direct Connect（1Gbps）**：首次建立 > 1 月 → **18.5 天**③**Snowball**：端到端约 **1 周**（含寄送/加载/回寄/导入）→ 最优一次性大传输方案。可配合 DMS 传输剩余数据库增量。**持续复制**用 Site-to-Site VPN / Direct Connect / DMS / DataSync。关键：Snowball 适合一次性大量数据，VPN/DX 适合持续传输。

## 中文长总结

200TB 数据 + 100Mbps 互联网的传输方案计算：

| 方案 | 建立时间 | 传输时间 | 总时间 | 场景 |
|------|---------|---------|--------|------|
| **公网/VPN** | 即时 | **~185 天** | ~185 天 | 小数据 |
| **Direct Connect (1Gbps)** | **>1 个月** | ~18.5 天 | ~50 天 | 大+持续 |
| **Snowball** | 下单+寄送 | **~1 周** | ~1 周 | **一次性大量** |

**计算过程：**
```
200TB = 200,000 GB = 200,000,000 MB = 1,600,000,000 Mb
100 Mbps → 1,600,000,000 / 100 = 16,000,000 秒 ≈ 185 天
1 Gbps → 10× 快 → 18.5 天
```

**持续复制方案：** Site-to-Site VPN / Direct Connect / DMS / DataSync

## 考试要点

- Snowball = 一次性大数据传输最快方案
- 100Mbps 传 200TB = ~185 天（不可行）
- DX 建立 > 1 月
- 持续同步用 DMS/DataSync/VPN/DX
- Snowball + DMS 可组合使用

## English Short Summary

Large dataset transfer comparison (200TB over 100Mbps): (1) **Public internet/VPN**: instant setup → **~185 days**; (2) **Direct Connect (1Gbps)**: >1 month setup → **~18.5 days**; (3) **Snowball**: ~**1 week** end-to-end — best for one-time large transfers. Combine Snowball + DMS for database remainder. **Ongoing replication**: Site-to-Site VPN / Direct Connect / DMS / DataSync.
