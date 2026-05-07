// Multichain RPC Configuration
// Centralized configuration for all supported chains

import { ChainId, isChainId, toChainId } from "./chainId";

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

// Environment variable mapping for RPC URLs
const RPC_URLS = {
  [ChainId.MonadTestnet]: process.env.ENVIO_CHAIN_10143_RPC_URL,
} as const;

// Chain configurations
export const CHAIN_CONFIGS: Partial<Record<ChainId, ChainRpcConfig>> = {
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

// Helper function to check if chain is supported
export function isChainSupported(chainId: number | ChainId): boolean {
  return isChainId(chainId) && chainId in CHAIN_CONFIGS;
}

// Get all supported chain IDs
export function getSupportedChainIds(): ChainId[] {
  return Object.keys(CHAIN_CONFIGS).map(Number) as ChainId[];
}

// Export RPC URLs for direct access if needed
export { RPC_URLS };
