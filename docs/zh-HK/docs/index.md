---
sidebar_position: 0
title: OpenAPI 介紹
id: getting_started_introduce
---
LongPort Developers 提供 OpenAPI、SDK、CLI、MCP、Skill 和適合 LLM 讀取的文件入口，用於構建行情、資產組合、交易和 AI agent 工作流。

你可以直接使用 HTTP / WebSocket API，也可以通過 SDK 集成，或通過 LongPort Skill、CLI、MCP、LLMs Text 將 AI 工具接入 LongPort Developers。

## 可以構建什麼

LongPort Developers 為有研發能力的投資者和開發者提供程序化行情交易接口，覆蓋以下能力：

- 交易類 - 創建、修改、撤銷訂單，當日/歷史訂單及成交記錄的查詢等
- 行情類 - 實時行情報價、歷史行情數的獲取等
- 資產類 - 實時賬戶資產、持倉、現金查詢等
- 實時訂閱 - 提供行情實時報價以及訂單狀態實時變更信息推送

## 接入方式

| 方式 | 適用場景 | 入口 |
| --- | --- | --- |
| OpenAPI | 直接通過 HTTP 和 WebSocket 構建行情、帳戶和交易系統 | [快速開始](/zh-HK/docs/getting-started) |
| SDK | 使用支持的語言開發應用，避免手寫協議細節 | [SDK](/zh-HK/sdk) |
| Skill | 讓 AI 助手獲得可複用的 LongPort 工作流知識和安全安裝引導 | [Skill](/zh-HK/skill) |
| CLI | 終端工作流、腳本，以及可執行 shell 命令的本地 AI agent | [CLI](/zh-HK/docs/cli) |
| MCP | 將支持 MCP 的 AI 客戶端通過 HTTP 接入 140+ LongPort Developers tools | [MCP](/zh-HK/docs/mcp) |
| LLMs Text | 通過 `llms.txt`、`llms-full.txt` 和單頁 Markdown 向 AI 工具提供文件 | [LLMs Text](/zh-HK/docs/llm) |

## 如何開通

1. 登錄 [LongPort App](https://longportapp.com/download) 完成開戶；
2. 登錄 [longportapp.com](https://longportapp.com) 進入開發者平台，完成開發者認證即 OpenAPI 權限申請，獲取令牌。

## 行情覆蓋

<table>
     <thead>
       <tr>
           <th width="160">市場</th>
           <th>標的</th>
       </tr>
     </thead>
     <tr>
         <td width="160" rowspan="2">港股</td>
         <td>證券類產品（含股票、ETFs、窩輪、牛熊、界內證）</td>
     </tr>
     <tr>
         <td>恆生指數</td>
     </tr>
     <tr>
         <td rowspan="3">美股</td>
         <td>證券類產品（含紐交所、美交所、納斯達克上市的股票、ETFs）</td>
     </tr>
     <tr>
         <td>納斯達克指數</td>
     </tr>
     <tr>
         <td>OPRA 選擇權</td>
     </tr>
     <tr>
         <td rowspan="2">A 股</td>
         <td>證券類產品（含股票、ETFs）</td>
     </tr>
     <tr>
         <td>指數</td>
     </tr>
</table>

## 交易標的類別

目前 OpenAPI 支援交易一下標的類別：

| 市價     | 股票 ETF | 權證 | 選擇權 |
| -------- | -------- | ---- | ------ |
| 香港市場 | ✓        | ✓    |        |
| 美國市場 | ✓        | ✓    | ✓      |

## 頻率限制 {#rate-limit}

| 類別         | 限制規則                                                                                                                     |
| ------------ | ---------------------------------------------------------------------------------------------------------------------------- |
| 行情相關 API | <ul><li>一個帳號同時只能建立一個長連接，最多同時訂閱 500 個標的</li><li>1 秒內不超過 10 次調用，並發請求數不超過 5</li></ul> |
| 交易相關 API | <ul><li>30 秒內累計不超過 30 次調用，每兩次調用之間間隔不小於 0.02 秒</li></ul>                                              |

:::success

我們 [OpenAPI SDK](https://open.longportapp.com/sdk) 內部已經做了有效的頻率控制：

- 行情類：`QuoteContext`下的接口，SDK 內部會按照服務端的頻率限制來主動控制，當請求過快的時候，SDK 會自動延遲請求。因此你可以不需要額外實現頻率控制細節。
- 交易類別：`TradeContext` 下的接口，SDK 沒有做限制，由於交易下單場景特殊性，將這個交由用戶自行處理。

:::

## 使用費用 {#pricing}

LongPort 不針對介面服務額外收取開通或使用費用，只需開通 LongPort 帳戶及 OpenAPI 服務權限即可免費使用。實際交易費率請洽詢您開通證券帳戶的券商。

## 其他

OpenAPI 服務由 LongPort 及其適用的關聯公司提供（具體以協議為準）。
