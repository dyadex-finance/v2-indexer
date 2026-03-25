# Uniswap V2 Indexer

[![Discord](https://img.shields.io/badge/Discord-Join%20Chat-7289da?logo=discord&logoColor=white)](https://discord.com/invite/envio)

A Uniswap V2 subgraph migration built with [Envio HyperIndex](https://docs.envio.dev/docs/HyperIndex/overview). Migrated from The Graph subgraph to HyperIndex for faster data access.

## What This Indexes

This indexer tracks all key events from Uniswap V2 `Factory` and `Pair` contracts:

**Events indexed:**
- `PairCreated` - new pair deployments
- `Mint` - liquidity additions
- `Burn` - liquidity removals
- `Swap` - all swaps with amounts in/out
- `Sync` - reserve updates
- `Transfer` - LP token transfers

**Active chain:**
Monad Testnet (chain ID 10143)

> Ethereum Mainnet and other chain configurations are available in the config and can be enabled.

## Prerequisites

- [Node.js](https://nodejs.org/en/download/current) v22 or newer
- [pnpm](https://pnpm.io/installation) v8 or newer
- [Docker Desktop](https://www.docker.com/products/docker-desktop/)

## Quick Start

```bash
# Install dependencies
pnpm install

# Run locally (starts indexer + GraphQL API at http://localhost:8080)
pnpm dev
```

The GraphQL Playground is available at [http://localhost:8080](http://localhost:8080). Local password: `testing`.

## Regenerate Files

```bash
pnpm codegen
```

## Built With

- [Envio HyperIndex](https://docs.envio.dev/docs/HyperIndex/overview) - multichain indexing framework
- [HyperSync](https://docs.envio.dev/docs/HyperSync/overview) - high-performance blockchain data retrieval
- Migrated from the [Uniswap V2 Subgraph](https://github.com/Uniswap/v2-subgraph)

## Documentation

- [HyperIndex Docs](https://docs.envio.dev/docs/HyperIndex/overview)
- [Subgraph to HyperIndex query conversion](https://docs.envio.dev/docs/HyperIndex/query-conversion)
- [Migrate from The Graph to Envio](https://docs.envio.dev/docs/HyperIndex/migration-guide)
- [Getting Started with HyperIndex](https://docs.envio.dev/docs/HyperIndex/getting-started)

## Support

- [Discord community](https://discord.com/invite/envio)
- [Envio Docs](https://docs.envio.dev)
