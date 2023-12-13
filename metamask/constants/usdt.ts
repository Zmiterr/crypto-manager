import { APP_ENV } from '@/shared/constants'

export const DEFAULT_USDT_ACCOUNT_INFO = {
  balance: 0n,
}

export const DEFAULT_USDT_CONSTANTS = {
  decimals: 18,
  symbol: APP_ENV === 'production' ? 'USDT' : 'TTK',
}
