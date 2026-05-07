// Chain Configuration Index
// Export chain configuration mapping

import { ChainId } from "../common/chainId";

// Chain ID to configuration mapping
export const CHAIN_CONFIGS: Record<ChainId, string> = {
  [ChainId.AnvilLocal]: "anvil-local",
  [ChainId.MonadTestnet]: "monad-testnet",
};

export type SupportedChainId = ChainId;
