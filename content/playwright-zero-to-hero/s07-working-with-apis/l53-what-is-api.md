---
title: "What is API"
lectureId: 53
section: 7
sectionTitle: "Working with APIs"
date: "2026-04-29"
tags: [playwright, api, rest, http, mock, intercept, client-server]
---

## 中文短总结

API（Application Programming Interface）是应用间通信的接口。现代 Web 应用均为 Client-Server 架构——浏览器发请求，API 返回 JSON 响应。四种常见请求方法：GET（获取）、POST（创建）、PUT（更新）、DELETE（删除）。状态码：2xx 成功、3xx 重定向、4xx 客户端错误、5xx 服务器错误。Playwright 中可以 mock API（替换响应）、intercept API（拦截并修改响应）、或直接调用 API（如无头认证），各有优缺点。

## English Notes

### API Fundamentals

- **API** = Application Programming Interface — a "black box" you interact with via endpoints
- Modern web apps are **client-server**: browser sends requests → API returns responses → browser renders

### HTTP Methods

| Method | Purpose |
|---|---|
| **GET** | Retrieve data |
| **POST** | Create new resource |
| **PUT** | Update existing resource |
| **DELETE** | Remove resource |

### API Request Components

| Component | Description |
|---|---|
| **URL** (endpoint) | HTTP URL to the API |
| **Headers** | Content-Type, Authorization token |
| **Method** | GET, POST, PUT, DELETE |
| **Body** | JSON payload (POST/PUT only) |

### Status Codes

| Range | Meaning | Examples |
|---|---|---|
| **2xx** | Success | 200 OK, 201 Created, 204 No Content |
| **3xx** | Redirection | Redirect to different API URL |
| **4xx** | Client error | 400 Bad Request, 401 Unauthorized, 404 Not Found |
| **5xx** | Server error | 500 Internal Server Error |

### Playwright API Capabilities

1. **Mock API** — intercept request, return custom response
   - Pro: faster, more stable (100% control over data)
   - Con: breaks integration testing, won't catch API changes
   - Good for: slow/unstable endpoints, third-party APIs
2. **Intercept & modify response** — let API call through, modify the response before browser processes it
3. **Direct API calls** — call API from Playwright without browser (e.g., headless auth)
   - Pro: faster test execution

## English Short Summary

API is the interface for client-server communication using GET/POST/PUT/DELETE methods. In Playwright, you can mock APIs, intercept and modify responses, or call APIs directly for faster test setup.
