---
title: "Troubleshooting Copilot Setup"
lectureId: 24
section: 4
sectionTitle: "Environment Setup"
date: "2026-03-04"
tags: ["copilot-pro", "copilot-m365", "troubleshooting", "environment-setup"]
---

## 中文短总结

购买 Copilot 后若桌面版 Office 看不到 Copilot 按钮，按以下顺序排查：1）确认 Office 登录的账号与购买 Copilot 的账号一致；2）先到 microsoft365.com 在线版验证 Copilot 是否可用；3）在桌面版 Word 中通过 File → Account → Update License 更新许可证；4）确保文档保存在对应账号的 OneDrive 文件夹中（开启 AutoSave）。即使桌面版不可用，所有课程操作均可通过 Office 在线版完成。

## 中文长总结

### 确认 Copilot 是否已激活

打开桌面版 Word，查看 Copilot 按钮是否可点击。如果可以，说明安装成功，无需进一步操作。

### 排查步骤

**步骤一：验证账号一致性**

最常见的问题。确保桌面版 Office 登录的账号与购买 Copilot Pro / Copilot for M365 的账号完全一致。可以点击 Word 右上角查看当前登录账号。

**步骤二：在线版验证**

访问 microsoft365.com，用正确账号登录，打开在线版 Word 文档。如果在线版能看到 Copilot 按钮，说明购买和账号绑定没有问题，问题出在桌面端。如果在线版也看不到，说明购买流程有误，需要重新检查。

**步骤三：更新许可证（最常见的桌面端修复方法）**

在桌面版 Word 中：File → Account → Update Now → Update License。这是在线版能用但桌面版不能用时最可能的解决方案。也可以尝试登出后重新登录。

**步骤四：确保文档保存在 OneDrive**

文档必须保存在与 Copilot 账号关联的 OneDrive 文件夹中。如果文档保存在本地桌面，Copilot 按钮可能会变灰不可用。可通过开启 AutoSave 并选择对应 OneDrive 来解决。

### 备选方案

即使桌面版 Copilot 始终无法激活，课程中所有操作都可以通过 Office 在线版（Word Online、Excel Online、PowerPoint Online、Outlook Online、Teams Online）完成，不影响学习进度。

## English Short Summary

If Copilot isn't visible in desktop Office after purchase, troubleshoot in order: 1) Verify Office is signed into the same account that purchased Copilot; 2) Test on microsoft365.com online — if Copilot works there, the issue is desktop-side; 3) In desktop Word, go to File → Account → Update License (most common fix); 4) Save documents to the account's OneDrive folder (enable AutoSave). If desktop activation still fails, all course content can be completed using Office Online apps.
