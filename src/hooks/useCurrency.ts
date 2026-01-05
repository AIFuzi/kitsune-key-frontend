import { currencyStore } from '@/store/currency/currency.store'

export function useCurrency() {
  const currency = currencyStore(state => state.currency)
  const setCurrency = currencyStore(state => state.setCurrency)

  return {
    currency,
    setCurrency,
  }
}
