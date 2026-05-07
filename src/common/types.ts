import type { ChainId } from "./chainId";

export interface TokenDefinition {
  address: string;
  symbol: string;
  name: string;
  decimals: bigint;
}

export interface ChainConfig {
  FACTORY_ADDRESS: string;
  REFERENCE_TOKEN: string;
  STABLE_TOKEN_PAIRS: string[];
  STATIC_TOKEN_DEFINITIONS: TokenDefinition[];
  WHITELIST: string[];
  STABLECOINS: string[];
  MINIMUM_USD_THRESHOLD_NEW_PAIRS: string;
  MINIMUM_LIQUIDITY_THRESHOLD_ETH: string;
}

export interface ChainRpcConfig {
  chainId: ChainId;
  name: string;
  network: string;
  nativeCurrency: {
    decimals: number;
    name: string;
    symbol: string;
  };
  rpcUrl: string | undefined;
  blockExplorer?: string;
}
