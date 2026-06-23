---
sidebar: false
title: LongPort MCP
sidebar_label: LongPort MCP
sidebar_position: 3
description: Connect MCP-compatible AI clients to the LongPort HTTP MCP Server.
layout: home
pageClass: standalone-ai-page
---

# LongPort MCP

LongPort provides a hosted HTTP MCP (Model Context Protocol) service that lets AI coding assistants and chat tools use OpenAPI market data, account, portfolio, and trading capabilities without manually managing API keys.

## LongPort MCP Endpoint

```text
https://mcp.longportapp.com
```

If your AI client asks for a transport type, choose HTTP or Streamable HTTP.

## Available Capabilities

LongPort MCP exposes over 140+ MCP tools across OpenAPI workflows. Your client discovers available tools automatically on connect.

| Capability | Coverage |
| --- | --- |
| Real-time market data | Quotes, candlesticks, depth, broker queues, trades, intraday capital flow |
| Fundamentals and research | Company profiles, dividends, valuations, executive holdings, A/H premium |
| Derivatives | Option chains, warrant filters, issuers, warrant quotes |
| Account and portfolio | Balances, positions, cash flow, watchlists and groups |
| Trading | Place, modify, and cancel orders, estimate max purchase quantity |
| Automation | Price alerts and scheduled DCA plans |

Actual tool availability depends on your region, account level, and granted OAuth scopes.

## Prerequisites

- An active LongPort account with onboarding completed, or a paper trading account.
- An AI client that supports HTTP MCP and OAuth authorization.

## Client Setup

Configuration format can vary across client versions. Treat your client's official MCP documentation as the source of truth. The core parameter you need is the server URL:

```text
https://mcp.longportapp.com
```

### ChatGPT

Enable Developer Mode, then add LongPort MCP as a custom app.

Use these values:

- Name: `LongPort`
- Description: `LongPort Developers MCP Server.`
- Connection / Server URL: `https://mcp.longportapp.com`
- Authentication: OAuth

### Claude Code

Run this command in your terminal:

```bash
claude mcp add --transport http longport https://mcp.longportapp.com
```

Then open the `claude` terminal interface, type `/mcp`, select `longport`, and choose Authenticate to complete OAuth authorization.

### Codex

Run this command in your terminal:

```bash
codex mcp add longport --url https://mcp.longportapp.com
```

Then follow the OAuth authorization flow in Codex when prompted.

### Codex Desktop

1. Open Settings.
2. Go to MCP Servers.
3. Click Add Server.
4. Fill in:
   - Name: `longport`
   - Type: Streamable HTTP
   - URL: `https://mcp.longportapp.com`
5. Leave other fields empty.
6. Save, then click Authenticate on the `longport` entry.

## OAuth Authorization Flow

LongPort MCP uses OAuth. You do not need to paste API keys or tokens into the client.

1. Add the LongPort MCP configuration and call a tool for the first time.
2. The client opens a browser tab with the LongPort login and consent page.
3. Sign in and approve the requested permission scopes.
4. After approval, the client receives credentials and MCP tools become available.
5. Credentials are refreshed automatically by the client.

## Client Compatibility

LongPort MCP requires clients that support HTTP MCP and OAuth authorization. Clients with incomplete OAuth support can fail during the authorization flow.

If a client fails to connect, check its version and MCP support documentation.

## Security Recommendations

- Approve only the scopes required for your current task.
- For order placement, explicitly instruct the AI to ask for human confirmation before executing.
- Avoid copying OAuth credentials into untrusted environments.
- Periodically review and revoke unused authorizations in your LongPort account security settings.

## Recommended Usage Pattern

1. Start with read-only tools, such as market data, account overview, and position queries.
2. Enable order placement only after verifying scope configuration and your own risk controls.
3. Add guardrails in prompts, such as "always confirm with me before placing an order".

## Troubleshooting

### OAuth Sign-in Failed

- Confirm your LongPort account is in good standing and identity verification is complete.
- Remove the existing MCP configuration from the client and re-add it to trigger a fresh authorization.
- Check whether the requested scopes are supported for your account type.

### Connected But Some Tools Are Missing

- Account or regional restrictions can limit certain markets or features.
- If tool capabilities have been updated, re-authorize to receive the new scopes.

### Permission Denied On Trading Actions

- Verify trading permissions and market eligibility on your account.
- Confirm that the current MCP session's OAuth scopes include trading-related permissions.
