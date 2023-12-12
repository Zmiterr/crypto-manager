import { useRouter } from 'next/router'
import React, { FC, PropsWithChildren } from 'react'
import { IntlProvider } from 'react-intl'

import { IntlHelpersProvider } from '@/lib/i18n'

import { DEFAULT_LOCALE } from './i18n'
import enMessages from './messages/en.json'

const allMessages: { [key: string]: Record<string, string> } = {
  en: { ...enMessages },
}

const I18nProvider: FC<PropsWithChildren> = ({ children }) => {
  const { locale } = useRouter()

  const messages = allMessages[locale || DEFAULT_LOCALE]

  return (
    <IntlProvider defaultLocale={DEFAULT_LOCALE} locale={locale || DEFAULT_LOCALE} messages={messages}>
      <IntlHelpersProvider messages={allMessages.en}>{children}</IntlHelpersProvider>
    </IntlProvider>
  )
}

export default I18nProvider
