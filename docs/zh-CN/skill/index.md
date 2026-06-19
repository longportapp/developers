---
sidebar: false
title: LongPort Skill
description: 安装 LongPort Skill，并将 AI 工具接入 OpenAPI 工作流。
layout: home
pageClass: standalone-ai-page
---

# LongPort Skill

LongPort Skill 为 AI 工具提供可复用的 OpenAPI 指令、CLI 命令知识、标的代码约定和安全检查。适用于支持 Skill 文件或自定义可复用指令的 AI 客户端。

## 使用 AI 安装

<Tabs groupId="skill-install-options">
<TabItem value="connect-ai" label="Connect AI" default>

授权前置完成。先在 Connect 页面获取一次性授权码，把授权片段交给 AI，后续由 AI 自动处理：

1. 在 Connect 页面登录并获取一次性授权码。
2. 将授权片段发送给你的 AI 助手。
3. AI 会兑换授权码并接入 LongPort，过程中不需要反复跳转浏览器。

<a href="https://open.longportapp.com/connect" style="display:inline-flex;align-items:center;justify-content:center;gap:8px;border-radius:6px;background:var(--vp-c-brand-3);padding:6px 24px;font-size:14px;font-weight:600;color:#fff;text-decoration:none;transition:background-color 0.2s ease;" onmouseover="this.style.background='var(--vp-c-brand-2)'" onmouseout="this.style.background='var(--vp-c-brand-3)'"><svg aria-hidden="true" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 8V4H8" /><rect width="16" height="12" x="4" y="8" rx="2" /><path d="M2 14h2" /><path d="M20 14h2" /><path d="M15 13v2" /><path d="M9 13v2" /></svg><span>Connect AI</span></a>

</TabItem>
<TabItem value="install-guide" label="Copy command">

将这段提示词发送给你的 AI 工具：

```text
Install LongPort AI toolkit following the guide:
https://open.longportapp.com/skill/install.md
And complete login and test with a market data query.
```

补充信息：[安装指南](/zh-CN/skill/install)

</TabItem>
</Tabs>

## 提供能力

- 面向行情、资产组合和交易任务的 OpenAPI 工作流引导。
- LongPort CLI 命令约定和标的代码格式。
- 只读优先的验证提示词。
- 指向 LLM 可读文档的链接。

## 使用示例

安装 Skill 后，可以向 AI 工具提出类似问题：

```text
展示 NVDA.US 和 TSLA.US 最近 5 个交易日的表现。
```

Skill 会引导 AI 采用 LongPort CLI 或 MCP，从 OpenAPI 获取市场行情或你的账户资产信息。
