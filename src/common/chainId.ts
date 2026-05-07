export enum ChainId {
  AnvilLocal = 31337,
  MonadTestnet = 10143,
}

const CHAIN_ID_VALUES = new Set<number>(
  Object.values(ChainId).filter((v) => typeof v === "number") as number[],
);

export function isChainId(value: number): value is ChainId {
  return CHAIN_ID_VALUES.has(value);
}

export function toChainId(value: number): ChainId {
  if (!isChainId(value)) {
    throw new Error(`Unsupported chain ID: ${value}`);
  }

  return value;
}

export const SUPPORTED_CHAIN_IDS: ChainId[] = [
  ChainId.AnvilLocal,
  ChainId.MonadTestnet,
];
