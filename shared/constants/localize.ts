export const LOCALIZE_LINKS = {
  CROSS_FINANCE: process.env.NEXT_PUBLIC_DOMAIN_CROSS_FINANCE,
  CROSS_FI_FOUNDATION: process.env.NEXT_PUBLIC_DOMAIN_CROSS_FI_FOUNDATION,
  XFI_CONSOLE: process.env.NEXT_PUBLIC_DOMAIN_XFI_CONSOLE,
  XFI_SCAN: process.env.NEXT_PUBLIC_DOMAIN_XFI_SCAN,
}
const DEFAULT_LOCALIZE_LANGUAGE = 'en'

const getLanguage = (availableLanguages: string[], locale: string) => {
  if (!availableLanguages.length) return
  return availableLanguages.includes(locale) ? locale : DEFAULT_LOCALIZE_LANGUAGE
}

export const addLocale = (link: string | undefined, locale: string) => {
  let availableLanguages: string[] = []

  switch (link) {
    case LOCALIZE_LINKS.CROSS_FINANCE:
      availableLanguages = []
      break

    case LOCALIZE_LINKS.CROSS_FI_FOUNDATION:
      availableLanguages = ['en']
      break

    case LOCALIZE_LINKS.XFI_SCAN:
      availableLanguages = ['en']
      break
  }

  const language = getLanguage(availableLanguages, locale)

  return `${link}${language ? `/${language}` : ''}`
}
