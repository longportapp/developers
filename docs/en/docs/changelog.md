---
id: changelog
title: Changelog
slug: changelog
sidebar_position: 21
sidebar_icon: newspaper
---

## 2026-06-25

### SDK v4.3.3

- **Macroeconomic indicators** — Two new `FundamentalContext` methods: `macroeconomic_indicators` lists all indicators (filter by country, keyword search), `macroeconomic` returns historical release data (actual / forecast / previous values) for a given indicator code

## 2026-06-02

### SDK v4.2.0

- **FundamentalContext** — `shareholder_top`, `shareholder_detail`, `valuation_comparison`
- **QuoteContext** — `short_positions` unified for US and HK; new `short_trades`
- **MarketContext** — `top_movers`, `rank_categories`, `rank_list`
- **New ScreenerContext** — `screener_recommend_strategies`, `screener_user_strategies`, `screener_strategy`, `screener_search`, `screener_indicators`
- Languages: Rust / Python / Node.js / Java / C / C++ / Go

## 2026-05-13

### SDK v4.1.0

- **7 new context types, 66 methods** — `FundamentalContext` (20 methods: financial reports, analyst ratings, dividends, EPS forecasts, consensus estimates, valuation), `MarketContext` (9 methods: market status, broker holdings, A/H premium, trade stats), `CalendarContext` (7 methods: earnings / dividends / splits / IPO calendar), `PortfolioContext` (5 methods: exchange rates, P&L analysis), `AlertContext` (4 methods: price alerts), `DCAContext` (12 methods: DCA plans lifecycle), `SharelistContext` (9 methods: community sharelists)
- **QuoteContext** — 4 new methods: `short_positions`, `option_volume`, `option_volume_daily`, `update_pinned`
- **ContentContext** — new `topic_detail` and topic reply methods
- **Rust SDK** — `Config::header()` to inject custom HTTP/WebSocket headers
- Parameters now use typed enums instead of raw integers; monetary fields use `Decimal` type

### Docs

- Sidebar restructured: **News & Contents** section consolidates News, Topics, and Sharelist; Quote **Watchlist** replaces Individual; **Appendix** replaces Socket Feed (collapsed by default)
- **Fundamental** and **News & Contents** sections added to the docs overview

## 2026-03-30

- Add Statement API:
  - `GET /v1/statement/list` — list daily or monthly account statements
  - `GET /v1/statement/download` — get presigned download URL for a statement file

## 2026-03-25

- Add Community API:
  - `GET /content/topics/mine` — list my published topics
  - `POST /content/topics` — create a new community topic
  - `GET /content/topics/{id}` — get topic detail
  - `GET /content/topics/{topic_id}/comments` — list topic replies
  - `POST /content/topics/{topic_id}/comments` — create a topic reply

## 2025-06-17

- Update the interface for Get Account Balance
  - `GET /v1/asset/account` Add response field (frozen_transaction_fees)

## 2024-10-09

### SDK 2.0.0

- Print the opened quote packages when connected to the server.
- The quantity type in the trading API has changed from `int` to `Decimal`.

## 2024-09-11

- Updated Get Security List API
  - The `GET /v1/quote/get_security_list` now returns the name in the corresponding language based on the `accept-language` request header, instead of returning all three languages at once.

## 2024-08-28

- Change the `Depth.price` field in the SDK from `Decimal` type to `Optional[Decimal]` type

## 2024-05-17

- Expand `outside_rth` field to support overnight trading in order placement and query APIs

## 2024-05-06

- Update the interface for Get Account Balance
  - `GET /v1/asset/account` Add response field (buy_power)

## 2024-04-29

- Remove `TSMPCT`, `TSMAMT` Order type

## 2024-04-15

- Add `last_share`, `last_price` field to [Trade push](https://open.longport.com/en/docs/trade/trade-definition#websocket-notification).

## 2024-04-13

- Add `remark` field to [Trade push](https://open.longport.com/en/docs/trade/trade-definition#websocket-notification).

## 2023-11-03

- Add quote history candlestick interface
  - Long connection `Business Command：27`, obtain the history candlestick of security

## 2023-08-17

- Update the interface for Get Account Balance
  - `GET /v1/asset/account` Add parameter (currency)

## 2023-04-12

- Update the interface for Get Stock Positions
  - `GET /v1/asset/stock` Add response field (init_quantity)

## 2023-04-11

- Added order details query interface
  - 'GET /v1/trade/order' Get the order details
- Added the Estimate Maximum Purchase Quantity interface
  - 'GET /v1/trade/estimate/buy_limit' Get the estimated maximum purchase quantity
- U.S. stock options add market order and condition order support

## 2022-07-18

- Update security static info interface
  - Long connection `Business Command：10`, response add `board` fields

## 2022-07-14

- Add get stock margin ratio interface
  - `GET /v1/risk/margin-ratio` Get stock margin ratio

## 2022-06-30

- Add get watched groups interface
  - `GET /v1/watchlist/groups` Get watched groups

## 2022-06-20

- Update account balance interface
  - `GET /v1/asset/account` Response to increase the net assets (net_assets), initial margin (init_margin), maintenance margin (maintenance_margin) fields
- Update position interface
  - `GET /v1/asset/stock` Support users to obtain option positions

## 2022-06-15

- Add quote capital interface
  - Long connection `Business Command:24`, obtain the daily capital distribution of security
  - Long connection `Business Command:25`, obtain the daily capital flow intraday of security
