import { setLanguage } from 'lib/i18n'
import { useRouter } from 'next/router'
import { useEffect } from 'react'

import { redirect } from '@/helpers'
import useAppDispatch from '@/hooks/useAppDispatch'
import { LocalStorageService } from '@/services/localStorage'

export const useLocale = () => {
  const dispatch = useAppDispatch()
  const { isReady, locale, asPath } = useRouter()

  useEffect(() => {
    const localeFromStorage = LocalStorageService.getLocale()

    if (!isReady) return

    if (localeFromStorage !== locale) {
      dispatch(setLanguage(locale))

      redirect(asPath, undefined, { locale })
    }
  }, [isReady, locale, asPath, dispatch])
}
