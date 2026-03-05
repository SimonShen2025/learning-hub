---
title: "AWS Directory Services - Hands On"
lectureId: 293
section: "s25"
sectionTitle: "Identity and Access Management (IAM) - Advanced"
date: "2026-03-05"
tags: [directory-services, hands-on, active-directory]
---

## 中文短总结

实操演示 AWS Directory Services 控制台（四个选项，第四个 Cognito User Pool 不算 Directory Services）：①AWS Managed Microsoft AD——Standard（≤30,000 对象）/Enterprise（≤500,000 对象），可与 On-Premises 建信任②Simple AD——独立 AD，不能连 On-Premises，兼容 AD API③AD Connector——代理到 On-Premises AD，Small（≤500 用户）/Large（≤5,000 用户）。记住：Managed AD 支持 MFA，Simple AD 独立，AD Connector 仅代理。

## English Short Summary

Hands-on walkthrough of AWS Directory Services console (4 options, 4th is Cognito User Pool redirect — not a Directory Service): (1) AWS Managed Microsoft AD — Standard (≤30K objects) / Enterprise (≤500K objects) with on-premises trust; (2) Simple AD — standalone, AD-compatible, no on-premises connection; (3) AD Connector — proxy to on-premises AD, Small (≤500 users) / Large (≤5,000 users). Key: Managed AD supports MFA, Simple AD is standalone, AD Connector is proxy-only.
