import { getRequestConfig } from 'next-intl/server'
import { getCurrentLanguage } from '@/libs/i18n/language'

export default getRequestConfig(async () => {
  const lang = await getCurrentLanguage()

  return {
    locale: lang,
    messages: (await import(`../../../public/languages/${lang}.json`)).default,
  }
})
