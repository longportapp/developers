---
sidebar: false
title: LongPort MCP
sidebar_label: LongPort MCP
sidebar_position: 3
description: 將支持 MCP 的 AI 客戶端連接到 LongPort HTTP MCP Server。
layout: home
pageClass: standalone-ai-page
---

# LongPort MCP

LongPort 提供託管的 HTTP MCP（Model Context Protocol）服務，讓 AI 編程助手和聊天工具可以使用 OpenAPI 的行情、帳戶、資產組合和交易能力，不需要手動管理 API key。

## LongPort MCP Endpoint

```text
https://mcp.longportapp.com
```

如果 AI 客戶端要求選擇 transport 類型，請選擇 HTTP 或 Streamable HTTP。

## 可用能力

LongPort MCP 提供 140+ 個 MCP tools，覆蓋 OpenAPI 工作流。客戶端連接後會自動發現可用 tools。

| 能力 | 覆蓋範圍 |
| --- | --- |
| 實時行情 | 報價、K 線、深度、經紀隊列、逐筆成交、盤中資金流 |
| 基本面與研究 | 公司資料、分紅、估值、高管持股、A/H 溢價 |
| 衍生品 | 期權鏈、窩輪篩選、發行商、窩輪報價 |
| 帳戶與資產組合 | 資產、持倉、現金流、自選股和分組 |
| 交易 | 下單、改單、撤單、估算最大可買數量 |
| 自動化 | 價格提醒、定投計劃 |

實際可用 tools 取決於你的地區、帳戶級別和已授權的 OAuth scopes。

## 前置條件

- 已完成開戶的 LongPort 帳戶，或紙交易帳戶。
- 支持 HTTP MCP 和 OAuth 授權的 AI 客戶端。

## 客戶端配置

不同客戶端版本的配置格式可能不同，請以客戶端官方 MCP 文件為準。核心參數是 Server URL：

```text
https://mcp.longportapp.com
```

### ChatGPT

啟用 Developer Mode，然後把 LongPort MCP 添加為自定義 app。

填寫：

- Name: `LongPort`
- Description: `LongPort Developers MCP Server.`
- Connection / Server URL: `https://mcp.longportapp.com`
- Authentication: OAuth

### Claude Code

在終端運行：

```bash
claude mcp add --transport http longport https://mcp.longportapp.com
```

然後打開 `claude` 終端界面，輸入 `/mcp`，選擇 `longport`，再選擇 Authenticate 完成 OAuth 授權。

### Codex

在終端運行：

```bash
codex mcp add longport --url https://mcp.longportapp.com
```

隨後按 Codex 提示完成 OAuth 授權流程。

### Codex Desktop

1. 打開 Settings。
2. 進入 MCP Servers。
3. 點擊 Add Server。
4. 填寫：
   - Name: `longport`
   - Type: Streamable HTTP
   - URL: `https://mcp.longportapp.com`
5. 其他字段留空。
6. 保存後，在 `longport` 條目上點擊 Authenticate。

## OAuth 授權流程

LongPort MCP 使用 OAuth。你不需要把 API key 或 token 粘貼到客戶端裡。

1. 添加 LongPort MCP 配置，並首次調用任意 tool。
2. 客戶端會打開瀏覽器標籤頁，進入 LongPort 登錄和授權頁面。
3. 登錄並批准請求的權限範圍。
4. 授權完成後，客戶端獲得憑據，MCP tools 即可使用。
5. 憑據由客戶端自動刷新。

## 客戶端兼容性

LongPort MCP 需要客戶端支持 HTTP MCP 和 OAuth 授權。OAuth 支持不完整的客戶端可能會在授權流程中失敗。

如果客戶端無法連接，請檢查客戶端版本和它的 MCP 支持文件。

## 安全建議

- 只批准當前任務需要的 scopes。
- 對於下單操作，明確要求 AI 在執行前先請求人工確認。
- 不要把 OAuth 憑據複製到不可信環境。
- 定期在 LongPort 帳戶安全設置中檢查並撤銷不用的授權。

## 推薦使用方式

1. 先從只讀 tools 開始，例如行情、帳戶概覽和持倉查詢。
2. 只有在確認授權範圍和風險控制後，再啟用下單能力。
3. 在提示詞中加入保護規則，例如「下單前必須先讓我確認」。

## 排錯

### OAuth 登錄失敗

- 確認你的 LongPort 帳戶狀態正常，並已完成身份認證。
- 從客戶端移除現有 MCP 配置，再重新添加以觸發新的授權。
- 檢查請求的 scopes 是否支持你的帳戶類型。

### 已連接但缺少部分 tools

- 帳戶或地區限制可能會限制部分市場或功能。
- 如果 tools 能力已更新，請重新授權以獲得新的 scopes。

### 交易動作提示權限不足

- 確認帳戶已開通交易權限，並具備目標市場交易資格。
- 確認當前 MCP 會話的 OAuth scopes 包含交易相關權限。
