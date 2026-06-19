---
sidebar: false
title: LongPort CLI
sidebar_label: LongPort CLI
sidebar_position: 2
description: 安裝 LongPort CLI，用於 AI-Native 終端工作流。
layout: home
pageClass: standalone-ai-page
---

# LongPort CLI

LongPort CLI 是面向 AI-Native 場景的命令行工具，可用於行情數據、資產組合和交易工作流。當你的 AI 工具可以執行終端命令，或你需要可腳本化的本地流程時，可以使用 CLI。

適用場景：

- AI agent 在終端中調用工具。
- 只讀行情數據和研究工作流。
- 在明確開啟權限後處理帳戶、資產組合和交易工作流。

## 安裝

### Homebrew（macOS / Linux）

```bash
brew install --cask longportapp/tap/longport-terminal
```

### 安裝腳本（macOS / Linux）

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

安裝器會把 `longport` 命令加入系統路徑。

## 認證

CLI 使用 OAuth 2.0。登錄完成後，後續命令會複用已保存的 token，不需要重複認證。

```bash
longport auth login
longport auth logout
longport check
```

安裝後運行 `longport check`，驗證 token、地區和 API endpoint 連通性。

## LongPort CLI 用法

```bash
longport <command> [options]
```

可用時，命令應支持機器可讀輸出：

```bash
longport quote TSLA.US --format json
longport positions --format json
```

### 診斷

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

### 新聞與公告

```bash
longport news TSLA.US --count 20
longport news detail <id>
longport filing list AAPL.US --count 20
longport filing detail AAPL.US <id>
longport topic list TSLA.US --count 20
longport topic detail <id>
```

### 期權與窩輪

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

### 市場數據

```bash
longport exchange-rate
longport finance-calendar financial --symbol AAPL.US
longport finance-calendar report --symbol AAPL.US
longport finance-calendar dividend --symbol AAPL.US
longport finance-calendar ipo --market US
longport finance-calendar closed --market HK
```

### 自選股

```bash
longport watchlist
longport watchlist show <id|name>
longport watchlist create "My Portfolio"
longport watchlist update <id> --add TSLA.US
longport watchlist update <id> --remove AAPL.US
```

### 交易與資產

建議先從只讀命令開始。只有當工作流明確需要下單時，再啟用交易權限。

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

### 盈虧分析

```bash
longport profit-analysis
longport profit-analysis detail 700.HK
longport profit-analysis by-market --market HK --size 50
```

### 結單

```bash
longport statement list --type daily
longport statement export --file-key <KEY> --section equity_holdings
longport statement export --file-key <KEY> --all
```

### 內部人交易

```bash
longport insider-trades TSLA.US
longport insider-trades AAPL.US --count 40
longport insider-trades NVDA.US --format json
```

### 投資人持倉

```bash
longport investors
longport investors 0001067983
longport investors 0001067983 --top 20
longport investors changes 0001067983
```

## 標的代碼格式

```text
<CODE>.<MARKET>   例如 TSLA.US   700.HK   600519.SH
```

市場：`HK` 表示港股，`US` 表示美股，`CN` / `SH` / `SZ` 表示 A 股，`SG` 表示新加坡市場。
