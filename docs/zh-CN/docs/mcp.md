---
sidebar: false
title: LongPort MCP
sidebar_label: LongPort MCP
sidebar_position: 3
description: 将支持 MCP 的 AI 客户端连接到 LongPort HTTP MCP Server。
layout: home
pageClass: standalone-ai-page
---

# LongPort MCP

LongPort 提供托管的 HTTP MCP（Model Context Protocol）服务，让 AI 编程助手和聊天工具可以使用 OpenAPI 的行情、账户、资产组合和交易能力，不需要手动管理 API key。

## LongPort MCP Endpoint

```text
https://mcp.longportapp.com
```

如果 AI 客户端要求选择 transport 类型，请选择 HTTP 或 Streamable HTTP。

## 可用能力

LongPort MCP 提供 140+ 个 MCP tools，覆盖 OpenAPI 工作流。客户端连接后会自动发现可用 tools。

| 能力 | 覆盖范围 |
| --- | --- |
| 实时行情 | 报价、K 线、深度、经纪队列、逐笔成交、盘中资金流 |
| 基本面与研究 | 公司资料、分红、估值、高管持股、A/H 溢价 |
| 衍生品 | 期权链、窝轮筛选、发行商、窝轮报价 |
| 账户与资产组合 | 资产、持仓、现金流、自选股和分组 |
| 交易 | 下单、改单、撤单、估算最大可买数量 |
| 自动化 | 价格提醒、定投计划 |

实际可用 tools 取决于你的地区、账户级别和已授权的 OAuth scopes。

## 前置条件

- 已完成开户的 LongPort 账户，或纸交易账户。
- 支持 HTTP MCP 和 OAuth 授权的 AI 客户端。

## 客户端配置

不同客户端版本的配置格式可能不同，请以客户端官方 MCP 文档为准。核心参数是 Server URL：

```text
https://mcp.longportapp.com
```

### ChatGPT

启用 Developer Mode，然后把 LongPort MCP 添加为自定义 app。

填写：

- Name: `LongPort`
- Description: `LongPort Developers MCP Server.`
- Connection / Server URL: `https://mcp.longportapp.com`
- Authentication: OAuth

### Claude Code

在终端运行：

```bash
claude mcp add --transport http longport https://mcp.longportapp.com
```

然后打开 `claude` 终端界面，输入 `/mcp`，选择 `longport`，再选择 Authenticate 完成 OAuth 授权。

### Codex

在终端运行：

```bash
codex mcp add longport --url https://mcp.longportapp.com
```

随后按 Codex 提示完成 OAuth 授权流程。

### Codex Desktop

1. 打开 Settings。
2. 进入 MCP Servers。
3. 点击 Add Server。
4. 填写：
   - Name: `longport`
   - Type: Streamable HTTP
   - URL: `https://mcp.longportapp.com`
5. 其他字段留空。
6. 保存后，在 `longport` 条目上点击 Authenticate。

## OAuth 授权流程

LongPort MCP 使用 OAuth。你不需要把 API key 或 token 粘贴到客户端里。

1. 添加 LongPort MCP 配置，并首次调用任意 tool。
2. 客户端会打开浏览器标签页，进入 LongPort 登录和授权页面。
3. 登录并批准请求的权限范围。
4. 授权完成后，客户端获得凭据，MCP tools 即可使用。
5. 凭据由客户端自动刷新。

## 客户端兼容性

LongPort MCP 需要客户端支持 HTTP MCP 和 OAuth 授权。OAuth 支持不完整的客户端可能会在授权流程中失败。

如果客户端无法连接，请检查客户端版本和它的 MCP 支持文档。

## 安全建议

- 只批准当前任务需要的 scopes。
- 对于下单操作，明确要求 AI 在执行前先请求人工确认。
- 不要把 OAuth 凭据复制到不可信环境。
- 定期在 LongPort 账户安全设置中检查并撤销不用的授权。

## 推荐使用方式

1. 先从只读 tools 开始，例如行情、账户概览和持仓查询。
2. 只有在确认授权范围和风险控制后，再启用下单能力。
3. 在提示词中加入保护规则，例如“下单前必须先让我确认”。

## 排错

### OAuth 登录失败

- 确认你的 LongPort 账户状态正常，并已完成身份认证。
- 从客户端移除现有 MCP 配置，再重新添加以触发新的授权。
- 检查请求的 scopes 是否支持你的账户类型。

### 已连接但缺少部分 tools

- 账户或地区限制可能会限制部分市场或功能。
- 如果 tools 能力已更新，请重新授权以获得新的 scopes。

### 交易动作提示权限不足

- 确认账户已开通交易权限，并具备目标市场交易资格。
- 确认当前 MCP 会话的 OAuth scopes 包含交易相关权限。
