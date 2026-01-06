import { Currency } from '@/libs/currency/config'

export function calculateCurrency(currency: string, value: number) {
  const formatter = new Intl.NumberFormat('en', {
    style: 'currency',
    currency,
  })

  switch (currency as Currency) {
    case 'krw':
      return formatter.format(Math.round(value * 1448.66))
    case 'jpy':
      return formatter.format(Math.round(value * 156.58))
    default:
      return formatter.format(value)
  }
}
