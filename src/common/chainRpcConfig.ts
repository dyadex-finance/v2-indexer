// Multichain RPC Configuration
// Centralized configuration for all supported chains

import { ChainId, toChainId } from "./chainId";
import type { ChainRpcConfig } from "./types";

// Environment variable mapping for RPC URLs
const RPC_URLS: Record<ChainId, string> = {
  [ChainId.AnvilLocal]: "http://localhost:8545",
  [ChainId.MonadTestnet]: process.env.ENVIO_CHAIN_10143_RPC_URL!,
};

// Chain configurations
export const CHAIN_CONFIGS: Record<ChainId, ChainRpcConfig> = {
  [ChainId.AnvilLocal]: {
    chainId: ChainId.AnvilLocal,
    name: "Monad Testnet",
    network: "monad-testnet",
    nativeCurrency: {
      decimals: 18,
      name: "MON",
      symbol: "NATIVE",
    },
    rpcUrl: RPC_URLS[ChainId.AnvilLocal],
  },
  [ChainId.MonadTestnet]: {
    chainId: ChainId.MonadTestnet,
    name: "Monad Testnet",
    network: "monad-testnet",
    nativeCurrency: {
      decimals: 18,
      name: "MON",
      symbol: "NATIVE",
    },
    rpcUrl: RPC_URLS[ChainId.MonadTestnet],
  },
};

// Helper function to get chain config by chain ID
export function getChainConfig(chainId: number | ChainId): ChainRpcConfig {
  const normalizedChainId = toChainId(chainId);
  const config = CHAIN_CONFIGS[normalizedChainId];
  if (!config) {
    throw new Error(`Unsupported chain ID: ${normalizedChainId}`);
  }

  // Validate that RPC URL is provided
  if (!config.rpcUrl) {
    throw new Error(
      `RPC URL not configured for chain ID ${chainId}. Please set ENVIO_CHAIN_${chainId}_RPC_URL in your .env file.`,
    );
  }

  return config;
}

// Export RPC URLs for direct access if needed
export { RPC_URLS };
