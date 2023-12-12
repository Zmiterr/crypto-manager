import { Locale } from 'date-fns'
import { enUS as en, es, id, vi } from 'date-fns/locale'

import { AppLocale } from '@/lib/i18n'

import { OptionType } from '@/components/atoms'

export const LANGUAGES: OptionType<AppLocale>[] = [
  {
    value: 'en',
    label: {
      type: 'text',
      text: 'English',
    },
  },
  {
    value: 'vi',
    label: {
      type: 'text',
      text: 'Tiếng Việt',
    },
  },
  {
    value: 'id',
    label: {
      type: 'text',
      text: 'Indonesia',
    },
  },
  {
    value: 'es',
    label: {
      type: 'text',
      text: 'Español',
    },
  },
]

export const DATE_LOCALES: Record<AppLocale, Locale> = {
  es,
  vi,
  id,
  en,
}
