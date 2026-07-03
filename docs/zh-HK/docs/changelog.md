---
id: changelog
title: 更新日誌
slug: changelog
sidebar_position: 21
sidebar_icon: newspaper
---

## 2026-06-25

### SDK v4.3.3

- **宏觀經濟數據接口** — 新增兩個 `FundamentalContext` 方法：`macroeconomic_indicators` 列出全部指標（支持按國家篩選、關鍵詞搜索），`macroeconomic` 查詢指定指標的歷史發布數據（實際值/預期值/前值）

## 2026-06-02

### SDK v4.2.0

- **FundamentalContext** — 新增 `shareholder_top`、`shareholder_detail`、`valuation_comparison`
- **QuoteContext** — `short_positions` 統一支持美股和港股；新增 `short_trades`
- **MarketContext** — 新增 `top_movers`、`rank_categories`、`rank_list`
- **新增 ScreenerContext** — `screener_recommend_strategies`、`screener_user_strategies`、`screener_strategy`、`screener_search`、`screener_indicators`
- 覆蓋語言：Rust / Python / Node.js / Java / C / C++ / Go

## 2026-05-13

### SDK v4.1.0

- **7 個新 Context 類型，共 66 個方法** — `FundamentalContext`（20 個方法：財報、分析師評級、股息、EPS 預測、一致性預期、估值），`MarketContext`（9 個方法：市場狀態、券商持倉、A/H 溢價、交易統計），`CalendarContext`（7 個方法：財報 / 股息 / 拆股 / IPO 日曆），`PortfolioContext`（5 個方法：匯率、盈虧分析），`AlertContext`（4 個方法：股價提醒），`DCAContext`（12 個方法：定投計劃全生命週期），`SharelistContext`（9 個方法：自選股列表）
- **QuoteContext** — 新增 4 個方法：`short_positions`、`option_volume`、`option_volume_daily`、`update_pinned`
- **ContentContext** — 新增 `topic_detail` 及話題回覆相關方法
- **Rust SDK** — `Config::header()` 支援注入自訂 HTTP/WebSocket 請求頭
- 參數類型改用 typed enum 替代原始整數；貨幣欄位使用 `Decimal` 類型

### 文件

- 側邊欄重構：新增 **資訊與社區** 分類（含資訊、話題、自選股）；行情 **Watchlist** 替代 Individual；**附錄** 替代 Socket Feed（預設折疊）
- 文件總覽新增 **Fundamental** 和 **資訊與社區** 章節介紹

## 2026-03-30

- 新增結單 API：
  - `GET /v1/statement/list` — 查詢日結單或月結單列表
  - `GET /v1/statement/download` — 獲取指定結單文件的預簽名下載地址

## 2026-03-25

- 新增社區 API：
  - `GET /content/topics/mine` — 獲取我發布的討論列表
  - `POST /content/topics` — 創建社區討論
  - `GET /content/topics/{id}` — 獲取討論詳情
  - `GET /content/topics/{topic_id}/comments` — 獲取討論回覆列表
  - `POST /content/topics/{topic_id}/comments` — 創建討論回覆

## 2025-06-17

- 更新獲取賬戶資金接口
  - `GET /v1/asset/account` 增加 (frozen_transaction_fees) 返回字段

## 2024-10-09

### SDK 2.0.0

- 連接伺服器時列印已開啟的行情包
- 交易 API 中的數量類型從 `int` 變更為 `Decimal`

## 2024-09-11

- 更新獲取標的列表接口
  - `GET /v1/quote/get_security_list` 返回的多語言名稱根據請求頭 `accept-language` 返回對應字段，不再一次性返回三種語言名稱

## 2024-08-28

- SDK 中 `Depth.price` 字段从 `Decimal` 类型改为 `Optional[Decimal]` 类型

## 2024-05-17

- 下單及訂單查詢接口擴展 `outside_rth` 字段支持夜盤交易

## 2024-05-06

- 更新獲取賬戶資金接口
  - `GET /v1/asset/account` 增加 (buy_power) 返回字段

## 2024-04-29

- 刪除 `TSMPCT`, `TSMAMT` 訂單類型

## 2024-04-15

- [交易推送](https://open.longport.com/docs/trade/trade-definition#websocket-%E6%8E%A8%E9%80%81%E9%80%9A%E7%9F%A5) 新增`last_share`, `last_price`。

## 2024-04-13

- [交易推送](https://open.longport.com/docs/trade/trade-definition#websocket-%E6%8E%A8%E9%80%81%E9%80%9A%E7%9F%A5) 新增`remark`。

## 2023-11-03

- 新增行情曆史 K 線接口
  - 長連接 `Business Command：27` 獲取標的曆史 K 線

## 2023-08-17

- 更新獲取賬戶資金接口
  - `GET /v1/asset/account` 增加入參 (currency) 字段

## 2023-04-12

- 更新獲取股票持倉接口
  - `GET /v1/asset/stock` 增加開盤前初始持倉 (init_quantity) 字段

## 2023-04-11

- 新增訂單詳情查詢接口
  - `GET /v1/trade/order` 獲取訂單詳情
- 新增預估最大購買數量接口
  - `GET /v1/trade/estimate/buy_limit` 獲取預估最大購買數量接口
- 美股期權添加市價單和條件單支持

## 2022-07-18

- 更新標的基礎信息接口
  - 長連接 `Business Command：10` 響應增加 `board` 字段

## 2022-07-14

- 新增獲取保證金比例接口
  - `GET /v1/risk/margin-ratio` 獲取保證金比例

## 2022-06-30

- 新增獲取關注分組接口
  - `GET /v1/watchlist/groups` 獲取關注分組

## 2022-06-20

- 更新賬號資金接口
  - `GET /v1/asset/account` 響應增加淨資產 (net_assets)、初始保證金 (init_margin)、維持保證金 (maintenance_margin) 字段
- 更新持倉接口
  - `GET /v1/asset/stock` 支持用戶獲取期權持倉

## 2022-06-15

- 新增行情資金流接口
  - 長連接 `Business Command：24` 獲取標的當日資金流向
  - 長連接 `Business Command：25` 獲取標的當日資金分佈
