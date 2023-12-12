import { combineReducers } from 'redux'

import localeReducer from '@/lib/i18n/i18n'
import appReducer from '@/store/app/slice'

export const rootReducer = combineReducers({
  app: appReducer,
  locale: localeReducer,
})
