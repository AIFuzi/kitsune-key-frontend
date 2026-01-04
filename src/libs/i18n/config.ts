export const COOKIE_NAME = 'lang'
export const LANGUAGES = ['en', 'kr', 'jp'] as const
export const DEFAULT_LANGUAGE = 'en'

export type Language = (typeof LANGUAGES)[number]
