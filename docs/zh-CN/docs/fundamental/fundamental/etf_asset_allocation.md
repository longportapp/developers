---
slug: etf-asset-allocation
title: ETF 资产配置
sidebar_position: 7
language_tabs: false
toc_footers: []
includes: []
search: true
highlight_theme: ''
headingLevel: 2
---

获取 ETF 的资产配置信息，包含持仓、地区分布、资产类别及行业分布。

<SDKLinks module="fundamental" klass="FundamentalContext" method="etf_asset_allocation" />


## Parameters

> **SDK 方法参数。**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| symbol | string | 是 | ETF 标的代码，如 `QQQ.US` |

## Request Example

<Tabs groupId="request-example">
  <TabItem value="python" label="Python">

```python
from longport.openapi import FundamentalContext, Config, OAuthBuilder

oauth = OAuthBuilder("your-client-id").build(lambda url: print("Visit:", url))
config = Config.from_oauth(oauth)
ctx = FundamentalContext(config)

resp = ctx.etf_asset_allocation("QQQ.US")
print(resp)
```

  </TabItem>
  <TabItem value="python-async" label="Python (async)">

```python
import asyncio
from longport.openapi import AsyncFundamentalContext, Config, OAuthBuilder

async def main() -> None:
    oauth = await OAuthBuilder("your-client-id").build_async(lambda url: print("Visit:", url))
    config = Config.from_oauth(oauth)
    ctx = AsyncFundamentalContext.create(config)

    resp = await ctx.etf_asset_allocation("QQQ.US")
    print(resp)

if __name__ == "__main__":
    asyncio.run(main())
```

  </TabItem>
  <TabItem value="nodejs" label="Node.js">

```javascript
const { Config, FundamentalContext, OAuth } = require('longport')

async function main() {
  const oauth = await OAuth.build('your-client-id', (_, url) => {
    console.log('Open this URL to authorize: ' + url)
  })
  const config = Config.fromOAuth(oauth)
  const ctx = FundamentalContext.new(config)
  const resp = await ctx.etf_asset_allocation('QQQ.US')
  console.log(resp)
}
main().catch(console.error)
```

  </TabItem>
  <TabItem value="java" label="Java">

```java
import com.longport.*;
import com.longport.fundamental.*;

class Main {
    public static void main(String[] args) throws Exception {
        try (OAuth oauth = new OAuthBuilder("your-client-id").build(url -> System.out.println("Open to authorize: " + url)).get();
             Config config = Config.fromOAuth(oauth);
             FundamentalContext ctx = FundamentalContext.create(config)) {
            var resp = ctx.getEtfAssetAllocation("QQQ.US").get();
            System.out.println(resp);
        }
    }
}
```

  </TabItem>
  <TabItem value="rust" label="Rust">

```rust
use std::sync::Arc;
use longport::{oauth::OAuthBuilder, fundamental::FundamentalContext, Config};

#[tokio::main]
async fn main() -> Result<(), Box<dyn std::error::Error>> {
    let oauth = OAuthBuilder::new("your-client-id").build(|url| println!("Open: {url}")).await?;
    let config = Arc::new(Config::from_oauth(oauth));
    let ctx = FundamentalContext::new(config);
    let resp = ctx.etf_asset_allocation("QQQ.US").await?;
    println!("{:?}", resp);
    Ok(())
}
```

  </TabItem>
  <TabItem value="cpp" label="C++">

```cpp
#include <iostream>
#include <longport.hpp>

using namespace longport;
using namespace longport::fundamental;

int main() {
    OAuthBuilder("your-client-id").build(
        [](const std::string& url) { std::cout << "Open: " << url << std::endl; },
        [](auto res) {
            if (!res) return;
            Config config = Config::from_oauth(*res);
            FundamentalContext ctx = FundamentalContext::create(config);
            ctx.etf_asset_allocation("QQQ.US", [](auto resp) {
                if (resp) std::cout << "OK" << std::endl;
            });
        });
    std::cin.get();
}
```

  </TabItem>
  <TabItem value="go" label="Go">

