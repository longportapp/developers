---
id: changelog
title: 更新日志
slug: changelog
sidebar_position: 7
sidebar_icon: newspaper
---

## 2026-06-25

### SDK v4.3.3

- **宏观经济数据接口** — 新增两个 `FundamentalContext` 方法：`macroeconomic_indicators` 列出全部指标（支持按国家筛选、关键词搜索），`macroeconomic` 查询指定指标的历史发布数据（实际值/预期值/前值）

## 2026-06-02

### SDK v4.2.0

- **FundamentalContext** — 新增 `shareholder_top`、`shareholder_detail`、`valuation_comparison`
- **QuoteContext** — `short_positions` 统一支持美股和港股；新增 `short_trades`
- **MarketContext** — 新增 `top_movers`、`rank_categories`、`rank_list`
- **新增 ScreenerContext** — `screener_recommend_strategies`、`screener_user_strategies`、`screener_strategy`、`screener_search`、`screener_indicators`
- 覆盖语言：Rust / Python / Node.js / Java / C / C++ / Go

## 2026-05-13

### SDK v4.1.0

- **7 个新 Context 类型，共 66 个方法** — `FundamentalContext`（20 个方法：财报、分析师评级、股息、EPS 预测、一致性预期、估值），`MarketContext`（9 个方法：市场状态、券商持仓、A/H 溢价、交易统计），`CalendarContext`（7 个方法：财报 / 股息 / 拆股 / IPO 日历），`PortfolioContext`（5 个方法：汇率、盈亏分析），`AlertContext`（4 个方法：股价提醒），`DCAContext`（12 个方法：定投计划全生命周期），`SharelistContext`（9 个方法：自选股列表）
- **QuoteContext** — 新增 4 个方法：`short_positions`、`option_volume`、`option_volume_daily`、`update_pinned`
- **ContentContext** — 新增 `topic_detail` 及话题回复相关方法
- **Rust SDK** — `Config::header()` 支持注入自定义 HTTP/WebSocket 请求头
- 参数类型改用 typed enum 替代原始整数；货币字段使用 `Decimal` 类型

### 文档

- 侧边栏重构：新增 **资讯与社区** 分类（含资讯、话题、自选股）；行情 **Watchlist** 替代 Individual；**附录** 替代 Socket Feed（默认折叠）
- 文档总览新增 **Fundamental** 和 **资讯与社区** 章节介绍

## 2026-03-30

- 新增结单 API：
  - `GET /v1/statement/list` — 查询日结单或月结单列表
  - `GET /v1/statement/download` — 获取指定结单文件的预签名下载地址

## 2026-03-25

- 新增社区 API：
  - `GET /content/topics/mine` — 获取我发布的讨论列表
  - `POST /content/topics` — 创建社区讨论
  - `GET /content/topics/{id}` — 获取讨论详情
  - `GET /content/topics/{topic_id}/comments` — 获取讨论回复列表
  - `POST /content/topics/{topic_id}/comments` — 创建讨论回复

## 2025-06-17

- 更新获取账户资金接口
  - `GET /v1/asset/account` 增加 (frozen_transaction_fees) 返回字段

## 2024-10-09

### SDK 2.0.0

- 连接到服务器时打印已开通的行情包
- 交易 API 中的数量类型从 `int` 更改为 `Decimal`。

## 2024-09-11

- 更新获取标的列表接口
  - `GET /v1/quote/get_security_list` 返回的多语言名称根据请求头 `accept-language` 返回对应字段，不再一次性返回三种语言名称

## 2024-08-28

- SDK 中 `Depth.price` 字段从 `Decimal` 类型改为 `Optional[Decimal]` 类型

## 2024-05-17

- 下单及订单查询接口扩展 `outside_rth` 字段支持夜盘交易

## 2024-05-06

- 更新获取账户资金接口
  - `GET /v1/asset/account` 增加 (buy_power) 返回字段

## 2024-04-29

- 删除 `TSMPCT`, `TSMAMT` 订单类型

## 2024-04-15

- [交易推送](https://open.longport.com/docs/trade/trade-definition#websocket-%E6%8E%A8%E9%80%81%E9%80%9A%E7%9F%A5)添加 `last_share`, `last_price`。

## 2024-04-13

- [交易推送](https://open.longport.com/docs/trade/trade-definition#websocket-%E6%8E%A8%E9%80%81%E9%80%9A%E7%9F%A5)添加 `remark` 备注字段。

## 2023-11-03

- 新增行情历史 K 线接口
  - 长连接 `Business Command：27` 获取标的历史 K 线

## 2023-08-17

- 更新获取账户资金接口
  - `GET /v1/asset/account` 增加入参 (currency) 字段

## 2023-04-12

- 更新获取股票持仓接口
  - `GET /v1/asset/stock` 增加开盘前初始持仓 (init_quantity) 字段

## 2023-04-11

- 新增订单详情查询接口
  - `GET /v1/trade/order` 获取订单详情
- 新增预估最大购买数量接口
  - `GET /v1/trade/estimate/buy_limit` 获取预估最大购买数量接口
- 美股期权添加市价单和条件单支持

## 2022-07-18

- 更新标的基础信息接口
  - 长连接 `Business Command: 10` 响应增加 `board` 字段

## 2022-07-14

- 新增获取保证金比例接口
  - `GET /v1/risk/margin-ratio` 获取保证金比例

## 2022-06-30

- 新增获取关注分组接口
  - `GET /v1/watchlist/groups` 获取关注分组

## 2022-06-20

- 更新账号资金接口
  - `GET /v1/asset/account` 响应增加净资产 (net_assets)、初始保证金 (init_margin)、维持保证金 (maintenance_margin) 字段
- 更新持仓接口
  - `GET /v1/asset/stock` 支持用户获取期权持仓

## 2022-06-15

- 新增行情资金流接口
  - 长连接 `Business Command：24` 获取标的当日资金流向
  - 长连接 `Business Command：25` 获取标的当日资金分布
