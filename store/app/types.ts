import { ErrorType } from '@/shared/types'

export const APP_PREFIX = 'APP'

export interface AppInitialState {
  loading: boolean
  error: ErrorType
}

export const enum AppFetchMethodsEnum {
  initAppAsync = 'initAppAsync',
}
