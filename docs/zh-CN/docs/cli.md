---
sidebar: false
title: LongPort CLI
sidebar_label: LongPort CLI
sidebar_position: 2
description: 安装 LongPort CLI，用于 AI-Native 终端工作流。
layout: home
pageClass: standalone-ai-page
---

# LongPort CLI

LongPort CLI 是面向 AI-Native 场景的命令行工具，可用于行情数据、资产组合和交易工作流。当你的 AI 工具可以执行终端命令，或你需要可脚本化的本地流程时，可以使用 CLI。

适用场景：

- AI agent 在终端中调用工具。
- 只读行情数据和研究工作流。
- 在明确开启权限后处理账户、资产组合和交易工作流。

## 安装

### Homebrew（macOS / Linux）

```bash
brew install --cask longportapp/tap/longport-terminal
```

### 安装脚本（macOS / Linux）

```bash
curl -sSL https://github.com/longportapp/longport-terminal//raw/main/install | sh
```

### Windows（Scoop）

```powershell
scoop install https://github.com/longportapp/longport-terminal//raw/refs/heads/main/.scoop/longport.json
```

### Windows（PowerShell）

```powershell
iwr https://github.com/longportapp/longport-terminal//raw/main/install.ps1 | iex
```

安装器会把 `longport` 命令加入系统路径。

## 认证

CLI 使用 OAuth 2.0。登录完成后，后续命令会复用已保存的 token，不需要重复认证。

```bash
longport auth login
longport auth logout
longport check
```

安装后运行 `longport check`，验证 token、地区和 API endpoint 连通性。

## LongPort CLI 用法

```bash
longport <command> [options]
```

可用时，命令应支持机器可读输出：

```bash
longport quote TSLA.US --format json
longport positions --format json
```

### 诊断

```bash
longport check
```

### 行情

```bash
longport quote TSLA.US 700.HK
longport depth TSLA.US
longport trades TSLA.US --count 50
longport intraday TSLA.US
longport kline TSLA.US --period day
longport kline history TSLA.US --start 2024-01-01
longport static TSLA.US
longport calc-index TSLA.US --index pe,pb,eps
longport capital flow TSLA.US
longport market-temp US
longport trading session
longport security-list HK
```

### 新闻与公告

```bash
longport news TSLA.US --count 20
longport news detail <id>
longport filing list AAPL.US --count 20
longport filing detail AAPL.US <id>
longport topic list TSLA.US --count 20
longport topic detail <id>
```

### 期权与窝轮

```bash
longport option quote AAPL240119C190000
longport option chain AAPL.US
longport option chain AAPL.US --date 2024-01-19
longport warrant quote 12345.HK
longport warrant list 700.HK
longport warrant issuers
```

### 基本面

```bash
longport financial-report AAPL.US --kind IS
longport institution-rating AAPL.US
longport dividend AAPL.US
longport forecast-eps AAPL.US
longport consensus AAPL.US
longport valuation AAPL.US --indicator pe
longport fund-holder AAPL.US --count 20
longport shareholder AAPL.US --range all
```

### 市场数据

```bash
longport exchange-rate
longport finance-calendar financial --symbol AAPL.US
longport finance-calendar report --symbol AAPL.US
longport finance-calendar dividend --symbol AAPL.US
longport finance-calendar ipo --market US
longport finance-calendar closed --market HK
```

### 自选股

```bash
longport watchlist
longport watchlist show <id|name>
longport watchlist create "My Portfolio"
longport watchlist update <id> --add TSLA.US
longport watchlist update <id> --remove AAPL.US
```

### 交易与资产

建议先从只读命令开始。只有当工作流明确需要下单时，再启用交易权限。

```bash
longport positions
longport fund-positions
longport assets --currency USD
longport orders
longport orders --history --start 2024-01-01
longport executions
longport order <order_id>
longport buy TSLA.US 100 --price 250.00
longport sell TSLA.US 100 --price 260.00
longport cancel <order_id>
longport replace <order_id> --qty 200 --price 255.00
longport margin-ratio TSLA.US
longport max-qty TSLA.US --side buy --price 250
```

### 盈亏分析

```bash
longport profit-analysis
longport profit-analysis detail 700.HK
longport profit-analysis by-market --market HK --size 50
```

### 结单

```bash
longport statement list --type daily
longport statement export --file-key <KEY> --section equity_holdings
longport statement export --file-key <KEY> --all
```

### 内部人交易

```bash
longport insider-trades TSLA.US
longport insider-trades AAPL.US --count 40
longport insider-trades NVDA.US --format json
```

### 投资人持仓

```bash
longport investors
longport investors 0001067983
longport investors 0001067983 --top 20
longport investors changes 0001067983
```

## 标的代码格式

```text
<CODE>.<MARKET>   例如 TSLA.US   700.HK   600519.SH
```

市场：`HK` 表示港股，`US` 表示美股，`CN` / `SH` / `SZ` 表示 A 股，`SG` 表示新加坡市场。
