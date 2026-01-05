'use server'

import { cookies } from 'next/dist/server/request/cookies'
import {
  COOKIE_NAME,
  DEFAULT_LANGUAGE,
  type Language,
} from '@/libs/i18n/config'

export async function getCurrentLanguage() {
  const cookieStore = await cookies()

  return cookieStore.get(COOKIE_NAME)?.value ?? DEFAULT_LANGUAGE
}

export async function setLanguage(lang: Language) {
  const cookieStore = await cookies()

  cookieStore.set(COOKIE_NAME, lang)

  return
}
