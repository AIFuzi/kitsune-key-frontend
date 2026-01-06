export const CURRENCY_KEY = 'currency-'
export const CURRENCY = ['usd', 'krw', 'jpy'] as const
export const DEFAULT_CURRENCY = 'usd'

export type Currency = (typeof CURRENCY)[number]
