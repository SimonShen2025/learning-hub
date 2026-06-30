---
title: "Unit 20: Complete Agent Solution – Integration & Exam Readiness"
lectureId: 21
section: 1
sectionTitle: "Theory"
date: "2026-07-01"
tags: ["Exam Readiness", "End-to-End Agent", "AI-103 Domains", "Magentic Pattern", "Human-in-the-Loop", "Integration"]
---

## 中文短总结

本讲整合 AI-103 **五大考试域**，以客户服务 Agent（退款/产品问答/人工升级/偏好记忆）为端到端场景。架构：Foundry Hub/Project + GPT-4o、Entra ID、Content Safety、NLP 预处理、Agentic RAG（Azure AI Search + Fabric）、**Magentic** 多 Agent（Manager/Refund/Product）、Human-in-the-Loop（>$1000 Logic Apps 审批）、Redis/Cosmos 记忆、Foundry Trace + 评估指标。考试七大编码能力：DefaultAzureCredential、REST API、JSON 处理、Key Vault、OpenTelemetry spans、Redis setex/Cosmos upsert_item。Production 认证选 **Managed Identity**；退款 eligibility 查 **REST API** 非 RAG。

## 中文长总结

### AI-103 五大考试域

1. **Foundry Management & Governance**：资源生命周期、Entra ID、red teaming、content safety、密钥管理
2. **Generative AI & Grounding**：模型选择（LLM vs SLM）、Agentic RAG、Azure AI Search、Fabric/Cosmos DB vector stores
3. **Multi-Agent Orchestration**：Agent Framework、Magentic/Handoff/Group Chat 模式、tools、MCP、sequential/concurrent execution
4. **Observability & Memory**：Foundry Trace、spans/attributes、reasoning loops、performance metrics、Redis/Cosmos memory
5. **Agentic Enhancement**：Vision/Speech/Document Intelligence、NLP transformation（entity/PII/sentiment/language）

### 端到端场景：Customer Support Agent

**需求：**
- 退款请求（>$1000 需 approval）
- 产品问答（SharePoint grounding）
- 上传 receipt（Document Intelligence）
- 记住用户偏好（long-term memory）

**架构组件：**
- Foundry Hub → Project → GPT-4o（~10K TPM）
- Entra ID + Service Principal → Key Vault 存 client ID/secret
- Content Safety：input/output filter severity ≥3 block
- NLP pipeline：PII redaction → entity extraction → sentiment routing
- Agentic RAG：text-embedding-3-small + Azure AI Search + Fabric OneLake
- Multi-agent：**Magentic pattern**（Manager → Refund Agent + Product Agent）
- Human-in-the-loop：Logic Apps email approval
- Memory：Redis（short-term）+ Cosmos DB（long-term preferences）
- Observability：OTEL spans for LLM/tool/handoff/memory/approval

### Step-by-Step 实现要点

#### 1. Foundry Setup
- Hub per team → Project per agent solution
- Deploy GPT-4o from model catalog
- Enable Entra ID，register agent with service principal
- Content Safety filters + block response message

#### 2. Authentication
- Dev：`DefaultAzureCredential` + env vars（CLIENT_ID/SECRET/TENANT_ID）
- Production：**Managed Identity** + Cognitive Services User role
- API keys in Key Vault，cache 24h

#### 3. Input Transformation
- `recognize_pii_entities()` → redacted text
- `recognize_entities()` → location/date formatting
- Sentiment ≥80% negative → escalate to human

#### 4. Agentic RAG
- Tool: `search_knowledge_base(query, filter)`
- Embedding: text-embedding-3-small → Azure AI Search vector query
- Fabric: AI Search index → OneLake tables（order history）

#### 5. Multi-Agent (Magentic)
- **Manager**：route refund → Refund Agent，product → Product Agent
- **Refund Agent** tools：check_refund_eligibility、process_refund、get_refund_status
- **Product Agent** tools：search_products、get_product_details、compare_products
- REST APIs for eligibility；**MCP** for SharePoint/Salesforce
- Tool choice：`auto`（general）/ `required`（eligibility check）

#### 6. Human-in-the-Loop
- Refund >$1000 → Logic Apps approval email
- Async polling：get_status every 30s，up to 24h
- Escalation：4h → manager，8h → director，24h → auto reject

#### 7. Memory
- Redis `setex(session_id, timeout, json.dumps(messages))`
- Cosmos `upsert_item(user_preferences)` with TTL，partition key = user ID

#### 8. Observability & Evaluation
- Custom spans：`tracer.start_as_current_span()` + attributes
- Detect reasoning loops in development waterfall
- Pre-deploy：500 labeled conversations，thresholds 95%/99%/90%
- Red teaming for task adherence

### 考试场景题示例

| 场景 | 答案 |
|------|------|
| Production 认证方式 | **Managed Identity**（非 hard-coded key / env vars） |
| 退款 eligibility 数据来源 | **REST API** 调 operational database（非 embedding search / Bing / Doc Intel） |
| 退款 + approval 编排模式 | **Magentic pattern**（Manager delegate to Refund Agent） |

### 七大编码能力

1. **Authentication**：DefaultAzureCredential（几乎总是正确答案）
2. **REST API**：request.post + API key header + JSON body + status code check
3. **JSON**：json.dumps（Redis 序列化）/ json.loads
4. **API Key Management**：Key Vault 或 env vars，`os.environ.get()`
5. **Tracing**：`start_as_current_span()` + `span.set_attribute()`
6. **Memory**：Redis `setex` + JSON.dumps；Cosmos `upsert_item`（无需序列化）
7. **Distributed tracing & state persistence**

### 考试重点提醒

- **Reasoning loops** 是考生反馈的高频难题——务必掌握 waterfall 诊断
- DefaultAzureCredential 在 authentication 题中几乎总是首选
- 区分何时用 RAG vs REST API vs Document Intelligence

## 考试要点

- AI-103 五域：Governance、Grounding、Orchestration、Observability/Memory、Enhancement
- End-to-end 架构整合所有组件，非孤立知识点
- Production auth → **Managed Identity**；Dev → DefaultAzureCredential + env vars
- Refund eligibility → **REST API**（非 vector search / Doc Intel）
- Multi-agent refund + approval → **Magentic pattern**
- Human-in-the-loop：Logic Apps + async polling + escalation timeline
- Tool choice：`auto` vs `required`
- MCP：agent startup `list_tools` 自动发现 SharePoint 等
- Pre-deploy evaluation：500 conversations，95/99/90 thresholds
- **Reasoning loops** 是考试 reported pain point
- 编码必会：DefaultAzureCredential、REST post、json.dumps/loads、Key Vault、OTEL spans、setex/upsert_item
- Content Safety severity 3 block；Entra ID + Key Vault for secrets

## English Short Summary

This capstone lecture integrates all five AI-103 exam domains through a customer support agent scenario (refunds, product Q&A, human escalation, preference memory). Architecture: Foundry Hub/Project with GPT-4o, Entra ID, Content Safety, NLP preprocessing (PII/entity/sentiment), Agentic RAG via Azure AI Search and Fabric, Magentic multi-agent pattern (Manager routing to Refund and Product agents), human-in-the-loop approval via Logic Apps for refunds over $1000, Redis/Cosmos memory, and Foundry Trace evaluation. Seven coding competencies: DefaultAzureCredential, REST APIs, JSON handling, Key Vault key management, OpenTelemetry spans, Redis setex, Cosmos upsert_item. Exam tips: production uses Managed Identity; refund eligibility calls REST API not RAG; Magentic pattern for refund orchestration; reasoning loops are a reported exam difficulty.
