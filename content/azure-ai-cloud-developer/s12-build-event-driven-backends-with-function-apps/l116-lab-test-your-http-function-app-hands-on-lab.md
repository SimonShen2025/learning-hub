---
title: "Lab: Test your HTTP Function App (Hands-On Lab)"
lectureId: 116
section: 12
sectionTitle: "Build Event Driven Backends with Function Apps"
date: "2026-09-22"
tags: ["azure-functions", "http-trigger", "postman", "function-keys"]
---

## 中文短总结

因函数授权级别设为 Function，需要携带主/辅密钥才能触发 HTTP 函数。在门户 "Get Function URL" 中可获取包含 `?code=` 密钥的完整 URL，用 Postman 以 POST 方式发送 JSON body（含 user query）即可验证函数正常返回 LLM 输出。若不希望密钥暴露在 URL 查询参数中，可改为在请求头中添加 `x-functions-key` 并去掉 URL 中的 code 参数，效果相同但更安全。

## 中文长总结

### 获取函数密钥并调用

- 在 Function App 资源的函数详情页 Code + Test 区域点击 "Get Function URL"，可获得包含默认函数密钥的完整调用 URL（URL 中以 `code=` 查询参数形式携带密钥）
- 在 Postman 中将该 URL 设为 POST 请求地址，Body 选择 raw/JSON 模式，传入 `{"query": "tell me about OpenAI"}` 形式的负载
- 发送请求后可收到 LLM 生成的关于 OpenAI 的说明文本，验证函数与 Azure OpenAI 集成工作正常

### 更安全地传递密钥（避免出现在 URL 中）

- 从门户 Function Keys 区域单独复制默认密钥值
- 将请求 URL 精简为 `<domain>/api/OpenAIHTTPTriggerFunction`（去掉 `code` 查询参数）
- 在 Postman 的 Headers 区域新增键值对：`x-functions-key` = 复制的密钥值
- 再次发送请求同样能成功认证并返回相同的 LLM 输出，避免密钥泄露在 URL 或日志中

## English Short Summary

Because the function uses Function-level authorization, invoking it requires a primary/secondary key. The default callable URL (with a `code=` query parameter) was retrieved via "Get Function URL" and tested successfully in Postman with a JSON body containing a user query. As a more secure alternative, the key was instead passed via an `x-functions-key` request header while stripping it from the URL, producing the same successful LLM response without exposing the key in the URL.
