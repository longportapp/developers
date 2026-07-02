---
slug: etf-asset-allocation
title: ETF Asset Allocation
sidebar_position: 7
language_tabs: false
toc_footers: []
includes: []
search: true
highlight_theme: ''
headingLevel: 2
---

Get ETF asset allocation including holdings, regional distribution, asset class, and industry breakdown.

<SDKLinks module="fundamental" klass="FundamentalContext" method="etf_asset_allocation" />


## Parameters

> **SDK method parameters.**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| symbol | string | YES | ETF security symbol, e.g. `QQQ.US` |

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

| Status | Description | Schema |
| ------ | ----------- | ------ |
| 200    | Success     | [AssetAllocationResponse](#AssetAllocationResponse) |
| 400    | Bad request | None   |

## Schemas

### AssetAllocationResponse

<a id="AssetAllocationResponse"></a>

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| info | object[] | true | Asset allocation groups, see [AssetAllocationGroup](#AssetAllocationGroup) |

### AssetAllocationGroup

<a id="AssetAllocationGroup"></a>

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| report_date | string | false | Report date (e.g. `20260601`) |
| asset_type | string | false | Element type: `Holdings`, `Regional`, `AssetClass`, `Industry` |
| lists | object[] | true | Allocation items, see [AssetAllocationItem](#AssetAllocationItem) |

### AssetAllocationItem

<a id="AssetAllocationItem"></a>

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| name | string | false | Element name |
| code | string | false | Security code (holdings only, e.g. `NVDA`) |
| position_ratio | string | false | Position ratio (e.g. `0.0861114`) |
| symbol | string | false | Security symbol (holdings only, e.g. `NVDA.US`) |
| name_locales | object | false | Localized names (locale → name) |
| holding_detail | object | false | Holding detail (holdings only), see [HoldingDetail](#HoldingDetail) |

### HoldingDetail

<a id="HoldingDetail"></a>

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| industry_id | string | false | Industry ID |
| industry_name | string | false | Industry name |
| index | string | false | Index counter ID (e.g. `BK/US/CP99000`) |
| index_name | string | false | Index name |
