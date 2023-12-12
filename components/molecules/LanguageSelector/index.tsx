import { SelectChangeEvent } from '@mui/material'
import { useRouter } from 'next/router'
import { useIntl } from 'react-intl'

import { LANGUAGES } from '@/shared/constants/locales'

import { LanguageDropdown } from '@/components/atoms'

const LanguageSelector = () => {
  const { locale } = useIntl()
  const router = useRouter()
  const { pathname, query, asPath } = router

  const onLanguageChange = async (e: SelectChangeEvent<unknown>) => {
    router.push({ query, pathname }, asPath, { locale: e.target.value as string })
  }

  return <LanguageDropdown languages={LANGUAGES} onLanguageChange={onLanguageChange} locale={locale} />
}

export default LanguageSelector
