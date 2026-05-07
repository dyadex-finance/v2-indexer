// Chain Configuration Index
// Export chain configuration mapping

// Chain ID to configuration mapping
export const CHAIN_CONFIGS = {
  31337: "anvil-local",
  10143: "monad-testnet",
} as const;

export type SupportedChainId = keyof typeof CHAIN_CONFIGS;