```go
package main

import (
	"context"
	"fmt"
	"log"

	"github.com/longportapp/openapi-go/config"
	"github.com/longportapp/openapi-go/oauth"
	"github.com/longportapp/openapi-go/fundamental"
)

func main() {
	o := oauth.New("your-client-id").
		OnOpenURL(func(url string) { fmt.Println("Open this URL to authorize:", url) })
	if err := o.Build(context.Background()); err != nil {
		log.Fatal(err)
	}
	conf, err := config.New(config.WithOAuthClient(o))
	if err != nil {
		log.Fatal(err)
	}
	c, err := fundamental.NewFromCfg(conf)
	if err != nil {
		log.Fatal(err)
	}
	defer c.Close()
	resp, err := c.EtfAssetAllocation(context.Background(), "QQQ.US")
	if err != nil {
		log.Fatal(err)
	}
	fmt.Printf("%+v\n", resp)
}
```

  </TabItem>
</Tabs>

## Response


### Response Example

```json
{
  "code": 0,
  "message": "success",
  "data": {
    "info": [
      {
        "report_date": "20260601",
        "asset_type": "Holdings",
        "lists": [
          {
            "name": "NVIDIA Corp",
            "code": "NVDA",
            "position_ratio": "0.0861114",
            "symbol": "NVDA.US",
            "name_locales": {
              "zh-CN": "英伟达"
            },
            "holding_detail": {
              "industry_id": "10101010",
              "industry_name": "Semiconductors",
              "index": "BK/US/CP99000",
              "index_name": "S&P 500"
            }
          }
        ]
      },
      {
        "report_date": "20260601",
        "asset_type": "Regional",
        "lists": [
          {
            "name": "United States",
            "code": "",
            "position_ratio": "0.9823",
            "symbol": "",
            "name_locales": {}
          }
        ]
      }
    ]
  }
}
```

### Response Status

| 状态码 | 描述 | 数据结构 |
| ------ | ----------- | ------ |
| 200    | 成功     | [AssetAllocationResponse](#AssetAllocationResponse) |
| 400    | 请求错误 | 无   |

## Schemas

### AssetAllocationResponse

<a id="AssetAllocationResponse"></a>

| 字段名 | 类型 | 必填 | 描述 |
| ---- | ---- | -------- | ----------- |
| info | object[] | 是 | 资产配置分组列表，见 [AssetAllocationGroup](#AssetAllocationGroup) |

### AssetAllocationGroup

<a id="AssetAllocationGroup"></a>

| 字段名 | 类型 | 必填 | 描述 |
| ---- | ---- | -------- | ----------- |
| report_date | string | 否 | 报告日期（如 `20260601`） |
| asset_type | string | 否 | 配置类型：`Holdings`（持仓）、`Regional`（地区）、`AssetClass`（资产类别）、`Industry`（行业） |
| lists | object[] | 是 | 配置明细列表，见 [AssetAllocationItem](#AssetAllocationItem) |

### AssetAllocationItem

<a id="AssetAllocationItem"></a>

| 字段名 | 类型 | 必填 | 描述 |
| ---- | ---- | -------- | ----------- |
| name | string | 否 | 名称 |
| code | string | 否 | 证券代码（仅持仓类型，如 `NVDA`） |
| position_ratio | string | 否 | 持仓比例（如 `0.0861114`） |
| symbol | string | 否 | 证券标的代码（仅持仓类型，如 `NVDA.US`） |
| name_locales | object | 否 | 多语言名称（语言 → 名称） |
| holding_detail | object | 否 | 持仓明细（仅持仓类型），见 [HoldingDetail](#HoldingDetail) |

### HoldingDetail

<a id="HoldingDetail"></a>

| 字段名 | 类型 | 必填 | 描述 |
| ---- | ---- | -------- | ----------- |
| industry_id | string | 否 | 行业 ID |
| industry_name | string | 否 | 行业名称 |
| index | string | 否 | 指数代码（如 `BK/US/CP99000`） |
| index_name | string | 否 | 指数名称 |
