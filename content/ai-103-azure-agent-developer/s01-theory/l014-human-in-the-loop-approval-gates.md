---
title: "Unit 13: Human-in-the-Loop (HITL) – Approval Gates"
lectureId: 14
section: 1
sectionTitle: "Theory"
date: "2026-07-01"
tags: ["AI-103", "Azure AI", "HITL", "human-in-the-loop", "approval-gates", "Logic Apps"]
---

## 中文短总结

HITL：Agent 暂停执行，请求**人类**（非 Agent）审批后才继续。Approval gate = 开发者定义的 checkpoint（触发条件、审批人、超时非 LLM 决定）。适用：大额退款、删数据、特权访问、外发通信；只读查询不需。Logic Apps（1400+ connector）发送邮件/Teams/ServiceNow 审批，Agent 通过 REST 调用。长等待须 async 轮询（submit→requestId→poll GET）。超时默认 reject；可 escalate 或 retry。多 Agent 由 Manager 触发 gate，全局暂停。

## 中文长总结

### HITL 定义
- Agent 到达需**人类判断**的点 → **暂停** → 人类 approve/reject → 才继续
- Microsoft Agent Framework **内置暂停**，无需自定义暂停逻辑

### 何时需要 Approval Gate
| 需要 | 不需要 |
|------|--------|
| 金融操作（退款超阈值） | 只读查询 |
| 数据销毁（删客户记录） | |
| 特权访问（临时 admin 权限） | |
| 外部通信（发邮件/通知） | |

### Approval Gate 组件（开发者配置，非 LLM）
1. **Trigger 条件**：如 refund > $500（开发者编程，LLM 不能自创 trigger）
2. **Approvers**：指定 email / 组 / 角色（如区域经理）
3. **Timeout**：如 24 小时无响应 → 自动 reject
4. **Escalation chain**：超时升级下一审批人

### Approval Request 内容
- Action description（LLM 可填充）
- Reason、Risk level、Supporting evidence
- 例：「Refund $1,500 — 产品缺陷 — High financial loss — 聊天记录链接」

### 审批响应（JSON）
- **Approve**：`{ decision: "approved", approvedBy, timestamp }`
- **Reject**：`{ decision: "rejected", reason, rejectedBy }`
- Agent 将 rejection reason 转告用户并结束对话

### Timeout 行为
| 行为 | 说明 |
|------|------|
| **Reject**（默认） | 超时 → 告知用户请求取消 |
| **Escalate** | 24h 无响应 → 升级第二审批人，再 24h |
| **Retry** | 重发给 primary approver（限 3 次） |

### Escalation Chain
- Approvers 列表：[manager@, director@, vp@]
- **Reject 时**：链断裂，不再升级，通知用户被拒
- **Timeout 时**：逐级升级（manager 24h → director 24h → VP）

### Logic Apps 集成
- **1400+ connectors**：Email、Teams、Slack、SAP、SalesNow 等
- 低代码 workflow：trigger + action 可视化连接
- 内置 **Approval connector**：Send approval email → 等待点击 → 返回 JSON
- 流程：Agent POST Logic App REST endpoint → Logic App 发审批 → 人类响应 → Logic App 返回 decision

### 同步 vs 异步（关键）
- 审批可能等**数小时**，Agent **不能同步阻塞**
- **Async 三步骤**：
  1. POST `async=true` → 立即获 **requestId**
  2. 每分钟 GET poll status（pending / completed）
  3. completed → 取 output（approve/reject）
- REST POST 的 timeout 是 Logic App 响应超时，**≠** 审批超时
- 未实现 async polling → 审批完成前 Agent 已超时失败

### 多 Agent 系统中的 HITL
- **Manager Agent**（通常 LLM）决定何时触发 approval gate
- 子 Agent（可能 small LLM）不具备此能力
- Gate 触发 → **整个多 Agent 对话暂停**（Manager + 所有子 Agent）
- 审批完成 → Manager 恢复，委派 Refund Agent 执行或告知被拒

### 安全
- 验证响应者 = 指定 approver（非攻击者冒充）
- Logic App 发送**唯一链接**，仅目标邮箱可点击
- Teams 审批：Logic App 验证 **Entra ID** 登录身份匹配 approver email
- 记录 approver、时间、IP；检测异常位置告警

### Foundry Trace Spans
- **Gate trigger span**：gate name, action, approver email, timeout hours
- **Waiting span**：request 到 response 的 duration
- **Decision span**：decision, approver, response time
- Timeout span：status=timeout

## 考试要点

- HITL = Agent 暂停，**人类** approve/reject（非 Agent）
- Trigger/approver/timeout 由**开发者**定义，非 LLM 自创
- 高 stake：金融/删数据/特权/外发；只读不需
- Logic Apps Approval connector + REST endpoint
- **必须 async polling**（submit requestId → poll GET），否则长等待超时失败
- Timeout：默认 reject；escalate on timeout vs break on reject
- 多 Agent：Manager 触发 gate，全局暂停
- 安全：唯一链接 + Entra ID 验证 + 审计日志
- Foundry Trace：trigger/waiting/decision spans

## English Short Summary

Human-in-the-Loop (HITL) pauses agent execution for human approval on high-stakes actions—financial transactions, data deletion, privileged access, external communications. Read-only queries need no gate. Developers define trigger conditions, approvers, and timeouts (not the LLM). Logic Apps with 1400+ connectors send approval requests via email, Teams, or ServiceNow; agents call Logic App REST endpoints. Long waits require async polling (submit with async=true, get requestId, poll status)—synchronous blocking will timeout. Timeout defaults to reject; escalation chains advance on timeout but break on rejection. In multi-agent systems, the manager agent triggers gates and pauses all agents. Foundry Trace spans record triggers, wait durations, and decisions.
