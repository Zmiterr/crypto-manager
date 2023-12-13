import { CHAINS } from '@/metamask/constants'

export interface ProviderRpcError extends Error {
  message: string
  code: number
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  data?: any
}

export enum ContractKeys {
  USDT = 'usdt',
}

export type ChainsKeys = keyof typeof CHAINS
