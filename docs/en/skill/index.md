---
sidebar: false
title: LongPort Skill
description: Install the LongPort Skill and connect AI tools to OpenAPI workflows.
layout: home
pageClass: standalone-ai-page
---

# LongPort Skill

LongPort Skill gives AI tools reusable OpenAPI instructions, MCP connection guidance, symbol conventions, and safety checks. Use it when your AI client supports Skill files or custom reusable instructions.

## Install With AI

<Tabs groupId="skill-install-options">
<TabItem value="connect-ai" label="Connect AI" default>

Authorization happens upfront. Grab a code on the Connect page, hand it to your AI, and it takes care of the rest:

1. Sign in on the Connect page to get a one-time auth code.
2. Send the authorization snippet to your AI assistant.
3. Your AI redeems the code and plugs into LongPort — no browser hops along the way.

<a href="https://open.longportapp.com/connect" style="display:inline-flex;align-items:center;justify-content:center;gap:8px;border-radius:6px;background:var(--vp-c-brand-3);padding:6px 24px;font-size:14px;font-weight:600;color:#fff;text-decoration:none;transition:background-color 0.2s ease;" onmouseover="this.style.background='var(--vp-c-brand-2)'" onmouseout="this.style.background='var(--vp-c-brand-3)'"><svg aria-hidden="true" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 8V4H8" /><rect width="16" height="12" x="4" y="8" rx="2" /><path d="M2 14h2" /><path d="M20 14h2" /><path d="M15 13v2" /><path d="M9 13v2" /></svg><span>Connect AI</span></a>

</TabItem>
<TabItem value="install-guide" label="Copy command">

Send this prompt to your AI tool:

```text
Install LongPort AI toolkit following the guide:
https://open.longportapp.com/skill/install.md
And complete login and test with a market data query.
```

Supplemental details: [Install guide](/skill/install)

</TabItem>
</Tabs>

## What It Provides

- OpenAPI workflow guidance for quote, portfolio, and trading tasks.
- MCP connection guidance and symbol format.
- Read-only-first verification prompts.
- Links to LLM-readable documentation.

## Example Usage

After installing the Skill, ask your AI tool questions like:

```text
Show the recent 5-day performance of NVDA.US and TSLA.US.
```

The Skill guides AI to use LongPort MCP to retrieve market data or your account asset information from OpenAPI.
