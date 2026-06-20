---
sidebar: false
title: LongPort Skill
description: 安裝 LongPort Skill，並將 AI 工具接入 OpenAPI 工作流。
layout: home
pageClass: standalone-ai-page
---

# LongPort Skill

LongPort Skill 為 AI 工具提供可複用的 OpenAPI 指令、MCP 連接引導、標的代碼約定和安全檢查。適用於支持 Skill 文件或自定義可複用指令的 AI 客戶端。

## 使用 AI 安裝

<Tabs groupId="skill-install-options">
<TabItem value="connect-ai" label="Connect AI" default>

授權前置完成。先在 Connect 頁面獲取一次性授權碼，把授權片段交給 AI，後續由 AI 自動處理：

1. 在 Connect 頁面登入並獲取一次性授權碼。
2. 將授權片段發送給你的 AI 助手。
3. AI 會兌換授權碼並接入 LongPort，過程中不需要反覆跳轉瀏覽器。

<a href="https://open.longportapp.com/connect" style="display:inline-flex;align-items:center;justify-content:center;gap:8px;border-radius:6px;background:var(--vp-c-brand-3);padding:6px 24px;font-size:14px;font-weight:600;color:#fff;text-decoration:none;transition:background-color 0.2s ease;" onmouseover="this.style.background='var(--vp-c-brand-2)'" onmouseout="this.style.background='var(--vp-c-brand-3)'"><svg aria-hidden="true" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 8V4H8" /><rect width="16" height="12" x="4" y="8" rx="2" /><path d="M2 14h2" /><path d="M20 14h2" /><path d="M15 13v2" /><path d="M9 13v2" /></svg><span>Connect AI</span></a>

</TabItem>
<TabItem value="install-guide" label="Copy command">

將這段提示詞發送給你的 AI 工具：

```text
Install LongPort AI toolkit following the guide:
https://open.longportapp.com/skill/install.md
And complete login and test with a market data query.
```

補充資訊：[安裝指南](/zh-HK/skill/install)

</TabItem>
</Tabs>

## 提供能力

- 面向行情、資產組合和交易任務的 OpenAPI 工作流引導。
- MCP 連接引導和標的代碼格式。
- 只讀優先的驗證提示詞。
- 指向 LLM 可讀文件的鏈接。

## 使用示例

安裝 Skill 後，可以向 AI 工具提出類似問題：

```text
展示 NVDA.US 和 TSLA.US 最近 5 個交易日的表現。
```

Skill 會引導 AI 採用 LongPort MCP，從 OpenAPI 獲取市場行情或你的帳戶資產資訊。
